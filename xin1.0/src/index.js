import defineReactive from "./defineReactive";
import Observer from "./Observer";


export default function Xin(options) {
    this._init(options)
    this._reander(options)
    const data = options.data

}

Xin.prototype._init = function (options) {
    this.$options = options || {};
}

Xin.prototype._reander = function (options) {
    const id = options.el || null;
    const element = document.querySelector(id);
    const elementInnerHtml = element.innerHTML
    element.outerHTML = `<div style="border:5px solid pink">${elementInnerHtml}</div><textarea>${this.$options.el}</textarea>`;
}

// ----------------------------------------------------------------
function reactive(obj, key, value) {
    Object.defineProperty(obj, key, {
        get() {
            return value
        },
        set(newValue) {
            value = newValue
        }
    })
}

// ----------------------------------------------------------------

function convert(obj) {
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key]
        Object.defineProperty(obj, key, {
            get() {
                console.log(`获取key ${key} : ${internalValue}`);
                return internalValue
            },
            set(newValue) {
                console.log(`设置key ${key} : ${newValue}`);
                internalValue = newValue
            }
        })
    })
}

// -----------------------------------------------------------------

var obj = {
    a: 0,
    b: 2
}
// reactive(obj, 'count')
convert(obj)

obj.a = 3
obj.b = obj.a * 10
console.log(obj.b);
obj.a = 20
console.log(obj.b);

//  ----------------------------------------------------------------

function observe(value) {
    if (typeof value !== 'object') return
    var ob;
    if (typeof value.__ob__ !== 'undefined') {
        ob = value.__ob__
    } else {
        ob = new Observer(data)
    }
    return ob;
}
