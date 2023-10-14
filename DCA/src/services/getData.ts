export async function DataCat() {
    try {
        const dataCat = await fetch ('https://cataas.com/cat/says/Ni modo se intento :c').then (res => res)
        console.log(dataCat.url)
        return dataCat
    } catch (error) {
        console.error()
    }
}

export async function DataFrase() {
    try {
        const dataCat = await fetch ('https://catfact.ninja/fact').then (res => res.json())
        return dataCat
    } catch (error) {
        console.error()
    }
}