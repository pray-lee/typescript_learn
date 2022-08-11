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

// 函数的类型