# 🎬 SwiftPlay – HTML Video Speed Controller

Take full control of your streaming experience with **Swift Play** – a lightweight, minimalistic and intuitive extension that lets you **adjust the playback speed of any HTML5 video** on any website.

---

## 📸 Screenshot

![SwiftPlay Screenshot](https://github.com/hemanthkagana/SwiftPlay/blob/main/assets/image1.png)

## 🚀 Features

- 🎥 Instantly **change playback speed** of videos from the popup
- 💾 Remembers your speed preference **per tab**
- ⚡ Works on **all websites** with HTML5 videos
- 🧠 Clean and minimal UI for fast access
- 🔒 No unnecessary permissions or tracking
- 🌐 Currently works on Chromium-based browsers.

---

## 📦 Installation

### 🔧 Manual Installation

1. Download or clone this repository.
2. Open `browser-name://extensions` in your browser.
3. Enable **Developer Mode** (toggle in top right).
4. Click **"Load unpacked"** and select the extension folder.
5. Swift Play is now active – click the icon to get started!

---

## 🛠️ How It Works

1. Click the Swift Play extension icon.
2. Enter your desired video speed (e.g., `1.5`, `0.75`, `2.0`).
3. Hit **Set Speed** – and Done! All videos on the page adjust instantly.

> Example speeds:
> - `0` = Lowest possible speed (video freezes)
> - `0.5`   = Half speed (slow motion)
> - `1.0`   = Normal speed
> - `2.0`   = Double speed
> - `16.0`  = Highest possible speed


| Browser           | Practical Speed Range     |
| ---------------   | ------------------------- |
| Chrome (Chromium) | `0.0625` – `16.0`         |
| Firefox           | `0.25` – `4.0` (stable)   |
| Safari            | May cap at `2.0` or `4.0` |
| Edge (Chromium)   | `0.0625` – `16.0`         |
| Mobile Browsers   | Often more limited        |

---

## 📁 File Structure

| File            | Purpose                              |
|-----------------|--------------------------------------|
| `manifest.json` | Extension metadata & permissions     |
| `background.js` | Handles tab tracking & installation  |
| `content.js`    | Applies the speed to video elements  |
| `popup.html`    | Extension popup UI                   |
| `popup.js`      | Handles UI interaction and logic     |

---

## 🔐 Permissions

Let's keep things **minimal and secure**:
- `activeTab` – To interact with your current tab
- `scripting` – To inject script that changes video speed
- `storage` – Saves your speed preferences per tab locally to improve usability. No data is sent or stored externally.
---

## 💡 Why Use Swift Play?

Whether you're speeding through lectures, slowing down tutorials, or customizing your binge-watch pace — Swift Play is your simple and effective solution.  

[![Download](https://img.shields.io/badge/Download-Latest-blue.svg)](https://github.com/hemanthkagana/SwiftPlay/releases/latest)


---

## 🙌 Feedback & Contributions

Have ideas or issues? Feel free to open an [issue](https://github.com/hemanthkagana/SwiftPlay/issues) or contribute via pull request.  
Made with ❤️ by Hemanth Kagana.

