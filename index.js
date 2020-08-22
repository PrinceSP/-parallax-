let i = {
  c:0,
  b:0,
  e:0,
  y:"",
  z:"",
  d:"",
  a:"",
  t: document.querySelector('.typewriter'),
  u: document.querySelector('.loading'),
  load_text: document.querySelector('.loading-text'),
  x: ['. . . .','code','ux design','sports']
}

function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve,ms));
}

(async function effects(){
  (function dots(){
    i.d = i.x[0];
    i.a = i.d.slice(0,i.e+=2);
    i.load_text.textContent = i.a;
    setTimeout(dots,400);
  }());

  i.u.classList.add('load');
  await sleep(2000);
  i.u.classList.remove('load');
  document.querySelector('.block').classList.add('add');
  i.u.style.display="none";
  await sleep(1500);

  (async function type(){

    if (i.c === i.x.length) {
      i.c = 0;
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
