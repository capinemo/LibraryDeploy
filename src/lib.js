var Lib;

(function (global, debug = false) {
    let LIB = (function () {

        LIB.prototype.reverse = function (str) {
            return str.split('').reverse().join('');
        };

        function LIB () {
            return this;
        }

        return LIB;
    })();

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {LIB};
    } else {
        try {
            (function () {
                global.Lib = new LIB;
            })();
        } catch (e) {
            console.warn(e);
        }
    }
})(typeof window !== 'undefined' ? window : this, true);

