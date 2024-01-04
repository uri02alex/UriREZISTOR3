
class UriArray extends Array{
     ColorFon=-1 //цвет фона
     pColorFon //цвет фона

constructor(...members){
     super(...members);
     }

printTable(){
    c=this.length
    s="<table>"
    s=s+"<caption>"+c+"</caption>"
    var p
    s=s+"<tr><td colspan=5>Цвет на фото резистора<td>Detect color"
    for (i=0;i<c;i++){
      p=this[i]
      s=s+"<tr>"
      s=s+"<td>"+i
      s=s+"<td>"+p.r
      s=s+"<td>"+p.g
      s=s+"<td>"+p.b
      //s=s+"<td>"+p.strRGB()
      s=s+"<td>"+p.divRGB()
      s=s+"<td>||"
      s=s+"<td>"+p.kod
      s=s+"<td>"+p.namecolor
      var p2=std[p.kod]
          if (p2!=null){
                 s=s+"<td>"+p2.strRGB()
                 s=s+"<td>"+p2.divRGB()
                 //s=s+"<td>"+p2.strHSV()
                 //s=s+"<td>"+p2.divHSV()
                 s=s+"<td>"+p2.namecolor
                 s=s+"<td>||"+p.cosine_similarity(p2).toFixed(3)
                 for (var j=1;j<12;j++){
                 s=s+"<td title='"
                   +j+" "
                   +sbl[j].namecolor
                   +"'>|"
                   +p.cosine_similarity(sbl[j]).toFixed(3)
                 }
           }else {s=s+"<td> null  UriArray.js p.kod ";console.log("error std=",std," p.kod =",p.kod ); }
      s=s+"<td title='fon'     class='"+p.isfon+"'>"+p.isfon
      s=s+"<td title='ismusor' class='"+p.ismusor+"'>"+p.ismusor

      }
    s=s+"</table>"
    return s
    }
}




