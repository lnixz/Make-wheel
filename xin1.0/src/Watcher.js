
class Watcher {
    constructor(data, expression, cb) {
        this.data = data;
        this.expression = expression;
        this.cb = cb;

        this.value = this.get()
    }
    
    get() {
        const value = parsePath(this.data, this.expression)
        return value
    }

    update() {
        this.value = parsePath(this.data, this.expression)
        this.cb()
    }
}

function parsePath(obj, expression) {
    const segments = expression.split('.')
    for (let key of segments) {
        if (!obj) return
        obj = obj[key]
    }
    return obj
}