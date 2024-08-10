const selectOpt = document.querySelectorAll("select");
const fromCurrInput = document.querySelector("#fromCurr");
const toCurrInput = document.querySelector("#toCurr");
const currFromMsg = document.querySelector(".currFromMsg");
const currToMsg = document.querySelector(".currToMsg");
const excTime = document.querySelector(".excTime");
const fromCurr = document.querySelector("#fromCurr");
const toCurr = document.querySelector("#toCurr");
const toFrom = document.querySelector("#toFrom");
const currFrom = document.querySelector("#currFrom");
const url = `https://openexchangerates.org/api/latest.json?app_id=3094637fe10d485c9bb240ea5d654d77`;



const fetchExchangeRate = async (base, to, value)=>{
    base = base.toUpperCase();
    to = to.toUpperCase();
    let exc = await fetch(url);
    let rate = await exc.json();
    if(base === "USD"){
        if(value){
            finalRate = rate.rates[to]* value;
        }
        else{
            finalRate = rate.rates[to];
        }
        
    }else{
        finalRate = ( rate.rates[to] / rate.rates[base] ) * value;
    }
    
    console.log(rate.rates);

    return finalRate;
}

const fetchExchangeRateForIn = async (base, to, value)=>{
    base = base.toUpperCase();
    to = to.toUpperCase();
    let exc = await fetch(url);
    let rate = await exc.json();
    
    if(to === "USD"){
        
           finalRate = 1 / rate.rates[base]
            
        
    }
    else{
        finalRate = ( rate.rates[to] / rate.rates[base] );
    }
    
    //console.log(rate.rates);

    return finalRate;
}

const currentTime = ()=>{
    const d = new Date();
    let time = d.getTime();
    return d;
}

const getCountryName = (cd)=>{
    for(let code in countryList){
        if(code === cd){
            return countryList[code];
        }
    }
}
//Showing all codes in dropdown
for(let select of selectOpt){
    
    for(let code in countryList){
        let option = document.createElement("option");
        option.value= code;
        option.innerText = countryList[code];
        if(code === "USD" && select.name === "currFrom"){
            option.selected="selected";
        }else if(code === "PKR" && select.name === "toFrom"){
            option.selected="selected";
        }
        select.append(option);
    }
    
    //On change of currency, fetching data
    select.addEventListener("change", (e)=>{
        
            let base = getCountryName(currFrom.value);
        let to = getCountryName(toFrom.value);
        console.log("curr from val", currFrom.value);
    console.log("to from val", toFrom.value);
    console.log("to curr", toCurr.value);
        let rate = fetchExchangeRate( toFrom.value, currFrom.value, fromCurr.value);
        
       
        rate.then((change)=>{
           
            currFromMsg.innerText = `${fromCurr.value} ${base} equals`;
            currToMsg.innerText = `${change} ${to}`;
            toCurr.value = change;
            excTime.innerText = currentTime();
        });
        
    });
}



window.addEventListener("load", (event) => {
    let base = getCountryName(currFrom.value);
    let to = getCountryName(toFrom.value);
    let rate = fetchExchangeRate(currFrom.value, toFrom.value, toCurr.value);
    
    //console.log("curr from val", currFrom.value);
    //console.log("to from val", toFrom.value);
    rate.then((change)=>{
        
        currFromMsg.innerText = `${fromCurr.value} ${base} equals`;
        currToMsg.innerText = `${change} ${to}`;
        toCurr.value = change;
        excTime.innerText = currentTime();
    });
    
});

fromCurrInput.addEventListener("input", (e)=>{
    let base = getCountryName(currFrom.value);
    let to = getCountryName(toFrom.value);
    
    let rate = fetchExchangeRate(currFrom.value, toFrom.value, fromCurr.value);
    
    //console.log("curr from val", currFrom.value);
    //console.log("to from val", toFrom.value);
    rate.then((change)=>{
        
        currFromMsg.innerText = `${fromCurr.value} ${base} equals`;
        currToMsg.innerText = `${change} ${to}`;
        toCurr.value = change;
        excTime.innerText = currentTime();
    });
});

toCurrInput.addEventListener("input", (e)=>{
    let base = getCountryName(currFrom.value);
    let to = getCountryName(toFrom.value);
    
    let rate = fetchExchangeRateForIn(  toFrom.value, currFrom.value, fromCurr.value);
    
    //console.log("curr from val", currFrom.value);
    //console.log("to from val", toFrom.value);
    rate.then((change)=>{
        console.log(change);
        fromCurr.value = change;
        currFromMsg.innerText = `${change} ${base} equals`;
        currToMsg.innerText = `${toCurr} ${to}`;
        
        excTime.innerText = currentTime();
    });
});


