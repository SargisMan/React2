// class Person {
//   // name="Ashot"
//   constructor(name) {
//     this.name = name;
//   }
//   workplase = "Bitschool";

//   showName (){
//       console.log(`name `, this.name)
//   }
// }

// const p= new Person ('Babken')
// console.log(`p`, p);



// class Student extends Person {
// constructor(name,eduPlace){
//     super(name);
//     this.educationPlace=eduPlace;
// }
// }

// const s=new Student('Ashot','Politech');
// s.showName()


//ֆունկցիաների գրելաձևերի տարբերությունը

class User {
    constructor(name, age){
        this.name=name;
        this.age=age
    }

    showName (){
        console.log(`name= `, this.name )
    }

    showAge = () => {
        console.log(`age=`, this.age)
    }
}


const user1=new User('Anahit',30);
const user2= new User('Arman',40);
console.log(`user1`, user1);
console.log(`user2`, user2)
user1.showName()

