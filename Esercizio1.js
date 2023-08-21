class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  showAge(poeta) {
    if (this.age > poeta.age) {
      return this.firstName + " è più anziano di " + poeta.firstName;
    } else {
      return this.firstName + " è più giovane di " + poeta.firstName;
    }
  }
}

const GiacomoLeopardi = new User("Giacomo", "Leopardi", 225, "Recanati");
const UmbertoSaba = new User("Umberto", "Saba", 140, "Trieste");
const LuigiPirandello = new User("Luigi", "Pirandello", 156, "Agrigento");
const DaciaMaraini = new User("Dacia", "Maraini", 87, "Firenze");

console.log(GiacomoLeopardi.showAge(LuigiPirandello));
console.log(UmbertoSaba.showAge(DaciaMaraini));
