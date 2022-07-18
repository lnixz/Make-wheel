export default function defineReactive(data, key, value = data[key]) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            return value;
        },
        set(newValue) {
            if (newValue === value) return
            value = newValue
        }
    })
}