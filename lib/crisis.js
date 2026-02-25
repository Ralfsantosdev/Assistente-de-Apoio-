
export function checkCrisis(message) {
  const crisisWords = [
    "quero morrer",
    "me matar",
    "suicídio",
    "tirar minha vida",
    "não quero viver",
    "acabar com tudo",
    "pensamentos de morte",
    "desistir de tudo",
    "autoflagelação",
    "me machucar"
  ]

  return crisisWords.some(word =>
    message.toLowerCase().includes(word)
  )
}
