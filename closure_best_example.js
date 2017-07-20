function add() {
  	var sum = 0
    for(var arg of arguments) {
    		sum += arg 
    }
    return function newSum() {
    		for(var arg of arguments) {
        		sum += (arg) 		
        }
        if(arguments.length == 0) {
        		return sum
        }
        return newSum
    }
}

alert(add(1,2,3,4)(5)(6)(7,8)(9,10)())
alert(add(1)(2)(3)(4)())
