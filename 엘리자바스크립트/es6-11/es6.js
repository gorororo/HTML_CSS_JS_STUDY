/* 
* Shorthand property names
* MDN
*/
// Shorthand property names
{
    const rak1 = {
        name: 'Rak',
        age: '18',
    };

    const name = 'Rak';
    const age = '18';

    //🎃
    const rak2 = {
        name: name,
        age: age 
    };
    //🏅
    const rak3 = {
        name,
        age,
    }

    console.log(rak1,rak2,rak3);
}

/*
* Destructuring Assignment
* MDN
*/

// object
const student = {
    name: 'Anna',
    level: 1,
}
//🎃
{
    const name = student.name;
    const level = student.level;
    console.log(name,level);
}
//✨
{
    const {name,level}=student;
    console.log(name,level);

    const {name : studentName, level: studentLevel} = student;
    console.log(studentName,studentLevel);
}

// array
const animals = ['🐹','🐰'];


//🎃
{
    const first = animals[0];
    const second = animals[1];
    console.log(first,second);
}

//✨
{
    const [first,second] = animals;
    console.log(first,second);
    
}

/**
 * Spread Syntax
 */

{
    const obj1 = {key: 'key1'};
    const obj2 = {key: 'key1'};
    const array = [obj1, obj2];

    //array copy
    const arrayCopy = [...array];
    console.log(array,arrayCopy);

    const arrayCopy2 = [...array,{key:'key3'}];
    obj1.key = 'newKey';
    console.log(array, arrayCopy,arrayCopy2);

    //object copy
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    const fruits1 = ['🥭','🍎'];
    const fruits2 = ['🍇','🥥'];
    const fruits= [...fruits1,...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = {dog1 : '🐈'};//키값이 같을경우 뒤에있는 값이 앞에 덮어씌여진다
    const dog2 = {dog2 : '🐕'}; 
    const dog = {...dog1,...dog2};
    console.log(dog);
}

/**
 * Default parameters
 */

{
    //🎃
    {
        function printMessage(message){
            if(message == null){
                message = 'default message'
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }

    //✨
    {
        function printMessage(message = 'default message'){
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}

/**
 * Ternary Operator
 */

{
    const isCat = true;
    // 🎃
    {
        let component;
        if (isCat){
            component='😽';
        } else {
            component='🐹';
        }
        console.log(component);
    }

    // ✨
    {
    const component = isCat ? '😽' : '🐹';
    console.log(isCat ? '😽' : '🐹');
    }
    console.clear();

}

/**
 * Template literals
 * */ 

{
    const weather = '🌤';
    const temparature = '16°C';

    //🎃
    console.log('Today weather is '+ weather + ' and temparature is '+temparature)

    //✨
    console.log(
        `Today weather is ${weather} and temparature is ${temparature}`
    );
}
