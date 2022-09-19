// Optional Chaining
const bob = {
    name: 'Julia',
    age: 20,
};
const anna = {
    name: 'Julia',
    age: 20,
    job: {
        title: 'Software Engineer',
    },
};

// ❌ Bad Code 💩
function displayJobTitle(person){
    if(person.job && person.job.title){
        console.log(person.job.title);
    }
}

// ⭕ Good code ✨
function displayJobTitle(person){
    if(person.job?.title){
        console.log(person.job.title);
    }

}

// ⭕ Good code ✨
function displayJobTitle(person){
    const title = person.job?.title ?? 'No Job Yet 🔥';
        console.log(title);
}
displayJobTitle(anna);