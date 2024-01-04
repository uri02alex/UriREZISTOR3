//Шаблоны Цвета маркировки резисторов

let sbl=new UriArray()   //Соответствие реалного кода цвета и kod стандартного
let std=new UriArray()   //Содержит стандартные цвета полосок резистора которые должны быть


function addsablon(sablon,tip,r,g,b,kod,name){
        var p=new UriPoint()
        p.tip=tip
        p.nom=kod
        p.setsablon(r,g,b,kod,name)
        sablon.push(p)
}

function makesablons(){
       addsablon(sbl,0,   0,   0,  0,"0"," черный1")
       addsablon(sbl,0,  25,  25, 25,"0"," черный2")
       addsablon(sbl,0,  36,  36, 36,"0"," черный3")
       addsablon(sbl,0,  42,  42, 42,"0"," черный4")

       addsablon(sbl,0, 138, 108, 84,"1"," коричневый")
       addsablon(sbl,0, 165,  42, 42,"1"," коричневый")
       addsablon(sbl,0,  59,  39, 30,"1"," коричневый")
       addsablon(sbl,0,  60,  42, 40,"1"," коричневый")
       addsablon(sbl,0,  69, 38,  18,"1"," коричневый")


       addsablon(sbl,0, 143,  46, 11,"2"," красный1")
       addsablon(sbl,0, 255,   0,  0,"2"," красный2")
       addsablon(sbl,0, 175,  74, 18,"2"," красный3")
       addsablon(sbl,0, 175,  96, 29, 3," красный4")


       addsablon(sbl,0, 255, 165,  0,"3"," оранжевый")
       addsablon(sbl,0, 160,  81, 10, 3," оранжевый2")
       //addsablon(sbl,0, 175,  90, 29,"3"," оранжевый3")


       addsablon(sbl,0, 255, 255,  0,"4"," желтый")
       addsablon(sbl,0, 164, 164,  7,"4"," желтый")
       addsablon(sbl,0, 163, 117,  5,"4"," желтый")
       addsablon(sbl,0, 149, 105, 18,"4"," желтый")

       addsablon(sbl,0,   0, 255,  0,"5"," зеленый")
       addsablon(sbl,0,  96, 106,  5,"5"," зеленый темн")
       addsablon(sbl,0,  30,  47, 11,"5"," зеленый")
       addsablon(sbl,0,  30,  44, 27,"5"," зеленый")

       addsablon(sbl,0,  35,  64,106,"6"," синий")
       addsablon(sbl,0,  85,  49, 61,"6"," синий")

       addsablon(sbl,0,   0,   0,255,"6"," голубой")
       addsablon(sbl,0, 255,   0,255,"7"," фиолетовый")
       addsablon(sbl,0, 128, 128,128,"8"," серый")
       addsablon(sbl,0, 255, 255,255,"9"," белый")
       addsablon(sbl,0, 212, 160, 44,"10"," золотой")
       addsablon(sbl,0 ,179, 179,179,"11"," серебряной")



       addsablon(std,0,   0,   0,  0, 0," черный")
       addsablon(std,0, 165,  42, 42, 1," коричневый")
       addsablon(std,0, 255,   0,  0, 2," красный0")
       addsablon(std,0, 255, 165,  0, 3," оранжевый")
       addsablon(std,0, 255, 255,  0, 4," желтый")
       addsablon(std,0,   0, 255,  0, 5," зеленый")
       addsablon(std,0,   0,   0,255, 6," голубой")
       addsablon(std,0, 255,   0,255, 7," фиолетовый")
       addsablon(std,0, 128, 128,128, 8," серый")
       addsablon(std,0, 255, 255,255, 9," белый")
       addsablon(std,0, 212, 160, 44,10," золотой")
       addsablon(std,0 ,179, 179,179,11," серебряной")
       }


function sabolnprint(){
     c=sbl.length
     s=""
       s="<!--  UriSablon.js\sabolnprint  -->"
     s=s+"<div class='sabolns' id='table_sabolns' > "
     for (i=0;i<c;i++){
      s=s+"<div class='saboln' style='display: block ruby;' onclick='clicksablon("+sbl[i].kod+")'>"
      s=s+sbl[i].printsbl()
      s=s+"<div class='point_kod' >"+sbl[i].kod+"</div>"
      s=s+"<div class='namecolor' >"+sbl[i].namecolor+"</div>"
      s=s+"<div class='verColor' id='ver_"+i+"'>"+sbl[i].verColor+"</div>"
      s=s+"</div>"
      }
      s=s+"</div>"
     return s
     }


makesablons()












