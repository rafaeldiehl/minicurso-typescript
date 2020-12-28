abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

type Race = "Human" | "Elf" | "Dwarf" | "Halfling" | "Gnome" | "Half-elf" | "Half-orc";
type Class = "Barbarian" | "Bard" | "Cleric" | "Druid" | "Fighter" | "Monk" | "Paladin" | "Ranger" | "Rogue" | "Sorcerer" | "Warlock" | "Wizard";

class CharAccount extends UserAccount {
  private nickname: string;
  private level: number;
  readonly race: Race;
  readonly charClass: Class;

  constructor(name: string, age: number, nickname: string, level: number, race: Race, charClass: Class) {
    super(name, age);
  
    this.nickname = nickname;
    this.level = level;
    this.race = race;
    this.charClass = charClass;
  }

  get getLevel() {
    console.log("\nGET");
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} (${this.nickname}) has a char ${this.race} ${this.charClass} at level ${this.level}.`)
  }
}

const rafael = new CharAccount("Rafael", 17, "rafaelmaster", 15, "Gnome", "Warlock");
rafael.logDetails();
console.log(rafael);
rafael.logCharDetails();
rafael.setLevel = 16;
console.log(rafael.getLevel);