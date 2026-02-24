
export function checkCrisis(message) {
  const crisisWords = [
    "quero morrer",
    "me matar",
    "suicídio",
    "tirar minha vida",
    "não quero viver",
    "acabar com tudo"
  ]

  return crisisWords.some(word =>
    message.toLowerCase().includes(word)
  )
}
