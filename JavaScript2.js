function get() {
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(1800,1000);
ctx.stroke();
}
