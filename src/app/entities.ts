export class Etudiant {
  public constructor(private nom: string, private age: number) {

  }

  public getNom() {
    return this.nom ;
  }

  public getAge() {
    return this.age;
  }
  public info() {
    return this.nom + " " + this.age;
  }
}
