console.log("hola");

$('#zoom_05').ezPlus({
  zoomType: 'inner',
  cursor: 'crosshair',
  borderColour: 'red',
});


$('#zoom_06').ezPlus({
 scrollZoom: true,
 borderColour: 'red',
});

const open = document.getElementById('open');
const ventana = document.getElementById('ventana');
const close = document.getElementById('close');

open.addEventListener('click', ()=>{
  ventana.classList.add('show');
  
  
});

close.addEventListener('click', ()=>{
  ventana.classList.remove('show');
});



