function loadQueotoes(){
    fetch('https://api.kanye.rest/')
    .then(Response=>Response.json())
    .then(data =>displayQuotes(data))
}

const displayQuotes=data=>{
    const blockquetoes=document.getElementById('blockqueto');
    blockquetoes.innerText=data.quote;
}

loadQueotoes();