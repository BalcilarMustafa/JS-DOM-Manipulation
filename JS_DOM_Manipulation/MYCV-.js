
/////////////////////////////  HIDE SHOW TEXT  ////////////////////////////////////////

const tasktext = document.getElementById("tasktext") 
const task = document.getElementById("Task") 

task.addEventListener("click",()=> {
    tasktext.classList.toggle('hidden')
})

///////////////////// HIDE SHOW ALL P ELEMENTS /////////////////////////////////


const HideAllp = document.getElementById('HideAllp')
  const Allp = document.getElementsByTagName('p')
  HideAllp.addEventListener('click', () => {
    console.log(Allp)
    for (let p of Allp) {
        console.log(p.classList)
        p.classList.toggle('hidden')     
    }
})

////////////// CHANGE HEADER BACKGROUND TO RED ///////////////////////////////

const chngHeadColor = document.getElementById('chngHeadColor')
const colorheader = document.getElementById('renk')
chngHeadColor.addEventListener('click', () => {
    colorheader.style.backgroundColor ="red";
})

//////////// CHANGE HEADER BACKGROUND coloR BY FUNCTION ///////////////////////

const element1 = document.getElementById('renk');
const element2 = document.getElementById('maincolor');
const element3 = document.getElementById('footcolor');
var color;

function renkdegistir1(){
    color=prompt("which color do you prefer?");
         element1.style.backgroundColor=color;
 }

//////////// SELECT AN ITEM AND CHANGE ITS BACKGROUND coloR BY FUNCTION ///////////////

function selitem(){
   var number= prompt("which item do you want to change?: 1.HEADER 2. MAIN 3.FOOTER");
if(number==1){
    element=element1;
    renkdegistir();
}else if(number==2){
    element=element2;
    renkdegistir();
}else if(number==3){
    element=element3;
    renkdegistir();
}}

function renkdegistir(){
   color=prompt("which color do you prefer?");
        element.style.backgroundColor=color;
}

//////////// CHANGE HEADER INFORMATION /////////////////////////

 const firstnam = document.getElementById('nameID');
 const lasttnam = document.getElementById('surnameID');
 const jobtitl = document.getElementById('jobTitleID');

 var info1=["firstname","lasttname","jobtitle"];
 var info2=[firstnam,lasttnam,jobtitl];
 
 function changeInf(){
    for(var i=0;i<info1.length;i++){
        const inf=prompt("Please type your " + info1[i]);
        info2[i].innerText=inf;
     }
 } 

//////////// CHANGE SKILLS AND PERCENTAGE OF SKILLBAR /////////////////////////

 const firstskill = document.getElementById('skill1');
 const secskill = document.getElementById('skill2');
 const thirdskill = document.getElementById('skill3');
 const fourthskill = document.getElementById('skill4');

 const Skillbar1=document.getElementById("skillId1");
 const Skillbar2=document.getElementById("skillId2");
 const Skillbar3=document.getElementById("skillId3");
 const Skillbar4=document.getElementById("skillId4");
     
 var skill1=["first skill","second skill","third skill","fourth skill"];
 var skill2=[firstskill,secskill,thirdskill,fourthskill];
 var skillbar=[Skillbar1,Skillbar2,Skillbar3,Skillbar4];


     
 function ChangeSkills(){
    for(var i=0;i<skill1.length;i++){
        const skll=prompt("Please type your " + skill1[i]);
        skill2[i].innerText=skll;
        const skllbarvar=prompt("Please type your " + skll + " percentage");
        skillbar[i].style.width=" "+skllbarvar+"%";
     }
 } 

 //const Javaskill2=document.getElementById("skillId2");
 //Javaskill2.style.width="10%"

/*
 Skillbar1.style.width="10%"
 Skillbar2.style.width="80%"
 Skillbar3.style.width="10%"
 Skillbar4.style.width=" "+100  +"%"

 */
 
 //////////// CHANGE CONTACT INFORMATION  /////////////////////////

const adrs=document.getElementById("adrId");
const phn=document.getElementById("phnId");
const email=document.getElementById("emailId");

var contact1=["address", "phone number","email addres"];
var contact2=[adrs,phn,email];
/*
adrs.innerText="AAAAAA";
phn.innerText="1234567"
email.innerText="abcd@gmail.com"
*/


function changeContact(){
    for(var i=0;i<contact1.length;i++){
        const inf=prompt("Please type your " + contact1[i]);
        contact2[i].innerText=inf;
     }
 } 

 //////////// CHANGE CAREER INFORMATION  /////////////////////////

 const titlId1=document.getElementById("jobtitId1");
 const compId1=document.getElementById("compId1");
 const start1=document.getElementById("startId1");
 const end1=document.getElementById("endId1");


 const titlId2=document.getElementById("jobtitId2");
 const compId2=document.getElementById("compId2");
 const start2=document.getElementById("startId2");
 const end2=document.getElementById("endId2");

 const titlId3=document.getElementById("jobtitId3");
 const compId3=document.getElementById("compId3");
 const start3=document.getElementById("startId3");
 const end3=document.getElementById("endId3");

var careerInfo = [[titlId1,compId1,start1,end1],[titlId2,compId2,start2,end2],[titlId3,compId3,start3,end3]];
var careerInf = ["title","company name","start year","end year"];

//console.log(careerInfo.length); 3
//console.log(careerInfo[0].length); 4


function changeCareer(){

    for(var i=0;i<careerInfo.length;i++){

    for(var j=0;j<careerInfo[0].length;j++){
        console.log(i+" "+j);
        const inf=prompt("Please type your "+ (i+1) +". " + careerInf[j] + " information");
        careerInfo[i][j].innerText=inf;
     }
    }
 } 

 /*
 var career1=["job title", "company","start date","end date"];
 var career2=[titlId,compId,start,end];

 function changeCareer(){
    for(var i=0;i<career1.length;i++){
        const inf=prompt("Please type your " + career1[i] + " information");
        career2[i].innerText=inf;
     }
 } 
*/

//////////// MOUSE OVER AND MOUSE OUT EFFECT  /////////////////////////

 function mouseover(){
     var parag = document.getElementById("paragraph");
     parag.innerHTML = "MOUSE OVER EFFECT"
     parag.style.backgroundColor="green"
 }

 function mouseout(){
    var parag = document.getElementById("paragraph");
    parag.innerHTML = "MOUSE OUT EFFECT"
    parag.style.backgroundColor="red"
}

