let alertTimeoutID;

const showAlert = () => {
  alertTimeoutID = setTimeout(
    alert,
    3000,
    "Alert! - You have pressed the show button 3 seconds ago!"
  );
};

const cancelAlert = () => {
  clearTimeout(alertTimeoutID);
};

let calcCounterTimeoutID;
let counter = 0;
let timer = 1000;
let idPrefix = "counter";
let idPostfix;

const calculateCounter = () => {
  calcCounterTimeoutID = setTimeout(() => {
    counter++;
    if (counter < 9) {
      idPostfix = counter;
      document.getElementById(`${idPrefix}${idPostfix}`).innerHTML = counter;
    } else {
      document.getElementById("errmsg").innerHTML =
        "All calculations now completed - Click Reload to start again";
      document.getElementById("reload").style.display = "flex";
    }
  }, timer);
};

const reloadPage = () => {
  location.reload();
};
