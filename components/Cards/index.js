// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    // console.log(response.data.articles)
    // console.log(Object.keys(response.data.articles))
    // console.log(Object.values(response.data.articles.javascript))
    // const keys = Object.keys(response.data.articles)
    // let number = keys.forEach(() =>{
    //     return number
    // })
    // const arties = Object.values(response.data.articles.${number}) 
    
    //     arties.forEach(items => {
    //     cardSpot.append(createCard(items))
    // })

    
    
    
    const javascript = Object.values(response.data.articles.javascript)
    const bootstrap = Object.values(response.data.articles.bootstrap)
    const technology = Object.values(response.data.articles.technology)
    const jquery = Object.values(response.data.articles.jquery)
    const node = Object.values(response.data.articles.node)

    javascript.forEach(items => {
        cardSpot.append(createCard(items))
    })
    bootstrap.forEach(items => {
        cardSpot.append(createCard(items))
    })
    technology.forEach(items => {
        cardSpot.append(createCard(items))
    })
    jquery.forEach(items => {
        cardSpot.append(createCard(items))
    })
    node.forEach(items => {
        cardSpot.append(createCard(items))
    })
})
.catch(error => {
    console.log(`The data was not returned`, error)
})

function createCard(info){
    const newCard = document.createElement(`div`),
          artHead = document.createElement(`h1`),
          autInfo = document.createElement(`div`),
          imgCont = document.createElement(`div`),
          autImg = document.createElement(`img`),
          autName = document.createElement(`span`);

    newCard.classList.add(`card`);
    artHead.classList.add(`headline`);
    autInfo.classList.add(`author`);
    imgCont.classList.add(`img-container`);


    //text content goes here
    artHead.textContent = info.headline;

    autImg.src = info.authorPhoto;

    autName.textContent = info.authorName;

    //append goes here

    newCard.append(artHead);
    newCard.append(autInfo);
    autInfo.append(imgCont);
    autInfo.append(autName);
    imgCont.append(autImg);


    //return goes here
    return newCard

} 

const cardSpot = document.querySelector(`.cards-container`)