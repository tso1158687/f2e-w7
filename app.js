console.log("app.js works");

function draw() {
  let text = "我的假髮會撕裂你";
  var canvas = document.getElementById("tutorial");
  var ctx=canvas.getContext('2d')

  var ww=window.innerWidth
  var wh=window.innerHeight
  canvas.width=ww
  canvas.height=wh
  ctx.fillStyle='red'
  ctx.fillRect(0,0,50,50)
}