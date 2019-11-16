"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.container = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  renderTimer() {
    const template = `
    <div class="field">
    <span class="value" data-value="days">
    11
    </span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">
    11
    </span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">
   11
    </span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">
    11
    </span>
    <span class="label">Seconds</span>
  </div>
    `;
    this.container.innerHTML = template;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  updateСClockface(time) {
    const refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      minutes: document.querySelector('[data-value="mins"]'),
      seconds: document.querySelector('[data-value="secs"]')
    };
    const dayss = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hourss = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${dayss}`;
    refs.hours.textContent = `${hourss}`;
    refs.minutes.textContent = `${mins}`;
    refs.seconds.textContent = `${secs}`;
  }

  startTimer() {
    this.timerId = setInterval(() => {
      const curentTime = Date.now();
      const deltaTime = this.targetDate - curentTime;
      this.renderTimer();
      
      this.updateСClockface(deltaTime);
    }, 1000);
  }

  init() {
    this.renderTimer();
    this.startTimer();
}
};

const backTimer = new CountdownTimer ({
  selector: "#timer-1",
  targetDate: new Date("November 29, 2019")
});

backTimer.init();