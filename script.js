let thriveList = [];
let strugglingList = [];

let currentStatus = 'all';

let total = document.getElementById('total');
let thriveCount = document.getElementById('thriveCount');
let strugglingCount = document.getElementById('strugglingCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const trivingfilterBtn = document.getElementById('triving-filter-btn')
const strugglingFilterBtn = document.getElementById('struggling-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');



function calculatCount() {
    total.innerText = allCardSection.children.length
    thriveCount.innerText = thriveList.length
    strugglingCount.innerText = strugglingList.length
}

calculatCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-black', 'text-white');
    trivingfilterBtn.classList.remove('bg-black', 'text-white');
    strugglingFilterBtn.classList.remove('bg-black', 'text-white');



    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    trivingfilterBtn.classList.add('bg-gray-300', 'text-black');
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black');



    const selected = document.getElementById(id)

    currentStatus = id;
    selected.classList.remove("bg-gray-300", "text-black")
    selected.classList.add("bg-black", "text-white")


    if (id == 'triving-filter-btn') {
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderThriving()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'struggling-filter-btn') {
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hiddem')
        renderStuggle()
    }

}



mainContainer.addEventListener('click', function (event) {


    if (event.target.classList.contains('triving-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const plantName = parentNode.querySelector('.plantName').innerText
        const latinName = parentNode.querySelector('.latinName').innerText
        const light = parentNode.querySelector('.light').innerText
        const water = parentNode.querySelector('.water').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText
        //    console.log(plantName,light,water,latinName,status,notes);

        parentNode.querySelector('.status').innerText = 'Trive'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Trive',
            notes
        }

        const palntExist = thriveList.find(item => item.plantName == cardInfo.plantName)

        if (!palntExist) {
            thriveList.push(cardInfo);
        }

        strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName)

        calculatCount();


        if(currentStatus == 'struggling-filter-btn'){

            renderStuggle()
        }
        
    }




    // =========================================================================================


    else if (event.target.classList.contains('struggle-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const plantName = parentNode.querySelector('.plantName').innerText
        const latinName = parentNode.querySelector('.latinName').innerText
        const light = parentNode.querySelector('.light').innerText
        const water = parentNode.querySelector('.water').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText
        //    console.log(plantName,light,water,latinName,status,notes);

        parentNode.querySelector('.status').innerText = 'Stuggle'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Stuggle',
            notes
        }

        const palntExist = strugglingList.find(item => item.plantName == cardInfo.plantName)

        if (!palntExist) {
            strugglingList.push(cardInfo);
        }

        thriveList = thriveList.filter(item => item.plantName != cardInfo.plantName)

        if (currentStatus == 'triving-filter-btn') {
            renderThriving();
        }

        calculatCount();

    }



})


function renderThriving() {

    filterSection.innerHTML = ''

    for (let thrive of thriveList) {

        console.log(thrive);
        let div = document.createElement('div');
        div.className = 'card flex justify-between  shadow-2xl rounded-2xl p-8'
        div.innerHTML = `

        
                <!-- main Part 1 -->
                <div class="space-y-3 text-lg">
                    <!-- Part one -->
                    <div>
                        <p class="plantName text-4xl font-bold">${thrive.plantName}</p>
                        <p class="latinName">Latin name</p>
                    </div>
                    <!-- Part two -->
                    <div class="flex gap-3">
                        <p class="light bg-gray-200 px-5"> Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">weekly</p>
                    </div>
                    <!-- Part there -->
                    <p class="status">${thrive.status}</p>
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

        `

        filterSection.appendChild(div);
    }
}













// -----------------------------------------------------------------------------------

function renderStuggle() {

    filterSection.innerHTML = ''

    for (let stugle of strugglingList) {

        let div = document.createElement('div');
        div.className = 'card flex justify-between  shadow-2xl rounded-2xl p-8'
        div.innerHTML = `

                <!-- main Part 1 -->
                <div class="space-y-3 text-lg">
                    <!-- Part one -->
                    <div>
                        <p class="plantName text-4xl font-bold">${stugle.plantName}</p>
                        <p class="latinName">Latin name</p>
                    </div>
                    <!-- Part two -->
                    <div class="flex gap-3">
                        <p class="light bg-gray-200 px-5"> Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">weekly</p>
                    </div>
                    <!-- Part there -->
                    <p class="status">${stugle.status}</p>
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

        `

        filterSection.appendChild(div);
    }
}