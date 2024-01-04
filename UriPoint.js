class UriPoint{

constructor(){
 this.nom=-1
 this.x=0
 this.y=0
 this.r=0
 this.g=0
 this.b=0 
 this.namecolor='' 
 this.H=0         //Цвет фон
 this.S=0         //насыщеность  Чем чще свет
 this.V=0         //яркость
 this.kod=0       //Цыфра
 this.tip=0;      //0 цвета полос стандартные //фон
 this.sbl=0       //код шаблона
 this.tekras=0;   //косинусное расстояние до шаблона цвета
 this.verColor=0; //Для аблона
}

retDiv1Sablon(){
    return  "<div class='sablon sablon_UriPoint_print '>"
}

retDiv2BackgroundRGB(){
let s=''
    s=s+"<div class='sablon'  style='background: rgb("
    +this.r
    +","+this.g
    +","+this.b
    +");'>"
    return  s
}

retSpanNom(){
    let s=''
    s=" nom:<div class='point_nom' title='nom'>"+this.nom+"</div>"
    return s
}

retSpanX(){
    let s=''
    s=" <div class='point_x' title='x'>"+this.x+"</div>"
    return s
}
retSpanY(){
    return " <div class='point_y' title='y'>"+this.y+"</div>"
}
retSpanR(){
    return " <div class='point_r' title='r'>"+this.r+"</div>"
}
retSpanG(){
    return " <div class='point_g' title='g'>"+this.g+"</div>"
}
retSpanB(){
    return " <div class='point_g' title='b'>"+this.g+"</div>"
}

retSpanRGB(){
    let s=''
    s=this.retSpanR()+this.retSpanG()+this.retSpanB()
    return s
}

retSpanH(){
    return " <div class='point_H' title='H'>"+this.H+"</div>"
}

retSpanKolvo(){
    return " <div class='point_Kolvo' title='Kolvo'><p>"+this.kolvo+"</p></div>"
}
retSpanKod(){
    return " <div class='point_Kod' title='kod'><p>"+this.kod+"</p></div>"
}



print(sdop=''){
    var s=""
    s=s+this.retDiv1Sablon()
    s=s+this.retDiv2BackgroundRGB()
    s=s+this.retSpanNom()
    s=s+this.retSpanX()
    s=s+this.retSpanY()
    s=s+"</div>"
    s=s+this.retSpanRGB()
    s=s+this.retSpanH()
    s=s+this.retSpanKolvo()
    s=s+this.retSpanKod()
    s=s+" "+this.namecolor
    s=s+sdop
    s=s+"</div>"
    s=s+"\n"
    return s
    }

divRGB(){
    s="<div class='divRGB' style='background: "+this.strRGB()+"'</div>"
    return s
    }

strRGB(){
    var s="rgb("+this.r
    +","+this.g
    +","+this.b
    +")"
    return s
    }

divHSV(){
    s="<div class='divRGB' style='background: "+this.strHSV()+"'></div>"
    return s
    }

strHSV(){
    s="hsl("+this.H+"deg "+this.S+"%"+" "+this.V+"%"+")"
    return s
    }


print2(){
    var title="r="+this.r
    +" g="+this.g
    +" b="+this.b
    +" H="+this.H
    +" S="+this.S
    +" V="+this.V
    var s=""
    s=s+"<div class='sablon' title='"+title+ "'>"
    s=s+"<div class='sablonrectcolor' style='background: rgb("
    +this.r
    +","+this.g
    +","+this.b
    +")'></div>"
    //<span class='tri'>
    +"x:"+this.x+" "
    +"y:"+this.y+" "
    +"<span class='red   tri'>"+this.r+"</span>"
    +",<span class='green tri'>"+this.g+"</span>"
    +",<span class='blue  tri'>"+this.b+"</span>"
    +"<span class='red   '  >"+this.namecolor+" </span>"
    +"<span class='blue   '  >"+this.kod+" </span>"
    +"<span class='blue   '  >"+this.tip+" </span>"
    +"</div>"
    return s
    }


print3(){
    var s="{"
    s=s+"nom: "+ this.nom
    s=s+",r: "+ this.r
    s=s+",g: "+ this.g
    s=s+",b: "+ this.b
    s=s+",H: "+ this.H
    s=s+",V: "+ this.V
    s=s+",S: "+ this.S
    s=s+",tip: "+ this.tip
    s=s+",kod: "+ this.kod
    s=s+",namecolor: '"+ this.namecolor+"'"
    s=s+",sbl: "+ this.sbl
    s=s+",rasmin: "+ this.rasmin
    s=s+"}\n"
    return s
    }

printsbl(){
var title="H:"+this.H+",S:"+this.S+",HV"+this.V
    var s=""
    s=s+"<div  style='background: rgb("+this.r+","+this.g+","+this.b+");'  title='"+title+"' class='sablon_rect_color'>"
    +" "+this.r+","+this.g+","+this.b
    +"</div>\n"
     ;
    return s
    }
setcolor(r,g,b){
    this.r=r
    this.g=g
    this.b=b 
    var ar=rgb2hsv (this.r, this.g, this.b) 
    this.H=Math.round(ar.h)
    this.S=Math.round(ar.s)
    this.V=Math.round(ar.v)
    this.detectcolor()
    }

setsablon(r,g,b,kod,name){
    this.r=r
    this.g=g
    this.b=b 
    var ar=rgb2hsv(this.r, this.g, this.b) 
    this.H=Math.round(ar.h)
    this.S=Math.round(ar.s)
    this.V=Math.round(ar.v)
    this.kod=kod
    this.namecolor=name
    }

setxy(x,y){
    this.x=x
    this.y=y
    //this.calcHSV()
    }

retnamecolor(color){
    var s=color
    switch(color) {
      case 0:  s="черный"    ;    break;
      case 1:  s="коричневый";    break
      case 2:  s="красный"   ;    break
      case 3:  s="оранжевый" ;    break
      case 4:  s="желтый"    ;    break
      case 5:  s="зеленый"   ;    break
      case 6:  s="голубой"   ;    break
      case 7:  s="фиолетовый";    break
      case 8:  s="серый"     ;    break
      case 9:  s="белый"     ;    break
     }
    return s
}

mastab(color){
    var rr=0
    if (color==255){rr=this.colormax}
    if (color==0  ){rr=this.colormin}
    return rr
}

//!!!
calras(r,g,b,nom,name){
    var ras=0
    var rr=this.mastab(r)
    var gg=this.mastab(g)
    var bb=this.mastab(b)
    console.log("=========")
    console.log("min max=",this.colormax," ",this.colormin)
    console.log("p      =",this.r," ",this.g," ",this.b," nom=",nom)
    console.log("rgb    =",r," ",g," ",b," nom=",nom)
    console.log("rrggbb =",rr," ",gg," ",bb," nom=",nom," name=",name)
    var rr2=rr-this.r
    var gg2=gg-this.g
    var bb2=bb-this.b
    console.log("rr2 =",rr2," ",gg2," ",bb2)
    var r2=rr*rr
    var g2=gg*gg
    var b2=bb*bb
    console.log("r2 =",r2," ",g2," ",b2)
    ras=Math.sqrt(r2+g2+b2)
    return ras
    }

//!!
printras(){
    var с=this.ras.length
    console.log("this,ras.length",c);
    for (var i=1;i<c;i++)
    console.log(i," ",this.ras[i]," ",this.retnamecolor(i))
    }


//!!
calcallras(){
              this.ras[1]=this.calras(255,255,  255,"1","коричневый");//
              this.ras[2]=this.calras(255,  0,    0,"2","красный 1 0 0");//
              this.ras[3]=this.calras(255,255,  255,"3","оранжевый");//
              this.ras[4]=this.calras(255,255,  255,"4","желтый");//
              this.ras[5]=this.calras(  0,255,    0,"5","зеленый");//
              this.ras[6]=this.calras(  0,  0,  255,"6","голубой");//
              this.ras[7]=this.calras(255,  255,255,"7","фиолетовый");//
              this.ras[8]=this.calras(255,  255,255,"8","серый");//
              this.ras[9]=this.calras(255,  255,255,"9","белый");//
}

//!!
calc(){
       this.colormin=999
       if (this.colormin>this.r){this.colormin=this.r}
       if (this.colormin>this.g){this.colormin=this.g}
       if (this.colormin>this.b){this.colormin=this.b}


       this.colormax=0
       if (this.colormax<this.r){this.colormax=this.r}
       if (this.colormax<this.g){this.colormax=this.g}
       if (this.colormax<this.b){this.colormax=this.b}
       this.calcallras()
}


//calcTon(){
//}


//calcHSV(){
//}

setkodr(kod,namecolor){
    this.kod=kod
    this.namecolor=namecolor
    }

//Расчет косинусного подобия (расстояния)
cosine_similarity(p){
    var z1=this.r*p.r+this.g*p.g+this.b*p.b
    var a=Math.sqrt(this.r*this.r+this.g*this.g+this.b*this.b)
    var b=Math.sqrt(p.r*p.r+p.g*p.g+p.b*p.b)
    var z2=a*b
    var podobile=-10;
    if (z2!=0){podobile=z1/z2}
    return podobile
    }

detectcolor(){
    var minras=-99999
    var minnom=0
    var tekras=99999999
    var minname=""
    var tekkod=0
    for (var j=1;j<sbl.length;j++){sbl[j].flagminras=false}
    this.setkodr(2 ,'NONE Красный');
    var cmax=Math.max(this.r,this.g,this.b)
    var cmin=Math.min(this.r,this.g,this.b)
    if (cmax<30       ){this.setkodr(0,'Черный50'); this.rasmin=1;this.sbl=0;return}
    for (var j=1;j<sbl.length;j++){
      //!!!!!!
      if (sbl[j].kod==10){continue}
      if (sbl[j].kod==11){continue}
      tekras=this.cosine_similarity(sbl[j])
      sbl[j].tekras=tekras
      if(minras<tekras){minras=tekras;minnom=j;tekkod=sbl[j].kod;}
      }
   this.setkodr(tekkod,sbl[minnom].namecolor);
   this.tip=sbl[minnom].tip
   this.sbl=minnom
   this.rasmin=minras
   sbl[minnom].flagminras=true 
}

retSrt(){
   let s=""
   s=s+"nom:"+this.nom
   s=s+" r:"+this.r
   s=s+" g:"+this.g
   s=s+" b:"+this.b
   s=s+"\n"
   return s
   }


}



















 

