const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // pixel에 접근할 수 있음
const colors = document.getElementsByClassName("jsColor");

// 캔버스 사이즈 지정(CSS만 사이즈 지정하면 안됨)
canvas.width = 700;
canvas.height = 700;

// 선 스타일
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // x,y좌표로 Path(선) 생성하지만 사용하진 않음
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // 클릭했을 때, x,y좌표 Path만큼 선이 그어짐
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
