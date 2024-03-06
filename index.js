const btn = document.querySelector('#btn');
const QR = document.querySelector('#gen');
const inputArea = document.querySelector('#text-input');
const val = document.getElementById("extra-text");
val.innerText = "Here's Your Generated QR";
// If the generate button is clicked
btn.addEventListener('click', generate);


//If the user pressed the enter key instead of clicking
inputArea.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        generate();
    }
})


//function to generate the QR code
function generate() {
    const data = inputArea.value;
    if (data !== "") {
        const URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`;
        QR.src = URL;
        val.style.visibility = "visible";
        showToast("Generated Successfully", "success", 5000);
        setTimeout( function(){
        val.style.visibility = "hidden";
        },3000)
    }
    inputArea.value="";
}



/*
using arrow function

btn.addEventListener('click', () => {
    const data = inputArea.value;
    if (data !== "") {
        const URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`;
        QR.src = URL;
    }
});   */


// Adding the toast notification

let icon = { success: '<span class="material-symbols-outlined">task_alt</span>' }

const showToast = (message = "Sample Message", toastType = "info", duration = 5000) => {

    let box = document.createElement("div");

    box.classList.add("toast", `toast-${toastType}`);   //always a success toast-success

    box.innerHTML = `<div class="toast-content-wrapper"> 

					<div class="toast-icon"> ${icon[toastType]}</div> 

					<div class="toast-message">${message}</div> 

					<div class="toast-progress"></div> 

					</div>`;

    duration = duration || 5000;


    box.querySelector(".toast-progress").style.animationDuration = `${duration / 1000}s`;

    let toastAlready = document.body.querySelector(".toast");
    if (toastAlready) {
        toastAlready.remove();
    }

    document.body.appendChild(box)
}; 