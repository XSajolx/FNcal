const samplePrices = {
    AUDCAD: { samplePrice: 0.91142, conversionPrice: 0.67128, contractSize: 100000 },
    AUDCHF: { samplePrice: 0.56864, conversionPrice: 0.67128, contractSize: 100000 },
    AUDJPY: { samplePrice: 94.337, conversionPrice: 0.67128, contractSize: 100000 },
    AUDNZD: { samplePrice: 1.08971, conversionPrice: 0.67128, contractSize: 100000 },
    AUDSGD: { samplePrice: 0.87075, conversionPrice: 0.67128, contractSize: 100000 },
    CADCHF: { samplePrice: 0.62395, conversionPrice: 1.35727, contractSize: 100000 },
    CADJPY: { samplePrice: 103.512, conversionPrice: 1.35727, contractSize: 100000 },
    CHFJPY: { samplePrice: 165.916, conversionPrice: 0.84649, contractSize: 100000 },
    EURAUD: { samplePrice: 1.65193, conversionPrice: 1.10906, contractSize: 100000 },
    EURCAD: { samplePrice: 1.50557, conversionPrice: 1.10906, contractSize: 100000 },
    EURCHF: { samplePrice: 0.93937, conversionPrice: 1.10906, contractSize: 100000 },
    EURGBP: { samplePrice: 0.84363, conversionPrice: 1.10906, contractSize: 100000 },
    EURHKD: { samplePrice: 8.6465, conversionPrice: 1.10906, contractSize: 100000 },
    EURHUF: { samplePrice: 394.783, conversionPrice: 1.10906, contractSize: 100000 },
    EURJPY: { samplePrice: 155.838, conversionPrice: 1.10906, contractSize: 100000 },
    EURNOK: { samplePrice: 11.79938, conversionPrice: 1.10906, contractSize: 100000 },
    EURNZD: { samplePrice: 1.79963, conversionPrice: 1.10906, contractSize: 100000 },
    EURSGD: { samplePrice: 1.43843, conversionPrice: 1.10906, contractSize: 100000 },
    EURTRY: { samplePrice: 37.76918, conversionPrice: 1.10906, contractSize: 100000 },
    GBPAUD: { samplePrice: 1.9572, conversionPrice: 1.29288, contractSize: 100000 },
    GBPCAD: { samplePrice: 1.78481, conversionPrice: 1.29288, contractSize: 100000 },
    GBPCHF: { samplePrice: 1.1137, conversionPrice: 1.29288, contractSize: 100000 },
    GBPJPY: { samplePrice: 199.233, conversionPrice: 1.29288, contractSize: 100000 },
    GBPNZD: { samplePrice: 2.1329, conversionPrice: 1.29288, contractSize: 100000 },
    GBPSGD: { samplePrice: 1.70531, conversionPrice: 1.29288, contractSize: 100000 },
    MXNJPY: { samplePrice: 7.338, conversionPrice: 19.18399, contractSize: 100000 },
    NOKJPY: { samplePrice: 13.226, conversionPrice: 10.62881, contractSize: 100000 },
    NZDCAD: { samplePrice: 0.837, conversionPrice: 0.61732, contractSize: 100000 },
    NZDCHF: { samplePrice: 0.5222, conversionPrice: 0.61732, contractSize: 100000 },
    NZDJPY: { samplePrice: 86.59, conversionPrice: 0.61732, contractSize: 100000 },
    NZDSGD: { samplePrice: 0.79989, conversionPrice: 0.61732, contractSize: 100000 },
    SGDJPY: { samplePrice: 108.217, conversionPrice: 1.29614, contractSize: 100000 },
    USDCAD: { samplePrice: 1.35727, conversionPrice: 1, contractSize: 100000 },
    USDCHF: { samplePrice: 0.84649, conversionPrice: 1, contractSize: 100000 },
    USDCNH: { samplePrice: 7.10122, conversionPrice: 1, contractSize: 100000 },
    USDDKK: { samplePrice: 6.72319, conversionPrice: 1, contractSize: 100000 },
    USDHUF: { samplePrice: 355.721, conversionPrice: 1, contractSize: 100000 },
    USDJPY: { samplePrice: 140.145, conversionPrice: 1, contractSize: 100000 },
    USDMXN: { samplePrice: 19.18399, conversionPrice: 1, contractSize: 100000 },
    USDNOK: { samplePrice: 10.62881, conversionPrice: 1, contractSize: 100000 },
    USDPLN: { samplePrice: 3.85478, conversionPrice: 1, contractSize: 100000 },
    USDSGD: { samplePrice: 1.29614, conversionPrice: 1, contractSize: 100000 },
    USDTRY: { samplePrice: 33.97974, conversionPrice: 1, contractSize: 100000 },
    USDZAR: { samplePrice: 17.68835, conversionPrice: 1, contractSize: 100000 },
    ZARJPY: { samplePrice: 7.938, conversionPrice: 17.68835, contractSize: 100000 },
    XAUUSD: { samplePrice: 2494.01, conversionPrice: 1, contractSize: 100 },
    XAGUSD: { samplePrice: 31.375, conversionPrice: 1, contractSize: 5000 },
    XPTUSD: { samplePrice: 911.36, conversionPrice: 1, contractSize: 100 },
    UKOUSD: { samplePrice: 82.679, conversionPrice: 1, contractSize: 100 },
    USOUSD: { samplePrice: 82.464, conversionPrice: 1, contractSize: 100 },
    ADAUSD: { samplePrice: 0.3712, conversionPrice: 1, contractSize: 100 },
    BCHUSD: { samplePrice: 373.655, conversionPrice: 1, contractSize: 1 },
    BTCUSD: { samplePrice: 74545.49, conversionPrice: 1, contractSize: 1 },
    DOGUSD: { samplePrice: 0.19113, conversionPrice: 1, contractSize: 1000 },
    ETHUSD: { samplePrice: 2823.7, conversionPrice: 1, contractSize: 1 },
    LNKUSD: { samplePrice: 12.364, conversionPrice: 1, contractSize: 100 },
    LTCUSD: { samplePrice: 70.65, conversionPrice: 1, contractSize: 1 },
    XLMUSD: { samplePrice: 0.09751, conversionPrice: 1, contractSize: 100 },
    XMRUSD: { samplePrice: 162.45, conversionPrice: 1, contractSize: 1 },
    XRPUSD: { samplePrice: 0.5561, conversionPrice: 1, contractSize: 100 }
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
    "ADAUSD": { pipValue: 0.10, conversionRate: 1000, type: "crypto" },
    "BCHUSD": { pipValue: 0.01, conversionRate: 100, type: "crypto" },
    "BTCUSD": { pipValue: 0.10, conversionRate: 10, type: "crypto" },
    "DOGUSD": { pipValue: 0.10, conversionRate: 10000, type: "crypto" },
    "ETHUSD": { pipValue: 0.10, conversionRate: 10, type: "crypto" },
    "LNKUSD": { pipValue: 1.00, conversionRate: 100, type: "crypto" },
    "LTCUSD": { pipValue: 0.10, conversionRate: 10, type: "crypto" },
    "XLMUSD": { pipValue: 0.01, conversionRate: 10000, type: "crypto" },
    "XMRUSD": { pipValue: 0.10, conversionRate: 10, type: "crypto" },
    "XRPUSD": { pipValue: 0.10, conversionRate: 1000, type: "crypto" },
    
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
    "EURUSD": { pipValue: 10.00, conversionRate: 10000, type: "forex" },
    "GBPUSD": { pipValue: 6.48, conversionRate: 10000, type: "forex" },
    "NZDJPY": { pipValue: 6.61, conversionRate: 100, type: "forex" },
    "USDCAD": { pipValue: 7.23, conversionRate: 10000, type: "forex" },
    "USDCHF": { pipValue: 11.36, conversionRate: 10000, type: "forex" },
    "USDJPY": { pipValue: 6.61, conversionRate: 100, type: "forex" },
    
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

function calculateMargin() {
    const instrument = document.getElementById("marginInstrument").value.toUpperCase();
    const lotValue = document.getElementById("lot2").value; // Updated to "lot2"
    const leverageValue = document.getElementById("leverage").value;

    console.log("Raw Instrument Value:", instrument);
    console.log("Raw Lot2 Value:", lotValue);  // Should log the raw input from "lot2" field
    console.log("Raw Leverage Value:", leverageValue);

    // Parse values
    const lot = parseFloat(lotValue);
    const leverage = parseFloat(leverageValue);

    // Check if values are parsed correctly
    if (isNaN(lot) || isNaN(leverage)) {
        console.error("Lot or leverage is NaN. Check your input values.");
        document.getElementById("marginAmount").textContent = "Invalid input. Please check instrument, lot, and leverage.";
        return;
    }

    // Check if the instrument exists in samplePrices
    if (!samplePrices[instrument]) {
        console.error("Instrument not found in samplePrices.");
        document.getElementById("marginAmount").textContent = "Invalid instrument. Please check input.";
        return;
    }

    // Retrieve sample data
    const { samplePrice, conversionPrice, contractSize } = samplePrices[instrument];
    const exceptionPairs = ["CADCHF", "CADJPY", "CHFJPY", "MXNJPY", "NOKJPY"];

    // Calculate converted price
    const convertedPrice = exceptionPairs.includes(instrument)
        ? (1 / samplePrice) * (1 / conversionPrice)
        : (1 / samplePrice) * conversionPrice;

    // Calculate margin required
    const marginRequired = (contractSize * convertedPrice * lot) / leverage;

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
// New Risk Calculator
function calculateRisk() {
    const accountBalance = parseFloat(document.getElementById("accountBalance").value);
    const riskPercentage = parseFloat(document.getElementById("riskPercentage").value);

    if (isNaN(accountBalance) || isNaN(riskPercentage)) {
        alert("Please enter valid values.");
        return;
    }

    const riskAmount = accountBalance * (riskPercentage / 100);
    document.getElementById("riskAmount").textContent = `Risk Amount: $${riskAmount.toFixed(2)}`;
}
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

    // Calculate the converted price
    const convertedPrice = exceptionPairs.includes(pair)
        ? (1 / samplePrice) * (1 / conversionPrice)  // For exception pairs
        : (1 / samplePrice) * conversionPrice;       // Default calculation for all other pairs

    // Calculate Max Lot Size
    const maxLotSize = (balance * leverage) / (convertedPrice * contractSize * samplePrice);

    // Display the converted price and Max Lot Size
    document.getElementById("maxLotSize").textContent = `Converted Price: ${convertedPrice.toFixed(4)}, Max Lot Size: ${maxLotSize.toFixed(4)}`;
}
