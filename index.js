const discord = "infinixius#5875"

for (x of document.getElementsByClassName("icon")){
    x.style.paddingTop = screen.availHeight/2+"px"
}
document.getElementById("leftPad").style.paddingLeft = screen.availWidth/2-(32*5)+"px"

if (!navigator.clipboard) {
    document.getElementById("notification").innerText = discord
  }
  

function showDiscord() {
    console.log("lol")
    document.getElementById("notification").style.animation="dscglow_in 2s linear 2 alternate";
    navigator.clipboard.writeText(discord)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    setTimeout(function(){document.getElementById("notification").style.animation=""},4000)
}