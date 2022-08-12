// function add(x: number, y: number): number {
//     return x + y
// }
//
// let myAdd = function(x: number, y: number): number {
//     return x + y
// }

// function identify<T>(arg: T): T {
//     return arg
// }
//
// let myIdentify: <T>(arg: T) => T = <T>(arg:T): T => arg

// 泛型接口
// interface GenericIdentifyFn<T> {
//     (arg: T): T
// }
//
// function identify<T>(arg: T): T {
//     return arg
// }
//
// let myIdentify: GenericIdentifyFn<number> = idengtify

// 泛型类
// class GenericNumber<T> {
//     zeroValue: T
//     add: (x: T, y: T) => T
// }

// let myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zeroValue = 0
// myGenericNumber.add = function(x, y) {return x + y}

// 用接口定义函数的形状
// interface SearchFn {
//     (source: string, subString: string): boolean
// }
//
// let mySearch: SearchFn = (source:string, subString:string) => {
//     return source.search(subString) !== -1
// }

// 函数重载
// Typescript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系
// 需要优先把精确的定义写在前面
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
}