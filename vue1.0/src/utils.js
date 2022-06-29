/**
 * 将 key 代理到 target 上，
 * 比如 代理 this._data.xxx 为 this.xxx
 * @param {*} target 目标对象，比如 vm 
 * @param {*} sourceKey 原始 key，比如 _data
 * @param {*} key 代理的原始对象上的指定属性, 比如 _data.xxx
 */
export function proxy(target, sourceKey, key) {
    Object.defineProperty(target, key, {
        get() {
            return target[sourceKey][key]
        },
        set(newValue) {
            target[sourceKey][key] = newValue
        }
    })
}