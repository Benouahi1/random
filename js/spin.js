

var names = JSON.parse(localStorage.getItem("name"));
var SujetV = JSON.parse(localStorage.getItem("Sujet"));




let scoutNames = names;
let scoutSujet = SujetV;
let Scor = [];
let limit = Scor.length
let suj = [];
var arrDate = [];
var num = scoutSujet.length;
// console.log(scoutNames);
// console.log(scoutSujet);



  
  var Scout = function(name) {
    this.node = document.createElement('div')
    this.node.classList.add('name')
    this.node.innerHTML = name
    
    return this.node
  }

  var ScoutA = function(sujetA) {
    this.node = document.createElement('div')
    this.node.classList.add('sujetA')
    this.node.innerHTML = sujetA
    
    return this.node
  }
  
  const list = document.querySelector('.names')
  
  
  
  
  
  
  const list2 = document.querySelector('.sujets')
  

  generateDate();
  scoutNames.forEach(name => list.appendChild(Scout(name)))
  scoutSujet.forEach(sujetA => list2.appendChild(ScoutA(sujetA)))
  
  const fetchWinner = function() {
    
    let winnerNode = document.getElementById('winner')
    let winner = scoutNames[Math.floor(Math.random() * scoutNames.length)]
    let winnerSujet = scoutSujet[Math.floor(Math.random() * scoutSujet.length)]
    
   if(scoutNames.length > 0) {
    winnerNode.innerHTML = winner + " : " + winnerSujet;
    
    
    // console.log(scoutNames);
    Scor.push(winner)
    suj.push(winnerSujet);
        
        console.log(arrDate)
    var index = scoutNames.indexOf(winner);
    scoutNames.splice(index, 1);
    var index = scoutSujet.indexOf(winnerSujet);
    scoutSujet.splice(index, 1);
   
    console.log(Scor);
    console.log(suj);
    

  
        // PERSON.innerHTML = '<td>'+ Scor[i] +'</td><td>'+ suj[i] +'</td><td>'+ holidays[i] +'</td>';
        var person = document.createElement("tr");
        for(var j=0; j<Scor.length ; j++) {
            person.innerHTML = '<td>'+ Scor[j] +'</td><td>'+ suj[j] +'</td><td>'+ arrDate[j] +'</td>';
        }
        
  person.setAttribute("class", "name");

  document.getElementById("Per").appendChild(person);
                            
  
    
   }
            }
  




var holidays =[];
let currentYear = new Date().getFullYear();

//   fetch('https://date.nager.at/api/v3/publicholidays/'+ currentYear +'/MA')
//   .then((response) => response.json())
//   .then((data) => {
//     for(var i=0 ; i < data.length ; i++){
//         holidays.push(data[i].date)
//     }

   
//     // console.log(holidays);
//   })




function generateDate(){

    for(let i=0 ; i < num ; i++){
    let dat = new Date();
    dat.setDate(dat.getDate() + i)
    var date = new Date(dat);
    var dayNum = date.getDay();
    var day = date.getDate();

    if(day.toString().length == 1){
        day = "0" + day
    }
    var month = dat.getMonth()+1;

        if(month.toString().length == 1){
            month = "0" + month
        }
    var year = date.getFullYear();

    var fullDate = year + "-" + month + "-" + day;

    let result = sliceHolidays(fullDate);

    
    if(dayNum == 0 || dayNum == 6 || result == 1){
        num++
    }else{
        arrDate.push(fullDate);
    }
    }
}

function sliceHolidays(date){
    let result;
    for(var i=0; i<0; i++){
        if(holidays[i] == date){
            return result = 1;
        }else{
            result = 0;
        }
    }
    return result;
}

// alert(getLocalDay(dat));
// console.log(getLocalDay(dat));
// console.log(dat);


  function getLocalDay(date) {
    let day = date.getDay();
    if(day == 0){
        day =7
    }
    return day;

}


console.log();