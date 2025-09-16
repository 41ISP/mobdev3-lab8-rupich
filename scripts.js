const songsContaner = document.querySelector(".tracks-list")
const statesContaner = document.querySelector(".stats")
async function fetchData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()

    let runtime = 0
    for (let i = 0; i < res2.length; i++) {
        const song = res2[i].track
        const ListArts = song.album.artists
        const songsDivs = document.createElement("div")
        songsDivs.classList.add("song")
        const spanSongs = document.createElement("h3")
        spanSongs.textContent = song.name
        songsDivs.appendChild(spanSongs)

        const authorSongs = document.createElement("span")
        const authorNames = ListArts.map(artist => artist.name)
        authorSongs.textContent = authorNames
        songsDivs.appendChild(authorSongs)


        const albumSongs = document.createElement("h5")
        albumSongs.textContent = song.album.name
        songsDivs.appendChild(albumSongs)
        songsContaner.appendChild(songsDivs)
        
    }
    const string = document.createElement("div")
    string.classList.add("stat")
    string.textContent = "Треков:" + res2.length
    statesContaner.appendChild(string);

}
fetchData()