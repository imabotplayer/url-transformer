let output = document.querySelector(".websocket");
let httpslink = null;
let button = document.querySelector("#copyws");
let wss = null;

document.querySelector("#acceptcookies").addEventListener("click", function () {
    document.querySelector(".cookies").style.animation = "hidecookies 0.5s linear";
    setTimeout(() => {
        document.querySelector(".cookies").style.display = "none";
    }, 500);
});

function copyWSS() {
    /* Get the text field */
    var copyText = document.getElementById("wss");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}

document.querySelector("#copyws").addEventListener("click", function () {
    httpslink = document.querySelector("#httpslink").value;
    if (httpslink.length == 0) {
        console.log("ERROR: NO LINK GIVEN");
    } else {
        wss = httpslink.replace("https://", "wss://");
        document.querySelector(".websocket").setAttribute("value", wss);
        document.querySelector("#copyws").innerHTML = "Copied wss to Clipboard";
        copy();
    }
});

function copy() {
    var copyText = document.querySelector("#wss");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#wss").addEventListener("click", copy);
