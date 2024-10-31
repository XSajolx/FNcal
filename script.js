// Function to toggle between calculators
function showCalculator(calculatorId) {
    const calculators = ['pnlCalculator', 'marginCalculator', 'riskCalculator', 'maxLotCalculator'];
    calculators.forEach(id => {
        document.getElementById(id).style.display = id === calculatorId ? 'block' : 'none';
    });
}
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

function calculate() {
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

// New Margin Calculator
function calculateMargin() {
    const instrument = document.getElementById("marginInstrument").value.toUpperCase();
    const leverage = parseFloat(document.getElementById("leverage").value);
    const tradeSize = parseFloat(document.getElementById("tradeSize").value);

    if (!instruments[instrument] || isNaN(leverage) || isNaN(tradeSize)) {
        alert("Please enter valid values.");
        return;
    }

    const { conversionRate } = instruments[instrument];
    const marginRequired = (tradeSize / leverage) * conversionRate;
    document.getElementById("marginAmount").textContent = `Required Margin: $${marginRequired.toFixed(2)}`;
}

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

// New Max Lot Calculator
function calculateMaxLot() {
    const accountBalance = parseFloat(document.getElementById("maxAccountBalance").value);
    const leverage = parseFloat(document.getElementById("maxLeverage").value);

    if (isNaN(accountBalance) || isNaN(leverage)) {
        alert("Please enter valid values.");
        return;
    }

    const maxLot = accountBalance * leverage;
    document.getElementById("maxLotSize").textContent = `Max Lot Size: ${maxLot.toFixed(2)}`;
}
