// 增加返回值类型注解
function add(first: number, second: number): number {
	return first + second	
}
const total = add(1, 2)



// 没有返回值用void注解
function sayHello(): void {
	console.log('hello')
}



// never表示这个函数永远不会执行到最后
function errorEmitter(): never {
	throw new Error('error')
	console.log('111')
}


// 解构赋值的类型注解
function increase({first, second}: {first: number, second: number}): number {
	return first + second
}

const totalCrease = increase({first: 1, second: 2})