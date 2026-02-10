# ⏱️ WebTimer JS



A lightweight, accurate stopwatch built with JavaScript, HTML5, and CSS. 







## 🚀 Features

* **High Precision:** Uses `Date.now()` to ensure time stays accurate even if the browser slows down.

* **Smooth UI:** Updates every 10ms for a fluid visual experience.

* **Retro Design:** Features a digital-style display with a glowing "DS-Digital" font.

* **Responsive:** Fully functional on both desktop and mobile devices.



---



## 📂 Project Versions



This repository contains two different logic implementations:



### 1. Classic Version (Main Branch)

The standard 3-button interface:

* **START:** Begins the timer.

* **STOP:** Pauses the timer and saves the elapsed time.

* **RESET:** Clears all data and returns to 00:00:00.



### 2. Toggle Version (Branch: `WebTimer-v2`)

A modern, minimalist approach using a **State-Based Toggle**:

* **START/STOP (Dynamic):** A single smart button that changes its color (Green/Red) and text based on whether the timer is running.

* **RESET:** Standard reset functionality.

* *Uses a "Lock" mechanism (`isRunning` flag) to prevent multiple intervals from running simultaneously.*



---



## 🛠️ Installation & Usage



1. **Clone the repository:**

   ```bash

   git clone https://github.com/The4ing/web-timer.git
