export enum AttributeCard{
    "img" = "img",
    "frase" = "frase"
}

export default class Card extends HTMLElement{
    img: string = ""
    frase: string = ""

    static get observedAttributes(){
        const attrs: Record<AttributeCard,null> = {
            img: null,
            frase:null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName: AttributeCard, _:unknown, newValue: string){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
        this.render()
    }
    constructor() {
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <img class="img" src="${this.img}" alt="">
            <p class="text">${this.frase}</p>
            </section>
            `
        }
    }
}

customElements.define("my-card", Card)