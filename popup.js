document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    chrome.storage.local.get([`speed_${tabId}`], (result) => {
      const speed = result[`speed_${tabId}`] || 1.0;
      document.getElementById('speedInput').value = speed;
    });
  });
});

document.getElementById('setSpeedButton').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const speed = parseFloat(document.getElementById('speedInput').value);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    chrome.storage.local.set({ [`speed_${tabId}`]: speed }, () => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: setVideoSpeed,
        args: [speed]
      });
    });

    // Create the ripple effect
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.className = 'ripple';
    button.appendChild(ripple);

    // Remove the ripple after animation
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  });
});

function setVideoSpeed(speed) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.playbackRate = speed;
  });
}
