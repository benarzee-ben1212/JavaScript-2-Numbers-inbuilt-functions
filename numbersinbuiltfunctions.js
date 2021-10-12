// to convert number to string
var num=10
console.log(typeof(num))
console.log(num.toString())
console.log(typeof(num.toString()))

// to convert string to number
var str='10'
console.log(typeof(str))
console.log(parseInt(str))
console.log(typeof(parseInt(str)))

// parseFloat()	Parses a string and returns a floating point number
var strNum='10.5'
console.log(strNum)
console.log(typeof(strNum))
console.log(parseFloat(strNum))

var strNum2='ABC'
console.log(parseFloat(strNum2))

//toFixed() - takes floating number and round it off to given position
var num=10.326548
console.log(num)
console.log(num.toFixed(3))
console.log(typeof(num))
console.log(num.toFixed(12))


