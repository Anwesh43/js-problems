class UnderscoreClone {
		constructor() {
    		this.methodArgMap = {}
    }
    intercept(cb,args) {
    		 var argKey = ""
         for(var arg of args) {
         		argKey += arg+" "
         }
         argKey = argKey.trim()
         if(!this.methodArgMap[cb][argKey]) {
         		this.methodArgMap[cb][argKey] =  cb.apply(null,args)
         }
         else {
         		console.log(`coming from cache ${argKey}`)
         }
         return this.methodArgMap[cb][argKey]
    }
    memoize(cb) {
    		this.methodArgMap[cb] = {}
        return function() {
        		return this.intercept(cb,arguments)
        }.bind(this)
    }
}

var _ = new UnderscoreClone()
var add = _.memoize(function(a,b){return a+b})
alert(add(3,1))
alert(add(3,1))
alert(add(10,20))
alert(add(10,20))
alert(add(10,20))
alert(add(10,20))
alert(add(10,20))
