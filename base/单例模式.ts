class Heart {
    private static instance: Heart
    private constructor(private _name: string) {}
    static getInstance() {
        if(!this.instance) {
           this.instance = new Heart('heart')
        }
        return this.instance
    }
    get name() {
       return this._name
    }
    set name(name: string) {
        this._name = name
    }
}

const heart1 = Heart.getInstance()
const heart2 = Heart.getInstance()
console.log(heart1 === heart2)
console.log(heart1.name)
heart1.name = 'wangwangwang'
console.log(heart1.name)
