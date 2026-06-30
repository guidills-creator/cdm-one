Regras para uso da tabela `propostas`

- Objetivo: manter a estrutura definitiva da tabela `propostas` sem criar novas colunas desnecessárias.
- Sempre ler a estrutura atual antes de alterar consultas: verifique [src/lib/supabase.ts](src/lib/supabase.ts) ou o painel SQL do Supabase.
- Não utilizar nomes antigos como `criadoEm`.
- Utilizar apenas as colunas existentes na tabela `propostas` (ex.: `id`, `codigo`, `cliente`, `destino`, `dataIda`, `dataVolta`, `adultos`, `criancas`, `valorTotal`, `status`, `created_at`, `voos`, `hotel`, `passeios`, `seguro`, `aluguelCarro`, `formaPagamento`, `observacoes`).
- Se precisar de novo dado, prefira armazená-lo em `jsonb` (`cliente`, `voos`, `hotel`, `passeios`) ou discutir alteração do schema com a equipe antes de qualquer DDL.
- Revisão de PR: verifique que nenhuma migration/DDL adiciona colunas sem aprovação; confirme que as consultas usam apenas colunas existentes.

Checklist rápido para devs

- [ ] Inspecione a tabela no Supabase ou em [src/lib/supabase.ts](src/lib/supabase.ts).
- [ ] Evite introduzir campos com nomes em camelCase que não existam no DB.
- [ ] Atualize tipos TypeScript em `src/types/*` para refletir a estrutura real.

Contato

Se tiver dúvidas sobre a modelagem, abra uma issue ou fale com a equipe responsável pelo banco de dados.