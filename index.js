// edit btn for each fruit 
const fruitItems=document.querySelectorAll(".fruit")
for (let i=0;i<fruitItems.length;i++){
const button = document.createElement("button")
const buttonText=document.createTextNode("Edit")
button.appendChild(buttonText);
const fruitItems=document.querySelectorAll(".fruit")
button.setAttribute("class", "edit-btn");
fruitItems[i].appendChild(button)
}
// add a fruit
const form = document.querySelector("form")
const fruits=document.querySelector(".fruits")

form.addEventListener("submit",function (event){
    event.preventDefault()
    //selct the input elemnt where name is enterd
    const fruitToAdd= document.getElementById("fruit-to-add")
    // created an li
    const newLi= document.createElement("li")
    newLi.innerHTML= fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>'
    fruits.appendChild(newLi)
}

)
//delete fruit
fruits.addEventListener("click",function (event){
    if(event.target.classList.contains("delete-btn")){
        const fruitToDel=event.target.parentElement;
        fruits.removeChild(fruitToDel)
    }
})