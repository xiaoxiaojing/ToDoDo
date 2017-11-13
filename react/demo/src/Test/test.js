const mixin = function(obj, mixins){
    const newObj = obj
    newObj.prototype = Object.create(obj.prototype)

    for (let prop in mixins) {
        if (mixins.hasOwnProperty(prop)) {
            newObj.prototype[prop] = mixins[prop]
        }
    }

    return newObj
}

const BigMixin = {
    fly: () => {
        console.log('i can fly');
    }
}

const Big = function () {
    console.log('new big');
}

const FlyBig = mixin(Big, BigMixin)
const flyBig = new FlyBig()
flyBig.fly()
