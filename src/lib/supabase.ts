import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "";
const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const supabaseAdmin = supabaseUrl && supabaseAdminKey
  ? createClient(supabaseUrl, supabaseAdminKey)
  : null;

export async function ensurePropostasTableExists() {
  if (!supabase) {
    console.warn("Supabase não está configurado. Defina as variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.");
    return;
  }

  const { error } = await supabase.from("propostas").select("id").limit(1);
  if (!error) {
    return;
  }

  const missingTable =
    error.message?.includes("relation \"propostas\" does not exist") ||
    error.message?.includes("does not exist") ||
    error.details?.includes("relation \"propostas\" does not exist");

  if (!missingTable) {
    return;
  }

  if (!supabaseAdmin) {
    console.warn(
      "Tabela 'propostas' não encontrada no Supabase e SUPABASE_SERVICE_ROLE_KEY não está definido. Crie a tabela manualmente.",
    );
    return;
  }

  const sql = `
    create table if not exists propostas (
      id text primary key,
      codigo text not null unique,
      cliente jsonb not null,
      destino text not null,
      "dataIda" text not null,
      "dataVolta" text not null,
      adultos int not null,
      criancas int not null,
      "valorTotal" numeric not null,
      status text not null,
      "criadoEm" text not null,
      voos jsonb not null,
      hotel jsonb not null,
      passeios jsonb not null,
      seguro boolean not null,
      "aluguelCarro" boolean,
      "formaPagamento" text,
      observacoes text
    );
  `;

  const { error: ddlError } = await supabaseAdmin.rpc("sql", { sql });
  if (ddlError) {
    console.warn("Falha ao criar a tabela 'propostas' no Supabase:", ddlError.message);
  }
}
