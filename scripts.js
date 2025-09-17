const songsContaner = document.querySelector(".tracks-list")
const statesContaner = document.querySelector(".stats")
async function fetchData() {
    const res1 = await fetch("https://kitek.ktkv.dev/songs.json")
    const res2 = await res1.json()

    let runtime = 0
    for (let i = 0; i < res2.length; i++) {
        const tracks = document.createElement("li");
        tracks.classList.add("track-item");
        const songs = res2[i].track
        const ListArts = songs.artists
        const ListImg = songs.album.images

        const number = document.createElement("div")
        number.classList.add("track-number")
        number.textContent = i + 1
        const mainSongs = document.createElement("div")
        mainSongs.classList.add("track-main")
        const infoSongs = document.createElement("div")
        infoSongs.classList.add("track-info")
        const nameSongs = document.createElement("div")
        nameSongs.classList.add("track-name")
        nameSongs.textContent = songs.name

        const authorSongs = document.createElement("div")
        const authorNames = ListArts.map(artist => artist.name)
        authorSongs.textContent = authorNames
        const albumSongs = document.createElement("div")
        albumSongs.textContent = songs.album.name

        const durationSongs = document.createElement("div")
        durationSongs.classList.add("track-meta");
        const timeSong = document.createElement("div")
        timeSong.classList.add("duration")
        const time = songs.duration_ms
        timeSong.textContent = (time / 60000).toFixed(2)

        const popularSongs = document.createElement("div")
        popularSongs.classList.add("popularity");
        popularSongs.textContent = "♪ " + songs.popularity
        
        const imageSongs = document.createElement("img")
        imageSongs.classList.add("album-art")
        const imgTrack = ListImg.map(Image => Image.url)
        imageSongs.src = imgTrack[0]

        durationSongs.appendChild(timeSong)
        durationSongs.appendChild(popularSongs)
        infoSongs.appendChild(nameSongs)
        infoSongs.appendChild(authorSongs)
        infoSongs.appendChild(albumSongs)
        mainSongs.appendChild(imageSongs)
        mainSongs.appendChild(infoSongs)
        tracks.appendChild(number)
        tracks.appendChild(mainSongs)
        tracks.appendChild(durationSongs)
        songsContaner.appendChild(tracks)
        runtime += time;
    }
    console.log(runtime)
    const hours = Math.floor(runtime / 3600000)
    const minutes = Math.floor((runtime % 3600000) / 100000)
    const string = document.createElement("div")
    string.classList.add("stat")
    string.textContent = "Треков: " + res2.length
     + "  Общая длительность: " + hours + " ч " + minutes + " мин "
    statesContaner.appendChild(string);

}
fetchData()