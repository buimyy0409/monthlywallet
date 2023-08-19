let totalReceipt = 0;
let aims = 0;
function handleAddAim() {
  const aimInput = document.getElementById("aim");

  if (!aimInput.value) {
    alert("Please enter a valid number.");
    return;
  }
  for (let i = 0; i < 1; i++) {
    const aimAmount = parseFloat(aimInput.value);
    aims = aimAmount;
    updateAimsList();

    aimInput.value = "";
  }
  if (aims != 0) {
    const btnAim = document.getElementById('btn-aim')
    btnAim.setAttribute('disabled',true)
  }
}

function updateAimsList() {
  const aimsList = document.getElementById("aims-list");
  const span = document.createElement("span");
  span.textContent = `Aiming Money: $${aims.toFixed(2)}`;
  aimsList.appendChild(span);
  
}

let budgets = 0;

function handleAddBudget() {
  const budgetInput = document.getElementById("budget");

  if (!budgetInput.value) {
    alert("Please enter a valid number.");
    return;
  }

  const budgetAmount = parseFloat(budgetInput.value);

  budgets = budgetAmount;
  updateBudgetList();

  budgetInput.value = "";
  if (budgets != 0) {
    const btnBudget = document.getElementById('btn-budget')
    btnBudget.setAttribute('disabled',true)
  }
}

function updateBudgetList() {
  const budgetList = document.getElementById("budgets-list");
  const span = document.createElement("span");
  span.textContent = `Budget Money: $${budgets.toFixed(2)}`;
  budgetList.appendChild(span);
}

const receiptList = [];
const addReceipt = () => {
  const receiptName = document.getElementById("receipt").value.trim();
  const receiptCost = parseFloat(document.getElementById("receipt-cost").value);
  if (receiptName && !isNaN(receiptCost) && receiptCost > 0) {
    const newReceipt = { name: receiptName, cost: receiptCost };
    receiptList.push(newReceipt);
    document.getElementById("receipt").value = "";
    document.getElementById("receipt-cost").value = "";
    updateReceiptTable();
  } else {
    alert("Please enter valid Receipt Name and Cost.");
  }

};
const updateReceiptTable = () => {
  const tableElement = document.getElementById("receipt-table");
  while (tableElement.firstChild) {
    tableElement.removeChild(tableElement.firstChild);
  }
  const headerRow = document.createElement("tr");
  const nameHeader = createTableCellReceipt("th", "Receipt Name");
  const costHeader = createTableCellReceipt("th", "Cost");
  headerRow.append(nameHeader, costHeader);
  tableElement.appendChild(headerRow);
  for (let i = 0; i < receiptList.length; i++) {
    const row = document.createElement("tr");
    const nameCell = createTableCellReceipt("td", receiptList[i].name);
    const costCell = createTableCellReceipt(
      "td",
      "$" + parseFloat(receiptList[i].cost).toFixed(2)
    );

    row.append(nameCell, costCell);
    tableElement.appendChild(row);
    tableElement.setAttribute("style", "text-align:center;");
  }
  updateTotalAmountReceipt();
};
const createTableCellReceipt = (elementType, textContent) => {
  const cell = document.createElement(elementType);
  cell.textContent = textContent;
  return cell;
};
const updateTotalAmountReceipt = () => {
  let totalAmount = 0;
  for (let i = 0; i < receiptList.length; i++) {
    totalAmount += parseFloat(receiptList[i].cost);
  }

  document.getElementById("total-receipt").innerHTML = totalAmount.toFixed(2);
  const abc = document.getElementById("total-receipt").textContent;
  totalReceipt = abc;
};
const paymentInput = document.getElementById("payment");
const costInput = document.getElementById("cost");
const paymentList = [];
const addPayment = () => {
  const paymentName = document.getElementById("payment").value.trim();
  const paymentCost = parseFloat(document.getElementById("payment-cost").value);
  if (paymentName && !isNaN(paymentCost) && paymentCost > 0) {
    const newPayment = { name: paymentName, cost: paymentCost };
    paymentList.push(newPayment);
    document.getElementById("payment").value = "";
    document.getElementById("payment-cost").value = "";
    updatePaymentTable();
  } else {
    alert("Please enter valid Payment Name and Cost.");
  }
  

};
const updatePaymentTable = () => {
  const tableElement = document.getElementById("payment-table");
  while (tableElement.firstChild) {
    tableElement.removeChild(tableElement.firstChild);
  }
  const headerRow = document.createElement("tr");
  const nameHeader = createTableCellPayment("th", "Payment Name");
  const costHeader = createTableCellPayment("th", "Cost");
  headerRow.append(nameHeader, costHeader);
  tableElement.appendChild(headerRow);
  for (let i = 0; i < paymentList.length; i++) {
    const row = document.createElement("tr");
    const nameCell = createTableCellPayment("td", paymentList[i].name);
    const costCell = createTableCellPayment(
      "td",
      "$" + parseFloat(paymentList[i].cost).toFixed(2)
    );

    row.append(nameCell, costCell);
    tableElement.appendChild(row);
    tableElement.setAttribute("style", "text-align:center;");
  }
  updateTotalAmountPayment();
};
const createTableCellPayment = (elementType, textContent) => {
  const cell = document.createElement(elementType);
  cell.textContent = textContent;
  return cell;
};
const updateTotalAmountPayment = () => {
  let totalAmount = 0;
  for (let i = 0; i < paymentList.length; i++) {
    totalAmount += parseFloat(paymentList[i].cost);
  }
  document.getElementById("total-payment").textContent = totalAmount.toFixed(2);
};

const currentDate = new Date();

function createCalendar(year, month) {
  const calendar = document.getElementById("calendar-day");

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  for (let i = 0; i < 7; i++) {
    const th = document.createElement("th");
    th.textContent = weekdays[i];
    headerRow.appendChild(th);
    headerRow.setAttribute(
      "style",
      "font-size: 14px; border-bottom: 1px solid white"
    );
  }
  table.appendChild(headerRow);

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        const td = document.createElement("td");
        row.appendChild(td);
      } else if (date > daysInMonth) {
        break;
      } else {
        const td = document.createElement("td");
        td.textContent = date;
        row.appendChild(td);
        if (date === currentDate.getDate()) {
          td.setAttribute("class", "active");
        }
        date++;
      }
    }
    table.appendChild(row);
  }

  calendar.appendChild(table);
}

// Call the createCalendar function with the current year and month
console.log(currentDate.getDate());

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
createCalendar(currentYear, currentMonth);


let wallet = 0;
function handleCalcWallet() {
  const result = document.getElementById("result");
  // const receipt = document.getElementById('total-receipt')
  const payment = document.getElementById("total-payment");

  if (receipt && payment && budgets) {
    const moneyResult =
      parseInt(budgets) +
      parseInt(totalReceipt) -
      parseInt(payment.textContent);
    wallet = moneyResult;
    console.log(wallet);
    console.log(budgets, receipt.textContent, payment.textContent);
    result.innerHTML = `$${wallet}`;
  }
  if (wallet && wallet < aims){
  handleProgress();}
  else{
    alert('Your wallet is beyond the aim.')
  }
}

function handleProgress() {
  let progressBar = document.querySelector(".circular-progress");
  let valueContainer = document.querySelector(".value-container");

  let progressValue = 0;
  let progressEndValue = ((parseInt(wallet) / parseInt(aims)) * 100).toFixed(0);
  console.log(progressEndValue);
  let speed = 1;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
