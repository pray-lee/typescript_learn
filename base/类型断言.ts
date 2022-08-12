console.log('类型断言')

// 语法
// 值 as 类型
// <类型>值
// class Errors {}
//
// class ApiError extends Errors {
//     code: number = 0
// }
//
// class HttpError extends Errors {
//     statusCode: number = 200
// }
//
// function isApiError (error: Error) {
//     if(error instanceof ApiError) {
//         return true
//     }
//     return false
// }

// class Errors {}
// interface ApiError extends Error {
//     code: number
// }
//
// interface HttpError extends Error {
//     statusCode: number
// }
//
// function isApiError(error: Error) {
//     if(typeof (error as ApiError).code === 'number') {
//         return true
//     }
//     return false
// }

// 在any类型的变量上，访问任何属性都是允许的
// window.foo = 1 报错，window上不存在foo属性
// (window as any).foo = 1 // 这样就不会报错了


// 将any断言味一个具体的类型
// function getCacheData(key: string): any {
//     return key
// }
//
// interface Cat {
//     name: string
//     run(): void
// }
//
// const tom = getCacheData('tom') as Cat

// 类型断言 vs 泛型
// 类型断言
// function getCacheData(key: string): any {
//     return (window as any).cache(key)
// }
//
// interface Cat {
//     name: string
//     run(): void
// }
//
// const tom = getCacheData('tom') as Cat
// tom.run()

// 泛型
function getCacheData<T>(key: string): T {
    return (window as any).cache[key]
}

interface Cat {
    name: string
    run(): void
}

const tom = getCacheData<Cat>('tom')
tom.run()




























