const main = document.getElementById('main');
const add_user = document.getElementById('add-user');
const double = document.getElementById('double');
const show_millionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const calculate_wealth = document.getElementById('calculate-wealth');

let data = [];
getRandomUser()
getRandomUser()
getRandomUser()


// Fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();
    
    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser);
}


function addData(obj) {
    data.push(obj);

    updateDOM();
}

// Update DOM
function updateDOM(providedData= data) {
    // Clear main div
    main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

    providedData.forEach(item => {
        const element = document.createElement("div");
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element)
    });
}

// Format currency 1,000,000
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Double money
function doubleMoney() {
    data = data.map((user) => {
        return {...user, money: user.money * 2};
    })
    updateDOM();
}

// Filter only millionaires
function showOnlyMillionaires() {
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

// Sort millionaires
function sortWealth() {
    data.sort((a, b) => b.money - a.money);

    updateDOM();
}

// Calculator total wealth
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc+user.money), 0);

    const wealthEl = document.createElement("div");
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`
    main.appendChild(wealthEl);
}

// Event listeners
add_user.addEventListener('click', getRandomUser);

double.addEventListener("click", doubleMoney);

show_millionaires.addEventListener("click", showOnlyMillionaires);

sort.addEventListener("click", sortWealth)

calculate_wealth.addEventListener("click", calculateWealth);