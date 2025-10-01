const estanteria = {
  libros: [{
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false,
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el caliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false,
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true,
    },
    {
      nombre: 'Iliada',
      autor: 'Homero',
      leido: false,
    },
  ],
  log() {
    const { libros } = this;
    let resultado = ''
    for (const libro of libros) {
      const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
      resultado = `${resultado}
${prefijo} leido ${libro.nombre} de ${libro.autor}`
    }
    console.log(resultado)
  },
  sugerencia() {
    const LibrosNoLeidos = this.libros.filter(libro => !libro.leido)
    const indiceRandom = Math.floor(LibrosNoLeidos.length * Math.random())
    const elementoRandom = LibrosNoLeidos[indiceRandom]
    console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
  }
}
