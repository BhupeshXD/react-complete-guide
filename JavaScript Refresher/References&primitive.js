// const number =1; //primitive type
// const num2 =number;   //copies the value
// console.log(num2);  

//refrence

const person ={
    name: 'John',
};
const secondPerson = person;
person.name ='Max';
console.log(secondPerson);