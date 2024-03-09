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
    const newLiText=document.createTextNode(fruitToAdd.value)
    newLi.appendChild(newLiText)
    newLi.className="fruit"
    // del button
    const delBtn=document.createElement("button")
    const delBtnText=document.createTextNode("x")
    delBtn.appendChild(delBtnText)
    delBtn.className=("delete-btn")
    newLi.appendChild(delBtn)
    // edit button
    const button = document.createElement("button")
    const buttonText=document.createTextNode("Edit")
    button.appendChild(buttonText);
    button.setAttribute("class", "edit-btn");
    newLi.appendChild(button)
    // fruit added
    fruits.appendChild(newLi)
    }
)
fruits.addEventListener("click",function (event){
    if(event.target.classList.contains("delete-btn")){
        const fruitToDel=event.target.parentElement;
        fruits.removeChild(fruitToDel)
    }
})