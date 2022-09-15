
// Q1. make a string out of an array 배열에서 문자열 만들기
{
    const fruits = ['apple', 'banana', 'orange'];
    // const result = fruits.toString();
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string 문자열로 배열 만들기
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // const result = [...fruits];
    const result = fruits.split(',');
    console.log(result);

}

// Q3. make this array look like this: [5, 4, 3, 2, 1] 배열 뒤집기
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements 처음 두요소 없이 새배열 만들기
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(2,Infinity);
    const result = array.slice(2,5);
    console.log(array);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 점수가 90인 학생을 찾기
{
    const result = students.find((student)=> student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students 등록된 학생들의 배열을 만드십시오
{
    const result = students.filter((student)=> student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores 학생의 점수만 포함하는 배열 만들기
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student)=> student.score * 2);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50 점수가 50 미만 학생이 있는지
{

    const result = students.some((student)=>student.score <50);
    console.log(result);
    const result2 = !students.every((student)=>student.score >=50);
    console.log(result2);
}

// Q9. compute students' average score 학생들의 평균 점수를 계산
{
    console.clear()
    const result = students.reduceRight((prev,curr)=>prev + curr.score
    ,0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores 모든점수를 포함하는 문자열 만들기
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((student)=> student.score).join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order 위에만든 어레이를 오름차순으로 정렬하기
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student)=> student.score).sort((a,b)=>a-b).join();
    console.log(result);
}
