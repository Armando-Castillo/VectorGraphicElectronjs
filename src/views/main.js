var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = canvas.width/2
//Lineas del mapa
var ordenada = canvas.offsetHeight
var abscisa = canvas.offsetWidth
console.log(abscisa, ordenada)
// Draw guides
ctx.strokeStyle = '#787c7a'
ctx.beginPath()
ctx.lineWidth = 2
ctx.font = "16px Arial";
for(i = -50, j = 0, k=25; i <= 50; i=i+5, j=j+5, k=k-5){
    ctx.fillText(`${i}`, j*10, 250);
    ctx.fillText(`${k}`, 500, j*10);
}
canvas_arrow(ctx, canvas.width/2, canvas.height,canvas.width/2, 0)
canvas_arrow(ctx, canvas.width/2, 0, canvas.width/2, canvas.height)
canvas_arrow(ctx, 0, canvas.height/2, canvas.width, canvas.height/2)
canvas_arrow(ctx,  canvas.width, canvas.height/2,0, canvas.height/2)
ctx.stroke()


document.getElementById('sumar').addEventListener('click', (event) => {
    event.preventDefault()
    const vectorNorte = parseInt(document.getElementById('valorA').value)
    const vectorEste = parseInt(document.getElementById('valorB').value)
    const vectorSur = parseInt(document.getElementById('valorC').value)
    const vectorOeste = parseInt(document.getElementById('valorD').value)
    
    var componenteVertical = vectorNorte - vectorSur;
    var componenteHorizontal = vectorEste - vectorOeste;
    console.log(componenteVertical)
    console.log(componenteHorizontal)
    console.log(`(${componenteHorizontal},${componenteVertical})`)
    var coordHor = (50 + componenteHorizontal)*10
    var coordVer = (25 - componenteVertical)*10
    var coordNorte = (25 - vectorNorte)*10
    var coordSur = (25 + vectorSur)*10
    var coordEste = (50 + vectorEste)*10
    var coordOeste = (50-vectorOeste)*10
    console.log(coordHor, coordVer)

    document.getElementById('valores').innerHTML = `Vector resultante: <span class="vectorR"> ( ${componenteHorizontal} , ${componenteVertical} ) </span>` 
    // Draw vectors
    // Vector Resultante
    ctx.strokeStyle = '#C40000';
    ctx.beginPath();
    canvas_arrow(ctx, canvas.width/2, canvas.height/2,coordHor, coordVer)
    ctx.lineWidth = 3;
    ctx.stroke();
    // Vector Norte
    ctx.strokeStyle = '#05CDFA';
    ctx.beginPath();
    canvas_arrow(ctx,canvas.width/2, canvas.height/2,canvas.width/2, coordNorte)
    ctx.lineWidth = 3;
    ctx.stroke();
    // Vector Sur
    ctx.strokeStyle = '#F005C9';
    ctx.beginPath();
    canvas_arrow(ctx,canvas.width/2, canvas.height/2,canvas.width/2, coordSur)
    ctx.lineWidth = 3;
    ctx.stroke();
    //Vector Este
    ctx.strokeStyle = '#FA6429';
    ctx.beginPath();
    canvas_arrow(ctx,canvas.width/2, canvas.height/2, coordEste, canvas.height/2)
    ctx.lineWidth = 3;
    ctx.stroke();
    //Vector Oeste
    ctx.strokeStyle = '#05963F';
    ctx.beginPath();
    canvas_arrow(ctx,canvas.width/2, canvas.height/2, coordOeste, canvas.height/2)
    ctx.lineWidth = 4;
    ctx.stroke();
})

document.getElementById('limpiar').addEventListener('click', () => {
    location.reload()
})


//Arrow
function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
  }
  