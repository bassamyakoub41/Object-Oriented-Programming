// // ex 1 create new class
//  class Person {
//      constructor(name, age) {
//        this.name = name;
//        this.age = age;
//      }
//      introduce() {
//        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
//      }
//    }
// // // _________ex 2 use this__________ 
//  const person1= new Person('john',25,);
//  function DescribePerson(callback){
//      return callback.call(person1)
//  }
// //  DescribePerson(function() {
// //      console.log(this.introduce());
// //    });

// // ex3 promises:

// function wait(ms){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve('hello after '+ ms + " millisecond")
//         },ms)
        
//     })    
// }

// // ex 4 putting all together
// wait(3000)
// .then(result=>{
//     console.log(result);
// })
// .catch(error =>{
//     console.error(error)
// })

// console.log(person1.introduce());
// DescribePerson(function(){
//     console.log(this.introduce())
// })
