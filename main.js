let clicks = 1
let filled = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90]
let res = 0
let lastClick = null
let toggle = 0

function mark(event) {
    clicks += 1
    let box = (event.target.id).slice(3)
    if (clicks % 2 == 0) {
        var now = "x" + box
    }
    else {
        var now = "o" + box
    }
    if ((filled[box] != (1 || 2)) && (now.length != 1) && (lastClick != box)) {
        playAudio(tap)
        let ele = document.getElementById(now)
        ele.style.display = "block"
        filled[box] = now.slice(0, 1) == 'x' ? 1 : 0
        filled[1] == filled[2] && filled[2] == filled[3] || filled[1] == filled[4] && filled[4] == filled[7] || filled[3] == filled[6] && filled[6] == filled[9] ||
        filled[7] == filled[8] && filled[8] == filled[9] || filled[2] == filled[5] && filled[5] == filled[8] || filled[1] == filled[5] && filled[5] == filled[9] ||
        filled[4] == filled[5] && filled[5] == filled[6] || filled[3] == filled[5] && filled[5] == filled[7] ? res = true : clicks == 10 ? reset("game tied") : null

        res == true ? reset("player " + now.slice(0, 1) + " wins") : null
    }
    else{
        clicks-=1
    }
    lastClick = box
}

function reset(result){
    toggle_pop_box(result)
    let elements = document.querySelectorAll(".e")
    elements.forEach(function(element){
        element.style.display = "none"
    })
    clicks = 1
    filled = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90]
    res = false
    lastClick = null
}
function toggle_pop_box(result){
    var popup = document.getElementById("pop")
    var popupBox = document.getElementById("popbox")
    var message = document.getElementById("message")
    if (toggle == 0){
        popup.style.display = "block"
        popupBox.style.display = "flex"
        message.textContent = result
        toggle = 1
        result.includes("tie")? playAudio(tie):playAudio(win)
    }
    else{
        popup.style.display = "none"
        popupBox.style.display = "none"
        toggle = 0
    }


}
function playAudio(audio){
    audio.play()
}

function openTab(){
    window.open('https://app-ratings.onrender.com/ratings/?appName=tic-tac-toe', '_blank')
}