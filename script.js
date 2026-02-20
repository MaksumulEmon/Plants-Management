let thriveList = [];
let strugglingList = [];

let total = document.getElementById('total');
let strugglingCount = document.getElementById('strugglingCount');
let thriveCount = document.getElementById('thriveCount');


const allFilterBtn = document.getElementById('all-filter-btn')
const trivingFilterBtn = document.getElementById('triving-filter-btn')
const strugglingFilterBtn = document.getElementById('struggling-filter-btn')

const allcardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
// console.log(mainContainer);




function calculateCount() {
    total.innerText = (allcardSection.children.length);
    thriveCount.innerText = thriveList.length
    strugglingCount.innerText = strugglingCount.length
}

calculateCount();

function togglestyle(id) {
    // console.log("click", id)

    // adding  gray bg for all
    allFilterBtn.classList.remove('bg-black', 'text-white')
    trivingFilterBtn.classList.remove('bg-black', 'text-white')
    strugglingFilterBtn.classList.remove('bg-black', 'text-white')


    // if any button has black than remove
    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    trivingFilterBtn.classList.add('bg-gray-300', 'text-black')
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black')

    // console.log(id);

    const selected = document.getElementById(id);
    //  console.log(selected);

    // Adding  black bg for current  button
    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')
}