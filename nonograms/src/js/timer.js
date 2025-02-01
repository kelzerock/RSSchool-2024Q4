import { Component } from "./node";
import "../assets/style/timer.scss";

class Timer extends Component {
  constructor() {
    super({ tag: "div", className: "timer", text: "00:00" });
    this.interval = "";
    this.status = false;
  }

  startTimer() {
    this.status = true;
    let seconds = 0;
    let minutes = 0;
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

  stopTimer() {
    this.status = false;
    const [minutes, seconds] = this.getNode()
      .textContent.split(":")
      .map(Number);
    const durationInSeconds = minutes * 60 + seconds;
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
