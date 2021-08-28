const restCountries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response=>Response.json())
    .then(data=>displayCounry(data))
}
const displayCounry=country=>{
    const countriesDiv=document.getElementById('countries');
    country.forEach(contry => {
        console.log(contry);
        const div=document.createElement('div');
        div.classList.add('country-div')
        div.innerHTML=`<h1>${contry.name}</h1>
        <p>c${contry.capital}</p>
        <img width="200px" src="${contry.flag}"
        <button onclick="loadCountyDetail(${contry.name})"><button>`        
        countriesDiv.appendChild(div);

    });

}

restCountries();
