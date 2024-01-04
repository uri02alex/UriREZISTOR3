//Кусинусное растояние между цветами
function  cosine_similarity2(r1,g1,b1,r2,g2,b2){
    var z1=r1*r2+g1*g2+b1*b2
    var a=Math.sqrt(r1*r1+g1*g1+b1*b1)
    var b=Math.sqrt(r2*r2+g2*g2+b2*b2)
    var z2=a*b
    var podobile=-10;
    if (z2!=0){podobile=z1/z2}
    return podobile
    }


function rgb2hsv(r, g, b){
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;


  HH=60 * h < 0 ? 60 * h + 360 : 60 * h;
  SS=100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0);
  VV=(100 * (2 * l - s)) / 2;
  return {
   h: HH,s: SS,v: VV
  }
}


function rgb2hsv__ (r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}


function drawtext(ctx,rez1){
   console.log("drawtext ",rez1.strom)
   console.log(rez1)
   ctx.font = "52px serif";
   //ctx.fillText(rez1.strom, rez1.X, rez1.Y-50);
   ctx.fillText(rez1.stromsokr, 100, 70);
   //ctx.textBaseline = "hanging";
   ctx.fillStyle = "blue";
   ctx.strokeStyle = "red";
   ctx.lineWidth = 2;
   ctx.strokeText(rez1.stromsokr, 100, 70);
}


//нажатие мышкой

function changetip(tip){
   rez1.tip=tip
   rez1.draw()
   }

//нажатие мышкой
function clicksablon(kod){
   rez1.setpolska(nomerkolca,kod)
   nomerkolca++
   ViboNomerRing(nomerkolca)
   }

/*
function stdRGB(kodstd){
s="rgb(0,0,0)"
    switch(kodstd) {
      case 0:   s="rgb(  0,   0,  0)"     ;    break;
      case 1:   s="rgb(165,  42, 42)"     ;    break;
      case 2:   s="rgb(255,   0,  0)"     ;    break;
      case 3:   s="rgb(255, 165,  0)"     ;    break;
      case 4:   s="rgb(255, 255,  0)"     ;    break;
      case 5:   s="rgb(  0, 255,  0)"     ;    break;
      case 6:   s="rgb(  0,   0,255)"     ;    break;
      case 7:   s="rgb(255,   0,255)"     ;    break;
      case 8:   s="rgb(128, 128,128)"     ;    break;
      case 9:   s="rgb(255, 255,255)"     ;    break;
      case 10:  s="rgb(212, 160, 44)"     ;    break;
      case 11:  s="rgb(179, 179,179)"     ;    break;
      }
return s
}
*/

/*
function ii3(i){
var s=String(i)
l=s.lingth
if (l==1){s="00"+s}
console.log("'",s,"'")

return s
}
*/
/*
function setsubrezim(n){
subrezim=n
spaninfo.innerHTML="Выберите полоску № "+subrezim

}
*/
