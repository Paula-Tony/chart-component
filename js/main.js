const chartContainer = document.querySelector('.card__body__chart');
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date();
const currentDay = daysOfWeek[today.getDay()].toLowerCase();

fetch("../data.json")
  .then((result) => result.json())
  .then((data) => {
    let maxValue = Math.max(...data.map((obj) => obj["amount"]));
    for (let i = 0, l = data.length; i < l; i++) {
      let html = `
      <div class="day-chart">
        <span class="amount">$${data[i]["amount"]}</span>
        <div class="chart ${data[i]["day"] === currentDay ? 'current-day' : ''}" style="height: ${(data[i]["amount"] / maxValue) * 200}px"></div>
        <span class="day">${data[i]["day"]}</span>
      </div>`;
      chartContainer.innerHTML += html;
    }
  });

