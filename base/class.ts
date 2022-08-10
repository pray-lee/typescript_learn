// // 类
// class Person {
//     name = 'lee'
//     getName() {
//         return this.name
//     }
// }
//
// const person = new Person()
// console.log(person.getName())
//
// // 类的继承
// class Teacher extends Person {
//     getTeacherName() {
//         return '李老师'
//     }
//     // 重写父类
//     getFullName() {
//         // 调用父类方法
//        return super.getName() + this.getTeacherName()
//     }
// }
//
// const teacher = new Teacher()
// // console.log(teacher.getName())
// // console.log(teacher.getTeacherName())
// // console.log(teacher.getFullName())
//
// // private protected public 访问类型
//
// // public 允许在类的内外被调用
// // private 允许在类内被调用
// // protected 允许在类内及继承的子类中使用
//
// // constructor 构造函数
// class Car {
//     // 传统写法
//     // public carName: string
//     // constructor(name: string) {
//     //     this.carName = name
//     // }
//
//     // 简化写法  不用再写this.carName = name和在顶部再声明一下类型了
//     // 这个public/private/protected 是必须加上的
//     constructor(public carName: string) {}
// }
//
// class Ferrari extends Car {
//     constructor(public modal: string) {
//         super('ferrari');
//     }
// }
//
// const car = new Ferrari('458')
// console.log(car)
//
// // getter setter 保护私有属性
// class Body {
//     constructor(private _name: string) {
//     }
//     get name() {
//         return this._name + 'xiaoyong...'
//     }
//     set name(name: string) {
//         this._name = name
//     }
// }
//
// const body = new Body('lee')
// console.log(body.name) // lixiaoyong
// body.name = 'wang'
// console.log(body.name) //wangxiaoyong

// 类
// class Greeter {
//      greeting: string
//      constructor(message: string) {
//           this.greeting = message
//      }
//      greet() {
//          return 'hello' + this.greeting
//      }
// }
//

// 继承
// class Animal {
//      move(distanceInMeters: number = 0) {
//           console.log(`Animal moved ${distanceInMeters}`)
//      }
// }
//
// class Dog extends Animal {
//      bark() {
//           console.log('woof!')
//      }
// }
// const dog = new Dog()
// dog.move(10)
// dog.bark()
//

// class Animal {
//      name: string
//      constructor(theName: string) {
//           this.name = theName
//      }
//      move(distanceInMeters: number = 0) {
//           console.log(`${this.name} moved ${distanceInMeters}`)
//      }
// }
//
// class Snake extends Animal {
//      constructor(name: string) {
//           super(name);
//      }
//      move(distanceInMeters: number = 5) {
//           console.log('slithering')
//           super.move(distanceInMeters)
//      }
// }
// const snake = new Snake('sammy')
// snake.move()

// class Persons {
//      protected name: string
//      protected constructor(theName: string) {
//           this.name = theName
//      }
// }
//
// class Employee extends Persons {
//      private department: string
//      constructor(name:string, department: string) {
//           super(name);
//           this.department = department
//      }
//
//      public getElevatorPitch() {
//          return this.name + '_' + this.department
//      }
//
// }
//
// let howard = new Employee('howard', 'sales')
// console.log(howard.getElevatorPitch())
// let john = new Persons('john') // 报错


// 抽象类
// abstract class Department {
//      name: string
//      constructor(name: string) {
//           this.name = name
//      }
//      printName(): void {
//           console.log('department name' + this.name)
//      }
//      abstract printMeeting():void
// }
//
// class AccountingDepartment extends Department {
//      printMeeting() {
//           console.log('print metting')
//      }
//      constructor() {
//           super('departmentName');
//      }
//      generateReports(): void {
//           console.log('generating accounting reports')
//      }
// }
//
// let department = new AccountingDepartment()
// department.printName()
// department.printMeeting()
// department.generateReports()
