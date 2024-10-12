const searchBtn = document.getElementById('btnSearch')
let cardTvGirl = document.getElementById('AudioTVgirl')
const audioP = document.getElementById('audio') 
let btnPlay = document.getElementById('btnPlay')
let playOrStop = false
function searcher () {
    let searchInp = document.getElementById('search').value
    if (searchInp.includes('tv')){
        cardTvGirl.style.display = 'block'
    }
}
function playMusic () {
    if(playOrStop === false){
    audioP.play()
    playOrStop = true
    }else if (playOrStop === true){
        audioP.pause()
        playOrStop = false
    }
}
function changer (){
    if(playOrStop === false){
       btnPlay.innerText = '&#x25BA;'
    } else if(playOrStop === true){
        btnPlay.innerText = '||'
    }
}
btnPlay.addEventListener('click', playMusic, changer)
searchBtn.addEventListener('click', searcher)