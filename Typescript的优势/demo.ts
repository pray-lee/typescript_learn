function tsDemo(data: {x: number, y: number}) {
	return Math.sqrt(data.x ** 2 + data.y ** 2)	
}

tsDemo()
// 报错但是会有相关的报错提示