import '../../utils/consoleInHTML.js';
import observe from './observe.js';

// ----------------------------------------------------------------

var obj = {
    a: {
        b: {
            c: 5,
        }
    },
    d: [23, 24, 25]
}

observe(obj)
console.log(obj.a.b.c);
obj.d.push({ e: 25 })
obj.d[3].e++;
console.log(obj.d[3].e);
console.log(obj.d.pop());
console.log(obj.d);



export default {};
