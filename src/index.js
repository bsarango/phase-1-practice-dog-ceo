console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function dogImages(imgUrl){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        //console.log(data)
        addDogImgToDOM(data.message)})  //The message is what is holds the url. The 'data' has the message (URL) and success response
}

function dogBreeds(breedUrl){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data =>{
        //console.log(data)
        addBreedToDOM(data.message)
    })
}

function addDogImgToDOM(dogs){
    const imgContainer = document.querySelector("#dog-image-container")
    dogs.forEach(img=>{  //img parameter is the individial dog img in array dog which has all the imgs
        const newDogImg = document.createElement("img")
        newDogImg.src=img //setting the property of src to the url - which img
        imgContainer.appendChild(newDogImg)
    })   
 }

 function addBreedToDOM(dogs){
    const ul = document.querySelector("#dog-breeds")
    for(const breedName in dogs){
        const newDogBreed = document.createElement("li")
        newDogBreed.innerText = breedName
        ul.appendChild(newDogBreed)
        newDogBreed.addEventListener("click", changeColorOfBreedName)
    }
 }

 function changeColorOfBreedName(e){
    console.log(e.target) 
    e.target.style.color = "Blue"
 }


dogImages(imgUrl)

dogBreeds(breedUrl) //

selectLetter()

// const allLi = document.querySelectorAll("li")   //NodeList returns empty
// console.log(allLi)  //Empty Node list
// for(const li of allLi){
//     console.log(li)
//     li.addEventListener("click", changeColorOfBreedName)
// }

function selectLetter(){    
    dropDownMenuValues = document.querySelector("#breed-dropdown")
    console.log(dropDownMenuValues)
    dropDownMenuValues.addEventListener("change", (e)=>{
        selectBreedByLetter(e.target.value)
    })
//     dropDownMenuValues.forEach(menuValue=>{
//         console.log(menuValue)
//         menuValue.addEventListener("click",(e)=>{
//             console.log(e.value)
//             selectBreedByLetter(e.value)
//         })
//     })
 }

function selectBreedByLetter(letter){ //use orignal list to filter out 
    console.log(letter)
    const dogBreedNames = document.querySelectorAll("#dog-breeds>li")
    dogBreedNames.forEach(dogName=>{
        dogName.style.display = ''
        if(dogName.innerText.charAt(0)!== letter){
            dogName.style.display = 'none'  //Removes undesired elements from DOM
        }
        
    })
}