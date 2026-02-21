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
const filterSection = document.getElementById('filtered-section')
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

mainContainer.addEventListener('click', function (event) {

    console.log(event.target.parentNode.parentNode);

    console.log(event.target.classList.contains('triving-btn'));

    if (event.target.classList.contains('triving-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const plantName = parentNode.querySelector('.plantName').innerText
        const latinName = parentNode.querySelector('.latinName').innerText
        const light = parentNode.querySelector('.light').innerText
        const water = parentNode.querySelector('.water').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText

        const cardInfo = {

            plantName,
            latinName,
            light,
            water,
            status,
            notes
        }

        const plantExist = thriveList.find(item => item.plantName == cardInfo.plantName);
        if (!plantExist) {
            thriveList.push(cardInfo);
        }

        renderThriving();

    }
})

function renderThriving() {
    filterSection.innerHTML = ''

    for (let thrive of thriveList) {
        console.log(thrive)
        let div = document.createElement('div')
        div.className = 'card flex justify-between  shadow-2xl rounded-2xl p-8'
        div.innerHTML = `
         <section id="allCards" class="space-y-8">

            <!-- Card 1 -->
            <div class="card flex justify-between  shadow-2xl rounded-2xl p-8">
                <!-- main Part 1 -->
                <div class="space-y-3 text-lg">
                    <!-- Part one -->
                    <div>
                        <p class="plantName text-4xl font-bold">Plants Name 1</p>
                        <p class="latinName">Latin name</p>
                    </div>
                    <!-- Part two -->
                    <div class="flex gap-3">
                        <p class="light bg-gray-200 px-5"> Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">weekly</p>
                    </div>
                    <!-- Part there -->
                    <p class="status">Not Applicable</p>
                    <p class="notes">New Leaf unfuring by the east windows</p>

                    <div class="flex gap-3">
                        <button class="triving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggle-btn bg-red-200 px-4 py-2">Struggle</button>
                    </div>
                </div>
                <!-- Main part 2 -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-6 py-2">Delete</button>
                </div>

            </div>
        `
    }
}