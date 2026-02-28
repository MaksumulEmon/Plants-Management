let thriveList = [];
let strugglingList = [];

let total =document.getElementById('total');
let thriveCount =document.getElementById('thriveCount');
let strugglingCount =document.getElementById('strugglingCountl');


const allCardSection = document.getElementById('allCards');
// console.log();

function calculatCount (){
    total.innerText = allCardSection.children.length
    thriveCount.innerText =thriveList.length;
}

calculatCount();