class Observer {
    constructor(value) {
        this.value = value;
        this.walk();
    }

    walk() {
        Object.keys(this.value).forEach((key) => {
            defineReactive(this.value, key);
        })
    }
}

function defineReactive(data, key, value = data[key]) {
    observe(value)
    Object.defineProperty(data, key, {
        get: function reactiveGetter() {
            return value;
        },
        set: function reactiveSetter(newValue) {
            if (newValue === value) return
            value = newValue
            observe(value)
        }
    })
}

function observe(data) {
    if (typeof data !== 'object') return
    new Observer(data)
}
