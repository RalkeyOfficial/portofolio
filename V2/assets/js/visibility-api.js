/////////////////////////////////////////
// main visibility API function
// check if current tab is active or not
const vis = (function () {
    let stateKey,
      eventKey,
      keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
      };
    for (stateKey in keys) {
      if (stateKey in document) {
        eventKey = keys[stateKey];
        break;
      }
    }
    return function (c) {
      if (c) document.addEventListener(eventKey, c);
      return !document[stateKey];
    }
  })();