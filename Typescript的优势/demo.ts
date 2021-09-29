function tsDemo(data: {x: number, y: number}) {
	return Math.sqrt(data.x ** 2 + data.y ** 2)	
}

tsDemo({x: 1, y: 2})
// 报错但是会有相关的报错提示