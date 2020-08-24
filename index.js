let i = {
  c:0,
  b:0,
  e:0,
  y:"",
  z:"",
  d:"",
  a:"",
  t: document.querySelector('.typewriter'),
  h1: document.querySelector('h1'),
  u: document.querySelector('.loading'),
  load_text: document.querySelector('.loading-dot'),
  img_btn: document.querySelectorAll('.images'),
  x: ['. . . .','code','ux design','sports'],
  getBtn: function(){
    this.img_btn.forEach((item,index,arr)=>{
      arr[index].addEventListener('click',()=>{
        console.log(item);
      })
    })
  }
}

let first = document.querySelector('.first');
let portfolio = document.querySelector('.portfolio');

i.getBtn();

function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve,ms));
}

class OnOff{
  onSec(){
    first.style.display = 'flex';
    portfolio.style.display = 'flex';
  }

  offSec(){
    first.style.display = 'none';
    portfolio.style.display = 'none';
  }
}

let toggleOnOff = new OnOff();

(async function effects(){
  (function dots(){
    i.d = i.x[0];
    i.a = i.d.slice(0,i.e+=2);
    i.load_text.textContent = i.a;
    console.log('still running');
    let time = setTimeout(dots,300);

    if (i.a.length === i.d.length) {
      console.log('timeout stopped');
      clearTimeout(time)
    }
  }());
  window.addEventListener('load',()=>{
    window.scrollTo(0,0);
  })
  i.u.classList.add('load');
  toggleOnOff.offSec();
  await sleep(2000);
  i.u.classList.remove('load');
  toggleOnOff.onSec();
  document.querySelector('.block').classList.add('add');
  i.u.style.display="none";
  await sleep(1500);

  (async function type(){

    if (i.c === i.x.length) {
      i.c = 0
    }

    i.y = i.x[i.c];

    i.z = i.y.slice(0,i.b++).toUpperCase();

    i.t.style.color = "#fff";
    i.t.textContent=i.z;

    if (i.z.length===i.y.length) {

      if (i.y==i.x[0]) {
        //this 'await' keyword used to pauses the current async function for 1 seconds then run again the function after it
        await sleep(1500);
      }
      await sleep(500);

      i.c++;
      i.b=0;
    }
    setTimeout(type,300);
  }());
}());

//add parallax when the user scroll reach the certain point
window.addEventListener('scroll',()=>{
  if (this.scrollY > portfolio.offsetTop - 300) {
    console.log('scroll to portfolio');
  }
})
