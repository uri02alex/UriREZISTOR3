class Rezistor{
   basa;
   mnog;
   om;
   strom;
   stromsokr;
   X=0;
   Y=0;
   countpoint=0
   countring=0

constructor(nom){
   this.nom=nom
   this.tip=5
   //this.kod=[5,6,7,3,4,0,0]
   this.kod=[0,0,0,0,0,0,0]
   this.nominal="0000"
   this.strnominal="999992"
   }

retidpiloska(nompol){
   var s="Resistor"+this.nom+"_"+nompol;
   return s
   }


drawpoloska(nompoloska){
   var uriclasscolor="color"+this.kod[nompoloska]
   var s=''
   s="<div  id='"+this.retidpiloska(nompoloska)
   s=s+"' uri='33'"
   s=s+" class='"+uriclasscolor+" colorX '"
   s=s+"  onclick='ViboNomerRing("+nompoloska+")'"
   s=s+">"

   var colornumber="black";
   if (this.kod[nompoloska]==0){colornumber="white";}
   s=s+" <span title='цафра кольца'"
   s=s+"  style='color:"+colornumber+"'"
   s=s+" >"
   s=s+this.kod[nompoloska]
   s=s+"<span>"
   s=s+"</div>"
   return s
   }



draw(){
   this.calcnominal()
   var s="<div class='bodyresistor'>"
   s=s+"<div class='pusto'></div>"
   s=s+this.drawpoloska(0)
   s=s+this.drawpoloska(1)
   s=s+this.drawpoloska(2)
   s=s+this.drawpoloska(3)
   if(this.tip==5) {s=s+this.drawpoloska(4)}
   s=s+"<div class='pusto'></div>"
   s=s+"</div>"
   //s=s+"<br><div  class='strom'>"+this.strom+" "+this.stromsokr+"</div>"
   s=s+"<br><div  class='strom'>"+this.stromsokr+"</div>"
   s=s+"<br><div  class='strom'>"+this.accuracy+"</div>"
   resisror1.innerHTML=s
   }

setpolska(nompolocka,vapoloska){
    //console.log("Rezistor.js nompolocka=",nompolocka," vapoloska ",vapoloska )
    this.kod[nompolocka]=vapoloska
    this.kod[nompolocka]=vapoloska
    //var id=retidpiloska(nompolocka)
    this.draw()
    }

calcnominal(){
    this.nominal="0000"
    var kodzol=0
    this.basa=0
    if (this.tip==4){
     this.nominal=""+this.kod[0]+this.kod[1]+this.kod[2]
     this.basa=this.kod[0]*10+this.kod[1]*1
     kodzol=this.kod[2]
     if (this.kod[2]==10){kodzol=1/10}
     if (this.kod[2]==11){kodzol=1/100}
     this.mnog=kodzol
     this.om=this.basa*Math.pow(10,this.mnog)
     }
    if (this.tip==5){
     this.nominal=""+this.kod[0]+this.kod[1]+this.kod[2]
     this.basa=0+this.kod[0]*100 + this.kod[1]*10 + this.kod[2]*1
     kodzol=this.kod[3]
     if (this.kod[3]==10){kodzol=1/10}
     if (this.kod[3]==11){kodzol=1/100}
     this.mnog=kodzol
     this.om=this.basa*Math.pow(10,this.mnog)
     }
    this.strnominal=this.nominal
    this.strom=this.om+" Om "
    this.calc_stromsokr()
    var kodaccuracy =0;
    if (this.tip==4){
     kodaccuracy=this.kod[4] 
     }
    if (this.tip==5){
     kodaccuracy=this.kod[5] 
     }
    var s=''
       switch(kodaccuracy) {
         case 0:  s="-"     ;    break;
         case 1:  s="±1%"   ;    break
         case 2:  s="±2%"   ;    break
         case 3:  s="-"     ;    break
         case 4:  s="-"     ;    break
         case 5:  s="±0.5%" ;    break
         case 6:  s="±0.25%";    break
         case 7:  s="±0.10%";    break
         case 8:  s="±0.05%";    break
         case 9:  s="-"     ;    break
         case 10:  s="±5%"  ;    break
         case 11:  s="±10%" ;    break

        }
   this.accuracy=s
   }

detectring(color5){
   let c=color5.length
   for (var i=0;i<5;i++){this.kod[i]=0}
   for (var i=0;i<this.tip;i++){
    this.kod[i]=color5[i]
    }
   this.calcnominal()
   }


calc_stromsokr(){
   this.stromsokr=this.strom
   if (this.om>=1000000){var d=this.om/1000000;this.stromsokr=""+d+" Mom"; return;}
   if (this.om>=1000)   {var d=this.om/1000   ;this.stromsokr=""+d+" Kom"; return;}
   }

}


function test(rez2){
rez2.calcnominal()
console.log(rez2.strom)
console.log(rez2.stromsokr)
}
/*
rez2 =new Rezistor()
rez2.tip=4
rez2.kod=[1,9,5,8,0,0,0]
test(rez2)
rez2.kod=[1,4,6,8,0,0,0]
test(rez2)

rez2.kod=[1,6,3,8,0,0,0]
test(rez2)
rez2.kod=[2,2,2,8,0,0,0]
test(rez2)
*/




