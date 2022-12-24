const filterElement = document.querySelector('header input')

const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)
// filter function
function filterCards() {
    // if the filter is not empty
    if(filterElement.value != '') {
                // for each card of cards 
        for (let card of cards) {
        // get card heading (title)
        let title = card.querySelector('h2')
        // tranform to lower case
        title = title.textContent.toLowerCase()
        console.log(title)
        // transform filter text to lower case
        // if card title does not include the filter text
          // hide the card element
        // else
          // unhide the card element
    // else
      // for each card of cards
        // unhide the card element
      }
    } else {
    // for each card of cards
        // geat card heasdding
        //transform to lower case 
    }
}
