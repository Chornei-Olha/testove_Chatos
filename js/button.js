const passengerBtn = document.getElementById("passengerBtn");
const carrierBtn = document.getElementById("carrierBtn");

passengerBtn.addEventListener("click", () => {
  passengerBtn.classList.add("active");
  carrierBtn.classList.remove("active");
});

carrierBtn.addEventListener("click", () => {
  carrierBtn.classList.add("active");
  passengerBtn.classList.remove("active");
});
