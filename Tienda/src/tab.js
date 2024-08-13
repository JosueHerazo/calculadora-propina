export default class Tabs {
    constructor(idElemento){
        this.tabs = document.getElementById(idElemento);
        this.nav = this.tabs.querySelector(".tabs")
        this.nav.addEventListener("click", (e) => {
            // Comprobamos que el elemento que clickeamos tenga la clase de tabs__links
            if([...e.target.classList].includes("tabs__button")){
                // obtenemos la tab que queremos mostrar
                const tab = e.target.dataset.tab;

                if(this.tabs.querySelector(".tab--active")){
                    this.tabs.querySelector(".tab--active").classList.remove("tab--active")
                }
                if(this.tabs.querySelector(".tabs__button--active")){
                    this.tabs.querySelector(".tabs__button--active").classList.remove("tabs__button--active")
                }
                // agregamos la clase active al tab.
                this.tabs.querySelector(`#${tab}`).classList.add("tab--active");
                // agregamos la clase active al boton.
                e.target.classList.add("tabs__button--active")

            }
        })
    }
}