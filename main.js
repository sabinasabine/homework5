const dragElement=document.getElementById('dragElement');
const text=document.getElementById('text');
function getCoords(el) {
    let box = el.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

dragElement.addEventListener("mousedown", function (event) {
    text.style.display='block';
    const coords = getCoords(dragElement);
    let shiftX = event.pageX - coords.left;
    let shiftY = event.pageY - coords.top;

    dragElement.style.position='absolute';
    moveAt(event);
    document.body.appendChild(dragElement);
    dragElement.style.zIndex=1000;

    function moveAt(event) {
        dragElement.style.left = event.pageX - shiftX + 'px';
        dragElement.style.top = event.pageY - shiftY + 'px';
    }
    document.onmousemove = function(event) {
        moveAt(event);
    };
    dragElement.onmouseup = function() {
        document.onmousemove = null;
        dragElement.onmouseup = null;
        text.style.display='none';
    };
});

dragElement.ondragstart = function() {
    return false;
};



