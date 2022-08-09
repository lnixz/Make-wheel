// 工具方法

const objectToString = Object.prototype.toString;
const isArray = Array.isArray || function isArrayPolyfill(object) {
    return objectToString.call(object) === '[object Array]';
};

function isFunction(object) {
    return typeof object === 'function';
}

// 
function typeStr(obj) {
    return isArray(obj) ? 'array' : typeof obj;
}

// 

function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

function hasProperty(obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
}

function primitiveHasOwnProperty(primitive, propName) {
    return (
        primitive != null
        && typeof primitive !== 'object'
        && primitive.hasOwnProperty
        && primitive.hasOwnProperty(propName)
    )
}