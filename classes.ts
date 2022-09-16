class Person {
  static species = "homosapien";
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public hobbies: string[],
    public martialStatus: boolean,
    protected iternalSecret: string,
    private privateSecret: string
  ) {}

  getPrivateSecret(): string {
    return `${this.privateSecret}`;
  }
}

const mahdi = new Person(
  "Mahdi",
  "Salmanizadehgan",
  26,
  ["Gym", "Study"],
  false,
  "internalSecret",
  "privateSecret"
);

console.log(mahdi.getPrivateSecret());
function greet(person: Person) {
  return `Hello ${person.name} ${person.family}, your age is satisfied,
  your hobbies are ${person.hobbies.slice()}`;
}
console.log(greet(mahdi));
