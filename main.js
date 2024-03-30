class School {
    constructor(name, level, numberOfStudents){ //principals name
      this._name = name;
      this._level =level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    set numberOfStudents(value){
      if(value.isNaN()){ console.log('....')} else{this._numberOfStudents = value};
    }

    quickFacts(){
      console.log( `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
     const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
     return substituteTeachers[randomIndex];

    }
  }

  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){ // we leave out level parameter as every Primary school they have the same level
      super(name, 'Primary', numberOfStudents); // these are the 3 parameters that the constructor of School requires!!! & pass 'primary' on level as every primary school is primary!
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
//class middle we dont need to create for now as Does not include any additional properties or methods

  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeam){
      super(name,'High', numberOfStudents);
      this._sportsTeam = sportsTeam;
    }
    get sportsTeam(){
       this._sportsTeam; 
    }
  }

const mariaPan = new PrimarySchool('Maria Pan', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
mariaPan.quickFacts();

const sub = School.pickSubstituteTeacher['Jamal Crawford', 'Lou Williams', 'J.R. Smith'];

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'volleyball']);
console.log(alSmith.sportsTeam);







