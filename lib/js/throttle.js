function throttle(fn, delay = 2000) {
    let flag = true;
    return function (...args) {
        if (!flag) return;
        flag = false
        let timer = setTimeout(() => {
            fn.apply(this, args);
            flag = true
            // clearTimeout(timer)
        }, delay)
    }
}

export default throttle;