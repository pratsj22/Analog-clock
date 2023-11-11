let num = document.getElementsByClassName('bar-seconds')[0]
for (let i = 1; i <= 60; i++) {
  num.insertAdjacentHTML("beforeend", `<span style="--index:${i}"><p></p></span>`)
}
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const displayTime = () => {
  let date = new Date()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  hour.style.transform = `rotate(${h * 30 + m / 2}deg)`
  minute.style.transform = `rotate(${m * 6}deg)`
  second.style.transform = `rotate(${s * 6}deg)`
}
setInterval(displayTime, 1000)