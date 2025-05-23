let table = document.getElementById("table")
let form = document.getElementById("form")

let fetchCountry = async(name) =>{
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ab96b1a5bed044d5920135013252105&q=${name}&aqi=no`)
    let res = await response.json()
    return res
};

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    let userValue = e.target.input.value;
    if(userValue == ""){
        alert("please enter country name")
    }else{
        fetchCountry(userValue)
        .then((res)=>{
            table.innerHTML = `
               <h2>${res.location.name}</h2>
        <h1>${res.location.country}</h1>
        <p>Temp ${res.current.temp_c} °C</p>
        <p>${res.current.last_updated}</p>
            `
        })
    }
    form.reset();
} )

window.addEventListener("load", ()=>{
  fetchCountry("Karachi")
  .then((res) =>{
    table.innerHTML = `
        <h2>${res.location.name}</h2>
        <h1>${res.location.country}</h1>
        <p>Temp ${res.current.temp_c} °C</p>
        <p>${res.current.last_updated}</p>
    `;
  })  
  .catch((err) =>{
    console.log(err);
  });
})
