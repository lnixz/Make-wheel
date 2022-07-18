
window.Dep = class Dep {
    constructor() {
        this.subscriber = new Set()
    }

    depend() {
        if (activeUpdate) {
            // register th current active update
            // as a subscriber
            this.subscriber.add(activeUpdate)
        }
    }

    notify() {
        // run all subscriber functions
        this.subscriber.forEach(sub => sub())
    }
}

let activeUpdate

function autorun(update) {
    function wrappedUpdate(update) {
        activeUpdate = wrappedUpdate
        update()
        activeUpdate = null
    }
}
autorun(() => {
    dep.depend()
})