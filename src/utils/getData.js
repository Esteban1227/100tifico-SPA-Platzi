const API = "https://rickandmortyapi.com/api/character/"

const getData = async (id) =>{
    const apiURL = id? `${API}${id}` : API;
    try{
        const results = await fetch(apiURL)
        const data = await results.json();
        return data
    }catch(error){
        console.error(error)
    }
}

export default getData;