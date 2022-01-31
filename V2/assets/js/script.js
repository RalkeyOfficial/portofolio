
$(document).ready(function () {
    // tickerText(contents, keep, seconds, delay = 20, iterations = 0, ratio, secondsout, dev = false, pausetarget, stoptarget);
    let $elements = $(".tt-holder .tt");
    let animatetext = function () {
        $(".ttt").tickerText($elements, 6, 1, 100, 0, 0.5, 2, false, "timerpause", "timerstop");
    };
    $(animatetext);
});