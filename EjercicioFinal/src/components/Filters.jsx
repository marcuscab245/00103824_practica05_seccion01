export default function Filters({
  query, onQueryChange,
  area, onAreaChange, areas,
  pais, onPaisChange, paises,
  onSugerir, total
}) {
  return (
    <section className="filters">
      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Buscar por nombre/área/país…"
        aria-label="Buscar"
      />

      <select value={area} onChange={(e) => onAreaChange(e.target.value)} aria-label="Área">
        {areas.map(a => <option key={a} value={a}>{a}</option>)}
      </select>

      <select value={pais} onChange={(e) => onPaisChange(e.target.value)} aria-label="País">
        {paises.map(p => <option key={p} value={p}>{p}</option>)}
      </select>

      <button onClick={onSugerir}>Sugerir uno</button>

      <span className="badge">{total} resultado(s)</span>
    </section>
  )
}
