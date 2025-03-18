
let exitButtons = document.querySelectorAll(".exit");
function addEventOnButton(exitButtons){
    for (let eb of exitButtons){
        eb.addEventListener("click", (e) => {
            eb.parentElement.remove();
            console.log("log1")

        })
    }

}

addEventOnButton(exitButtons);


let addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    let inputValue = addButton.parentElement.querySelector("input").value;
    document.querySelector("#items").innerHTML += `
    <div class="w-100 p-3 d-flex justify-content-between align-items-center border">
                <h5>${inputValue}</h5>
                <button type="button" class="btn-close bg-danger py-2 px-3 exit" aria-label="Close">X</button>
    </div>
    `;
    exitButtons = document.querySelectorAll(".exit");
    addEventOnButton(exitButtons);

})
