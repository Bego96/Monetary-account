let currencySelection = document.querySelector("#nav-currency");
let eurCurrency = document.querySelector("#eur-currency");
let bamCurrency = document.querySelector("#bam-currency");
let totalAmmount = document.querySelector("#total-ammount");
let inputsCurrency = document.querySelector("#inputs-currency");
let submit = document.querySelector("#submit");
let currency;
let selectedCurrencyOnLoad;


// Set total ammount with already existing currency
setOnLoad();

function setOnLoad() {
  // set initial selected currency value
  selectedCurrencyOnLoad = "BAM";
  // set initial currency value for account
  currency = "BAM";
  let currencySelected =
    currencySelection.options[currencySelection.selectedIndex];

  if (currencySelected.text == "EUR") {
    selectedCurrencyOnLoad = "EUR";
    let bam = bamCurrency.innerHTML;
    console.log(bam);
    let parsingBam = parseInt(bam);
    console.log(parsingBam);
    let bamToEuro = parsingBam * 0.51;
    console.log(bamToEuro);
    let euro = eurCurrency.innerHTML;
    console.log(euro);
    let parsingEuro = parseInt(euro);
    console.log(parsingEuro);
    let total = bamToEuro + parsingEuro;
    console.log(total);
    totalAmmount.innerHTML = Math.ceil(total) + " EUR";
  }

  if (currencySelected.text == "BAM") {
    selectedCurrencyOnLoad = "BAM";
    let euro = eurCurrency.innerHTML;
    console.log(euro);
    let parsingEuro = parseInt(euro);
    console.log(parsingEuro);
    let euroToBam = parsingEuro * 1.94;
    console.log(euroToBam);
    let bam = bamCurrency.innerHTML;
    console.log(bam);
    let parsingBam = parseInt(bam);
    console.log(parsingBam);
    let total = euroToBam + parsingBam;
    console.log(total);
    totalAmmount.innerHTML = Math.ceil(total) + " BAM";
  }
}

// Set total ammount's currency by selected option

function setCurrency() {
  setOnLoad();
}

// Show total ammount of currency by type 

function show() {
  let otherCurrencies = document.querySelector(".other-currencies");
  otherCurrencies.classList.toggle("show");
}

// Select currency to calculate before getting input value
function inputCurrency() {
  let selectedInputCurrency = inputsCurrency.options[inputsCurrency.selectedIndex];

  if (selectedInputCurrency.text == "BAM") {
    currency = "BAM";
  }

  if (selectedInputCurrency.text == "EUR") {
    currency = "EUR";
  }


}


// Input cash value (depending on wether BAM or EUR has been selected previously)

function submitValue() {
  let input = document.querySelector("input").value;
  if (currency == "") {
    alert("Please pick currency before submmiting");
  } else {
    if (currency == "BAM") {
      let bam = bamCurrency.innerHTML;
      console.log(bam);
      let parsingBam = parseInt(bam);
      console.log(parsingBam);
      let addToBam = parsingBam + input;
      bamCurrency.innerHTML = addToBam;
      if (selectedCurrencyOnLoad == "BAM") {
        let parsedTotalAmmount = parseInt(totalAmmount.innerHTML);
        let updateTotalAmmount = parsedTotalAmmount + addToBam;
        totalAmmount.innerHTML = updateTotalAmmount;
      }
      if (selectedCurrencyOnLoad == "EUR") {
        // Need to first exchange updated total BAM to EURO to calculate total ammount if EUR is checked on load
        let exchangedTotalBam = addToBam * 1.91;
        let parsedTotalAmmount = parseInt(totalAmmount.innerHTML);
        let updateTotalAmmount = parsedTotalAmmount + exchangedTotalBam;
        totalAmmount.innerHTML = updateTotalAmmount;
      }
      
    } 
  
    if (currency == "EUR") {
      let eur = eurCurrency.innerHTML;
      console.log(eur);
      let parsingEur = parseInt(eur);
      console.log(parsingEur);
      let addToEur = parsingEur + input;
      eurCurrency.innerHTML = addToEur;
      if (selectedCurrencyOnLoad == "EUR") {
        let parsedTotalAmmount = parseInt(totalAmmount.innerHTML);
        let updateTotalAmmount = parsedTotalAmmount + addToEur;
        totalAmmount.innerHTML = updateTotalAmmount;
      }
      if (selectedCurrencyOnLoad == "BAM") {
        // Need to first exchange updated total EUR to BAM to calculate total ammount if BAM is checked on load
        let exchangedTotalEur = addToEur * 0.54;
        let parsedTotalAmmount = parseInt(totalAmmount.innerHTML);
        let updateTotalAmmount = parsedTotalAmmount + exchangedTotalEur;
        totalAmmount.innerHTML = updateTotalAmmount;
      }
    }
  }
  
}