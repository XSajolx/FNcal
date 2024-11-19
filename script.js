const samplePrices = {
    AUDUSD: { samplePrice: 0.65042, conversionPrice: 1, contractSize: 100000 },
    NZDUSD: { samplePrice: 0.58855, conversionPrice: 1, contractSize: 100000 },
    GBPUSD: { samplePrice: 1.26702, conversionPrice: 1, contractSize: 100000 },
    EURUSD: { samplePrice: 1.05862, conversionPrice: 1, contractSize: 100000 },
    AUDCAD: { samplePrice: 0.92083, conversionPrice: 0.663, contractSize: 100000 },
    AUDCHF: { samplePrice: 0.58089, conversionPrice: 0.663, contractSize: 100000 },
    AUDJPY: { samplePrice: 102.076, conversionPrice: 0.663, contractSize: 100000 },
    AUDNZD: { samplePrice: 1.10646, conversionPrice: 0.663, contractSize: 100000 },
    AUDSGD: { samplePrice: 0.87952, conversionPrice: 0.663, contractSize: 100000 },
    CADCHF: { samplePrice: 0.63077, conversionPrice: 1.38885, contractSize: 100000 },
    CADJPY: { samplePrice: 110.814, conversionPrice: 1.38885, contractSize: 100000 },
    CHFJPY: { samplePrice: 175.680, conversionPrice: 0.87639, contractSize: 100000 },
    EURAUD: { samplePrice: 1.62152, conversionPrice: 1.07515, contractSize: 100000 },
    EURCAD: { samplePrice: 1.49324, conversionPrice: 1.07515, contractSize: 100000 },
    EURCHF: { samplePrice: 0.94179, conversionPrice: 1.07515, contractSize: 100000 },
    EURGBP: { samplePrice: 0.83297, conversionPrice: 1.07515, contractSize: 100000 },
    EURHKD: { samplePrice: 8.35724, conversionPrice: 1.07515, contractSize: 100000 },
    EURHUF: { samplePrice: 406.33, conversionPrice: 1.07515, contractSize: 100000 },
    EURJPY: { samplePrice: 165.449, conversionPrice: 1.07515, contractSize: 100000 },
    EURNOK: { samplePrice: 11.78267, conversionPrice: 1.07515, contractSize: 100000 },
    EURNZD: { samplePrice: 1.79442, conversionPrice: 1.07515, contractSize: 100000 },
    EURSGD: { samplePrice: 1.426, conversionPrice: 1.07515, contractSize: 100000 },
    EURTRY: { samplePrice: 36.91972, conversionPrice: 1.07515, contractSize: 100000 },
    GBPAUD: { samplePrice: 1.94654, conversionPrice: 1.29105, contractSize: 100000 },
    GBPCAD: { samplePrice: 1.79241, conversionPrice: 1.29105, contractSize: 100000 },
    GBPCHF: { samplePrice: 1.13087, conversionPrice: 1.29105, contractSize: 100000 },
    GBPJPY: { samplePrice: 198.666, conversionPrice: 1.29105, contractSize: 100000 },
    GBPNZD: { samplePrice: 2.15482, conversionPrice: 1.29105, contractSize: 100000 },
    GBPSGD: { samplePrice: 1.71213, conversionPrice: 1.29105, contractSize: 100000 },
    MXNJPY: { samplePrice: 7.67, conversionPrice: 20.0434, contractSize: 100000 },
    NOKJPY: { samplePrice: 14.039, conversionPrice: 10.95962, contractSize: 100000 },
    NZDCAD: { samplePrice: 0.83183, conversionPrice: 0.59916, contractSize: 100000 },
    NZDCHF: { samplePrice: 0.52493, conversionPrice: 0.59916, contractSize: 100000 },
    NZDJPY: { samplePrice: 92.194, conversionPrice: 0.59916, contractSize: 100000 },
    NZDSGD: { samplePrice: 0.79442, conversionPrice: 0.59916, contractSize: 100000 },
    SGDJPY: { samplePrice: 116.052, conversionPrice: 1.32639, contractSize: 100000 },
    USDCAD: { samplePrice: 1.38885, conversionPrice: 1, contractSize: 100000 },
    USDCHF: { samplePrice: 0.87639, conversionPrice: 1, contractSize: 100000 },
    USDCNH: { samplePrice: 7.17358, conversionPrice: 1, contractSize: 100000 },
    USDDKK: { samplePrice: 6.93466, conversionPrice: 1, contractSize: 100000 },
    USDHUF: { samplePrice: 377.198, conversionPrice: 1, contractSize: 100000 },
    USDJPY: { samplePrice: 153.952, conversionPrice: 1, contractSize: 100000 },
    USDMXN: { samplePrice: 20.0434, conversionPrice: 1, contractSize: 100000 },
    USDNOK: { samplePrice: 10.95962, conversionPrice: 1, contractSize: 100000 },
    USDPLN: { samplePrice: 4.03388, conversionPrice: 1, contractSize: 100000 },
    USDSGD: { samplePrice: 1.32639, conversionPrice: 1, contractSize: 100000 },
    USDTRY: { samplePrice: 34.23909, conversionPrice: 1, contractSize: 100000 },
    USDZAR: { samplePrice: 17.41809, conversionPrice: 1, contractSize: 100000 },
    ZARJPY: { samplePrice: 8.833, conversionPrice: 17.41809, contractSize: 100000 },
    USDHKD: { samplePrice: 7.7726, conversionPrice: 1, contractSize: 100000 },
    USDSEK: { samplePrice: 10.79863, conversionPrice: 1, contractSize: 100000 },
    XAUUSD: { samplePrice: 2662.78, conversionPrice: 1, contractSize: 100 },
    XAGUSD: { samplePrice: 31.123, conversionPrice: 1, contractSize: 5000 },
    XPTUSD: { samplePrice: 980.15, conversionPrice: 1, contractSize: 100 },
    UKOUSD: { samplePrice: 74.526, conversionPrice: 1, contractSize: 100 },
    USOUSD: { samplePrice: 71.506, conversionPrice: 1, contractSize: 100 },
    AUS200: { samplePrice: 8232.82, conversionPrice: 0.663, contractSize: 100000 },
    EUSTX50: { samplePrice: 4830.49, conversionPrice: 1.07515, contractSize: 100000 },
    FRA40: { samplePrice: 7411.24, conversionPrice: 1.07515, contractSize: 100000 },
    US2000: { samplePrice: 2410, conversionPrice: 1, contractSize: 100000 },
    VIX: { samplePrice: 13.1, conversionPrice: 1, contractSize: 100000 },
    JP225: { samplePrice: 39298, conversionPrice: 153.952, contractSize: 100000 },
    GER30: { samplePrice: 19261.96, conversionPrice: 1.07515, contractSize: 100000 },
    HK50: { samplePrice: 21026.6, conversionPrice: 7.7726, contractSize: 100000 },
    NDX100: { samplePrice: 20838.38, conversionPrice: 1, contractSize: 100000 },
    NTH25: { samplePrice: 878.54, conversionPrice: 2, contractSize: 100000 },
    SPX500: { samplePrice: 5937.58, conversionPrice: 1, contractSize: 100000 },
    SWI20: { samplePrice: 11945.74, conversionPrice: 0.87639, contractSize: 100000 },
    UK100: { samplePrice: 8164.99, conversionPrice: 1.29105, contractSize: 100000 },
    US30: { samplePrice: 43845.01, conversionPrice: 1, contractSize: 100000 },
    /*ADAUSD: { samplePrice: 0.3712, conversionPrice: 1, contractSize: 100 },
    BCHUSD: { samplePrice: 373.655, conversionPrice: 1, contractSize: 1 },
    BTCUSD: { samplePrice: 74545.49, conversionPrice: 1, contractSize: 1 },
    DOGUSD: { samplePrice: 0.19113, conversionPrice: 1, contractSize: 1000 },
    ETHUSD: { samplePrice: 2823.7, conversionPrice: 1, contractSize: 1 },
    LNKUSD: { samplePrice: 12.364, conversionPrice: 1, contractSize: 100 },
    LTCUSD: { samplePrice: 70.65, conversionPrice: 1, contractSize: 1 },
    XLMUSD: { samplePrice: 0.09751, conversionPrice: 1, contractSize: 100 },
    XMRUSD: { samplePrice: 162.45, conversionPrice: 1, contractSize: 1 },
    XRPUSD: { samplePrice: 0.5561, conversionPrice: 1, contractSize: 100 }
    */
};

// Populate the pair-list datalist with pairs from samplePrices on page load
document.addEventListener("DOMContentLoaded", () => {
    const pairList = document.getElementById("pair-list");

    // Iterate over samplePrices keys and add each as an option in the datalist
    Object.keys(samplePrices).forEach(pair => {
        const option = document.createElement("option");
        option.value = pair;  // Set the value of the option to the pair name
        pairList.appendChild(option);
    });
});
// Function to hide all calculators initially
function initializeCalculators() {
    const calculators = ['pnlCalculator', 'marginCalculator', 'riskCalculator', 'maxLotCalculator'];
    calculators.forEach(id => {
        document.getElementById(id).style.display = 'none'; // Hide each calculator
    });
}
// Function to toggle between calculators
function showCalculator(calculatorId) {
    const calculators = ['pnlCalculator', 'marginCalculator', 'riskCalculator', 'maxLotCalculator'];
    calculators.forEach(id => {
        document.getElementById(id).style.display = id === calculatorId ? 'block' : 'none';
    });
}
function showCalculator(calculatorId) {
    const calculators = ['pnlCalculator', 'marginCalculator', 'riskCalculator', 'maxLotCalculator'];
    calculators.forEach(id => {
        document.getElementById(id).style.display = id === calculatorId ? 'block' : 'none';
    });
}
// Initialize calculators on page load to hide them initially
document.addEventListener("DOMContentLoaded", initializeCalculators);
const instruments = {
    // Crypto
 /* "ADAUSD": { pipValue: 0.10, conversionRate: 1000, type: "crypto" },
    "BCHUSD": { pipValue: 0.01, conversionRate: 100, type: "crypto" },
    "BTCUSD": { pipValue: 0.10, conversionRate: 10, type: "crypto" },
    "DOGUSD": { pipValue: 0.10, conversionRate: 10000, type: "crypto" },
    "ETHUSD": { pipValue: 0.10, conversionRate: 10, type: "crypto" },
    "LNKUSD": { pipValue: 1.00, conversionRate: 100, type: "crypto" },
    "LTCUSD": { pipValue: 0.10, conversionRate: 10, type: "crypto" },
    "XLMUSD": { pipValue: 0.01, conversionRate: 10000, type: "crypto" },
    "XMRUSD": { pipValue: 0.10, conversionRate: 10, type: "crypto" },
    "XRPUSD": { pipValue: 0.10, conversionRate: 1000, type: "crypto" },
*/ 
    // Forex 
    "AUDCAD": { pipValue: 7.24, conversionRate: 10000, type: "forex" },
    "AUDCHF": { pipValue: 11.09, conversionRate: 10000, type: "forex" },
    "AUDJPY": { pipValue: 6.59, conversionRate: 100, type: "forex" },
    "AUDNZD": { pipValue: 5.89, conversionRate: 10000, type: "forex" },
    "AUDSGD": { pipValue: 7.35, conversionRate: 10000, type: "forex" },
    "AUDUSD": { pipValue: 10.00, conversionRate: 10000, type: "forex" },
    "CADCHF": { pipValue: 11.09, conversionRate: 10000, type: "forex" },
    "CADJPY": { pipValue: 6.59, conversionRate: 100, type: "forex" },
    "CHFJPY": { pipValue: 6.59, conversionRate: 100, type: "forex" },
    "EURAUD": { pipValue: 6.38, conversionRate: 10000, type: "forex" },
    "EURCAD": { pipValue: 7.24, conversionRate: 10000, type: "forex" },
    "EURCHF": { pipValue: 11.08, conversionRate: 10000, type: "forex" },
    "EURGBP": { pipValue: 12.25, conversionRate: 10000, type: "forex" },
    "EURHKD": { pipValue: 1.28, conversionRate: 10000, type: "forex" },
    "EURHUF": { pipValue: 2.84, conversionRate: 10000, type: "forex" },
    "EURJPY": { pipValue: 6.61, conversionRate: 100, type: "forex" },
    "EURNOK": { pipValue: 0.90, conversionRate: 10000, type: "forex" },
    "EURNZD": { pipValue: 5.90, conversionRate: 10000, type: "forex" },
    "EURSGD": { pipValue: 7.36, conversionRate: 10000, type: "forex" },
    "EURTRY": { pipValue: 0.35, conversionRate: 10000, type: "forex" },
    "EURUSD": { pipValue: 10.00, conversionRate: 10000, type: "forex" },
    "GBPAUD": { pipValue: 6.48, conversionRate: 10000, type: "forex" },
    "GBPCAD": { pipValue: 5.90, conversionRate: 10000, type: "forex" },
    "GBPCHF": { pipValue: 11.08, conversionRate: 10000, type: "forex" },
    "GBPJPY": { pipValue: 10.00, conversionRate: 100, type: "forex" },
    "GBPNZD": { pipValue: 5.90, conversionRate: 10000, type: "forex" },
    "GBPSGD": { pipValue: 7.36, conversionRate: 10000, type: "forex" },
    "GBPUSD": { pipValue: 10.00, conversionRate: 10000, type: "forex" },
    "MXNJPY": { pipValue: 6.61, conversionRate: 100, type: "forex" },
    "NOKJPY": { pipValue: 6.60, conversionRate: 100, type: "forex" },
    "NZDCAD": { pipValue: 7.23, conversionRate: 10000, type: "forex" },
    "NZDCHF": { pipValue: 11.09, conversionRate: 10000, type: "forex" },
    "NZDJPY": { pipValue: 6.61, conversionRate: 100, type: "forex" },
    "NZDSGD": { pipValue: 7.36, conversionRate: 10000, type: "forex" },
    "SGDJPY": { pipValue: 6.61, conversionRate: 100, type: "forex" },
    "USDCAD": { pipValue: 7.23, conversionRate: 10000, type: "forex" },
    "USDCHF": { pipValue: 11.36, conversionRate: 10000, type: "forex" },
    "USDCNH": { pipValue: 1.37, conversionRate: 10000, type: "forex" },
    "USDDKK": { pipValue: 1.43, conversionRate: 10000, type: "forex" },
    "USDHUF": { pipValue: 2.83, conversionRate: 10000, type: "forex" },
    "USDJPY": { pipValue: 6.61, conversionRate: 100, type: "forex" },
    "USDMXN": { pipValue: 0.50, conversionRate: 10000, type: "forex" },
    "USDNOK": { pipValue: 0.90, conversionRate: 10000, type: "forex" },
    "USDPLN": { pipValue: 2.42, conversionRate: 10000, type: "forex" },
    "USDSGD": { pipValue: 6.36, conversionRate: 10000, type: "forex" },
    "USDTRY": { pipValue: 0.35, conversionRate: 10000, type: "forex" },
    "USDZAR": { pipValue: 0.53, conversionRate: 10000, type: "forex" },
    "ZARJPY": { pipValue: 6.61, conversionRate: 100, type: "forex" },
    "NZDUSD": { pipValue: 10.00, conversionRate: 10000, type: "forex" },
    "USDHKD": { pipValue: 1.28, conversionRate: 10000, type: "forex" },
    "USDSEK": { pipValue: 10.80, conversionRate: 10000, type: "forex" },
    
    // Indices
    "SPX500": { pipValue: 10.00, conversionRate: 1, type: "index" },
    "US30": { pipValue: 10.00, conversionRate: 1, type: "index" },
    "GER30": { pipValue: 10.67, conversionRate: 1, type: "index" },
    "US2000": { pipValue: 10.00, conversionRate: 1, type: "index" },
    "UK100": { pipValue: 12.20, conversionRate: 1, type: "index" },
    "VIX": { pipValue: 10.00, conversionRate: 1, type: "index" },
    "SWI20": { pipValue: 11.08, conversionRate: 1, type: "index" },
    "NTH25": { pipValue: 21.34, conversionRate: 1, type: "index" },
    "NDX100": { pipValue: 10.00, conversionRate: 1, type: "index" },
    "JP225": { pipValue: 0.07, conversionRate: 1, type: "index" },
    "HK50": { pipValue: 1.28, conversionRate: 1, type: "index" },
    "FRA40": { pipValue: 10.67, conversionRate: 1, type: "index" },
    "EUSTX50": { pipValue: 10.67, conversionRate: 1, type: "index" },
    "AUS200": { pipValue: 6.35, conversionRate: 1, type: "index" },
    
    // Commodities
    "XAUUSD": { pipValue: 10.00, conversionRate: 10, type: "commodity" },
    "XPTUSD": { pipValue: 10.00, conversionRate: 10, type: "commodity" },
    "XAGUSD": { pipValue: 50.00, conversionRate: 10, type: "commodity" },
    "USOUSD": { pipValue: 1.00, conversionRate: 10, type: "commodity" },
    "UKOUSD": { pipValue: 1.00, conversionRate: 10, type: "commodity" }
};

// Existing code for P&L/Pip Calculator
document.addEventListener("DOMContentLoaded", () => {
    const instrumentList = document.getElementById("instrument-list");
    Object.keys(instruments).forEach(symbol => {
        let option = document.createElement("option");
        option.value = symbol;
        instrumentList.appendChild(option);
    });
});
function calculatePip() {
    const position = document.getElementById("position").value;
    const instrument = document.getElementById("instrument").value.toUpperCase();
    const entryPrice = parseFloat(document.getElementById("entryPrice").value);
    const exitPrice = parseFloat(document.getElementById("exitPrice").value);
    const lot = parseFloat(document.getElementById("lot").value);

    if (!instruments[instrument] || isNaN(entryPrice) || isNaN(exitPrice) || isNaN(lot)) {
        alert("Please enter valid values.");
        return;
    }

    const { pipValue, conversionRate, type } = instruments[instrument];
    const priceDifference = Math.abs(entryPrice - exitPrice) * conversionRate;
    const pnl = priceDifference * lot * pipValue;

    let resultLabel = (position === "sell" && exitPrice < entryPrice) || (position === "buy" && exitPrice > entryPrice) ? "Profit:$" : "Loss:$";
    let differenceLabel = type === "index" ? "Point Difference: " : "Pip Difference: ";
    document.getElementById("pipDifference").textContent = differenceLabel + priceDifference.toFixed(2);
    document.getElementById("profitLoss").textContent = resultLabel + Math.abs(pnl.toFixed(2));
}
// Function to update the Sample Price field in the Margin Calculator
function updateMarginSamplePrice() {
    const instrument = document.getElementById("marginInstrument").value.toUpperCase();

    // Check if the instrument exists in samplePrices
    if (samplePrices[instrument]) {
        const { samplePrice } = samplePrices[instrument];
        document.getElementById("samplePriceMargin").value = samplePrice.toFixed(4);
        console.log("Updated Sample Price for Margin:", samplePrice);
    } else {
        document.getElementById("samplePriceMargin").value = "N/A";
        console.warn("Instrument not found in samplePrices for Margin Calculator.");
    }
}
// Populate the instrument list in the datalist for both calculators
document.addEventListener("DOMContentLoaded", () => {
    const pairList = document.getElementById("pair-list");

    // Populate options in the datalist for available instruments
    Object.keys(samplePrices).forEach(symbol => {
        const option = document.createElement("option");
        option.value = symbol;
        pairList.appendChild(option);
    });
});
function calculateMargin() {
    const instrument = document.getElementById("marginInstrument").value.toUpperCase();
    const lotValue = document.getElementById("lot2").value; // Updated to "lot2"
    const leverageValue = document.getElementById("leverage").value;
    const priceInputValue = document.getElementById("manualPrice").value; // Manual price input

    console.log("Raw Instrument Value:", instrument);
    console.log("Raw Lot2 Value:", lotValue);  // Should log the raw input from "lot2" field
    console.log("Raw Leverage Value:", leverageValue);
    console.log("Manual Price Value:", priceInputValue);

    // Parse values
    const lot = parseFloat(lotValue);
    const leverage = parseFloat(leverageValue);
    const manualPrice = parseFloat(priceInputValue);

    // Check if values are parsed correctly
    if (isNaN(lot) || isNaN(leverage)) {
        console.error("Lot or leverage is NaN. Check your input values.");
        document.getElementById("marginAmount").textContent = "Invalid input. Please check instrument, lot, and leverage.";
        return;
    }

    // Check if the instrument exists in samplePrices
    if (!samplePrices[instrument] && isNaN(manualPrice)) {
        console.error("Instrument not found and no manual price provided.");
        document.getElementById("marginAmount").textContent = "Invalid instrument or missing price. Please check your input.";
        return;
    }

    // Retrieve sample data
    const { samplePrice = manualPrice, conversionPrice = 1, contractSize = 100000 } = samplePrices[instrument] || {};

    // Determine the price to use (manual input takes precedence)
    const priceToUse = isNaN(manualPrice) ? samplePrice : manualPrice;

    if (isNaN(priceToUse)) {
        console.error("Price to use is invalid.");
        document.getElementById("marginAmount").textContent = "Invalid price. Please provide a valid price.";
        return;
    }

    // Calculate margin required based on conversion price
    let marginRequired;
    if (conversionPrice === 1) {
        // Use priceToUse directly when conversionPrice is 1
        marginRequired = (contractSize * priceToUse * lot) / leverage;
    } else {
        // Calculate converted price for other conversion rates
        const convertedPrice = (1 / priceToUse) * conversionPrice;
        marginRequired = (contractSize * convertedPrice * lot) / leverage;
    }

    // Display result
    document.getElementById("marginAmount").textContent = `Required Margin: $${marginRequired.toFixed(2)}`;
    console.log("Margin Required:", marginRequired);
}

// Populate the instrument list
document.addEventListener("DOMContentLoaded", () => {
    const instrumentList = document.getElementById("instrument-list");

    // Populate instrument options from samplePrices keys
    Object.keys(samplePrices).forEach(symbol => {
        const option = document.createElement("option");
        option.value = symbol;
        instrumentList.appendChild(option);
    });
});
function calculateRisk() {
    const position = document.getElementById("position").value;
    const riskAmountValue = document.getElementById("riskAmount").value;
    const instrument = document.getElementById("riskInstrument").value.toUpperCase();
    const desiredProfitValue = document.getElementById("desiredProfit").value;
    const entryPriceValue = document.getElementById("entryPrice1").value;
    const lotSizeValue = document.getElementById("lotSize").value;

    // Parse inputs
    const riskAmount = parseFloat(riskAmountValue);
    const desiredProfit = parseFloat(desiredProfitValue);
    const entryPrice = parseFloat(entryPriceValue);
    const lotSize = parseFloat(lotSizeValue);

    // Log inputs for debugging
    console.log("Position:", position);
    console.log("Risk Amount:", riskAmount);
    console.log("Instrument:", instrument);
    console.log("Desired Profit:", desiredProfit);
    console.log("Entry Price:", entryPrice);
    console.log("Lot Size:", lotSize);

    // Validate inputs
    if (!instruments[instrument] || isNaN(riskAmount) || isNaN(desiredProfit) || isNaN(entryPrice) || isNaN(lotSize)) {
        document.getElementById("slAmount").textContent = "Invalid input. Please check all fields.";
        document.getElementById("tpAmount").textContent = "";
        console.warn("One or more fields are invalid.");
        return;
    }

    // Fetch pipValue and conversionRate for the selected instrument
    const { pipValue, conversionRate } = instruments[instrument];

    // Ensure pip value and conversion rate are valid
    if (isNaN(pipValue) || isNaN(conversionRate) || pipValue <= 0 || conversionRate <= 0) {
        document.getElementById("slAmount").textContent = "Invalid Pip value or Conversion rate for the selected instrument.";
        document.getElementById("tpAmount").textContent = "";
        console.warn("Invalid Pip value or Conversion rate.");
        return;
    }

    // Calculate Stop Loss (SL) and Take Profit (TP)
    let stopLoss, takeProfit;

    if (position === "buy") {
        stopLoss = entryPrice - (riskAmount / (lotSize * pipValue * conversionRate));
        takeProfit = entryPrice + (desiredProfit / (lotSize * pipValue * conversionRate));
    } else if (position === "sell") {
        stopLoss = entryPrice + (riskAmount / (lotSize * pipValue * conversionRate));
        takeProfit = entryPrice - (desiredProfit / (lotSize * pipValue * conversionRate));
    }

    // Display results with up to 5 decimal places if necessary
    document.getElementById("slAmount").textContent = `Stop Loss (SL): ${stopLoss.toFixed(5).replace(/\.?0+$/, '')}`;
    document.getElementById("tpAmount").textContent = `Take Profit (TP): ${takeProfit.toFixed(5).replace(/\.?0+$/, '')}`;
}
const exceptionPairs = ["CADCHF", "CADJPY", "CHFJPY", "MXNJPY", "NOKJPY"];

function calculateMaxLot() {
    const balance = parseFloat(document.getElementById("balance").value);
    const leverage = parseFloat(document.getElementById("maxLotLeverage").value);
    const pair = document.getElementById("pair").value.toUpperCase();

    // Validate input
    if (isNaN(balance) || isNaN(leverage) || !pair) {
        document.getElementById("maxLotSize").textContent = "Invalid input. Please check balance, leverage, and pair.";
        return;
    }

    // Check if the pair exists in samplePrices
    if (!samplePrices[pair]) {
        document.getElementById("maxLotSize").textContent = "Invalid pair. Please enter a valid pair.";
        return;
    }

    // Retrieve samplePrice, conversionPrice, and contractSize for the specified pair
    const { samplePrice, conversionPrice, contractSize } = samplePrices[pair];

    let maxLotSize;
    // Determine which formula to use based on exceptions
    if (conversionPrice === 1) {
        // Use the formula for pairs with conversionPrice 1
        maxLotSize = (balance * leverage) / (contractSize * samplePrice);
    } else {
        // Calculate the converted price
        const convertedPrice = exceptionPairs.includes(pair)
            ? (1 / samplePrice) * (1 / conversionPrice)  // For specific exception pairs
            : (1 / samplePrice) * conversionPrice;       // Default calculation for other pairs

        // Calculate Max Lot Size with the standard formula
        maxLotSize = (balance * leverage) / (convertedPrice * contractSize * samplePrice);
    }

    // Display the Max Lot Size
    document.getElementById("maxLotSize").textContent = `Max Lot Size: ${maxLotSize.toFixed(4)}`;
}
