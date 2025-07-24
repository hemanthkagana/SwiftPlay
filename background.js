chrome.runtime.onInstalled.addListener(() => {
  console.log('HTML Video Speed Controller installed');
});

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.storage.local.set({ currentTabId: activeInfo.tabId });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.storage.local.set({ currentTabId: tabId });
  }
});
