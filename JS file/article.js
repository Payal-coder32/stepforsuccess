// console.log("Jai shree ram");
// const approachToClick = document.querySelector('.approach');
// const approachToDisp = document.querySelector('.approach-content')
// const crossIcon = document.querySelector('.cross-icon');



// approachToClick.addEventListener('click', (e) => {
//     // e.preventDefault();
//     console.log("clicked on list item");
//     if(document.querySelector('.approach-content').style.display == 'none'){

//         document.querySelector('.approach-content').style.display = 'block';
//         // document.querySelector('.approach-content').style.transition = 'all 0.2s linear';
//         if(document.querySelector('.cross-icon').style.display == 'none')
//         {
//             document.querySelector('.cross-icon').style.display = 'block';document.querySelector('.cross-icon').style.display = 'block';
//             document.querySelector('.plus-icon').style.display = 'none';
//         }

//     }
//     else {
//         document.querySelector('.approach-content').style.display = 'none';
//     }

// })



const topicsToClick = document.querySelector('.topics-btn')
const topicToDisplay = document.querySelector('.topics-content');
const plusContentToHide  = document.querySelector('.approach-head--content');
const approachToDisp = document.querySelector('.approach-content');
const plusIcon = document.querySelector('.plus-icon');
const crossIcon = document.querySelector('.cross-icon');

function displayApproach(elemToDisplay) {
    if(elemToDisplay === topicToDisplay)
    {
        elemToDisplay.style.display = 'block';
        return;
    }
    elemToDisplay.style.display = 'block';
    plusIcon.style.display = 'none';
    crossIcon.style.display = 'block';

}

function hideApproach(elemToDisplay) {
    if(elemToDisplay === topicToDisplay)
    {
        elemToDisplay.style.display = 'none'
        return;
    }
    elemToDisplay.style.display = 'none';
    plusIcon.style.display = 'block';
    crossIcon.style.display = 'none';
}


//add event on approach section
plusContentToHide.addEventListener('click', (e) => {
    if(approachToDisp.style.display === 'none' || approachToDisp.style.display === '')
        displayApproach(approachToDisp);
    else 
        hideApproach(approachToDisp);
});

topicsToClick.addEventListener('click', (e) => {
    console.log(e.target);
    if(topicToDisplay.style.display === 'none' || topicToDisplay.style.display === '')
    displayApproach(topicToDisplay);
    else
    hideApproach(topicToDisplay);
})



// const ApproachToAddEvent = document.querySelector('.all-approach');

// ApproachToAddEvent.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log(e);
//     e.array.forEach(element => {
        
//     });
    
// })