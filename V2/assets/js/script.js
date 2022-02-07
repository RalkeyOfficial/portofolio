
// tickerText(contents, keep, seconds, delay = 20, iterations = 0, ratio, secondsout, dev = false, pausetarget, stoptarget);
let $elements = $(".tt-holder .tt");
let animatetext = function () {
    $(".ttt").tickerText($elements, 6, 2, 100, 0, 0.5, 2, false, "timerpause", "timerstop");
};
$(animatetext);


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

$("#age").text(getAge("2003/10/03"));
