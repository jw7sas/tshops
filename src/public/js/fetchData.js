const fetchData = async (url) => {
    const response = await fetch(url)
    console.log(response)
    if(!response.ok){
        throw new Error("Error " + url)
    }
    return await response.json()
}

async function getData(url){
    const response = await fetchData(url);
    return response;
 }
 const currency = function(number){
    return new Intl.NumberFormat('de-DE', {style: 'currency',currency: 'COP', minimumFractionDigits: 2}).format(number);
};
