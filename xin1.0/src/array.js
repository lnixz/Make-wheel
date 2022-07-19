import { def } from "./utils.js"

const arrayPrototype = Array.prototype;

export const arrayMethods = Object.create(arrayPrototype);

const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methodsNeedChange.forEach(methodName => {
  // 
  const original = arrayPrototype[methodName];
  // 
  def(arrayMethods, methodName, function (...args) {
    console.log(`🎈[${this}].${methodName}(${JSON.stringify(...args)})🎈`);
    // 
    const ob = this.__ob__;
    let insterted = [];
    switch (methodName) {
      case 'push':
      case 'unshift':
        insterted = arguments
        break;
      case 'splice':
        insterted = arguments.slice(2);
        break;
    }
    if (insterted.length > 0) {
      ob.observeArray(insterted);
    }
    // 
    return original.apply(this, args);
  }, false)
})


