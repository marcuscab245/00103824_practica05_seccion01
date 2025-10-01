export default function ScientistCard({ nombre, area, pais, nacido, frase, imagen }) {
  return (
    <article className="card">
      <img src={imagen} alt={nombre} loading="lazy" />
      <div className="card-body">
        <h3>{nombre}</h3>
        <p className="meta">
          <strong>Área:</strong> {area} • <strong>País:</strong> {pais} • <strong>Nac.:</strong> {nacido}
        </p>
        <blockquote>“{frase}”</blockquote>
      </div>
    </article>
  )
}
