const serverBtn = document.getElementById("btn-server");
const dbGetBtn = document.getElementById("btn-db");
const dbSendBtn = document.getElementById("btn-db_res");
const urlInput = document.getElementById("url");
const p = document.getElementById("data-place");
const p2 = document.getElementById("data-place2");

serverBtn.addEventListener("click", async (e) => {
  const url = urlInput.value;
  const res = await fetch(`${url}/api/light`);
  const data = await res.json();
  p.innerHTML = JSON.stringify(data);
});

dbGetBtn.addEventListener("click", async (e) => {
  const url = urlInput.value;
  const res = await fetch(`${url}/api/light/check`);
  const data = await res.json();
  p.innerHTML = JSON.stringify(data);
});

dbSendBtn.addEventListener("click", async (e) => {
  const url = urlInput.value;
  const res = await fetch(`${url}/api/light/send`);
  const data = await res.json();
  p.innerHTML = JSON.stringify(data);
});

setInterval(async () => {
  const url = urlInput.value;
  const res = await fetch(`${url}/api/light/send`);
  const data = await res.json();
  p2.innerHTML = JSON.stringify(data);
}, 30000);
