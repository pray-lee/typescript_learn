let fibonacci: number[] = [1,23,3,5,6]

// 数组泛型
let fibonacci1: Array<number> = [1,1,3,3,3,3,4]

// 用接口表示数组
interface NumberArray {
    [index: number]: number
}
let fibonacci2: NumberArray = [1,1,3,3,4,4]

// 类数组 Array-like Object 比如arguments

// function sum() {
//     let args: {
//         [index: number]: number
//         length: number
//         callee: Function
//     } = arguments
// }

function sum() {
    let args: IArguments = arguments
}

let list: any[] = ['xx', 24, {website: 'https://www.baidu.com'}]
console.log(list, 'list')