const inputButton = document.getElementById("inputButton");
const textInput = document.getElementById("enterInput");
const siteListText = document.getElementById("siteList");


let savedSites = [];


inputButton.addEventListener("click", function() {
    if(textInput.value != "")
    {
        renderNewLead();
        textInput.value = "";
        
    }

    else
    {

    }
});

function renderNewLead() 
{    
    let newItem = `
        <li> 
            <a target="_blank" href="${textInput.value}"> ${textInput.value} </a>
        </li>`;

    siteListText.innerHTML += newItem;
}

/*
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
*/



