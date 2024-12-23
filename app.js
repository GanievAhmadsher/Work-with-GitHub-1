// * Work with GitHub in Node.js ------------------------------ start --

console.log("Welcome to Branch: `main`");

/*
1 Polimorfizm - Object Oriented Programmingning muhim konsepsiyalaridan biri. Bu bir xil nomli metodlarning turli xil obyektlarda turlicha ishlashi imkoniyatidir.
bir class ning ichida method yaratib uni birnecha classning ichida ishlatsak bunga Polimorfizm deyiladi

2 Inkapsulatsiya - bu ma'lumotlarni va ular ustida bajariladigan amallarni birlashtirib, tashqi ta'sirdan himoya qilish prinsipidir.
Inkapsulatsiyaga misol: 
class name {
    #username = "Abbos"
}

3 Abstract = 'mavhum','nomalum'

4 interezins

5 inxeritin = voris olish
*/
// class Person {
//   Username = "Jalol";
//   Age = 23;
//   constructor() {
//     if(this.constructor.name === 'Person') {
//         throw new Error("Bu class dan object yaratib bo'lmaydi.")
//     }
//   }
//   getFirstname() {
//     throw new Error("Bu class dan getUsername methodini ishlatib bo'lmaydi");
//   }
//   getAge() {
//     throw new Error("Bu class dan getAge methodini ishlatib bo'lmaydi");
//   }
// }
// // const user2 = new Person()
// class Human extends Person {
//   getAge() {
//     console.log(this.Age);
//   }
//   getFirstname() {
//     console.log(this.Username);
//   }
// }
// const user = new Human();
// console.log(user);

// class Person {
//   username = "Abbos";
//   getUsername() {
//     console.log(this.username);
//   }
// }
// class User extends Person {}
// const user = new User()
// user.getUsername()

//

// let a= new Date()
// console.log(a.toLocaleTimeString());

// function shuffleArray(array) {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// }

// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(shuffleArray(originalArray));

// const array = [1, 2, 3, 4, 5, 6];
// const shuffledArray = array.sort(() => Math.random() - array.length/10);
// console.log(shuffledArray);
// let arr = [
//   { a: 1, b: 2 },
//   { a: 1, b: 2 },
//   { a: 1, b: 2 },
//   { a: 1, b: 2 },
// ];
// arr.push({ a: 1, b: 2 });
// for (let i in arr) {
//   let element = arr[i];
//   console.log(element);
// }

// var name = input("What is your name?");

// var name = prompt("What is your name?");

let a = [1, 2, 3, 4];
let b = a.forEach((item, index, array) => {
  return 1;
});
console.log(b);

// * Work with GitHub in Node.js ------------------------------  end  --
