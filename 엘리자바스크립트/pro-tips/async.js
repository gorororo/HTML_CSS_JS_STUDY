// Promise-> Async/await

// ❌Bad Code 💩
function displayUser(){
    fetchUser()//
        .then((user) =>{
            fetchProfile(user)//
                .then(()=>{
                    updateUI(user, profile);
                });
        });
}
    
    
// ⭕Good Code✨
async function displayUser(){
    const user= await fetchUser();
    const profile = await fetchProfile();
    updateUI(user, profile);
}