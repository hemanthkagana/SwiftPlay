chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setSpeed") {
    setVideoSpeed(request.speed);
  }
});

function setVideoSpeed(speed) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.playbackRate = speed;
  });
}

chrome.storage.local.get(null, (result) => {
  const tabId = result.currentTabId;
  if (tabId) {
    const speed = result[`speed_${tabId}`] || 1.0;
    setVideoSpeed(speed);
  }
});
