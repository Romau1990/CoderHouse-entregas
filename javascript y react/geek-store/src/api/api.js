export default async function getApi(){
    let resp = await fetch("https://api.mobygames.com/v1/games?genre=1&genre=2&genre=3.");
    let formatedResp = await resp.json();
    return formatedResp; 
}