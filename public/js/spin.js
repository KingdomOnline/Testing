/*
var count = 0; //idk why i made this i thought i'd be fun
var mag = 1;
var item =  document.getElementById("spin-logo");
function border_spin(){  
    item.style.background=`linear-gradient(${count}deg, var(--main-color) 30%, var(--sec-color) 70%)`; 
    //item.style.backgroundPosition=`${count}% ${count}%`; 
    if(count >= 360){
          count = 0;
    }
    count += mag;
};
    afkboi

var x = setInterval( border_spin,50); 


item.addEventListener("mouseover", ()=>{  
    clearInterval(x);
    //console.log("on");
});

item.addEventListener("mouseout", ()=>{  
    x = window.setInterval(border_spin ,50);  
    //console.log("off",x); 
}); */