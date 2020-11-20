// ts 类型推断下面这个变量为纯数字组成的字符串
const arr = [1, 2, 3]    // number[]

// ts 类型推断下面这个变量为纯字符串组成的字符串
const strArr = ['1', '2', '3']    // string[]

// 如果数组里面不是单一的数据类型，使用下面的方式
const complexArr: (number | string)[] = [1, '2', 3]

// 数组里面是对象
// 可以使用类型别名 type alias
type User = {name: string, age: number}
class Teacher {
    name: string
    age: number
}
const objectArr: User[] = [
    new Teacher(),
    {
        name: 'lee',
        age: 29
    }
]
const objectArr1: Teacher[] = [
    new Teacher(),
    {
        name: 'lee',
        age: 29
    }
]

// =============================tuple=================================
const teacherInfo: [string, string, number] = ['lee', 'male', 18]

const tupleArr: [string, string, number][] = [
    ['lee', 'girl', 18],
    ['zhang', 'boy', 18],
    ['niu', 'boy', 18]
]