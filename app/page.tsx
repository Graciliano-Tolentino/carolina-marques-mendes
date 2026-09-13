import Image from "next/image";
import { professionalProfile, siteUrl } from "@/lib/site";

const whatsappMessage =
  "Olá, Dra. Carolina. Vim pelo site e gostaria de informações sobre o atendimento jurídico. Meu nome é ___ e meu assunto é ___.";
const wa = `https://wa.me/5513974078084?text=${encodeURIComponent(whatsappMessage)}`;
const map =
  "https://www.google.com/maps/search/?api=1&query=Avenida%20Pedro%20Lessa%202706%20sala%2013%20Santos%20SP";

const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legal-service`,
    name: professionalProfile.name,
    url: siteUrl,
    image: `${siteUrl}/images/carolina-marques-mendes-hero.jpg`,
    description:
      "Atendimento jurídico individualizado em Santos, com análise técnica, escuta respeitosa e comunicação clara.",
    telephone: professionalProfile.phone,
    email: professionalProfile.email,
    areaServed: { "@type": "City", name: "Santos" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Pedro Lessa, 2706, sala 13",
      addressLocality: "Santos",
      addressRegion: "SP",
      postalCode: "11025-002",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: professionalProfile.phone,
      contactType: "atendimento jurídico",
      availableLanguage: "Portuguese",
    },
    sameAs: professionalProfile.sameAs,
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Carolina Marques Mendes — início">
            <b aria-hidden="true">CMM</b>
            <span>
              Carolina Marques Mendes
              <small>Advocacia · OAB/SP 296.392</small>
            </span>
          </a>

          <nav aria-label="Navegação principal">
            <a href="#sobre">A advogada</a>
            <a href="#principios">Princípios</a>
            <a href="#atendimento">Atendimento</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            className="head-cta"
            href={wa}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir conversa com a Dra. Carolina no WhatsApp"
          >
            WhatsApp <Arrow />
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">ADVOGADA EM SANTOS · SP</p>
            <h1>
              Escuta para compreender.
              <em>Clareza para orientar.</em>
            </h1>
            <p className="lead">
              Atendimento jurídico individualizado, com análise técnica, comunicação
              transparente e responsabilidade em cada etapa.
            </p>

            <ul className="hero-points" aria-label="Princípios do atendimento">
              <li>Análise cuidadosa</li>
              <li>Comunicação clara</li>
              <li>Atuação responsável</li>
            </ul>

            <div className="actions">
              <a className="button button-gold" href={wa} target="_blank" rel="noreferrer">
                Falar com a Dra. Carolina <Arrow />
              </a>
              <a className="text-link" href="#atendimento">
                Conhecer o atendimento <Arrow />
              </a>
            </div>
            <small className="microcopy">
              Canal para informações iniciais. A análise depende dos fatos e documentos
              de cada situação.
            </small>
          </div>

          <figure className="hero-media">
            <div className="hero-frame">
              <Image
                src="/images/carolina-marques-mendes-hero.jpg"
                alt="Dra. Carolina Marques Mendes, advogada em Santos"
                fill
                priority
                sizes="(max-width: 860px) 92vw, 42vw"
              />
            </div>
            <figcaption>
              <span>Carolina Marques Mendes</span>
              <small>OAB/SP 296.392</small>
            </figcaption>
            <span className="hero-mark" aria-hidden="true">
              CMM
            </span>
          </figure>
        </section>

        <section className="trust-strip" aria-label="Informações profissionais">
          <div>
            <span>01</span>
            <p>
              <strong>Identificação profissional</strong>
              OAB/SP 296.392
            </p>
          </div>
          <div>
            <span>02</span>
            <p>
              <strong>Atendimento individualizado</strong>
              Cada história é compreendida em seu contexto
            </p>
          </div>
          <div>
            <span>03</span>
            <p>
              <strong>Presença em Santos</strong>
              Escritório no bairro do Embaré
            </p>
          </div>
        </section>

        <section className="about section-light" id="sobre">
          <div className="about-media reveal-frame">
            <Image
              src="/images/carolina-marques-mendes-autoridade.jpg"
              alt="Retrato profissional da Dra. Carolina Marques Mendes"
              fill
              sizes="(max-width: 860px) 100vw, 43vw"
            />
            <span aria-hidden="true">02</span>
          </div>

          <div className="about-copy">
            <p className="eyebrow">PRESENÇA PROFISSIONAL</p>
            <h2>Uma advocacia feita de técnica, humanidade e consciência.</h2>
            <p className="intro">
              A Dra. Carolina Marques Mendes conduz cada atendimento com escuta
              respeitosa, independência profissional e rigor técnico.
            </p>
            <p>
              Antes de qualquer estratégia, existe uma história que precisa ser
              compreendida. O atendimento parte da realidade de cada pessoa, apresenta
              os caminhos juridicamente possíveis e preserva a transparência ao longo da
              atuação.
            </p>
            <div className="professional-id">
              <span>CMM</span>
              <p>
                <strong>Carolina Marques Mendes</strong>
                Advogada · OAB/SP 296.392
              </p>
            </div>
          </div>
        </section>

        <section className="purpose" id="principios">
          <div className="purpose-media">
            <Image
              src="/images/carolina-marques-mendes-proposito.jpg"
              alt="Carolina Marques Mendes em ambiente de arquitetura histórica"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </div>
          <div className="purpose-copy">
            <p className="eyebrow">ADVOCACIA COM PROPÓSITO</p>
            <h2>A presença da mulher também transforma a Justiça.</h2>
            <p>
              A participação feminina na advocacia brasileira representa conquista de
              espaço, autonomia, liderança responsável e contribuição essencial para uma
              Justiça mais plural e consciente.
            </p>
            <p>
              Como mulher e advogada, Carolina exerce seu ofício com preparação,
              independência e responsabilidade — sem perder de vista a dimensão humana
              de cada questão.
            </p>
            <blockquote>
              “Técnica para orientar. Coragem para atuar. Responsabilidade para
              representar.”
            </blockquote>
          </div>
        </section>

        <section className="values section-light">
          <div className="section-heading">
            <p className="eyebrow">PRINCÍPIOS EM PRÁTICA</p>
            <h2>O que orienta cada atendimento.</h2>
          </div>
          <div className="cards">
            <article>
              <span>MISSÃO</span>
              <h3>Atender com clareza</h3>
              <p>
                Atendimento jurídico individualizado, tecnicamente responsável e atento
                à realidade de cada pessoa.
              </p>
            </article>
            <article>
              <span>VISÃO</span>
              <h3>Humanizar sem perder o rigor</h3>
              <p>
                Contribuir para uma advocacia mais acessível, igualitária e consciente de
                sua responsabilidade social.
              </p>
            </article>
            <article>
              <span>VALORES</span>
              <h3>Ética como fundamento</h3>
              <p>
                Independência, escuta, transparência, igualdade, sigilo, respeito e
                responsabilidade profissional.
              </p>
            </article>
          </div>
        </section>

        <section className="santos-presence">
          <div className="presence-copy">
            <p className="eyebrow">PRESENÇA EM SANTOS</p>
            <h2>Proximidade também faz parte do atendimento.</h2>
            <p>
              O escritório está localizado no Embaré, em Santos. Um ponto de referência
              profissional para acolher informações, compreender a situação e orientar
              os próximos passos com transparência.
            </p>
            <div className="presence-links">
              <a className="button button-dark" href={wa} target="_blank" rel="noreferrer">
                Solicitar informações <Arrow />
              </a>
              <a className="text-link dark-link" href={map} target="_blank" rel="noreferrer">
                Ver localização <Arrow />
              </a>
            </div>
          </div>

          <div className="city-gallery" aria-label="Carolina Marques Mendes em Santos">
            <div className="city-photo city-photo-main">
              <Image
                src="/images/carolina-marques-mendes-santos.jpg"
                alt="Carolina Marques Mendes no centro histórico de Santos"
                fill
                sizes="(max-width: 860px) 62vw, 27vw"
              />
            </div>
            <div className="city-photo city-photo-secondary">
              <Image
                src="/images/carolina-marques-mendes-presenca.jpg"
                alt="Carolina Marques Mendes junto ao bonde histórico de Santos"
                fill
                sizes="(max-width: 860px) 56vw, 23vw"
              />
            </div>
            <span className="city-caption">Santos · SP</span>
          </div>
        </section>

        <section className="process" id="atendimento">
          <div className="process-intro">
            <p className="eyebrow">COMO FUNCIONA</p>
            <h2>Um primeiro contato simples e respeitoso.</h2>
            <p>
              A mensagem inicial abre um canal para informações sobre o atendimento. A
              análise jurídica ocorre após a compreensão dos fatos e dos documentos de
              cada situação.
            </p>
            <a className="button button-gold" href={wa} target="_blank" rel="noreferrer">
              Iniciar contato pelo WhatsApp <Arrow />
            </a>
          </div>

          <ol>
            <li>
              <b>01</b>
              <span>
                <strong>Contato inicial</strong>
                Informe seu nome e apresente brevemente o assunto.
              </span>
            </li>
            <li>
              <b>02</b>
              <span>
                <strong>Compreensão da situação</strong>
                As informações necessárias são esclarecidas com cuidado e sigilo.
              </span>
            </li>
            <li>
              <b>03</b>
              <span>
                <strong>Orientação dos próximos passos</strong>
                Os caminhos juridicamente possíveis são apresentados com clareza.
              </span>
            </li>
          </ol>
        </section>

        <section className="faq section-light" aria-labelledby="faq-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">INFORMAÇÕES INICIAIS</p>
            <h2 id="faq-title">Dúvidas antes do primeiro contato.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>O que escrever na primeira mensagem?</summary>
              <p>
                Informe seu nome e faça um resumo breve do assunto. Se outros dados ou
                documentos forem necessários, isso será indicado durante o contato.
              </p>
            </details>
            <details>
              <summary>A mensagem já cria relação cliente-advogada?</summary>
              <p>
                Não. O WhatsApp é um canal para informações iniciais. A relação
                profissional depende da análise da situação e da formalização adequada.
              </p>
            </details>
            <details>
              <summary>Onde está localizado o escritório?</summary>
              <p>
                Na Avenida Pedro Lessa, 2706, sala 13, Embaré, Santos/SP, CEP 11025-002.
              </p>
            </details>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="contact-copy">
            <p className="eyebrow">CONTATO PROFISSIONAL</p>
            <h2>Vamos conversar com clareza sobre sua necessidade?</h2>
            <p>
              Envie uma mensagem para receber informações sobre o atendimento jurídico e
              os próximos passos possíveis.
            </p>
            <a className="button button-gold" href={wa} target="_blank" rel="noreferrer">
              Falar com a Dra. Carolina <Arrow />
            </a>
          </div>

          <address>
            <span>
              <b>ESCRITÓRIO</b>
              Avenida Pedro Lessa, 2706, sala 13
              <br />
              Embaré · Santos/SP · CEP 11025-002
              <a className="address-action" href={map} target="_blank" rel="noreferrer">
                Abrir no mapa <Arrow />
              </a>
            </span>
            <span>
              <b>TELEFONE E WHATSAPP</b>
              <a href="tel:+551333492095">(13) 3349-2095</a>
              <a href={wa} target="_blank" rel="noreferrer">
                (13) 97407-8084
              </a>
            </span>
            <span>
              <b>E-MAIL</b>
              <a href="mailto:carolmmendesadv@gmail.com">carolmmendesadv@gmail.com</a>
            </span>
            <span>
              <b>REDES PROFISSIONAIS</b>
              <a
                href="https://www.instagram.com/dra.carolmarquesmendes/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/dra.carolmarquesmendes"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </span>
          </address>
        </section>
      </main>

      <footer>
        <span>Carolina Marques Mendes · OAB/SP 296.392</span>
        <span>
          Conteúdo institucional e informativo. O contato não estabelece automaticamente
          relação cliente-advogada. <a href="/privacidade">Política de Privacidade</a>
        </span>
        <span>© 2026</span>
      </footer>

      <a
        className="floating-contact"
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar diretamente com a Dra. Carolina pelo WhatsApp"
      >
        <span>WhatsApp</span>
        <Arrow />
      </a>
    </>
  );
}
