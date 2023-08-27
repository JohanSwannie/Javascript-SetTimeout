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
let timer = 1;
let idPrefix = "counter";
let idPostfix;
const countersDad = document.querySelector(".counters");

const calculateCounter = () => {
  calcCounterTimeoutID = setTimeout(() => {
    counter++;
    if (counter < 21) {
      const pElement = document.createElement("p");
      idPostfix = counter;
      pElement.setAttribute("id", `${idPrefix}${idPostfix}`);
      pElement.textContent = counter;
      countersDad.appendChild(pElement);
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
