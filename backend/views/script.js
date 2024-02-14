const canvas = document.getElementById('drawing-area');
const canvasContext = canvas.getContext('2d');
const clearButton = document.getElementById('clear-button');
const saveButton = document.getElementById('save-button');
const zoomButton = document.getElementById('zoom-button');
const state = {
    mousedown: false,
    points: []
};

// Get references to the color menu button and menu itself
const colorMenuButton = document.getElementById('color-menu-button');
const colorMenu = document.getElementById('color-menu');

// Function to toggle the visibility of the color menu
function toggleColorMenu() {
    colorMenu.classList.toggle('show');
}

// Function to hide the color menu
function hideColorMenu() {
    colorMenu.classList.remove('show');
}

// Event listener for the color menu button
colorMenuButton.addEventListener('click', toggleColorMenu);

// Get references to the color buttons
const blackColorButton = document.getElementById('black-color-button');
const blueColorButton = document.getElementById('blue-color-button');
const redColorButton = document.getElementById('red-color-button');

// Event listeners for the color buttons to hide the color menu when clicked
blackColorButton.addEventListener('click', hideColorMenu);
blueColorButton.addEventListener('click', hideColorMenu);
redColorButton.addEventListener('click', hideColorMenu);



let strokeColor = 'black';


// Function to change stroke color
function changeStrokeColor(color) {
    strokeColor = color;
}



const drName = "Dr. Sumit Bhadwa"
const QueNo ="29";
const pfNum="210412";
const pName="SNEHA";
const regNum="12H23";
const regDate="1/2/2003";
const drName_txt = `Name : ${drName}`;
const QueNo_txt = `Que No. : ${QueNo}`;
const pfNum_txt = `pf no. : ${pfNum}`;
const pName_txt = `patient Name: ${pName}`;
const regNum_txt=`reg num. : ${regNum}`;
const regDate_txt = `reg Date : ${regDate}`;
function drawText(){
    canvasContext.shadowColor="#000";
    canvasContext.font = "14px Arial";
    canvasContext.fillStyle = "#000";
    canvasContext.textBaseline = "middle";
    canvasContext.fillText(drName_txt, 100, 120);
    canvasContext.fillText(QueNo_txt,400,120);
    canvasContext.fillText(pfNum_txt,100,140);
    canvasContext.fillText(pName_txt,400,140);
    canvasContext.fillText(regNum_txt,100,160);
    canvasContext.fillText(regDate_txt,400,160);
}



// Call the drawText function


const defaultImage = () => {
    var backgroundImage = new Image();
    backgroundImage.onload = function() {
        canvasContext.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        drawText();
    };
    backgroundImage.src = './bg.png';
}

document.addEventListener("DOMContentLoaded", defaultImage);

const lineWidth = 0.4; // Adjusted for a thinner pen-like stroke
// const strokeStyle = 'black'; // Pen stroke color
// const shadowColor ='#000';
const shadowBlur =0.7;

canvas.addEventListener('mousedown', handleWritingStart);
canvas.addEventListener('mousemove', handleWritingInProgress);
canvas.addEventListener('mouseup', handleDrawingEnd);
canvas.addEventListener('mouseout', handleDrawingEnd);

canvas.addEventListener('touchstart', handleWritingStart);
canvas.addEventListener('touchmove', handleWritingInProgress);
canvas.addEventListener('touchend', handleDrawingEnd);

clearButton.addEventListener('click', handleClearButtonClick);
saveButton.addEventListener('click', handleSaveButtonClick);
zoomButton.addEventListener('click',handleZoomButtonClick);


function handleWritingStart(event) {
    event.preventDefault();
    const mousePos = getMosuePositionOnCanvas(event);
    state.points.push({ x: mousePos.x, y: mousePos.y });
    state.mousedown = true;
}

function handleWritingInProgress(event) {
    event.preventDefault();
    if (state.mousedown) {
        const mousePos = getMosuePositionOnCanvas(event);
        state.points.push({ x: mousePos.x, y: mousePos.y });
        drawSmoothLine();
    }
}

function handleDrawingEnd(event) {
    event.preventDefault();
    state.mousedown = false;
    state.points = [];
}

function handleClearButtonClick(event) {
    event.preventDefault();
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    defaultImage();
}

function handleSaveButtonClick(event) {
    event.preventDefault();
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "canvas_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function getMosuePositionOnCanvas(event) {
    const clientX = event.clientX || event.touches[0].clientX;
    const clientY = event.clientY || event.touches[0].clientY;
    const { offsetLeft, offsetTop } = event.target;
    const canvasX = clientX - offsetLeft;
    const canvasY = clientY - offsetTop+window.scrollY;;
    return { x: canvasX, y: canvasY };
}

function drawSmoothLine() {
    if (state.points.length < 2) return;

    canvasContext.beginPath();
    canvasContext.moveTo(state.points[0].x, state.points[0].y);
    canvasContext.shadowColor=strokeColor;
    canvasContext.shadowBlur=shadowBlur;

    for (let i = 1; i < state.points.length - 2; i++) {
        const xc = (state.points[i].x + state.points[i + 1].x) / 2;
        const yc = (state.points[i].y + state.points[i + 1].y) / 2;
        canvasContext.quadraticCurveTo(state.points[i].x, state.points[i].y, xc, yc);
    }

    canvasContext.quadraticCurveTo(
        state.points[state.points.length - 2].x,
        state.points[state.points.length - 2].y,
        state.points[state.points.length - 1].x,
        state.points[state.points.length - 1].y
    );

    canvasContext.lineWidth = lineWidth;
    canvasContext.strokeStyle = strokeColor;
    canvasContext.lineCap = 'round'; // Set line cap to round for smoother edges
    canvasContext.stroke();
}
