import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do site institucional Carolina Marques Mendes Advocacia.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <Link className="back" href="/">← Voltar ao site</Link>
      <p className="eyebrow">PRIVACIDADE E TRANSPARÊNCIA</p>
      <h1>Política de Privacidade</h1>
      <p className="updated">Última atualização: 26 de julho de 2026.</p>
      <p>Este site apresenta informações institucionais de Carolina Marques Mendes Advocacia. A navegação não exige cadastro e o site não possui formulário próprio, área de usuário, publicidade comportamental ou ferramentas próprias de análise de audiência.</p>
      <h2>Dados e contato</h2>
      <p>O site não coleta diretamente dados pessoais. Se você optar por usar os links de WhatsApp, e-mail, telefone, Instagram ou Facebook, os dados fornecidos serão tratados conforme sua iniciativa, a finalidade do contato e as regras do respectivo serviço externo. Evite enviar documentos ou dados sensíveis antes de receber orientação sobre o canal adequado.</p>
      <h2>Serviços externos</h2>
      <p>Os links externos abrem serviços administrados por terceiros, que podem tratar dados técnicos e utilizar cookies conforme as próprias políticas. Este site não controla essas operações. Consulte as políticas do <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">WhatsApp</a>, <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noreferrer">Instagram</a> e <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">Facebook</a>.</p>
      <h2>Cookies</h2>
      <p>Não são utilizados cookies não essenciais, pixels publicitários ou ferramentas de rastreamento pelo site nesta versão. Caso isso seja alterado, esta política e os mecanismos de consentimento serão revisados antes da ativação.</p>
      <h2>Sigilo e relação profissional</h2>
      <p>O envio de uma mensagem não estabelece automaticamente relação cliente-advogada. A formação da relação profissional depende de análise, verificação de disponibilidade e contratação. As informações recebidas em contexto profissional são tratadas conforme os deveres legais e éticos aplicáveis.</p>
      <h2>Direitos e canal de contato</h2>
      <p>Para solicitar informações sobre privacidade, correção ou eliminação de dados eventualmente enviados durante um contato, escreva para <a href="mailto:carolmmendesadv@gmail.com">carolmmendesadv@gmail.com</a>. A solicitação será avaliada conforme a Lei Geral de Proteção de Dados e as obrigações legais e profissionais aplicáveis.</p>
    </main>
  );
}
