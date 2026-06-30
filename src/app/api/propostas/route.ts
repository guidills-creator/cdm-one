import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  if (!supabase) {
    return NextResponse.json({ error: "Supabase não está configurado." }, { status: 500 });
  }

  const url = new URL(request.url);
  const codigo = url.searchParams.get("codigo");
  const query = supabase.from("propostas").select("*, created_at").order("created_at", { ascending: false });
  const { data, error } = codigo ? await query.eq("codigo", codigo.toUpperCase()) : await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const mapped = (data ?? []).map((row: any) => ({
    ...row,
    criadoEm: row.criadoEm ?? row.created_at ?? row.createdAt ?? "",
  }));

  return NextResponse.json(mapped);
}

export async function POST(request: Request) {
  if (!supabase) {
    return NextResponse.json({ error: "Supabase não está configurado." }, { status: 500 });
  }

  const body = await request.json();
  const requiredFields = ["clienteNome", "destino", "dataIda", "dataVolta", "adultos", "criancas", "seguro", "valorTotal"];
  for (const field of requiredFields) {
    if (body[field] === undefined || body[field] === "") {
      return NextResponse.json({ error: `Campo ${field} é obrigatório.` }, { status: 400 });
    }
  }

  const proposal = {
    id: `${Date.now()}`,
    codigo: body.codigo ?? `P${Date.now()}`,
    cliente: {
      id: `${Date.now()}-cliente`,
      nome: body.clienteNome,
      telefone: body.telefone ?? "",
      email: body.email ?? "",
      cidade: body.cidade ?? "",
      observacoes: body.observacoes ?? "",
    },
    destino: body.destino,
    dataIda: body.dataIda,
    dataVolta: body.dataVolta,
    adultos: Number(body.adultos),
    criancas: Number(body.criancas),
    valorTotal: Number(body.valorTotal),
    status: body.status ?? "Em análise",
    voos: [
      {
        cia: body.voos ? body.voos : "A definir",
        origem: body.origem ?? "",
        destino: body.destino,
        voo: body.voos ? body.voos : "A definir",
        horario: body.horario ?? "A definir",
        valor: Number(body.valorVoo ?? 0),
      },
    ],
    hotel: {
      nome: body.hotel ? body.hotel : "A definir",
      categoria: body.categoria ?? "A definir",
      checkin: body.dataIda,
      checkout: body.dataVolta,
      noites: Number(body.noites ?? 0),
      valor: Number(body.valorHotel ?? 0),
    },
    passeios: [
      {
        nome: body.passeios ? body.passeios : "A definir",
        data: body.dataIda,
        horario: body.horarioPasseio ?? "A definir",
        valor: Number(body.valorPasseio ?? 0),
      },
    ],
    seguro: body.seguro === "Sim" || body.seguro === true,
    aluguelCarro: body.aluguelCarro === true,
    formaPagamento: body.formaPagamento ?? "A combinar",
    observacoes: body.observacoes ?? "",
  };

  const { data, error } = await supabase.from("propostas").insert([proposal]).select("*, created_at").single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const mapped = {
    ...data,
    criadoEm: data?.criadoEm ?? data?.created_at ?? data?.createdAt ?? "",
  };

  return NextResponse.json(mapped, { status: 201 });
}
