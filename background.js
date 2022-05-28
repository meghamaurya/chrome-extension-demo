let color = '#00BFFF';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cdeepskyblue', `color: ${color}`);
});