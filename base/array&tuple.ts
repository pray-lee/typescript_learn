// array
// 这个可以推断出来，不用再声明了
const numberArr = [1,2,3]

const stringArr: (number | string)[] = [1, 3, '4']

// 数组元素必须包含name, 并且是字符串
const objectArr: {name: string}[] = [{name: 'lee'}]

// 类型别名 type alias
type User = {
    name: string,
    age: number
}
const objectArr1: User[] = [{name: 'lee', age: 30}]

// tuple 数量不可变，顺序也不可变, 类型顺序也不可变
const teacherInfo: [string, string, number] = ['lee', 'male', 18]

