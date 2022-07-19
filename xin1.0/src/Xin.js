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