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