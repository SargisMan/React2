

const person = {
    name:"Ashot",
    surName:"AshHeb",
    age:21,
    getFullName:function(){
        const name=getName();
        console.log(`Name`, name)
        function getName(){
            return this.name;
        }
    }
}

person.getFullName()

