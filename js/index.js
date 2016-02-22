window.onload = function(){
  var bird ={x:140,y:100,w:40,h:40}
  guandao = [{x:600,y:0,w:80,h:150},{x:600,y:338,w:80,h:550},{x:930,y:0,w:80,h:150},{x:930,y:308,w:80,h:500}]
  ctx = document.querySelector('#canvas').getContext('2d');
  a = 1;
  star = function(){
  m = Math.random()*100
  ctx.clearRect(0,0,320,528);
  
  
    //画动物
  a += 0.05;
  bird.y += a*a;
  // ctx.fillRect(bird.x,bird.y,bird.w,bird.h);
  var img = new Image();
  img.src = './image/bird0_0.png';
  img.onload = function(){
  ctx.drawImage(img,bird.x,bird.y);
  }
  //画管道
  for(var i = 0;i<guandao.length;i++){
  var d = guandao[i];
  d.x -= 3;
  if(d.x <= -80){
  d.x = 600;
  if(i%2 == 0){
  d.h = Math.random()*300;
  x =  d.h;
  }else{
  d.y = x+160;
  } 
  }
  //管道图片  
  var img1 = new Image();
  if(d.y == 0){
  img1.src = './image/g-up.png'; 
  }else{
  img1.src = './image/g-down.png'; 
  }
  img1.onload = function(){
  ctx.drawImage(img1,d.x,d.y,d.w,d.h);
  }
  ctx.drawImage(img1,d.x,d.y,d.w,d.h);

  if(recvsrec(bird,d)){
  var vs = true;
  }  
  }
  var game = document.querySelector('.game');
  if(vs){
       game.style.display = 'block';
       return;
  }

  if(bird.y >= 528-40){
  ctx.fillRect(140,528,bird.w,bird.h); 
  game.style.display = 'block';
  return; 
  }else if(bird.y<=0){
  ctx.fillRect(140,0,bird.w,bird.h);
  game.style.display = 'block';
  return;
  }else{
  window.requestAnimationFrame(star)
  }
  ctx.drawImage(img,bird.x,bird.y);

  }
  
  var stars = document.querySelector('#star');
  stars.onclick = function(){
    stars.style.display = 'none';
    requestAnimationFrame(star);
  }
  var shuaxin = document.querySelector('.shuaxin');
  shuaxin.onclick = function(){
    location.reload();
  }
  canvas.onclick = window.onkeydown = function(){
  a =0;
  bird.y -= 40;
  }

  var recvsrec =  function(rect0,rect1){
  if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w) {
  return false;
  } else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x) {
  return false;
  } else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h) {
  return false;
  } else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y) {
  return false;
  }
  return true;
  }

  
}