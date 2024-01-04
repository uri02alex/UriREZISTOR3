class UriSpectrKodColor{

constructor(){
    this.arrKod=[]
    this.KodColorFon=0
    //this.CountBasicColor=0
    this.arrBacicColor=[]
    this.arr5=[]//5 основных цветов
    this.Number=[]
    this.Number[0]=0
    this.Number[1]=0
    this.Number[2]=0
    this.Number[3]=0
    this.Number[4]=0
    this.Number[5]=0
    this.Number[5]=0
    //this.DivCounColor=0

}

print123(dat){
let c=dat.length
let s=''
 let k=0
 for (let i=0;i<c;i++){
 let p=dat[i]
 if (p.tip!=0){continue;}
 //console.log(p)
 //s=s+p.kod+"<br>"
  k++
  s=s+p.print(k)


 }
return s;
}


SetTip(kolpolos,dat){
let c1=dat.length

let c=dat.length
 for (let i=0;i<c;i++){
 let p=dat[i]
 if (p.tip!=0){continue}
 }
}

/*
SetFon(dat){
let c=dat.length
let kolfon=0
for (let i=0;i<c;i++){
     let p=dat1[i]
     if(p.kod==this.KodColorFon){kolfon++;p.tip=600;}else{p.tip=0}
 }
console.log('kolfon ',kolfon)
}
*/
/*
FindBasicColors(){
let c=this.arrKod.length
let k=-1

let kodf=Number(this.KodColorFon)
for (let i=0;i<c;i++){
     let kod=Number(this.arrKod[i])
     if (this.arrKod[i]==0){continue}
     if (i==this.KodColorFon){continue}
     k++
     this.arrBacicColor[k]={kod:i,count:this.arrKod[i]}
 }
this.CountBasicColor=k
DivCountBasicColor.innerHTML=this.CountBasicColor
}
*/

/*
FindFonColors(dat1){
let c=dat1.length
//console.log('FindFonColors c=',c)
let p=dat1[0]
let colorkod1=p.kod
//console.log('colorkod1=',colorkod1)

let k=0
for (let i=0;i<c;i++){
     k++
     let p=dat1[i]
     let colorkod2=p.kod
     if(colorkod1!=colorkod2){break}
 }
//console.log('k=',k)
this.KodColorFon=colorkod1
DivKodColorFon.innerHTML=colorkod1
}
*/

/*
FindAllColors(dat1){
let c=dat1.length
DivCounPoint.innerHTML=c
for (let i=0;i<12;i++){this.arrKod[i]=0}
let k=0
for (let i=0;i<c;i++){
     let p=dat1[i]
     let kod=p.kod
     this.arrKod[kod]=this.arrKod[kod]+1
}
let c1=this.arrKod.length
let CoutColors=0
for (let i=0;i<c1;i++){
//console.log('',i,' ',this.arrKod[i])
if (this.arrKod[i]!=0){CoutColors++}
}
DivCounColor.innerHTML=CoutColors
//console.log('CoutColors ',CoutColors)
this.DivCounColor=CoutColors
}
*/

copyDat_in_Dat3(dat,dat2,kolvomin){
let c=dat.length
let nomnew=0
//console.log('this.arrKod ',this.arrKod)
for (let i=0;i<c;i++){
   let p1=dat[i]
   if (this.KodColorFon==p1.kod){continue}
   let kolvo=this.arrKod[p1.kod]
   if (kolvo<kolvomin){continue}

   p2=new UriPoint();
   //console.log("nomnew ",nomnew)
   nomnew++
   p2.nom2=nomnew
   p2.nom=p1.nom
   p2.r=p1.r
   p2.g=p1.g
   p2.b=p1.b
   p2.H=p1.H
   p2.S=p1.S
   p2.V=p1.V
   p2.tip=p1.tip
   p2.kod=p1.kod
   p2.colname=p1.colname
   dat2.push(p2)
   }
c=dat2.length
//console.log('copyDat_in_Dat3 new c = ',c,' nomnew=',nomnew)
dat2.maxnom=nomnew
}

/*
CalcCenterPolos(dat3,kolvopolos){
let pointcenter=[]
let s=''
let maxnom=dat3.maxnom
let W1=maxnom/kolvopolos
let W2=Math.round(W1/2)
for (let i=0;i<kolvopolos;i++){
 pointcenter[i]=Math.round(i*W1+W2)
 }
return pointcenter
}

*/
/*
RetColorPolos(dat3,kolvopolos,centerpoloski){
let colors=[]
let  c=centerpoloski.length
//console.log('RetColorPolos c=',c)
for (let i=0;i<c;i++){
colors[i]=dat3[centerpoloski[i]].kod
}
//console.log(colors)
return colors
}
*/

FindBlizko(p){
let H=p.H
let rast=999
let rasttek=0
let H2=10

 for (let j=0;j<5;j++){
  let p5=this.arr5[j]
  rasttek=Math.abs(H-p5.H)
  if(rast>rasttek){rast=rasttek;H2=p5.H}
 }
 p.H2=H2
}

//============================================================
FiltrH(dat){
let c=dat.length
let kolvo1=0
let kolvo2=0
let flag=true
for (let i=0;i<c;i++){
 let p=dat[i]
 p.H2=20
 flag=true
 for (let j=0;j<5;j++){
  let p5=this.arr5[j]
  if (p.H==p5.H){
      p.H2=p5.H;
      kolvo1=kolvo1+1
      flag=false
      continue
       }
  }
  if (flag){
   kolvo2=kolvo2+1
   this.FindBlizko(p)
   }

}
console.log('c      ',c)
console.log('kolvo1 ',kolvo1)
console.log('kolvo2 ',kolvo2)
}


FindHAllColors(dat){
let c=dat.length
let arr=[]
let arr2=[]

console.log('c=',c)
//console.log('dat=',dat)
for (let k=0;k<361;k++){arr[k]=0}

for (let i=0;i<c;i++){
  let H=dat[i].H
  //console.log('H=',H)
  arr[H]=arr[H]+1
}
let c1=arr.length
console.log('c1= различныых цветов',c1)
for (let j=0;j<c1;j++){
 if (arr[j]==0){continue}
console.log('arr(',j,')= ',arr[j])
 arr2.push({H:j,kolvo:arr[j]})
}
arr2.sort((a, b) => a.kolvo < b.kolvo ? 1 : -1);

let c2=arr2.length
for (let j=0;j<c2;j++){
console.log('arr2 ',arr2[j])
}

for (let j=0;j<5;j++){
 this.arr5[j]={H:arr2[j].H,kolvo:arr2[j].kolvo}
}

for (let j=0;j<5;j++){
 let p=this.arr5[j]
 p.r=0
 //this.arr5[j].["r"]=0
 //console.log(this.arr5[j])
 console.log(p)
 //console.log(this.arr5[j])
}


}

//Экспоненциальное бегущее среднее
FiltrExp(dat){
let c=dat.length
console.log('c=',c)
let arr=[]
let k = 0.1;  // коэффициент фильтрации, 0.0-1.0
let filVal = dat[0].H;
console.log('filVal=',filVal)

// бегущее среднее
//float expRunningAverage(float newVal) {
//  static float filVal = 0;
//  filVal += (newVal - filVal) * k;
//  return filVal;
//}
for (let i=0;i<c;i++){
  let H=dat[i].H
  filVal=filVal+(H-filVal)*k
  //console.log(filVal)
  dat[i].H2=Math.round(filVal)
  }
console.log(dat)
}


//Адаптивный коэффициент
FiltrExpAdapt(dat){
let c=dat.length
console.log('c=',c)
let arr=[]
let k = 0.2;  // коэффициент фильтрации, 0.0-1.0
let filVal = dat[0].H;
console.log('filVal=',filVal)
let newVal=0
// бегущее среднее
//float expRunningAverage(float newVal) {
//  static float filVal = 0;
//  filVal += (newVal - filVal) * k;
//  return filVal;
//}
for (let i=0;i<c;i++){
  let H=dat[i].H
  newVal=H
  if (Math.abs(newVal - filVal) > 10){ k = 0.9;}else {  k = 0.03;}
  filVal=filVal+(H-filVal)*k
  //console.log(filVal)
  dat[i].H2=Math.round(filVal)
  }
console.log(dat)
}

/*
FiltrPoin1(dat){
let c=dat.length
let sbl1=dat[0].sbl
let k=0
for (let i=1;i<c-1;i++){
 let sbl=dat[i].sbl
 let sbl2=dat[i+1].sbl
 if (sbl1==sbl2){
  if (sbl!=sbl1){
   dat[i].sbl=sbl1;k=k+1
   console.log(i,' ',sbl1,' ',sbl,' ',sbl2)
   }
  }
 sbl1=sbl

 }
console.log('k=',k)
}

FiltrPoin2(dat){
let c=dat.length
let sbl1=dat[0].sbl
let k=0
for (let i=1;i<c-2;i++){
 let sbl=dat[i].sbl
 let sbl4=dat[i+2].sbl
 if (sbl1==sbl4){
  if (sbl!=sbl1){
   dat[i].sbl=sbl1;k=k+1
   console.log(i,' ',sbl1,' ',sbl,' ',sbl4)
   }
  }
 sbl1=sbl

 }
console.log('k====',k)
}

FiltrPoin3(dat){
let c=dat.length
let sbl1=dat[0].sbl
let k=0
for (let i=1;i<c-3;i++){
 let sbl=dat[i].sbl
 let sbl4=dat[i+3].sbl
 if (sbl1==sbl4){
  if (sbl!=sbl1){
   dat[i].sbl=sbl1;k=k+1
   console.log(i,' ',sbl1,' ',sbl,' ',sbl4)
   }
  }
 sbl1=sbl

 }
console.log('k====',k)
}

FiltrPoin4(dat){
let c=dat.length
let sbl1=dat[0].sbl
let k=0
for (let i=1;i<c-4;i++){
 let sbl=dat[i].sbl
 let sbl4=dat[i+4].sbl
 if (sbl1==sbl4){
  if (sbl!=sbl1){
   dat[i].sbl=sbl1;k=k+1
   console.log(i,' ',sbl1,' ',sbl,' ',sbl4)
   }
  }
 sbl1=sbl

 }
console.log('k=FiltrPoin4===',k)
}
*/
FiltrPoinX(dat,n){
let c=dat.length
let k=0
let sblS=dat[0].sbl
for (let i=1;i<c-n;i++){
  let sbl=dat[i].sbl
  let sblE=dat[i+n].sbl
  if (sblS==sblE){

   if (sblS!=sbl){
      k=k+1
      for (let j=0;j<n;j++){
        dat[i+j].sbl=sblS
        }
      }
   }
  sblS=sbl
 }
//console.log('n=k===',n,' ',k)
return k
}

FindSetFon(dat){
let c=dat.length
let p0=dat[0]
let r0=p0.r
let g0=p0.g
let b0=p0.b
let sbl=p0.sbl
//console.log('FindSetFon sbl=',sbl);
let count=0

for (let i=0;i<c;i++){
   let p=dat[i]
   if (p.sbl==sbl){p.sbl=26;p.tip='F';count=count+1}
}
//console.log('count==',count);
count=0
for (let i=0;i<c;i++){
   let p=dat[i]
   if (p.tip=='F'){continue}
   let rast1=p.rasmin
   let rasfon=cosine_similarity2(p.r,p.g,p.b,p0.r,p0.g,p0.b)
   //console.log('rasfon==',rasfon);

   if(rasfon>rast1){p.sbl=26;p.tip='F';count=count+1}

   //if (p.sbl==sbl){p.sbl=26;p.tip='F';}
}

//console.log('count==',count);

}

FiltrDeletePiks(dat){
let count1=0
let count=0
do { count=spectr.FiltrPoinX(dat,1);count1=count1+1; if (count1>100){break}}  while (count!=0 );
do { count=spectr.FiltrPoinX(dat,2);count1=count1+1; if (count1>100){break}}  while (count!=0 );
do { count=spectr.FiltrPoinX(dat,3);count1=count1+1; if (count1>100){break}}  while (count!=0 );
do { count=spectr.FiltrPoinX(dat,4);count1=count1+1; if (count1>100){break}}  while (count!=0 );
do { count=spectr.FiltrPoinX(dat,5);count1=count1+1; if (count1>100){break}}  while (count!=0 );
do { count=spectr.FiltrPoinX(dat,6);count1=count1+1; if (count1>100){break}}  while (count!=0 );
do { count=spectr.FiltrPoinX(dat,7);count1=count1+1; if (count1>100){break}}  while (count!=0 );
}

SetGrTip(dat){
let c=dat.length
let tipold='F'
let tipnew=0
let coungr=0

for (let i=1;i<c;i++){
   let p=dat[i]
   tipnew=p.tip
   if ((tipnew==0)&&(tipold=='F')){coungr=coungr+1}
   if (tipnew==0){p.tip=coungr}
   tipold=tipnew
 }
//console.log('coungr SetGrTip=',coungr)
return coungr
}

GetsblGruop(dat,nomgr){
let c=dat.length
let k=-1
let arr=[]
for (let i=0;i<50;i++){arr[i]=0}

for (let i=0;i<c;i++){
    let p=dat[i]
    let sbl=p.sbl
    //console.log('sbl=',sbl)
    if (p.tip==nomgr){    k=k+1;
    arr[sbl]=arr[sbl]+1
    //if (arr[k] === undefined) {arr.push(0);}
    //arr[k]=arr[k]+1
    //arr.push({sbl:p.sbl})
    }
   }
c=arr.length
//console.log('Pointa in group c=',c)
let maxsbl=0
let maxi=-1
for (let i=0;i<c;i++){
if (arr[i]>0) {//console.log(i,arr[i]);
  if (maxsbl<arr[i]){maxsbl=arr[i];maxi=i}
  }

}
//console.log('nomgr k maxsbl maxi ',nomgr,k,maxsbl,maxi)
return maxi
}

CalcNumber(dat1){
     let sbl_1=spectr.GetsblGruop(dat1,1);
     let sbl_2=spectr.GetsblGruop(dat1,2);
     let sbl_3=spectr.GetsblGruop(dat1,3);
     let sbl_4=spectr.GetsblGruop(dat1,4);
     let sbl_5=spectr.GetsblGruop(dat1,5);
     let sbl_6=spectr.GetsblGruop(dat1,6);
     let num_1=0
     let num_2=0
     let num_3=0
     let num_4=0
     let num_5=0
     //console.log(sbl_1,sbl_2,sbl_2,sbl_4,sbl_5)
     if(sbl_1!=-1){ num_1=sbl[sbl_1].kod}
     if(sbl_2!=-1){ num_2=sbl[sbl_2].kod}
     if(sbl_3!=-1){ num_3=sbl[sbl_3].kod}
     if(sbl_4!=-1){ num_4=sbl[sbl_4].kod}
     if(sbl_5!=-1){ num_5=sbl[sbl_5].kod}
     this.Number[0]=num_1
     this.Number[1]=num_2
     this.Number[2]=num_3
     this.Number[3]=num_4
     this.Number[4]=num_5
     console.log('Цыфры для резистора ',num_1,num_2,num_3,num_4,num_5)
}

	
}