class Student{
     name:string;
     age:number;
     rollNumber:number;
 constructor(name,age,rollNumber){
    this.name=name;
    this.age=age;
    this.rollNumber=rollNumber;
 }
}
let std :Student= new Student("Hamza",22,1512183);
console.log(std.name);