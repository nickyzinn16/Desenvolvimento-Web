// Selecao dos elementos
const openBtn = document.querySelector("#openDialog");
const closeBtn = document.querySelector("#closeDialog");
const overlayArea = document.querySelector("#overlayArea");
const sendBtn = document.querySelector("#sendBtn");
const cancelBtn = document.querySelector("#cancelBtn");

// Funcoes da interacao
function openDialog(){
    overlayArea.classList.remove("hidden");
}

function closeDialog() {
    overlayArea.classList.add("hidden");
}

openBtn.addEventListener("click", openDialog);

closeBtn.addEventListener("click", closeDialog);


overlayArea.addEventListener("click", function (event) {
    if (event.target === overlayArea) {
        closeDialog();
    }
})

sendBtn.addEventListener("click", function() {
    alert("Inscrição feita");
    closeDialog();
});

cancelBtn.addEventListener("click", function() {
    closeDialog();
});