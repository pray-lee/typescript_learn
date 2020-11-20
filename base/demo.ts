// 基础类型 null, undefined, symbol, boolean, void
const count: number = 123
const myName: string = 'LEE'

// 对象类型
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

// 类型注解，我们来告诉ts变量是什么类型
let count1: number;
count = 123

// 类型推断，ts会自动的去尝试分析变量的类型
let conutInference = 123