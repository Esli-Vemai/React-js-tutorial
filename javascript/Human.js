class Human{

  constructor(gender){
    this.gender = gender;
  }
  showGender(){
    console.log(this.gender);
  }
  
}

class Person extends Human{
  constructor(name, gender){
    super(gender);
    this.name = name;
  }
  
  personDetails(){
    console.log(this.name + " " + this.gender);
  }
}

const person = new Person("John", "Male");
person.personDetails();
