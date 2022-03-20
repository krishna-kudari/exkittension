console.log("chrome extension go")

let paragraph=document.getElementsByTagName('div');
let img=document.getElementsByTagName('img');

chrome.runtime.onMessage.addListener(gotMessage);

let filenames = [
    "download1.jpg",
    "download2.jpg",
    "download3.jpg",
    "download.jpg",
    "images.jpg"

];

function gotMessage(message, sender, sendResponse) {
    // console.log(message.txt);
    if(message.txt=='hello'){
        // for (const iterator of paragraph) {
        //     iterator.style['border-radius'] = "50%"
        //     iterator.style['display'] = "none"
        //     // iterator.style['background-color'] = '#d2d3f6'
        // }
        for (const iterator of img) {
            let r=Math.floor(Math.random() * filenames.length )
            let file = filenames[r];
            let url = chrome.runtime.getURL(file);
            iterator.src = url;
            console.log("hi");
            console.log(url);
        }
        let html=document.getElementsByName('body');
        html.style['display']="none";
    }
    return Promise.resolve("Dummy response to keep the console quiet");
}