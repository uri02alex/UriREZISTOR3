function drawPoint1(){point1.innerHTML=p1.print2()}
function drawPoint2(){point2.innerHTML=p2.print2()}

function DetectNominal(color5){
    rez1.detectring(color5)
    rez1.draw()
    }

function drawPre1(){
       c=a2.length
       s=''
       for (i=0;i<c;i++){
        p=a2[i]
        s=s+p.print()
       }
       pre1.innerHTML=s
       }

function drawPre2(){
       c=a2.length
       s='var dat1 = [\n'
       zap=' '
       for (i=0;i<c;i++){
        p=a2[i]

       s=s+zap+p.print3()
       zap=','
       }

       s=s+']'
       s=s+"\n var coutpoint="+i

       pre2.innerHTML=s
       navigator.clipboard.writeText(s)
       }

function drawPre3(){
       c=a2.length
       s='<table>\n'
       for (i=0;i<c;i++){
       p=a2[i]
       s=s+'<tr><td>'+i
       s=s+'<td width: 200px >'+p.retDiv2BackgroundRGB()+'-----';
       s=s+'<td>'+p.r;
       s=s+'<td>'+p.g;
       s=s+'<td>'+p.b;
       s=s+'<td>'+p.namecolor;
       s=s+'<td title="x">'+p.x;
       s=s+'<td>'+p.y;
       }
       s=s+']'
       s=s+"</table>" 
       pre3.innerHTML=s
       // navigator.clipboard.writeText(s)
       }



function drawline(ctx,p1,p2){
       //console.log(" drawline ",ctx)
       ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
}


//!!!!!!!!!!!!! zapolnitarray !!!!!!!!!!!!!!!
function AddInA2(X,Y,i,w,data){
             var p=new UriPoint()
             p.setxy(X,Y)
             p.nom=i
             var ii = (X + Y * w) * 4;
             p.setcolor(data[ii],data[ii+1],data[ii+2]);
             setXYColorFromData(X,Y,p,w,data)
             a2.push(p)

}
//Берем данные из рисунка 
function zapolnitarray(data,p1,p2,w){
let с=-1
             a2=new UriArray()
             movex=false;movey=false
             p1.x=Number(p1.x);p2.x=Number(p2.x);p1.y=Number(p1.y);p2.y=Number(p2.y)
             //console.log(' p1 ',p1.x,p1.y)
             //console.log(' p2 ',p2.x,p2.y)
             deltax=p2.x-p1.x
             deltay=p2.y-p1.y
             absdeltax=Math.abs(deltax)
             absdeltay=Math.abs(deltay)
             if (absdeltax>absdeltay){movex=true;}
             if (absdeltax<absdeltay){movey=true;}
             if (movex){
             if (p2.x>p1.x) {
                с=p2.x-p1.x
                //console.log('1)Движемся по оси X  с ЛЕВО на право точек ',с)
                X1=p1.x
                Y1=p1.y
                for (i=p1.x;i<=p2.x;i++){
                 X=i
                 k=deltay/deltax
                 Y=Math.round(Y1+k*(X-X1))
                 //console.log('X Y K ',X,Y,k)
                 AddInA2(X,Y,i,w,data)
                 }
                }

             if (p2.x<p1.x) {
                с=0
                с=p1.x*1-p2.x*1
                //console.log('2)Движемся по оси X  с ПРАВО на лево точек ',c,p1.x,'<--',p2.x)
                X1=p1.x
                Y1=p1.y

                for (i=p1.x*1;i>=p2.x*1;i--){
                //for (i=p1.x1;i>=p2.x;i--){
                  X=i
                 k=deltay/deltax
                 Y=Math.round(Y1+k*(X-X1))
                 //console.log('X Y K ',X,Y)
                 AddInA2(X,Y,i,w,data)
                }
                }


             }

             if (movey){
             k=deltax/deltay
             if (p2.y>p1.y) {
                console.log('3)Движемся по оси Y в НИЗ ',p1.y,'--> ',p2.y)
                for (i=p1.y*1;i<=p2.y*1;i++){
                  Y1=p1.y
                  X1=p1.x
                  Y=i
                  X=Math.round(X1+k*(Y-Y1))
                  //console.log('Y X',Y,X)
                  AddInA2(X,Y,i,w,data)
                  }
                }
             if (p2.y<p1.y) {
                //console.log('4)Движемся по оси Y в ВЕРХ',p1.y,'<-- ',p2.y)
                for (i=p1.y*1;i>=p2.y*1;i--){
                  Y1=p1.y
                  X1=p1.x
                  Y=i
                  X=Math.round(X1+k*(Y-Y1))
                  //console.log('Y X',Y,X)
                  AddInA2(X,Y,i,w,data)
                 }
                }
             }
return 0
}

function sabolnscanall(){
return 
console.log("=sabolnscanall=")
c=a2.length-1
//console.log("a2.length ",a2.length)
for (var i=0;i<c;i++){
 p= a2[i]
 //if(i==1){
 //console.log(i,") ",p)
 p.namecolor="NONE"
 sabolnscan1(p)
 //}
}
}


/*
function sabolnscan1(p){
var c=sbl.length
rastmin=99999
rastminstr=''
rastmini=-1

for (i=0;i<c;i++){
 ps=sbl[i]
 var rast=ps.rastfrom(p)
 //console.log("rast ",rast," ",ps.namecolor," ",ps.num)
 if(rastmin>rast){
  rastmin=rast
  rastminstr=ps.namecolor+" "+ps.num+" "+rastmin
  rastmini=i
  }
}
console.log(" rastmin end ",rastmin," ",rastminstr)
p.namecolor=rastminstr
//s="<pre>"

}

*/






/*
function DetectNominal2(dat,rez){
//console.log("DetectNominal2 ")
//console.log("DetectNominal2 dat3 ",dat)
rez.detectring(dat,rez.tip)
console.log("DetectNominal2 rez ",rez)
console.log("DetectNominal2 rez.kod ",rez.kod)

}

*/