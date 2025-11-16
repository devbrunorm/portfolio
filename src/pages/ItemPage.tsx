import { useParams, useNavigate } from 'react-router-dom';

export default function ItemPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Substitua por fetch/consulta real se precisar de conteúdo dinâmico
  const content = `Education content for ${id}`;

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <button className="mb-4 text-sm text-sky-600" onClick={() => navigate(-1)}>
        &larr; Voltar
      </button>
      <h1 className="text-2xl font-bold mb-4">{capitalizeFirstLetter(id || '')}</h1>
      <p>{content}</p>
    </main>
  );
}