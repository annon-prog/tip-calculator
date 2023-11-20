let bill = document.getElementById("amount");
let tip = document.getElementById("tip");
let button = document.getElementById("btn");
let total = document.getElementById("total");

function addBills() {
  let totalTip = Number(tip.value);
  let totalBill = Number(bill.value);
  let revenue = totalBill * (1 + totalTip / 100);

  total.innerHTML += ` <div>
      <p>Total: $ ${revenue}</p>
      </div>`;
}

button.addEventListener("click", addBills);
