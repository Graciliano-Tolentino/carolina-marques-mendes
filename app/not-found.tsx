import Link from "next/link";

export default function NotFound() {
  return (
    <main className="legal">
      <p className="eyebrow">ERRO 404</p>
      <h1>Página não encontrada.</h1>
      <p>O endereço pode ter sido alterado ou não existe.</p>
      <Link className="button dark" href="/">Voltar à página inicial</Link>
    </main>
  );
}
