// БАЗА ДАННЫХ ИНСТРУМЕНТОВ СЕТЕВОГО ИНЖЕНЕРА
const toolsDatabase = [
    {
        name: "PuTTY (64-bit)",
        description: "Популярный SSH/Telnet клиент, также поддерживает Serial, Rlogin. Незаменим для доступа к сетевому оборудованию.",
        url: "https://www.putty.org/",
        icon: "fas fa-terminal",
        category: "Терминалы"
    },
    {
        name: "WinBox",
        description: "Официальная утилита для управления устройствами MikroTik RouterOS. Полный доступ к настройкам роутеров.",
        url: "https://mikrotik.com/download",
        icon: "fas fa-wifi",
        category: "Терминалы"
    },
    {
        name: "Advanced IP Scanner",
        description: "Быстрый сканер локальной сети. Показывает все устройства, открытые порты, расшаренные ресурсы.",
        url: "https://www.advanced-ip-scanner.com/",
        icon: "fas fa-radar",
        category: "Сканеры"
    },
    {
        name: "WinSCP",
        description: "SFTP, SCP и FTP клиент с удобным двухпанельным интерфейсом. Передача файлов по защищенным протоколам.",
        url: "https://winscp.net/",
        icon: "fas fa-folder-open",
        category: "Файловые"
    },
    {
        name: "Wireshark",
        description: "Анализатор трафика и сниффер пакетов. Глубокий анализ сетевых протоколов для диагностики.",
        url: "https://www.wireshark.org/",
        icon: "fas fa-chart-line",
        category: "Диагностика"
    },
    {
        name: "Angry IP Scanner",
        description: "Легковесный сканер IP-адресов и портов. Работает на Windows, Mac, Linux.",
        url: "https://angryip.org/",
        icon: "fas fa-bolt",
        category: "Сканеры"
    },
    {
        name: "Tera Term",
        description: "Эмулятор терминала с поддержкой SSH, Telnet, последовательного порта. Скриптинг на TTL.",
        url: "https://teratermproject.github.io/",
        icon: "fas fa-code",
        category: "Терминалы"
    },
    {
        name: "MobaXterm",
        description: "Расширенный терминал с X-сервером, SSH, RDP, VNC. Встроенный SFTP и мониторинг сети.",
        url: "https://mobaxterm.mobatek.net/",
        icon: "fas fa-laptop-code",
        category: "Терминалы"
    },
    {
        name: "PRTG Network Monitor",
        description: "Мониторинг сети, отслеживание带宽, оповещения. Бесплатная версия до 100 сенсоров.",
        url: "https://www.paessler.com/prtg",
        icon: "fas fa-chart-bar",
        category: "Диагностика"
    },
    {
        name: "NetScanTools Pro",
        description: "Профессиональный набор инструментов: DNS, Ping, Traceroute, WHOIS и многое другое.",
        url: "https://www.netscantools.com/",
        icon: "fas fa-toolbox",
        category: "Диагностика"
    },
    {
        name: "FileZilla",
        description: "Популярный FTP, FTPS, SFTP клиент с поддержкой IPv6 и удаленного редактирования файлов.",
        url: "https://filezilla-project.org/",
        icon: "fas fa-cloud-upload-alt",
        category: "Файловые"
    },
    {
        name: "Solar-PuTTY",
        description: "Альтернатива PuTTY от SolarWinds с управлением сессиями и вкладками.",
        url: "https://www.solarwinds.com/free-tools/solar-putty",
        icon: "fas fa-sun",
        category: "Терминалы"
    }
];

// DOM элементы
const gridContainer = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');
const visibleSpan = document.getElementById('visibleCount');
const totalSpan = document.getElementById('totalCount');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentSearch = '';
let currentCategory = 'all';

// Обновление счетчика
function updateStats(count) {
    visibleSpan.textContent = count;
    totalSpan.textContent = toolsDatabase.length;
}

// Экранирование HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Рендер карточек
function renderTools() {
    const filtered = toolsDatabase.filter(tool => {
        const matchesSearch = currentSearch === '' || 
            tool.name.toLowerCase().includes(currentSearch) ||
            tool.description.toLowerCase().includes(currentSearch) ||
            tool.category.toLowerCase().includes(currentSearch);
        
        const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    updateStats(filtered.length);
    
    if (filtered.length === 0) {
        gridContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-network-wired"></i>
                <h3>Инструмент не найден</h3>
                <p>Попробуйте изменить параметры поиска или фильтрации</p>
                <button class="reset-btn" id="globalResetBtn">
                    <i class="fas fa-sync-alt"></i> Сбросить фильтры
                </button>
            </div>
        `;
        const resetBtn = document.getElementById('globalResetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetAllFilters);
        }
        return;
    }
    
    gridContainer.innerHTML = filtered.map(tool => {
        // Выбор иконки в зависимости от категории для единообразия
        let categoryIcon = '';
        if (tool.category === 'Терминалы') categoryIcon = 'fa-terminal';
        else if (tool.category === 'Сканеры') categoryIcon = 'fa-radar';
        else if (tool.category === 'Файловые') categoryIcon = 'fa-folder-tree';
        else if (tool.category === 'Диагностика') categoryIcon = 'fa-stethoscope';
        else categoryIcon = 'fa-microchip';
        
        return `
            <div class="tool-card" data-url="${escapeHtml(tool.url)}">
                <div class="card-category">
                    <i class="fas ${categoryIcon}"></i> ${escapeHtml(tool.category)}
                </div>
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="tool-name">
                    ${escapeHtml(tool.name)}
                </div>
                <div class="tool-desc">
                    ${escapeHtml(tool.description)}
                </div>
                <a href="${escapeHtml(tool.url)}" target="_blank" rel="noopener noreferrer" class="tool-link" data-url="${escapeHtml(tool.url)}">
                    <span>Открыть инструмент</span> <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
    }).join('');
    
    // Обработчик клика на карточку
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.tool-link')) return;
            const url = card.getAttribute('data-url');
            if (url) window.open(url, '_blank', 'noopener,noreferrer');
        });
    });
}

// Сброс всех фильтров
function resetAllFilters() {
    currentSearch = '';
    currentCategory = 'all';
    searchInput.value = '';
    clearBtn.classList.remove('visible');
    
    filterBtns.forEach(btn => {
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderTools();
}

// Обработка поиска с debounce
let searchTimeout;
function handleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        currentSearch = searchInput.value.toLowerCase().trim();
        clearBtn.classList.toggle('visible', currentSearch !== '');
        renderTools();
    }, 250);
}

// Обработка категорий
function handleCategory(category) {
    currentCategory = category;
    filterBtns.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderTools();
}

// Инициализация событий
searchInput.addEventListener('input', handleSearch);
clearBtn.addEventListener('click', resetAllFilters);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        handleCategory(btn.dataset.category);
    });
});

// Очистка по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        resetAllFilters();
        searchInput.blur();
    }
});

// Первоначальный рендер
renderTools();
