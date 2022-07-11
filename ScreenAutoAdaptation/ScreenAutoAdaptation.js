import throttle from "../node_modules/lodash-es/throttle.js";

export default (function ScreenAutoAdaptation() {
    const _html = document.documentElement;
    const _body = document.body;

    let _last_window_width = window.innerWidth;
    let _max_scale = 0;

    onScale();
    const onResizeThrottle = throttle(onResize, 15);
    window.addEventListener("resize", throttle(onResize, 15));

    function onScale() {
        // Get <html> width and <body> width.
        const HTML_clientWidth = _html.clientWidth;
        const BODY_clientWidth = _body.clientWidth;
        // Calculate Scale.
        const scale = HTML_clientWidth / BODY_clientWidth;
        if (_max_scale < scale) {
            _max_scale = scale;
            _body.style.transform = `scale(${scale})`;
        }
    }

    function onResize() {
        // Only deal with increased proportion.
        if (_last_window_width <= window.innerWidth) {
            onScale();
        }
        _last_window_width = window.innerWidth;
    }
})();


