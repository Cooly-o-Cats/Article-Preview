let popButton = document.querySelector(`.share`)
let popOut = document.querySelector(`.share-pop`)

function toggleShare() {
    if( popOut.classList.contains(`active`)) {
        popOut.classList.remove(`active`)
    }
    else{
        popOut.classList.add(`active`)
    }
}

popButton.addEventListener('click', toggleShare)

