// 静态类型 基础类型 null, undefined, symbol, boolean, void
const count: number = 123
const username: string = 'lixiaoyong'

// 对象类型
const teacher: {
    name: string,
    age: number
} = {
    name: 'lee',
    age: 30
}
const numbers: number[] = [1, 2, 3]

// 类
class Person{}
// dell必须是Person的一个实例
const dell: Person = new Person()

// function
const getTotal: () => number = () => {
    return 123
}
const getSum: () => void = () => {}

getTotal()


// 类型注解 显式的注明
let count1: number
count1 = 123

// 类型推断 TS自动去尝试分析变量的类型
let count2 = 123

// 如果TS能够自动分析变量类型，我们就什么也不做
// 如果TS无法分析变量类型的话，我们就需要类型注解


// 函数
function add(first: number, second: number): number {
   return first + second
}

// 没有返回值用void
function sayHello(): void {
    console.log('hellow')
}

// 函数永远不可能执行完成用never
function errorEmitter(): never {
    // 情况1
   throw new Error('ERROR')
    console.log(123)

    // 情况二
    while(true) {}
}

// 解构赋值
function add1({first, second} : {first: number, second: number}): number {
   return first + second
}
