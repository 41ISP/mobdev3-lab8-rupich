const songsContaner = document.querySelector(".tracks-list")
const artistsContaner =document.querySelector("artists")
async function fetchData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()

    for (let i = 0; i < res2.length; i++) {
        const songsDiv = document.createElement("div")
        songsDiv.classList.add("song")
        const spanSongs= document.createElement("h5")
        const anchorSongs = document.createElement("span")
        spanSongs.textContent = res2[i].track.name
        
        anchorSongs.textContent = res2[i].track.artists


        songsDiv.appendChild(spanSongs)
        songsDiv.appendChild(anchorSongs)
        songsContaner.appendChild(songsDiv)
    }
    
}
fetchData()