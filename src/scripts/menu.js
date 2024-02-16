var menuItem = document.querySelectorAll(".item-menu");

function selectLink(){
    menuItem.forEach(item => {
      item.classList.remove("ativo");
    });

    this.classList.add("ativo");
};

menuItem.forEach(item => {
    item.addEventListener("click", selectLink);
});

var menuItemAtivo = document.querySelector('.item-menu.ativo');
if (menuItemAtivo) {
    var link = menuItemAtivo.querySelector('a');
    if (link) {
      link.addEventListener("click", event => {
        event.preventDefault();
      })
    }
}

var btnMenuLateral = document.querySelector(".btn-expandir-menu");
var menuLateral = document.querySelector(".menu-lateral");
var screanDisabled = document.querySelector(".container-disabled");

btnMenuLateral.addEventListener("click", function () {
  menuLateral.classList.toggle("ativo");
  if (menuLateral.classList.contains("ativo")) {
    screanDisabled.classList.add("ativo");
  } else {
    screanDisabled.classList.remove("ativo")
  }
});

function menuLateralScreanDisable(){
  menuLateral.classList.remove("ativo");
  screanDisabled.classList.remove("ativo")
}

screanDisabled.addEventListener("click", menuLateralScreanDisable);
var messageBox = document.querySelector(".message-box"); 

messageBox.querySelector(".icon").addEventListener("click", function () {
    messageBox.classList.remove("ativo")
    screanDisabled.addEventListener("click", menuLateralScreanDisable)
    screanDisabled.classList.remove("ativo-box")
})
