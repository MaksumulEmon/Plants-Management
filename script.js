let total = document.getElementById('total');
let strugglingCount =document.getElementById('strugglingCount');
let thriveCount =document.getElementById('thriveCount');


const allcardSection = document.getElementById('allCards');


function calculateCount (){
  total.innerText =(allcardSection.children.length);
}

calculateCount()