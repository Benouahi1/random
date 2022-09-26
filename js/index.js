// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);







// function OnClick() {
//     if (document.getElementById('show').checked) {
//       box.style.display = 'block';
//     } else {
//       box.style.display = 'none';
//     }
//   }



function personne() {
let Name = document.getElementById("Name").value;
    console.log(Name);
    // document.getElementById("Demo").innerHTML = Name;

    if (document.getElementById("Name").value == '') {
        
    }else{
        var person = document.createElement("li");
        person.innerHTML = Name;
        person.setAttribute("class","NomP");
        document.getElementById("Demo").appendChild(person);

    document.getElementById("Name").value="";
   

    }


}


function SujetV() {
    let Suj = document.getElementById("Suj").value;
       
        
    
        if (document.getElementById("Suj").value == '') {
            
        }else{
            var Sujet = document.createElement("li");
            Sujet.innerHTML = Suj;
            Sujet.setAttribute("class","SujV");
            document.getElementById("Sujet1").appendChild(Sujet);
    
            document.getElementById("Suj").value="";
    
    
        }
    
    
    }
    var liElements = [];


function suivant(){
  
    var lists = document.getElementsByClassName("NomP");

    //array to hold the li elements
  
    //loop through the lists
    for (var i = 0; i < lists.length; i++) {

            //add the li element values to the array
            liElements.push(lists[i].innerHTML);
            localStorage.setItem("name", JSON.stringify(liElements));
            
    }

  

    console.log(liElements);
}

var SjElements = [];
function spine(){
  
    var lists = document.getElementsByClassName("SujV");

//array to hold the li elements




//loop through the lists
for (var i = 0; i < lists.length; i++) {

  
    SjElements.push(lists[i].innerHTML);
    localStorage.setItem("Sujet", JSON.stringify(SjElements));

}
console.log(liElements);
let EROURE = document.getElementById("Erour");
 if (SjElements.length < liElements.length) {
    EROURE.style.display = "block";
    EROURE.innerHTML = "Le nombre de sujets de veille que vous avez entré n'est pas suffisant";
}else{
    window.location="/spine.html";
}
}


let SPIN = document.getElementById("spin");  
let UPD = document.querySelector(".button1");
let PER = document.getElementById("Per");
let SUJET = document.getElementById("Sujet");
let JD = document.getElementById("Suivant");
let LP = document.getElementById("ListP");
let LS = document.getElementById("ListS");


let DD = document.querySelectorAll(".button");

DD.forEach((element)=>{
element.onclick = function(){ 
  
    
        UPD.style.display = "block";
        PER.style.display = "none";
        SUJET.style.display = "block";
        JD.style.display = "none";
        LP.style.display = "none";
        LS.style.display = "block";
        SPIN.style.display = "block";
    suivant();
}


})




let BOT1 = document.querySelectorAll(".button1");

BOT1.forEach((element)=>{
element.onclick = function(){   
    let UPD = element.parentElement.querySelector(".button1");
    let PER = document.getElementById("Per");
    let SUJET = document.getElementById("Sujet");
    let SPIN = document.getElementById("spin");  
    let ADD = document.getElementById("Suivant");
    let LP = document.getElementById("ListP");
    let LS = document.getElementById("ListS");
    
        UPD.style.display = "none";
        PER.style.display = "block";
        SUJET.style.display = "none";
        ADD.style.display = "block";
        LP.style.display = "block";
        LS.style.display = "none";
        SPIN.style.display = "none";
 
    
}


})







