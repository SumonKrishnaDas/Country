const loadCountries =() =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data => displayCountry(data))




}




const countryContainer= document.getElementById('all-countries');

const displayCountry = countries =>{



countries.forEach(country =>{





    const countryDiv = document.createElement('div');

    countryDiv.classList.add('country')

    countryDiv.innerHTML=`
    
    <h3> Name:${country.name.common} </h3>
    <p>Capital: ${country.capital[0]}  </p> 
    <button onclick="loadDetails('${country.cca2}')">Details </button>
    
    
    `
countryContainer.appendChild(countryDiv)

})





}


const loadDetails = code=>{

    
    // https://restcountries.com/v3.1/alpha/{code}

const url=`https://restcountries.com/v3.1/alpha/${code}`



    console.log(url);

fetch(url)
.then(res=>res.json())
.then(data =>ShowCountryDetail(data[0]));


}

const ShowCountryDetail=country=>{


const detailContainer=document.getElementById('country-detail');


detailContainer.innerHTML=`

<h3>Name: ${country.name.common}  </h3> 
<img src="${country.flags.png }">






`


}








loadCountries();


