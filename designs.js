// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const sizeForm = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

// Format grid
const grid = document.getElementById('pixelCanvas');
grid.style.borderWidth = '3px'; //DEBUG

// Function for drawing an empty grid
function makeGrid(row,column) {
    grid.style.display = 'none';
    var gridWidth = 20 * column; 
    grid.width = gridWidth; 
    for (var i=0; i<row; i++) {
        grid.insertRow(i);
        for (var j=0; j<column; j++) {
            grid.rows[i].insertCell(j);
        }
    }
    grid.style.display = 'block';
}

// When size is submitted by the user, call makeGrid()
sizeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    grid.innerHTML = '';
    const row = height.value;
    const column = width.value;
    makeGrid(row,column);
});

// Change cell background color when clicked
grid.addEventListener('click', function(event) {
    if (event.target.nodeName.toLowerCase() === 'td' ) {
        event.target.style.backgroundColor = color.value; 
    }
        
});