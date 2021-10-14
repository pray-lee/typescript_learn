// 函数泛型 generic  ******** 难 **********

// 写法需要特别注意

// function join<T>(first: T, second: T): T {
//     return first || second
// }
//
// join<string>('str', 'str1')


interface Identities<V, M> {
    value: V,
    message: M
}

function identity<T, U> (value: T, message: U): Identities<T, U> {
    let identities: Identities<T, U> = {
        value,
        message
    };
    return identities;
}

console.log(identity(68, "Semlinker"));

interface Fuck<M, N> {
   value: M,
   message: N
}

const identity1: <A, B>(value: A, message: B) => Fuck<A, B> = <A, B>(value: A, message: B) => {
    const data: Fuck<A, B> = {
       value,
       message
    }
    return data
}


