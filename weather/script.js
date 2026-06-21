// Weather Dashboard with OpenWeatherMap API

class WeatherDashboard {
    constructor() {
        this.apiKey = 'c4c8e18ba0e86a59c8eac7baa1c1cf51'; // OpenWeatherMap API Key
        this.favorites = [];
        this.currentWeather = null;
        this.forecast = null;
        this.hourly = null;
        this.initElements();
        this.loadFavorites();
        this.setupEventListeners();
        this.checkDarkMode();
    }

    // Initialize DOM elements
    initElements() {
        this.searchInput = document.getElementById('searchInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.geoBtn = document.getElementById('geoBtn');
        this.loadingEl = document.getElementById('loading');
        this.errorBox = document.getElementById('errorBox');
        this.errorMessage = document.getElementById('errorMessage');
        this.retryBtn = document.getElementById('retryBtn');
        this.currentWeatherEl = document.getElementById('currentWeather');
        this.forecastSection = document.getElementById('forecastSection');
        this.hourlySection = document.getElementById('hourlySection');
        this.forecastList = document.getElementById('forecastList');
        this.hourlyList = document.getElementById('hourlyList');
        this.favoritesList = document.getElementById('favoritesList');
        this.notification = document.getElementById('notification');
        this.clearCacheBtn = document.getElementById('clearCacheBtn');
        this.themeToggle = document.getElementById('themeToggle');
    }

    // Setup event listeners
    setupEventListeners() {
        this.searchBtn.addEventListener('click', () => this.search());
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.search();
        });
        this.geoBtn.addEventListener('click', () => this.getGeolocation());
        this.retryBtn.addEventListener('click', () => this.hideError());
        this.clearCacheBtn.addEventListener('click', () => this.clearCache());
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Search for weather by city
    async search() {
        const city = this.searchInput.value.trim();
        if (!city) {
            this.showNotification('Silakan masukkan nama kota', 'error');
            return;
        }

        this.searchInput.value = '';
        await this.fetchWeatherByCity(city);
    }

    // Get user's geolocation
    getGeolocation() {
        if (!navigator.geolocation) {
            this.showNotification('Geolokasi tidak tersedia di browser Anda', 'error');
            return;
        }

        this.showLoading();
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                await this.fetchWeatherByCoords(latitude, longitude);
            },
            (error) => {
                this.hideLoading();
                this.showError('Gagal mendapatkan lokasi: ' + error.message);
            }
        );
    }

    // Fetch weather by city name
    async fetchWeatherByCity(city) {
        try {
            this.showLoading();
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=id`
            );

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Kota tidak ditemukan');
                } else if (response.status === 401) {
                    throw new Error('API key tidak valid');
                }
                throw new Error('Gagal mengambil data cuaca');
            }

            const data = await response.json();
            this.currentWeather = data;
            await this.fetchForecast(data.coord.lat, data.coord.lon);
            this.renderCurrentWeather();
            this.renderForecast();
            this.renderHourly();
            this.addToFavorites(data.name, data.coord.lat, data.coord.lon);
            this.hideError();
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    // Fetch weather by coordinates
    async fetchWeatherByCoords(lat, lon) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=id`
            );

            if (!response.ok) throw new Error('Gagal mengambil data cuaca');

            const data = await response.json();
            this.currentWeather = data;
            await this.fetchForecast(lat, lon);
            this.renderCurrentWeather();
            this.renderForecast();
            this.renderHourly();
            this.addToFavorites(data.name, lat, lon);
            this.hideError();
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    // Fetch forecast data
    async fetchForecast(lat, lon) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=id`
            );

            if (!response.ok) throw new Error('Gagal mengambil data prakiraan');

            const data = await response.json();
            this.forecast = data.list;
            this.hourly = data.list.slice(0, 8); // 8 items * 3 hours = 24 hours
        } catch (error) {
            console.error('Forecast error:', error);
        }
    }

    // Render current weather
    renderCurrentWeather() {
        if (!this.currentWeather) return;

        const data = this.currentWeather;
        const time = new Date(data.dt * 1000).toLocaleString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

        document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('updateTime').textContent = `Diperbarui: ${time}`;
        document.getElementById('weatherIcon').src = iconUrl;
        document.getElementById('temperature').textContent = Math.round(data.main.temp) + '°C';
        document.getElementById('weatherDesc').textContent = data.weather[0].description;
        document.getElementById('humidity').textContent = data.main.humidity + '%';
        document.getElementById('windSpeed').textContent = (data.wind.speed * 3.6).toFixed(1) + ' km/h';
        document.getElementById('pressure').textContent = data.main.pressure + ' hPa';
        document.getElementById('visibility').textContent = (data.visibility / 1000).toFixed(1) + ' km';

        this.currentWeatherEl.classList.remove('hidden');
    }

    // Render forecast
    renderForecast() {
        if (!this.forecast) return;

        // Group by day and get first forecast of each day
        const dailyForecasts = {};
        this.forecast.forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString('id-ID');
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = item;
            }
        });

        const forecastArray = Object.values(dailyForecasts).slice(0, 5);
        this.forecastList.innerHTML = forecastArray.map(item => this.createForecastItem(item)).join('');
        this.forecastSection.classList.remove('hidden');
    }

    // Render hourly forecast
    renderHourly() {
        if (!this.hourly) return;

        this.hourlyList.innerHTML = this.hourly.map(item => this.createHourlyItem(item)).join('');
        this.hourlySection.classList.remove('hidden');
    }

    // Create forecast item HTML
    createForecastItem(item) {
        const date = new Date(item.dt * 1000).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' });
        const day = new Date(item.dt * 1000).toLocaleDateString('id-ID', { weekday: 'short' });
        const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        const tempMin = Math.round(item.main.temp_min);
        const tempMax = Math.round(item.main.temp_max);

        return `
            <div class="forecast-item">
                <div class="forecast-date">${day}</div>
                <div class="forecast-date">${date}</div>
                <div class="forecast-icon">
                    <img src="${iconUrl}" alt="${item.weather[0].main}">
                </div>
                <div class="forecast-temp">${tempMin}° - ${tempMax}°</div>
                <div class="forecast-desc">${item.weather[0].description}</div>
                <div class="forecast-extra">
                    💧 ${item.main.humidity}% | 💨 ${(item.wind.speed * 3.6).toFixed(1)} km/h
                </div>
            </div>
        `;
    }

    // Create hourly item HTML
    createHourlyItem(item) {
        const time = new Date(item.dt * 1000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        const temp = Math.round(item.main.temp);

        return `
            <div class="hourly-item">
                <div class="hourly-time">${time}</div>
                <div class="hourly-icon">
                    <img src="${iconUrl}" alt="${item.weather[0].main}">
                </div>
                <div class="forecast-temp">${temp}°C</div>
                <div class="hourly-desc">${item.weather[0].description}</div>
            </div>
        `;
    }

    // Add to favorites
    addToFavorites(name, lat, lon) {
        const exists = this.favorites.some(f => f.name === name);
        if (!exists) {
            this.favorites.push({ name, lat, lon });
            this.saveFavorites();
            this.renderFavorites();
        }
    }

    // Remove from favorites
    removeFromFavorites(name) {
        this.favorites = this.favorites.filter(f => f.name !== name);
        this.saveFavorites();
        this.renderFavorites();
        this.showNotification('Dihapus dari favorit', 'info');
    }

    // Render favorites
    async renderFavorites() {
        if (this.favorites.length === 0) {
            this.favoritesList.innerHTML = '<div class="empty-favorites">📍 Tidak ada kota favorit. Cari kota untuk menambahkannya.</div>';
            return;
        }

        const html = await Promise.all(
            this.favorites.map(async (fav) => {
                try {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${fav.lat}&lon=${fav.lon}&appid=${this.apiKey}&units=metric&lang=id`
                    );
                    const data = await response.json();
                    const temp = Math.round(data.main.temp);
                    const desc = data.weather[0].description;

                    return `
                        <div class="favorite-item">
                            <button class="favorite-remove" onclick="app.removeFromFavorites('${fav.name}')">
                                <i class="fas fa-times"></i>
                            </button>
                            <div class="favorite-name">${fav.name}</div>
                            <div class="favorite-temp">${temp}°C</div>
                            <div class="favorite-weather">${desc}</div>
                            <button class="btn btn-small" onclick="app.fetchWeatherByCoords(${fav.lat}, ${fav.lon})">
                                Lihat Detail
                            </button>
                        </div>
                    `;
                } catch (error) {
                    console.error('Error rendering favorite:', error);
                    return '';
                }
            })
        );

        this.favoritesList.innerHTML = html.join('');
    }

    // Save favorites to localStorage
    saveFavorites() {
        try {
            localStorage.setItem('weatherFavorites', JSON.stringify(this.favorites));
        } catch (error) {
            console.error('Save favorites error:', error);
        }
    }

    // Load favorites from localStorage
    loadFavorites() {
        try {
            const stored = localStorage.getItem('weatherFavorites');
            if (stored) {
                this.favorites = JSON.parse(stored);
                this.renderFavorites();
            }
        } catch (error) {
            console.error('Load favorites error:', error);
        }
    }

    // Show loading state
    showLoading() {
        this.loadingEl.classList.remove('hidden');
    }

    // Hide loading state
    hideLoading() {
        this.loadingEl.classList.add('hidden');
    }

    // Show error
    showError(message) {
        this.errorMessage.textContent = message;
        this.errorBox.classList.remove('hidden');
        this.currentWeatherEl.classList.add('hidden');
        this.forecastSection.classList.add('hidden');
        this.hourlySection.classList.add('hidden');
    }

    // Hide error
    hideError() {
        this.errorBox.classList.add('hidden');
    }

    // Clear cache
    clearCache() {
        if (confirm('Hapus semua favorit?')) {
            this.favorites = [];
            this.saveFavorites();
            this.renderFavorites();
            this.showNotification('Cache dihapus', 'success');
        }
    }

    // Toggle dark mode
    toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('weatherDarkMode', isDark);
        this.updateThemeIcon();
    }

    // Check dark mode preference
    checkDarkMode() {
        const isDark = localStorage.getItem('weatherDarkMode') === 'true';
        if (isDark) {
            document.body.classList.add('dark-mode');
        }
        this.updateThemeIcon();
    }

    // Update theme toggle icon
    updateThemeIcon() {
        const icon = this.themeToggle.querySelector('i');
        const isDark = document.body.classList.contains('dark-mode');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Show notification
    showNotification(message, type = 'info') {
        this.notification.textContent = message;
        this.notification.className = `notification show ${type}`;

        setTimeout(() => {
            this.notification.classList.remove('show');
        }, 3000);
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new WeatherDashboard();
});