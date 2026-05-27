// ================= THEME =================

function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "☀ Light Mode";
  } else {
    btn.innerText = "🌙 Tech Mode";
  }
}
// ================= NAVIGATION =================

function hideAllPages() {
  document.getElementById("dashboardPage").style.display = "none";
  document.getElementById("scanPage").style.display = "none";
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("myCropsPage").style.display = "none";
  document.getElementById("marketPage").style.display = "none";
  document.getElementById("weatherPage").style.display = "none";
}

function showDashboard() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboardPage").style.display = "block";
}

function openScanPage() {
  hideAllPages();
  document.getElementById("scanPage").style.display = "block";
}

function openMyCrops() {
  hideAllPages();
  document.getElementById("myCropsPage").style.display = "block";
}

function openMarket() {
  hideAllPages();

  document.getElementById("marketPage").style.display = "block";

  loadMarket();
}

function openWeather() {
  hideAllPages();
  document.getElementById("weatherPage").style.display = "block";
}

function goDashboard() {
  hideAllPages();
  document.getElementById("dashboardPage").style.display = "block";
}

// ================= LANGUAGES =================

const translations = {
  en: {
    welcome: "Welcome to AgriGuide 🌿",
    scan: "📸 Scan Crop",
    crops: "🌾 My Crops",
    market: "📊 Market",
    weather: "🌦 Weather",
  },

  hi: {
    welcome: "एग्रीगाइड में आपका स्वागत है 🌿",
    scan: "📸 फसल स्कैन करें",
    crops: "🌾 मेरी फसलें",
    market: "📊 बाजार",
    weather: "🌦 मौसम",
  },

  mr: {
    welcome: "AgriGuide मध्ये स्वागत आहे 🌿",
    scan: "📸 पीक स्कॅन करा",
    crops: "🌾 माझी पिके",
    market: "📊 बाजार",
    weather: "🌦 हवामान",
  },

  gu: {
    welcome: "AgriGuide માં આપનું સ્વાગત છે 🌿",
    scan: "📸 પાક સ્કેન કરો",
    crops: "🌾 મારા પાક",
    market: "📊 બજાર",
    weather: "🌦 હવામાન",
  },

  pa: {
    welcome: "AgriGuide ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ 🌿",
    scan: "📸 ਫਸਲ ਸਕੈਨ ਕਰੋ",
    crops: "🌾 ਮੇਰੀਆਂ ਫਸਲਾਂ",
    market: "📊 ਮਾਰਕੀਟ",
    weather: "🌦 ਮੌਸਮ",
  },

  ta: {
    welcome: "AgriGuide-க்கு வரவேற்கிறோம் 🌿",
    scan: "📸 பயிர் ஸ்கேன்",
    crops: "🌾 என் பயிர்கள்",
    market: "📊 சந்தை",
    weather: "🌦 வானிலை",
  },

  te: {
    welcome: "AgriGuide కు స్వాగతం 🌿",
    scan: "📸 పంట స్కాన్",
    crops: "🌾 నా పంటలు",
    market: "📊 మార్కెట్",
    weather: "🌦 వాతావరణం",
  },

  kn: {
    welcome: "AgriGuide ಗೆ ಸ್ವಾಗತ 🌿",
    scan: "📸 ಬೆಳೆ ಸ್ಕ್ಯಾನ್",
    crops: "🌾 ನನ್ನ ಬೆಳೆಗಳು",
    market: "📊 ಮಾರುಕಟ್ಟೆ",
    weather: "🌦 ಹವಾಮಾನ",
  },

  bn: {
    welcome: "AgriGuide এ স্বাগতম 🌿",
    scan: "📸 ফসল স্ক্যান করুন",
    crops: "🌾 আমার ফসল",
    market: "📊 বাজার",
    weather: "🌦 আবহাওয়া",
  },

  rj: {
    welcome: "AgriGuide में थारो स्वागत है 🌿",
    scan: "📸 फसल स्कैन करो",
    crops: "🌾 म्हारी फसल",
    market: "📊 बाजार",
    weather: "🌦 मौसम",
  },
};

function changeLanguage() {
  const lang = document.getElementById("languageSelect").value;

  const t = translations[lang];

  document.querySelector("#dashboardPage h2").innerText = t.welcome;

  const cards = document.querySelectorAll(".card h3");

  cards[0].innerText = t.scan;
  cards[1].innerText = t.crops;
  cards[2].innerText = t.market;
  cards[3].innerText = t.weather;
}

// ================= SCAN CROP =================

function scanCrop() {
  const file = document.getElementById("scanImage").files[0];

  if (!file) {
    alert("Please upload crop image");
    return;
  }

  const name = file.name.toLowerCase();

  let crop = "Unknown Crop";
  let soil = "";
  let water = "";
  let sunlight = "";
  let temp = "";
  let fertilizer = "";

  if (name.includes("corn")) {
    crop = "Corn";
    soil = "Fertile Soil";
    water = "Moderate Watering";
    sunlight = "Good Sunlight";
    temp = "20°C - 30°C";
    fertilizer = "Organic Compost";
  } else if (name.includes("tomato")) {
    crop = "Tomato";
    soil = "Well-drained Soil";
    water = "Medium Water";
    sunlight = "Full Sunlight";
    temp = "18°C - 28°C";
    fertilizer = "Nitrogen Fertilizer";
  } else if (name.includes("ginger")) {
    crop = "Ginger";
    soil = "Rich Moist Soil";
    water = "High Moisture";
    sunlight = "Partial Sunlight";
    temp = "22°C - 30°C";
    fertilizer = "Organic Manure";
  } else {
    crop = "Crop Detected";
    soil = "Healthy Soil";
    water = "Balanced Water";
    sunlight = "Natural Sunlight";
    temp = "25°C";
    fertilizer = "Bio Fertilizer";
  }

  hideAllPages();

  document.getElementById("resultPage").style.display = "block";

  document.getElementById("scanResult").innerHTML = `

    <div class="result-card">

      <h1>${crop}</h1>

      <p>🌱 Soil: ${soil}</p>

      <p>💧 Water: ${water}</p>

      <p>☀ Sunlight: ${sunlight}</p>

      <p>🌡 Temperature: ${temp}</p>

      <p>🧪 Fertilizer: ${fertilizer}</p>

      <button onclick="downloadPDF('${crop}','${soil}','${water}','${sunlight}','${temp}','${fertilizer}')">

        Download Report

      </button>

    </div>
  `;
}

// ================= PDF =================

function downloadPDF(crop, soil, water, sunlight, temp, fertilizer) {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  doc.setFontSize(26);
  doc.setTextColor(0, 128, 0);

  doc.text("AgriGuide Smart Report", 40, 20);

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);

  doc.text(`Crop Name: ${crop}`, 20, 50);
  doc.text(`Soil: ${soil}`, 20, 70);
  doc.text(`Water: ${water}`, 20, 90);
  doc.text(`Sunlight: ${sunlight}`, 20, 110);
  doc.text(`Temperature: ${temp}`, 20, 130);
  doc.text(`Fertilizer: ${fertilizer}`, 20, 150);

  doc.save("AgriGuide_Report.pdf");
}

// ================= MY CROPS =================

function addCrop() {
  const name = document.getElementById("cropName").value.trim();

  const price = document.getElementById("cropPrice").value.trim();

  if (name === "" || price === "") {
    alert("Please enter crop details");

    return;
  }

  let crops = JSON.parse(localStorage.getItem("myCrops")) || [];

  const cities = ["Pune", "Mumbai", "Delhi", "Nashik", "Nagpur", "Bangalore"];

  let cityPrices = [];

  cities.forEach((city) => {
    cityPrices.push({
      city: city,

      price: Number(price) + Math.floor(Math.random() * 20),
    });
  });

  const cropData = {
    name: name,

    price: price,

    cityPrices: cityPrices,
  };

  crops.push(cropData);

  localStorage.setItem(
    "myCrops",

    JSON.stringify(crops),
  );

  alert("🌾 Crop Added Successfully!");

  document.getElementById("cropName").value = "";

  document.getElementById("cropPrice").value = "";

  loadMarket();
}

// ================= MARKET =================

function loadMarket() {
  const market = document.getElementById("marketList");

  market.innerHTML = "";

  const crops = JSON.parse(localStorage.getItem("myCrops")) || [];

  if (crops.length === 0) {
    market.innerHTML = `

      <h2>
        No Crops Added Yet 🌾
      </h2>

    `;

    return;
  }

  crops.forEach((crop) => {
    let cityHTML = "";

    crop.cityPrices.forEach((city) => {
      cityHTML += `

        <p>

          📍 ${city.city} :
          ₹${city.price}/kg

        </p>

      `;
    });

    market.innerHTML += `

      <div class="market-card">

        <h2>${crop.name}</h2>

        <h3>

          💰 Base Price:
          ₹${crop.price}/kg

        </h3>

        ${cityHTML}

        <br>

        <a
          href="https://www.youtube.com/results?search_query=${crop.name}+farming"
          target="_blank"
        >

          ▶ Watch Farming Videos

        </a>

      </div>

    `;
  });
}
// ================= WEATHER =================

function showWeather() {
  const city = document.getElementById("cityInput").value.toLowerCase();

  let result = "";

  if (city === "pune") {
    result = `
      🌤 Temperature: 28°C <br>
      💧 Humidity: 60% <br>
      🌧 Rain Chance: Medium <br>
      🌱 Best for sugarcane & wheat
    `;
  } else if (city === "mumbai") {
    result = `
      🌧 Temperature: 31°C <br>
      💧 Humidity: 85% <br>
      🌊 Heavy Moisture Climate <br>
      🌱 Best for rice farming
    `;
  } else if (city === "delhi") {
    result = `
      ☀ Temperature: 35°C <br>
      💧 Humidity: 40% <br>
      🌡 Hot & Dry Climate <br>
      🌱 Best for millet & wheat
    `;
  } else {
    result = `
      🌦 Temperature: 27°C <br>
      💧 Normal Climate <br>
      🌱 Suitable for farming
    `;
  }

  document.getElementById("weatherResult").innerHTML = `

    <div class="weather-card">

      <h2>${city.toUpperCase()}</h2>

      <p>${result}</p>

    </div>
  `;
}

// ================= VOICE SEARCH =================

function startVoice() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Voice recognition not supported");

    return;
  }

  const recognition = new webkitSpeechRecognition();

  recognition.lang = "en-US";

  recognition.start();

  recognition.onresult = function (event) {
    const speech = event.results[0][0].transcript.toLowerCase();

    const cards = document.querySelectorAll(".market-card");

    let found = false;

    cards.forEach((card) => {
      if (card.innerText.toLowerCase().includes(speech)) {
        card.style.border = "4px solid green";

        card.scrollIntoView({
          behavior: "smooth",
        });

        found = true;
      }
    });

    if (!found) {
      alert("Crop not found in market");
    }
  };
}
