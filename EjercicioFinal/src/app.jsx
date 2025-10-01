import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScientistCard from './components/ScientistCard.jsx'
import Filters from './components/Filters.jsx'
import { scientists } from './data/scientists.js'
import { pickRandom, normalize } from './utils.js'

export default function App() {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState('todas')
  const [pais, setPais] = useState('todos')

  const areas = useMemo(() => ['todas', ...Array.from(new Set(scientists.map(s => s.area)))], [])
  const paises = useMemo(() => ['todos', ...Array.from(new Set(scientists.map(s => s.pais)))], [])

  const filtrados = useMemo(() => {
    return scientists.filter(s => {
      const coincideTexto = normalize(`${s.nombre} ${s.area} ${s.pais}`).includes(normalize(query))
      const coincideArea = area === 'todas' || s.area === area
      const coincidePais = pais === 'todos' || s.pais === pais
      return coincideTexto && coincideArea && coincidePais
    })
  }, [query, area, pais])

  const handleSugerencia = () => {
    const candidato = pickRandom(filtrados.length ? filtrados : scientists)
    if (!candidato) return
    alert(`Sugerencia: ${candidato.nombre} — ${candidato.area} (${candidato.pais})`)
  }

  return (
    <div className="container">
      <Header title="Científicos notables" subtitle="Objetos, Componentes y Props en React" />

      <Filters
        query={query}
        onQueryChange={setQuery}
        area={area}
        onAreaChange={setArea}
        areas={areas}
        pais={pais}
        onPaisChange={setPais}
        paises={paises}
        onSugerir={handleSugerencia}
        total={filtrados.length}
      />

      <section className="grid">
        {filtrados.map((s) => (
          <ScientistCard
            key={s.id}
            nombre={s.nombre}
            area={s.area}
            pais={s.pais}
            nacido={s.nacido}
            frase={s.frase}
            imagen={s.imagen}
          />
        ))}
        {filtrados.length === 0 && (
          <p className="empty">No hay resultados con los filtros actuales.</p>
        )}
      </section>

      <Footer />
    </div>
  )
}
