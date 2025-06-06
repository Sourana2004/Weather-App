const apiKey = '32022911ec4dfd89bbe6b4328731fccf'; // Replace with your actual API key
const layer = document.querySelector(".inputBox");
const submit_btn = document.querySelector(".submitBtn");


async function loadWeatherMap() {
  // Create the base map
  const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

  // Add OpenStreetMap base layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Weather layer URL (e.g., clouds, precipitation, temperature)
  

  const weatherLayerUrl = `https://tile.openweathermap.org/map/${layer.value}/{z}/{x}/{y}.png?appid=${apiKey}`;

  // Add the weather overlay
  const weatherLayer = L.tileLayer(weatherLayerUrl, {
    opacity: 800,
    attribution: '&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
  });

  
  // Wait for the layer to be added (optional, for async use)
  await new Promise(resolve => {
    weatherLayer.on('load', resolve);
    weatherLayer.addTo(map);
  });

  console.log("Weather layer loaded");
}

submit_btn.addEventListener("click",()=>{
    loadWeatherMap().catch(console.error);
})


