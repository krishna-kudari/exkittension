console.log('background script running');

chrome.action.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    console.log(tab);
    let msg={
      txt:'hello'
    }
    chrome.tabs.sendMessage(tab.id,msg)
    
}
// chrome.action.onClicked.addEventListener((message, sender, sendResponse) => {
//     // 2. A page requested user data, respond with a copy of `user`
//     if (message === 'get-user-data') {
//       sendResponse(user);
//     }
//   });