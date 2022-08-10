// 抽象类 把通用的东西抽出来
abstract class Geom {
    abstract getArea(): number
    getType() {
        return 'Gemo'
    }
}

class Circle extends Geom {
    getArea() {
        return 123
    }
    aa() {
        return 11111
    }
}

class Square extends Geom {
    getArea() {
       return 456
    }
}

class Triangle extends Geom {
    getArea() {
        return 789
    }
}
console.log(new Circle().aa())