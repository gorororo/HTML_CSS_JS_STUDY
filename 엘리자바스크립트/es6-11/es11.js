
/**
 * Optional Chaining (ES11)
 */
{
    const person1 = {
        name : 'Rak',
        job: {
            title : 'S/W Engineer',
            manager: {
                name : 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };
    // 🎃🎃🎃🎃
    {
        function printManager(person){
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // printManager(person2);
    }


    // 🎃🎃🎃
    {
        function printManager(person){
            console.log(
                person.job
                ? person.job.manager
                    ? person.job.manager.name
                    : undefined
                :undefined
            );
        }
        printManager(person1);
        printManager(person2);
    }


    // 🎃
    {
        function printManager(person){
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }


    // ✨
    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }

    /**
     * Nullish Coalescing Operator(ES11)
     * */

    // Logical Or operator
    //false: false, '' , 0 , null ,undefined
    {
        const name = 'Rak';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);
    }
    //🎃
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);
        
        const num = 0;
        const message = num || 'undefined';
        console.log(message);
    }
console.clear();
    //✨
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);
        
        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }

}