const bars = [...document.querySelectorAll('.bar')]
const total = document.getElementById('total');


const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]


  const tot = data.reduce((acc, obj) => acc += obj.amount, 0)

  const max = data.reduce((acc, obj) => acc > obj.amount ? acc : acc = obj.amount, 0)

  bars.forEach((bar, index) => {
    const height = ((data[index].amount / max) * 75).toFixed(2);
    bar.style.height = `${height}%`;
    bar.title = `${data[index].amount}`
  })

  total.textContent = `$${tot}`