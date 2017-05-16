function handleScroll(direction, x, y) {
    var map = {
      'up': 38,
      'right': 39,
      'down': 40,
      'left': 37
    };
    var key = map[direction];
    if(document.createEvent && key)
    {
        var key;
        var eventObj = document.createEvent("Events");
        eventObj.initEvent("keydown", true, true);
        eventObj.which = key;
        document.dispatchEvent(eventObj);
    }
    return true;
}