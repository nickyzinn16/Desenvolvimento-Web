let courseSubjects = ["GR", "SS", "ASGBD"];

courseSubjects.push("DAW");

console.log(courseSubjects);

courseSubjects.pop();

console.log(courseSubjects);

courseSubjects.shift();

console.log(courseSubjects);

courseSubjects.unshift("PI");

console.log(courseSubjects);

composedCourses = courseSubjects.slice(0,2);

console.log(composedCourses);

let dat1 = ['a', 'b', 'c'];

let dat2 = ['x', 'y', 'z'];

newArray = dat1.concat(dat2);

console.log(newArray);

let names = ["Mario", "Veronica", "Txuca", "Robine"];

namByText = names.join(" ");

console.log(namByText);

let menu = [
    {name: "Katia", status: true},
    {name: "Pedro", status: false},
    {name: "Angelica", status: true},
]

menu.forEach((item)=>{
    console.log(`O ser ${item.name} esta ${item.status?'Ativo':'Inativo'}`)
})

let numList = [1,2,3.4];

let oddNumbers = numList.filter(n => n%2 == 0);

let doubleNum = numList.map(n => n*2)
