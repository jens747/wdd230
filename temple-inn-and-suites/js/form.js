const chkHome = document.querySelector("#residence");
const msgAlert = document.querySelector("#msg-alert");
const chkPhone = document.querySelector("#phone-num");
const phnAlert = document.querySelector("#phn-alert");

function chkInput() {
  let regex = chkHome.value;
  if (regex.match(/^[-a-zA-Z() ]+$/)) {
    msgAlert.style.display = "none";
    msgAlert.textContent = "";
  } else {
    msgAlert.style.display = "block";
    msgAlert.style.textAlign = "center";
    msgAlert.style.background = "var(--redco)";
    msgAlert.style.border = ".4rem double white";
    msgAlert.style.boxShadow = "2px 2px 4px darkgray";
    msgAlert.innerHTML = `***WARNING*** <br>Please enter alphabetical characters only.`;
    chkHome.focus();
    chkHome.value = "";
  }
}

function chkPhoneInput() {
  let phnreg = chkPhone.value;
  if (
    phnreg.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
  ) {
    phnAlert.style.display = "none";
    phnAlert.textContent = "";
  } else {
    phnAlert.style.display = "block";
    phnAlert.style.textAlign = "center";
    phnAlert.style.background = "var(--redco)";
    phnAlert.style.border = ".4rem double white";
    phnAlert.style.boxShadow = "2px 2px 4px darkgray";
    phnAlert.innerHTML = `***WARNING*** <br>Please enter a valid phone number.`;
    chkPhone.focus();
    chkPhone.value = "";
  }
}

chkHome.addEventListener("focusout", chkInput);
chkPhone.addEventListener("focusout", chkPhoneInput);
