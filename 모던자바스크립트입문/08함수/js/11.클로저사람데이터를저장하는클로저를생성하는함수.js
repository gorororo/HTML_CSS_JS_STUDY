const Person=(name,age)=>{
    let _name = name;
    let _age = age;
    return{
        getName(){return _name;},
        getAge(){return _age;},
        setAge(x){_age=x;},
    };
}
let person = Person('Tom',18);
console.log('person.getName() :>> ', person.getName());
console.log('person.getAge() :>> ', person.getAge());
person.setAge(19);
console.log('person.getAge() :>> ', person.getAge());