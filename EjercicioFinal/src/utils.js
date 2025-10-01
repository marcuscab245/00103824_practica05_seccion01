export const normalize = (s) =>
  s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')

export const pickRandom = (arr) =>
  Array.isArray(arr) && arr.length ? arr[Math.floor(Math.random() * arr.length)] : null
