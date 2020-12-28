// AccountInfo
type AccountInfo = {
  id: number
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 1,
  name: "Rafael Diehl",
  // email: "rafaeldiehl@foo.com"
}

// CharInfo
type CharInfo = {
  nickname: string
  level: number
  race: "Human" | "Elf" | "Dwarf"
  class: "Fighter" | "Wizard" | "Rogue"
}

const char: CharInfo = {
  nickname: "Cioran von Nietzsche",
  level: 13,
  race: "Human",
  class: "Rogue"
}

// PlayerInfo
type PlayerInfo = AccountInfo & CharInfo // intersection

const player: PlayerInfo = {
  name: "Rafael Diehl",
  email: "rafaeldiehl@foo.com",
  nickname: "Fergolas Lundien",
  level: 6,
  race: "Elf",
  class: "Wizard",
  id: 1
}