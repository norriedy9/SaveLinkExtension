const inputButton = document.getElementById("inputButton");
const textInput = document.getElementById("enterInput");
const siteListText = document.getElementById("siteList");
const clearButton = document.getElementById("deleteButton");


let savedSites = [];



let stuffFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(stuffFromLocalStorage != null)
{
    savedSites = stuffFromLocalStorage;
    renderCurrLeads();

}
console.log(stuffFromLocalStorage);

inputButton.addEventListener("click", function() {
    if(textInput.value != "")
    {
        renderNewLead();
        savedSites.push(textInput.value);
        textInput.value = "";

        //keeps things staying between uses
        localStorage.setItem("myLeads", JSON.stringify(savedSites));


        console.log(localStorage.getItem("myLeads"));
    }

    else
    {

    }
});

clearButton.addEventListener("click", function() {
    localStorage.clear();
    savedSites = [];
    renderCurrLeads();
})

function renderNewLead() 
{    
    let newItem = `
        <li> 
            <a target="_blank" href="${textInput.value}"> ${textInput.value} </a>
        </li>`;

    siteListText.innerHTML += newItem;
}


function renderCurrLeads()
{
    let allItems = "";
    for(let i = 0; i < savedSites.length; i++)
    {
        allItems += `
        <li>
            <a target="_blank" href="${savedSites[i]}"> ${savedSites[i]} </a>
        </li>`;
    }
    siteListText.innerHTML = allItems;
}




