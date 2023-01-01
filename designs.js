// Select color input
const color = document.getElementById('colorPicker').value;

// Select size input
const sizeForm = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

// Format grid
const grid = document.getElementById('pixelCanvas');
grid.style.borderWidth = "5px"; //DEBUG


// When size is submitted by the user, call makeGrid()
function makeGrid(row,column) {
    grid.style.display = "none";
    for (var i=0; i<row; i++) {
        grid.insertRow(i);
        for (var j=0; j<column; j++) {
            grid.rows[i].insertCell(j);
        }
    }
    grid.style.display = "block";
}

sizeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    grid.innerHTML = "";
    const row = height.value;
    const column = width.value;
    makeGrid(row,column);
});

grid.addEventListener("click", function(event) {
    console.log("inside event listener") //DEBUG
    // event.target.style.backgroundColor = "red";  //DEBUG -> works
    event.target.style.backgroundColor = color;     

});