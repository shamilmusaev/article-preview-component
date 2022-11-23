const modal = document.querySelector(".modal")
const trigger = document.querySelector(".share-btn");

function toggleModal() {
    modal.classList.toggle("show-modal");
}


function windowOnClick(event){
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);