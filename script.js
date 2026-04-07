// Данные инструментов для сетевого инженера
const tools = [
    {
        name: "Wireshark",
        category: "netops",
        description: "Мощнейший анализатор сетевого трафика. Позволяет захватывать и интерактивно просматривать пакеты в реальном времени.",
        officialUrl: "https://www.wireshark.org/#download",
        mirrorUrl: "https://disk.yandex.ru/d/9GlQSOljH_lIUg",
        icon: "fa-chart-line"
    },
    {
        name: "PuTTY",
        category: "remote",
        description: "Популярный SSH/Telnet клиент для удаленного доступа к сетевым устройствам. Поддерживает последовательный порт и различные протоколы.",
        officialUrl: "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",
        mirrorUrl: "https://disk.yandex.ru/d/Z3yZHu0hQ0qQFA",
        icon: "fa-terminal"
    },
    {
        name: "WinBox",
        category: "remote",
        description: "Утилита от компании MikroTik, предназначенная управления и настройки маршрутизаторов и сетевых устройств, на операционной системе RouterOS.",
        officialUrl: "https://mikrotik.com/download/winbox",
        mirrorUrl: "https://disk.yandex.ru/d/1O_q_qSZFO7_5g",
        icon: "fa-terminal"
    },
    {
        name: "Ассистент",
        category: "remote",
        description: "Решение для удаленного доступа и поддержки (RDP)",
        officialUrl: "https://xn--80akicokc0aablc.xn--p1ai/%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C",
        mirrorUrl: "https://xn--80akicokc0aablc.xn--p1ai/%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C",
        icon: "fa-terminal"
    },
    {
        name: "RuDesktop",
        category: "remote",
        description: "Программного обеспечения для удаленного доступа и администрирования удаленных устройств (RDP)",
        officialUrl: "https://rudesktop.ru/downloads/",
        mirrorUrl: "https://rudesktop.ru/downloads/",
        icon: "fa-terminal"
    },
    {
        name: "Microsoft Activation Scripts (MAS)",
        category: "utility",
        description: "Простой скрипт, который позволяет познакомиться со всеми возможностями OS Windows перед ее покупкой.",
        officialUrl: "https://github.com/massgravel/microsoft-activation-scripts",
        mirrorUrl: "https://github.com/massgravel/microsoft-activation-scripts",
        icon: "fa-server"
    },
    {
        name: "Очистка диска в Windows",
        category: "utility",
        description: "Win+R -> cleanmgr",
        officialUrl: "https://remontka.pro/clean-disk-windows-11-tools/",
        mirrorUrl: "https://remontka.pro/clean-disk-windows-11-tools/",
        icon: "fa-server"
    },
    {
        name: "NetSetMan",
        category: "netops",
        description: "Программа для управления настройками сети, позволяющая легко переключаться между предварительно настроенными профилями.",
        officialUrl: "https://www.netsetman.com/en/freeware",
        mirrorUrl: "https://disk.yandex.ru/d/stEJz12YOQLR-w",
        icon: "fa-search"
    },
    {
        name: "WinSCP",
        category: "netops",
        description: "Графический SFTP, FTP, WebDAV и SCP клиент с открытым исходным кодом.",
        officialUrl: "https://winscp.net/eng/download.php",
        mirrorUrl: "https://disk.yandex.ru/d/7xIxMUQ4NQYEaw",
        icon: "fa-search"
    },
    {
        name: "Onvif Device Manager",
        category: "netops",
        description: "Менеджер устройств ONVIF представляет собой SDK для интеграции IP-видеосервера Kipod Server.",
        officialUrl: "https://www.polyvision.ru/po/dlya-windows/onvif-device-manager",
        mirrorUrl: "https://disk.yandex.ru/d/c40vrbUYMc_bew",
        icon: "fa-search"
    },
    {
        name: "Victoria HDD/SSD",
        category: "rom",
        description: "Программа для диагностики, исследования, тестирования и мелкого ремонта жёстких дисков, SSD-накопителей.",
        officialUrl: "https://hdd.by/victoria/",
        mirrorUrl: "https://disk.yandex.ru/d/Z1AnLPKPencZ3A",
        icon: "fa-chart-simple"
    },
    {
        name: "Advanced IP Scanner",
        category: "netops",
        description: "Бесплатный сканер сети с возможностью удаленного управления компьютерами.",
        officialUrl: "https://www.advanced-ip-scanner.com/ru/download/",
        mirrorUrl: "https://disk.yandex.ru/d/qSq1drZUAnt_Ww",
        icon: "fa-eye"
    },
    {
        name: "FileZilla",
        category: "netops",
        description: "Клиент, предназначенный для передачи файлов между локальным компьютером и удаленным сервером.",
        officialUrl: "https://filezilla-project.org/download.php?type=client",
        mirrorUrl: "https://disk.yandex.ru/d/-lHJzjYbIemSDQ",
        icon: "fa-eye"
    },
    {
        name: "Far Manager",
        category: "netops",
        description: "Консольный файловый менеджер для операционной системы Windows.",
        officialUrl: "https://farmanager.com/download.php?l=ru",
        mirrorUrl: "https://disk.yandex.ru/d/-ZzDu2kGuSZIvQ",
        icon: "fa-window-maximize"
    },
    {
        name: "iPerf3",
        category: "netops",
        description: "Инструмент для измерения пропускной способности сети и тестирования производительности.",
        officialUrl: "https://iperf.fr/iperf-download.php",
        mirrorUrl: "https://disk.yandex.ru/d/s-vr1_GGleGHTw",
        icon: "fa-gauge-high"
    },
    {
        name: "Nmap",
        category: "netops",
        description: "Мощный сканер безопасности и детектор сетевых служб. Основа сетевого аудита.",
        officialUrl: "https://nmap.org/download.html",
        mirrorUrl: "https://disk.yandex.ru/d/T3BxxhYRKaGwDA",
        icon: "fa-shield-halved"
    },
    {
        name: "SpaceSniffer",
        category: "rom",
        description: "Портативная программа для Windows, предназначенная для анализа использования дискового пространства.",
        officialUrl: "https://www.uderzo.it/main_products/space_sniffer/download.html",
        mirrorUrl: "https://disk.yandex.ru/d/T2-HdQkXO0DUhg",
        icon: "fa-clock"
    },
    {
        name: "Ventoy",
        category: "rom",
        description: "Утилита с открытым исходным кодом для создания загрузочных USB-накопителей.",
        officialUrl: "https://www.ventoy.net/en/download.html",
        mirrorUrl: "https://disk.yandex.ru/d/D-y3Dp8L0oDcaw",
        icon: "fa-clock"
    },
    {
        name: "Rufus",
        category: "rom",
        description: "Утилита с открытым исходным кодом для создания загрузочных USB-накопителей.",
        officialUrl: "https://rufus.ie/",
        mirrorUrl: "https://disk.yandex.ru/d/uYIBDDgZEBonjg",
        icon: "fa-clock"
    },
    {
        name: "R.saver",
        category: "rom",
        description: "Простая в использовании программа для восстановления файлов с различных версий файловых систем NTFS, FAT и ExFAT.",
        officialUrl: "https://rlab.ru/tools/rsaver.html",
        mirrorUrl: "https://disk.yandex.ru/d/8oIOkq7C3r3SPg",
        icon: "fa-chart-line"
    }
];

// Функция для получения названия категории на русском
function getCategoryName(category) {
    const categories = {
        rom: "SSD/HDD/USB",
        netops: "NetOps",
        remote: "Удаленный доступ",
        analyzer: "Анализатор",
        utility: "Утилита"
    };
    return categories[category] || category;
}

// Функция отображения карточек
function displayTools(filterCategory = "all", searchTerm = "") {
    const grid = document.getElementById("toolsGrid");
    grid.innerHTML = "";

    const filteredTools = tools.filter(tool => {
        const matchesCategory = filterCategory === "all" || tool.category === filterCategory;
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             tool.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredTools.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-folder-open"></i>
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить критерии поиска</p>
            </div>
        `;
        return;
    }

    filteredTools.forEach((tool, index) => {
        const card = document.createElement("div");
        card.className = `tool-card ${tool.category}`;
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="card-header">
                <div class="tool-icon">
                    <i class="fas ${tool.icon}"></i>
                </div>
                <h3 class="tool-name">${tool.name}</h3>
                <span class="category-badge">${getCategoryName(tool.category)}</span>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="button-group">
                <a href="${tool.officialUrl}" class="btn btn-official" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-globe"></i> Официальный сайт
                    <span class="btn-sub">Скачать</span>
                </a>
                <a href="${tool.mirrorUrl}" class="btn btn-mirror" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-database"></i> Зеркало
                    <span class="btn-sub">Альтернативная ссылка</span>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Инициализация фильтров и поиска
let currentCategory = "all";
let currentSearch = "";

function updateDisplay() {
    displayTools(currentCategory, currentSearch);
}

// Обработчики событий
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        updateDisplay();
    });
});

const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearSearch");

searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    clearBtn.style.display = currentSearch ? "flex" : "none";
    updateDisplay();
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearBtn.style.display = "none";
    updateDisplay();
});

// Начальная загрузка
displayTools();

// Добавляем небольшую подсказку в консоль
console.log("Сайт навигатора сетевого инженера загружен! Всего инструментов: " + tools.length);
