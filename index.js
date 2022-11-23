const modal = document.querySelector(".modal")
const openBtn = document.querySelector(".share-btn-open");


function toggleModal() {
    modal.classList.toggle("show-modal");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


openBtn.addEventListener("click", toggleModal);


