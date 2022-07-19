import observe from "./observe.js";
export default function defineReactive(data, key, value = data[key]) {
    observe(value)
    console.log(`执行defineReactive ${JSON.stringify(key)}`);
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`尝试获取 ${JSON.stringify(key)} : ${JSON.stringify(value)}`);
            return value;
        },
        set(newValue) {
            if (newValue === value) return
            value = newValue
            observe(newValue)
            console.log(`正在设置 ${JSON.stringify(key)} = ${JSON.stringify(newValue)}`);
        }
    })
}