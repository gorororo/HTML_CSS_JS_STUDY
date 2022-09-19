// Callback Hell example
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    (id === 'rak' && password == 'best') ||
                    (id === 'coder' && password == 'academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
            },2000);
        });
    }

    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user === 'rak' || 'coder'){
                    resolve({name:'rak',role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function clearCode(){
    try{
        const user = await userStorage.loginUser(id,password);
        const userWithRole = await userStorage.getRoles(user);
        console.log(`hello ${userWithRole.name},you have a ${userWithRole.role} role`)
    }catch(error){
        console.log(error);
    }
}

clearCode();

// userStorage
//     .loginUser(id,password)
//     .then(userStorage.getRoles)
//     .then(user=>alert(`Hello ${user.name},you have a ${user.role} role`))
//     .catch(console.log);



