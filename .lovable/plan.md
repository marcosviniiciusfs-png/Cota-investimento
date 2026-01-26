
# Plano: Integração do Simulador com Convex CRM

## Visão Geral
Integrar o formulário de simulação existente com o Convex CRM de forma segura usando Edge Functions do Supabase, substituindo a integração atual com Make.com.

## Arquivos a Criar

### 1. Edge Function `send-to-crm`
**Arquivo:** `supabase/functions/send-to-crm/index.ts`

Funcionalidades:
- Receber dados do formulário via POST
- Adicionar headers CORS obrigatórios
- Fazer requisição ao webhook do Convex CRM
- Usar token de autenticação armazenado como secret
- Retornar status de sucesso/erro

### 2. Configuração da Edge Function
**Arquivo:** `supabase/config.toml` (atualizar)

Adicionar configuração para desabilitar verificação JWT (necessário para chamadas públicas do frontend).

## Arquivos a Modificar

### 3. Componente Simulator
**Arquivo:** `src/components/Simulator.tsx`

Alterações:
- Substituir chamada direta ao Make.com por `supabase.functions.invoke('send-to-crm')`
- Mapear campos do formulário para o formato esperado pelo CRM
- Manter comportamento de redirecionamento após sucesso

### 4. Cliente Supabase
**Arquivo:** `src/integrations/supabase/client.ts` (criar se necessário)

Configurar cliente Supabase para invocar Edge Functions.

## Mapeamento de Campos

| Campo do Formulário | Campo do CRM |
|---------------------|--------------|
| fullName | nome, nome_completo |
| whatsapp | telefone, whatsapp |
| propertyType | tipo |
| creditAmount | valor_do_credito |
| downPaymentAmount | valor_de_entrada |
| city | cidade |
| monthlyPayment | parcela_ideal |

## Secret Necessário
Será solicitado ao usuário adicionar o secret `CONVEX_CRM_TOKEN` com o token de autenticação do Convex CRM.

## Detalhes Técnicos

### Estrutura da Edge Function
```text
supabase/
└── functions/
    └── send-to-crm/
        └── index.ts
```

### Headers CORS
```text
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: authorization, x-client-info, apikey, content-type, 
                              x-supabase-client-platform, x-supabase-client-version, 
                              x-supabase-client-info
```

### Fluxo de Dados
```text
┌─────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Simulator  │ ──► │  Edge Function   │ ──► │ Convex CRM  │
│  (Frontend) │     │  send-to-crm     │     │  Webhook    │
└─────────────┘     └──────────────────┘     └─────────────┘
       │                     │                      │
       │  supabase.functions │  POST + Bearer Token │
       │  .invoke()          │                      │
       ▼                     ▼                      ▼
   Dados do form      Processa + Envia      Cria lead no CRM
```

## Ordem de Implementação
1. Solicitar adição do secret `CONVEX_CRM_TOKEN`
2. Criar/atualizar `supabase/config.toml`
3. Criar Edge Function `send-to-crm/index.ts`
4. Criar cliente Supabase se não existir
5. Atualizar `Simulator.tsx` para usar Edge Function
6. Testar integração completa

## Benefícios da Abordagem
- **Segurança**: Token de API nunca exposto no frontend
- **Manutenção**: Fácil atualizar endpoint ou lógica sem alterar frontend
- **Logs**: Possibilidade de monitorar chamadas via logs do Supabase
- **Fallback**: Pode manter integração Make.com como backup se necessário
