function inject(path, type) {
  if(type == "file") {
    chrome.tabs.insertCSS({file: path, runAt: "document_end"});
  } else {
    chrome.tabs.insertCSS({code: path, runAt: "document_end"});
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  inject("./theme/black.css", "file");
})