
async function chamarApi() {
    const card = document.getElementById("movie-grid")

    const url = "https://rickandmortyapi.com/api/character"
    const resp = await fetch(url)
    const dados = await resp.json()
    const personagens = dados.results
    
    console.log(personagens)
    
    for(let i = 0;i <= personagens.length; i++){
        const fazerCard = document.createElement("div")
        
        fazerCard.innerHTML=`
            <img src="${personagens[i].image}" alt="Minha Figura">
            <h1>id: ${personagens[i].id}</h1>
            <h2>Name: ${personagens[i].name}</h2>
            <h3>Status:${personagens[i].status}</h3>
            <p>SEX: ${personagens[i].gender}</p>
        `        
        card.appendChild(fazerCard)
        console.log(card)
    }
}

chamarApi()