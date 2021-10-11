// 接口
// 能用接口用接口，接口用不了再用别名
// 接口不能代表基础类型
// 类型别名基础类型也能用

interface Person {
    readonly name: string
    age?: number
    [propName: string]: any //任意属性都可以
    say(): string // 方法
}

const getPersonName = (person: Person) => {
    console.log(person.name)
}

// const setPersonName = (person: Person, name: string) => {
//     person.name = name
// }

const person = {
    name: 'lee',
    say() {
        return 'say hello'
    }
}

getPersonName(person)
// setPersonName(person, 'xiaoyong')

// 类应用接口
class User implements Person {
    name: 'lee'
    say() {
        return 'hello'
    }
}

// 接口继承
interface Teacher extends Person {
    teach(): void
}

const letTeacherLoud = (teacher: Teacher): void => {
    console.log('let teacher loud')
}

const teacher = {
    name: '李老师',
    teach() {
        console.log('a a a')
    },
    say() {
        return '我是李老师'
    }
}
letTeacherLoud(teacher)
