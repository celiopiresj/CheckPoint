var containerTab = document.querySelector(".container-tab")
var tabs = containerTab.querySelectorAll(".tab")
var configuracoes = document.querySelectorAll(".container-pagina .pagina")

tabs.forEach(items => {
    items.addEventListener("click", function () {
        tabs.forEach(item => {
            item.classList.remove("ativo");
        })

        configuracoes.forEach(item => {
            item.classList.remove("ativo");
            if (item.classList.contains(this.dataset.pagina)) {
                item.classList.add("ativo");
            }
        })

        this.dataset.pagina
        this.classList.add("ativo");
    })

})

var screanDisabled = document.querySelector(".container-disabled");
var btnAddCargo = document.querySelector("#btn-add-cargo"); 
var messageBox = document.querySelector(".message-box"); 

btnAddCargo.addEventListener("click", () => {
    screanDisabled.removeEventListener("click", menuLateralScreanDisable)
    messageBox.classList.add("ativo")
    screanDisabled.classList.add("ativo-box")
})
