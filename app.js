const cross_btn=document.querySelector("#tic");
const zero_btn=document.querySelector("#toe");
const stylemode=document.querySelector(".stylebottom");
const reset=document.querySelector("#angle");
const change=document.querySelector("h2");
const content=document.querySelector(".main");

function reply_click(clicked_id){
    document.getElementById(clicked_id).style.opacity="1";
    document.getElementById(clicked_id).style.display="block";
    var first=window.getComputedStyle(document.querySelector("#first")).getPropertyValue("opacity");
    var firsto=window.getComputedStyle(document.querySelector("#firsto")).getPropertyValue("opacity");
    var second=window.getComputedStyle(document.querySelector("#second")).getPropertyValue("opacity");
    var secondo=window.getComputedStyle(document.querySelector("#secondo")).getPropertyValue("opacity");
    var third=window.getComputedStyle(document.querySelector("#third")).getPropertyValue("opacity");
    var thirdo=window.getComputedStyle(document.querySelector("#thirdo")).getPropertyValue("opacity");
    var fourth=window.getComputedStyle(document.querySelector("#fourth")).getPropertyValue("opacity");
    var fourtho=window.getComputedStyle(document.querySelector("#fourtho")).getPropertyValue("opacity");
    var fifth=window.getComputedStyle(document.querySelector("#fifth")).getPropertyValue("opacity");
    var fiftho=window.getComputedStyle(document.querySelector("#fiftho")).getPropertyValue("opacity");
    var sixth=window.getComputedStyle(document.querySelector("#sixth")).getPropertyValue("opacity");
    var sixtho=window.getComputedStyle(document.querySelector("#sixtho")).getPropertyValue("opacity");
    var seventh=window.getComputedStyle(document.querySelector("#seventh")).getPropertyValue("opacity");
    var seventho=window.getComputedStyle(document.querySelector("#seventho")).getPropertyValue("opacity");
    var eighth=window.getComputedStyle(document.querySelector("#eighth")).getPropertyValue("opacity");
    var eightho=window.getComputedStyle(document.querySelector("#eightho")).getPropertyValue("opacity");
    var ninth=window.getComputedStyle(document.querySelector("#ninth")).getPropertyValue("opacity");
    var nintho=window.getComputedStyle(document.querySelector("#nintho")).getPropertyValue("opacity");


    if((first==1 && second==1 && third==1) || (first==1 && fourth==1 &&seventh==1) || (second==1 && fifth==1 &&eighth==1) || (third==1 && sixth==1 && ninth==1) || (fourth==1 && fifth==1 && sixth==1) || (seventh==1 && eighth==1 && ninth==1) || (first==1 && fifth==1 &&ninth==1) || (third==1 && fifth==1 && seventh==1)){
        alert("X won");
        window.location.reload();
    }
    
    if((firsto==1 && secondo==1 && thirdo==1) || (firsto==1 && fourtho==1 &&seventho==1) || (secondo==1 && fiftho==1 &&eightho==1) || (thirdo==1 && sixtho==1 && nintho==1) || (fourtho==1 && fiftho==1 && sixtho==1) || (seventho==1 && eightho==1 && nintho==1) || (firsto==1 && fiftho==1 && nintho==1) || (thirdo==1 && fiftho==1 && seventho==1)){
        alert("O won");
        window.location.reload();
    }   

    if(clicked_id.charAt(clicked_id.length-1)=="o"){
        
        ccbtn();
    }
    else{
        
        zzbtn();
    }
}

function ccbtn(){
    
        stylemode.classList.add("playingmode");
        content.classList.add("activatex");
        content.classList.remove("activateo");
}
function zzbtn(){
    setTimeout(function(){
        stylemode.classList.add("playingmode");
        content.classList.add("activateo");
        content.classList.remove("activatex");
    },600)
}


function cbtn(){
    change.innerHTML="Computer";
    setTimeout(function(){
        stylemode.classList.add("playingmode");
        content.classList.add("activatex");
        content.classList.remove("activateo");
       
    },600);
    
}

function zbtn(){
    change.innerHTML="You";
    setTimeout(function(){
        stylemode.classList.add("playingmode");
        content.classList.add("activateo");
        content.classList.remove("activatex");
        
    },600);
    

}

cross_btn.addEventListener('click', cbtn);

zero_btn.addEventListener('click', zbtn);

reset.addEventListener('click',()=>{
    window.location.reload();
})
