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

document.onmouseup=function (e) {
    var rows = document.getElementsByClassName('grid-row').length
    var gameContainer =  document.getElementsByClassName('game-container')[0]
    var cellSide = gameContainer.offsetWidth/rows
    var x = e.clientX - gameContainer.offsetLeft
    var y = e.clientY - gameContainer.offsetTop
    if (x>cellSide && x<(gameContainer.offsetWidth-cellSide)) {
        if (y>0 && y<cellSide) {
            handleScroll('up', x, y)
        } else if (y>(gameContainer.offsetHeight-cellSide) && y<gameContainer.offsetHeight) {
            handleScroll('down', x, y)
        }
    } else {
        if (x>0 && x<cellSide) {
            handleScroll('left', x, y)
        } else if (x>(gameContainer.offsetWidth-cellSide) && x<gameContainer.offsetWidth) {
            handleScroll('right', x, y)
        }
    }
}
