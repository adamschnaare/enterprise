//
// Useful Utility Functions
// --------------------------------------------------


// Global Object: Timer to delay events handlers ...like resizing or typing
// --------------------------------------------------
// http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

// Usage
//$(window).resize(function () {
//    waitForFinalEvent(function(){
//        alert('Resize...');
//        //...
//    }, 500, "some unique string");
//});