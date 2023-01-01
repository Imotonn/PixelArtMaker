// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const sizeForm = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

// Format grid
const grid = document.getElementById('pixelCanvas');
grid.style.borderWidth = "10px";

// When size is submitted by the user, call makeGrid()
function makeGrid(row,column) {
    console.log("Inside makeGrid") //DEBUG
    grid.style.display = "none";
    for (var i=0; i<row; i++) {
        for (var j=0; j<column; j++) {

        }
    }
    grid.style.display = "block";
}

sizeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const row = height.value;
    const column = width.value;
    console.log("row", row, " column", column); //DEBUG
    makeGrid(row,column);
});