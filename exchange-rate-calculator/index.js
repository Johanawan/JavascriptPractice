const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById("currency-two");
const amount_currency1 = document.getElementById("amount-one");
const amount_currency2 = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fecth exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/(API KEY)/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        //console.log(data.conversion_rates));
        const rate = data.conversion_rates[currency_two]
        
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amount_currency2.value = (amount_currency1.value * rate).toFixed(2)
    }
)}

// Event listeners
currencyEl_one.addEventListener("change", calculate)
amount_currency1.addEventListener("input", calculate)
currencyEl_two.addEventListener("change", calculate)
amount_currency2.addEventListener("input", calculate)

swap.addEventListener("click", () => {
    
    // Swap FX Symbols
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;

    calculate();    
})
calculate()