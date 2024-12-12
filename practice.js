// function COnstructor

// function student (name,age,city) {
//     this.name=name
//     this.stdage = age
//     this.stdcity = city
// this.getName = () => {
//   return this.name;
// };
// }
// const std1=new student("yasir", 25, "karachi")
// const std2=new student("raza", 32, "isb")
// console.log(std1.getName())
// console.log(std2.name)

// class constructor
class Student {
  constructor(name, age, city) {
    this.name = name;
    this.stdage = age;
    this.stdcity = city;
  }
  getName = () => {
    return this.name;
  };
}
const std1 = new Student("yasir", 26, "karachi");
// console.log(std1)

class Student2 extends Student {
  constructor(id, sclName, name, age, city) {
    super();
    this.stdId = id;
    this.school = sclName;
    this.name = name;
    this.stdage = age;
    this.stdcity = city;
  }
}

const std2 = new Student2(
  20732,
  "unknown",

  //   (Student.name = "yasir"),
  //   (Student.age = 26),
  //   (Student.city = "lhr")
  std1.name,
  std1.stdage,
  std1.stdcity,
  std1.getName()
);

console.log(std2);
