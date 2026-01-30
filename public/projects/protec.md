# PROTEC-PCAM

**Plataforma de Registro, Organização e Transmissão de Evidências Criminais**

A PROTEC é uma solução governamental desenvolvida para a Polícia Civil do Estado do Amazonas, projetada para centralizar e agilizar o compartilhamento seguro de depoimentos e evidências audiovisuais entre os principais órgãos do sistema de justiça: Polícia Civil, Tribunal de Justiça (TJAM), Defensoria Pública (DPE-AM) e Ministério Público (MP-AM).

# Arquitetura e Desafios Técnicos

O projeto foi concebido sob uma arquitetura de microserviços/APIs segregadas para garantir a integridade dos dados e a eficiência no processamento de grandes volumes de mídia.

**Segregação de Responsabilidades:** Implementei duas APIs distintas para otimizar a manutenção e escalabilidade:

- **Core API:** Concentra toda a lógica de negócio, regras de acesso e integração entre os órgãos.
- **Media API:** Especializada no armazenamento, indexação e transmissão de evidências audiovisuais, garantindo que o fluxo de arquivos pesados não onere o desempenho do sistema principal.
- **Segurança e Documentação:** Utilização de JWT para autenticação segura entre as instituições e Swagger para uma documentação de API clara e padronizada.

# Stack Tecnológica

CamadaTecnologiasBackendNestJS, Prisma ORM, PlatformExpressFrontendAngular, Angular Material (UI/UX)Banco de DadosPostgreSQL (Instâncias separadas para Core e Mídia)InfraestruturaDocker e Docker Compose para orquestração de ambientes

# Impacto no Setor Público

A plataforma remove gargalos burocráticos no envio de provas, permitindo que processos que antes dependiam de mídias físicas ou transferências lentas sejam realizados em um ambiente auditável, seguro e centralizado.

O projeto atualmente encontra-se em pleno funcionamento.
