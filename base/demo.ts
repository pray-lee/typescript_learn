// 基础类型 null, undefined, symbol, boolean, void, number, string
const count: number = 123
const myName: string = 'LEE'

// 对象类型 {}, class, function, []
class Person {}
const lee: Person = new Person()

const teacher: {
	name: string,
	age: number
} = {
	name: 'lee',
	age: 30
}

const numbers: number[] = [1, 2, 3]


const getTotal: () => number = () => {
	return 123
}

const getTotal1: (str: string) => number = (str) => {
	return parseInt(str)
}

// 类型注解，我们来告诉ts变量是什么类型
let count1: number;
count1 = 123

// 类型推断，ts会自动的去尝试分析变量的类型
let countInterface = 123

// 类型可变
let str: number | string = 123
str = '123'
console.log(str)
