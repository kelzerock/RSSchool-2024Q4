import { Component } from "./node";
import "../assets/style/timer.scss";

class Timer extends Component {
  constructor() {
    super({ tag: "div", className: "timer", text: "00:00" });
    this.interval = "";
    this.status = false;
  }

  startTimer(sec = 0) {
    this.show();
    if (this.interval) clearInterval(this.interval);
    this.status = true;
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    this.setTextContent(
      `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`
    );
    const interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      this.getNode().textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
    }, 1000);
    this.interval = interval;
  }

  getDuration() {
    const [minutes, seconds] = this.getNode()
      .textContent.split(":")
      .map(Number);
    return minutes * 60 + seconds;
  }

  stopTimer() {
    this.status = false;
    const durationInSeconds = this.getDuration();
    clearInterval(this.interval);
    return durationInSeconds;
  }

  resetTimer() {
    this.stopTimer();
    this.getNode().textContent = "00:00";
  }

  getStatus() {
    return this.status;
  }
}

const timer = new Timer();
timer.hide();
export { timer };
