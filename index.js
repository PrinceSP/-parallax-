let i = {
  c:0,
  b:0,
  y:"",
  z:"",
  t: document.querySelector('.typewriter'),
  u:document.querySelector('.loading'),
  x: ['. . . .','code','ux design','sports']
}

function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve,ms));
}

(async function effects(){
  i.u.classList.add('load');
  await sleep(2000);
  i.u.classList.remove('load');
  document.querySelector('.block').classList.add('add');

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
