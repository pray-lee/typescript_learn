let list: number[] = [1,2,3]
let list1: (string | number)[] = ['1', '2', 3]

// 枚举
enum Color {Red = 1, Green = 2, Blue = 3}
let c: Color = Color.Green
let colorName: string = Color[2]
console.log(colorName, 'colorName')
console.log(c)


let u: undefined = undefined
let uu: null = null


function error(message: string):never {
    throw new Error(message)
}
function fail() {
    return error('some failed')
}

let {a, b}: {a: number, b: number} = {a: 1, b: 2}
console.log(a, b)

// 接口
// function printLabel(labelledObj: {label: string}):void {
//     console.log(labelledObj.label)
// }
//
// printLabel({size:10, label: 'Size 10 Object'})

// interface LabelledValue {
//     label: string
// }
//
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label)
// }
// printLabel({size: 10, label: 'Size 10 Object'})

// interface SquareConfig {
//     color?: string
//     width?: number
// }
// function createSquare(config: SquareConfig): {color: string, area: number} {
//     let newSquare = {color: 'white', area: 100}
//     if(config.color) {
//         newSquare.color = config.color
//     }
//     if(config.width) {
//         newSquare.area = config.width * config.width
//     }
//     return newSquare
// }
// let mySquare = createSquare({color: 'black'})

// 只读属性
// interface Point {
//     readonly x: number
//     readonly y: number
//     [propName: string]: any
// }
//
// let p: Point = {
//     x: 1,
//     y: 1,
//     z: 1
// }
// // p.x = 45 // error cannot assign to 'x' because it is a read-only property
//
// let listReadOnly: number[] = [1, 2, 3]
// let ro: ReadonlyArray<number> = listReadOnly
// // 只能用类型断言重写
// const bbb = listReadOnly as number[]
// console.log(bbb)

// interface ClockConstructor {
//     new(hour: number, minute: number): ClockInterface
// }
//
// interface ClockInterface {
//     tick(): void
// }
//
// function createClock(ctor: ClockConstructor, h:number, m:number):ClockInterface {
//     return new ctor(h, m)
// }
//
// class DigitalClock implements ClockInterface {
//     tick() {
//         return 'tick'
//     }
//     constructor(h:number, m: number) {
//     }
// }
// const clock = createClock(DigitalClock, 12, 17)
// console.log(clock.tick())

// 继承接口
// interface Shape {
//     color:string
// }
//
// interface Square extends Shape {
//     sideLength: number
// }
//
// let square = <Square>{}
// square.color = 'blue'
// square.sideLength = 10

// 接口继承多个接口
// interface Shape {
//     color: string
// }
// interface PenStroke {
//     penWidth: number
// }
// interface Square extends Shape, PenStroke {
//     sideLength: number
// }
//
// let square = <Square>{}
// square.color = 'blue'
// square.sideLength = 10
// square.penWidth = 5

// 混合类型 ?
// interface Counter {
//     (start: number): string
//     interval: number
//     reset():void
// }
//
// function getCounter():Counter {
//     let counter = <Counter>function(start: number) {return start.toString()}
//     counter.interval = 10
//     counter.reset = () => {}
//     return counter
// }

// 接口继承类
// class Control {
//     private state: any
// }

// interface SelectableControl extends Control {
//     select():void
// }

// class Button extends Control implements SelectableControl {
//     select() {console.log('extends Control implements SelectableControl')}
// }

// class TextBox extends Control {
//     select(){console.log('select')}
// }

// const textBox = new TextBox()
// const button = new Button()
// textBox.select()
// button.select()
