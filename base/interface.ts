// interface和type类似，但不完全一致，能用interface就用interface
// interface的作用就是做语法校验，在编译的时候，会提前把interface剔除掉

interface Person {
	// readonly name: string //只读的属性，不能更改
	name: string
	age?: number //可选, 可以有可以没有
	[propName: string]: any // 其他的属性,任何属性都可以
	say():string // 方法 ,  返回string
}

// 接口继承
interface Teacher extends Person {
	teach(): string
}

const getPersonName = (person: Person) => {
	console.log(person.name)
}

const setPersonName = (person: Teacher, name: string): void => {
	person.name = 'lee'
}

getPersonName({
	age: 18,
	name: 'niu',
	say() {
		return '123'
	}
})

setPersonName({
	name: 'zhang',
	say() {
		return '123'
	},
	teach() {
		return 'teach'
	}
}, 'lee')

// 函数接口
interface SayHi {
	(word: string): string
}

const say: SayHi = word => {
	return '123'	
}
say('123')


// 接口实现
class User implements Person {
	instancename: string
	name: 'lee'
	constructor(name: string) {
		this.instancename = name
	}
	say() {
		return 'hello typescript'
	}
}
console.log(new User('wangggggg'))
console.log(User.name)
console.log(user.say())
console.log(User.say())

