import "../types/dataType"
import "../components/export"
import { AttributeCard } from "../components/card/card"
import { DataCat, DataFrase } from "../services/getData"
import { DataType } from "../types/dataType"

class Dashboard extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    async connectedCallback(){
        const dataImg = await DataCat()
        const dataFra = await DataFrase()
        this.render(dataImg?.url, dataFra)
    }

    render(dataImg: any, dataFra: any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ''

            const text = this.ownerDocument.createElement('h1')
            text.innerText = "Cats Facts"
            this.shadowRoot?.appendChild(text)

            const card = this.ownerDocument.createElement("my-card")
            card.setAttribute(AttributeCard.img, dataImg)
            this.shadowRoot?.appendChild(card)
        
            const card1 = this.ownerDocument.createElement("my-card")
            card1.setAttribute(AttributeCard.frase, dataFra.fact)
            this.shadowRoot?.appendChild(card1)

            const button = this.ownerDocument.createElement('button')
            button.innerText = "More cats :D"
            button.addEventListener('click', async () => {
                const dataImg = await DataCat()
                const dataFra = await DataFrase()
                 this.render(dataImg?.url, dataFra)

            })
            this.shadowRoot?.appendChild(button)
    }
}

customElements.define("my-dash", Dashboard)