const profileSelection = document.querySelector('.signUp')
const userDetails = document.querySelector('.profile-section')


function display (userDetails) {
    userDetails.style.display = 'flex';
    userDetails.style.alignItems = 'start';
}

function hide (userDetails) {
    userDetails.style.display = 'none';
}

profileSelection.addEventListener('click' , (e) => {
    console.log("clicked ")
    if(userDetails.style.display === 'none' || userDetails.style.display === '')
        display(userDetails);
    else {
        hide (userDetails);
    }
})
