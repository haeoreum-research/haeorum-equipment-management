// Equipment data - 초기 비품 목록만 유지 (가나다 순 정렬)
const equipmentData = [
    { id: 1, name: '4인 식탁 세트', code: 'FRN001', category: '가구', date: '2018/07/09', quantity: 5, price: 450000, status: '사용중', distribution: null },
    { id: 2, name: '2인 패브릭 소파', code: 'FRN003', category: '가구', date: '2018/07/09', quantity: 3, price: 650000, status: '사용중', distribution: null },
    { id: 3, name: '50MP 카메라', code: 'CAM001', category: '카메라', date: '2018/08/24', quantity: 200, price: 125920, status: '사용중', distribution: null },
    { id: 4, name: '156.4mm 디스플레이', code: 'DSP002', category: '주변장치', date: '2018/08/24', quantity: 4, price: 634550, status: '사용중', distribution: null },
    { id: 5, name: '4900mAh 배터리', code: 'BAT001', category: '부품', date: '2018/08/24', quantity: 300, price: 12000, status: '폐기 처리', distribution: null },
    { id: 6, name: '계산기', code: 'OFF003', category: '사무용품', date: '2019/01/26', quantity: 4, price: 25000, status: '사용중', distribution: null },
    { id: 7, name: '강화플라스틱케이스', code: 'ACC002', category: '액세서리', date: '2018/08/01', quantity: 10, price: 15000, status: '보관중', distribution: null },
    { id: 8, name: '망치', code: 'TLS004', category: '공구', date: '2019/01/26', quantity: 2, price: 11000, status: '사용중', distribution: null },
    { id: 9, name: '멀티탭', code: 'ELC001', category: '전자용품', date: '2018/10/16', quantity: 50, price: 25000, status: '사용중', distribution: null },
    { id: 10, name: '모니터', code: 'MN001', category: '주변장치', date: '2018/10/16', quantity: 3, price: 220000, status: '사용중', distribution: null },
    { id: 11, name: '무전기', code: 'COM001', category: '통신용품', date: '2019/02/12', quantity: 4, price: 150000, status: '보관중', distribution: null },
    { id: 12, name: '문서세단기', code: 'OFF006', category: '사무용품', date: '2019/02/12', quantity: 1, price: 180000, status: '사용중', distribution: null },
    { id: 13, name: '바인더', code: 'OFF005', category: '사무용품', date: '2019/02/12', quantity: 50, price: 2800, status: '사용중', distribution: null },
    { id: 14, name: '보관용 박스', code: 'STG001', category: '보관용품', date: '2019/02/12', quantity: 20, price: 8000, status: '보관중', distribution: null },
    { id: 15, name: '보조의자', code: 'FRN012', category: '가구', date: '2019/02/12', quantity: 10, price: 25000, status: '사용중', distribution: null },
    { id: 16, name: '사다리', code: 'TLS001', category: '공구', date: '2019/01/26', quantity: 2, price: 90000, status: '사용중', distribution: null },
    { id: 17, name: '선반', code: 'FRN008', category: '가구', date: '2018/10/04', quantity: 6, price: 70000, status: '보관중', distribution: null },
    { id: 18, name: '슬림 노트북', code: 'NB001', category: '컴퓨터', date: '2018/08/01', quantity: 20, price: 600000, status: '사용중', distribution: null },
    { id: 19, name: '실리콘 패킹', code: 'PAR002', category: '부품', date: '2018/07/20', quantity: 100, price: 15000, status: '폐기 처리', distribution: null },
    { id: 20, name: '아이포레(30판) [EA]', code: 'SUP001', category: '소모품', date: '2018/09/14', quantity: 10, price: 8000, status: '보관중', distribution: null },
    { id: 21, name: '에어탱크 부품', code: 'PAR001', category: '부품', date: '2018/07/20', quantity: 1500, price: 5500, status: '폐기 처리', distribution: null },
    { id: 22, name: '엔진 실린더 블록 G타입', code: 'PAR003', category: '부품', date: '2018/07/20', quantity: 200, price: 4300, status: '사용중', distribution: null },
    { id: 23, name: '스탠드 조명', code: 'LMP001', category: '조명', date: '2018/10/04', quantity: 2, price: 55000, status: '사용중', distribution: null },
    { id: 24, name: '스테이플러', code: 'OFF004', category: '사무용품', date: '2019/01/26', quantity: 5, price: 12000, status: '사용중', distribution: null },
    { id: 25, name: '청소기', code: 'CLN001', category: '청소용품', date: '2018/10/04', quantity: 1, price: 180000, status: '사용중', distribution: null },
    { id: 26, name: '침대 협탁', code: 'FRN002', category: '가구', date: '2018/07/09', quantity: 10, price: 150000, status: '보관중', distribution: null },
    { id: 27, name: '캐비닛', code: 'FRN005', category: '가구', date: '2018/10/04', quantity: 20, price: 180000, status: '사용중', distribution: null },
    { id: 28, name: '타이머', code: 'ELC002', category: '전자용품', date: '2019/02/12', quantity: 10, price: 70000, status: '사용중', distribution: null },
    { id: 29, name: '평판디스플레이', code: 'DSP001', category: '주변장치', date: '2018/08/24', quantity: 150, price: 69000, status: '사용중', distribution: null },
    { id: 30, name: '프린터', code: 'PR001', category: '주변장치', date: '2018/10/16', quantity: 1, price: 350000, status: '사용중', distribution: null },
    { id: 31, name: '화이트보드', code: 'OFF001', category: '사무용품', date: '2018/10/04', quantity: 2, price: 35000, status: '사용중', distribution: null },
    { id: 32, name: '헤드셋', code: 'HS004', category: '음향기기', date: '2018/09/14', quantity: 5, price: 80000, status: '폐기 처리', distribution: null },
    { id: 33, name: '헤드셋 기타 부품 세트', code: 'HS003', category: '음향기기', date: '2018/09/14', quantity: 10, price: 3000, status: '폐기 처리', distribution: null },
    { id: 34, name: '헤드셋 기타 부품(베어링)', code: 'HS002', category: '음향기기', date: '2018/09/14', quantity: 5, price: 500, status: '폐기 처리', distribution: null },
    { id: 35, name: '헤드셋 케이블', code: 'HS001', category: '음향기기', date: '2018/09/14', quantity: 5, price: 500, status: '폐기 처리', distribution: null },
    { id: 36, name: '휴지통', code: 'OFF002', category: '사무용품', date: '2019/01/26', quantity: 15, price: 20000, status: '사용중', distribution: null }
];

const departments = [
    '수면장애연구팀',
    '생체리듬연구팀',
    '임상연구팀',
    '자료분석팀',
    '연구지원팀'
];

let selectedItem = null;
let outboundData = null; // 출고 데이터 캐시

// Equipment icons/emojis
const equipmentIcons = {
    '4인 식탁 세트': '🍽️',
    '침대 협탁': '🛏️',
    '2인 패브릭 소파': '🛋️',
    '에어탱크 부품': '⚙️',
    '실리콘 패킹': '⚙️',
    '엔진 실린더 블록 G타입': '⚙️',
    '슬림 노트북': '💻',
    '노트북 덮개': '💼',
    '강화플라스틱케이스': '📦',
    '평판디스플레이': '🖥️',
    '4900mAh 배터리': '🔋',
    '50MP 카메라': '📷',
    '156.4mm 디스플레이': '🖥️',
    '헤드셋 케이블': '🎧',
    '헤드셋 기타 부품(베어링)': '⚙️',
    '헤드셋 기타 부품 세트': '📦',
    '헤드셋': '🎧',
    '아이포레(30판) [EA]': '📋',
    '접의식 의자': '🪑',
    '캐비닛': '🗄️',
    '책상': '📚',
    '서랍장': '🗄️',
    '선반': '📦',
    '화이트보드': '📝',
    '스탠드 조명': '💡',
    '청소기': '🧹',
    '전기포트': '🍵',
    '프린터': '🖨️',
    '모니터': '🖥️',
    '멀티탭': '🔌',
    '사다리': '🪜',
    '운반용 카트': '🛒',
    '드라이버 세트': '🔧',
    '청소용 바구니': '🧺',
    '휴지통': '🗑️',
    '파티션': '🚧',
    '이동식 철판': '📦',
    '계산기': '🧮',
    '스테이플러': '📎',
    '망치': '🔨',
    '바인더': '📁',
    '대걸레': '🧹',
    '문서세단기': '✂️',
    '보관용 박스': '📦',
    '이동식 옷걸이': '👔',
    '보조의자': '🪑',
    '손전등': '🔦',
    '무전기': '📻',
    '타이머': '⏱️',
    '랜선': '🔗',
    '무선 키보드': '⌨️',
    '무선 마우스': '🖱️'
};

// Date utility functions
function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

function getRandomDateAfter(baseDate, maxDaysLater = 365) {
    const base = parseDate(baseDate);
    const daysToAdd = Math.floor(Math.random() * maxDaysLater) + 1;
    const newDate = new Date(base);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return formatDate(newDate);
}

// Generate random distribution
function generateDistribution(item) {
    if (item.distribution !== null) {
        return item.distribution;
    }
    
    let totalDistributed = 0;
    const distribution = [];
    
    departments.forEach((dept) => {
        const maxCount = Math.min(item.quantity - totalDistributed, Math.floor(Math.random() * 8) + 1);
        distribution.push({ dept, count: maxCount });
        totalDistributed += maxCount;
    });
    
    item.distribution = distribution;
    return distribution;
}

// Generate inventory items in grid format
function initInventory() {
    const container = document.getElementById('inventoryItems');
    container.innerHTML = '';
    
    equipmentData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const icon = equipmentIcons[item.name] || '📦';
        card.innerHTML = `
            <div class="product-icon">${icon}</div>
            <div class="product-name">${item.name}</div>
            <div class="product-code">${item.code}</div>
            <div class="product-quantity">총 ${item.quantity}개</div>
            <button class="available-btn" onclick="selectItem(${item.id})">Available</button>
        `;
        card.onclick = (e) => {
            if (!e.target.classList.contains('available-btn')) {
                selectItem(item.id);
            }
        };
        container.appendChild(card);
    });
}

// Select item and show details
function selectItem(itemId) {
    const item = equipmentData.find(e => e.id === itemId);
    if (!item) return;
    
    // Remove previous selection
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Mark selected card
    event.currentTarget?.classList.add('selected');
    selectedItem = item;
    
    // Generate department distribution
    const detailPanel = document.getElementById('detailPanel');
    detailPanel.innerHTML = '';
    
    // Title with item details
    const titleDiv = document.createElement('div');
    titleDiv.className = 'detail-title';
    titleDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p style="color: #666; font-size: 10px; margin: 4px 0;">코드: ${item.code}</p>
        <p style="color: #666; font-size: 10px; margin: 2px 0;">단가: ₩${item.price.toLocaleString()} | 수량: ${item.quantity}개</p>
    `;
    detailPanel.appendChild(titleDiv);
    
    // Get or generate distribution
    const distribution = generateDistribution(item);
    
    // Create dept boxes
    const gridDiv = document.createElement('div');
    gridDiv.className = 'distribution-grid';
    
    distribution.forEach(dist => {
        const box = document.createElement('div');
        box.className = 'dept-box';
        box.innerHTML = `
            <div class="dept-name">${dist.dept}</div>
            <div class="dept-count">${dist.count}</div>
        `;
        gridDiv.appendChild(box);
    });
    
    detailPanel.appendChild(gridDiv);
}

// Filter inventory
function filterInventory() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchValue) ? '' : 'none';
    });
}

// Tab switching
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Generate data for specific tabs
    if (tabName === 'inbound') {
        generateInboundData();
    } else if (tabName === 'outbound') {
        generateOutboundData();
    } else if (tabName === 'consumables') {
        generateConsumablesData();
    }
}

// Generate inbound data (최근 날짜순 정렬)
function generateInboundData() {
    const tbody = document.getElementById('inboundData');
    tbody.innerHTML = '';
    
    // 날짜순으로 정렬 (최근이 위에)
    const sortedData = [...equipmentData].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date);
    });
    
    sortedData.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
        `;
        tbody.appendChild(row);
    });
}

// Generate outbound data (한 번만 생성, 이후 캐시 사용, 최근 날짜순 정렬)
function generateOutboundData() {
    const tbody = document.getElementById('outboundData');
    tbody.innerHTML = '';
    
    // 이미 생성된 데이터가 있으면 그것을 사용
    if (outboundData === null) {
        const staff = ['김철수', '이영희', '박민수', '최지은', '정준호'];
        outboundData = [];
        
        equipmentData.forEach((item, index) => {
            const outQuantity = Math.floor(Math.random() * 10) + 1; // 1~10 사이의 랜덤 수량
            const outDate = getRandomDateAfter(item.date, 365);
            const randomItemIndex = Math.floor(Math.random() * equipmentData.length); // 랜덤 물품 선택
            const randomItem = equipmentData[randomItemIndex];
            
            outboundData.push({
                date: outDate,
                code: randomItem.code,
                name: randomItem.name,
                dept: departments[index % departments.length],
                qty: outQuantity,
                staff: staff[index % staff.length]
            });
        });
    }
    
    // 날짜순으로 정렬 (최근이 위에)
    const sortedData = [...outboundData].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date);
    });
    
    // 정렬된 데이터를 테이블에 표시
    sortedData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.date}</td>
            <td>${data.code}</td>
            <td>${data.name}</td>
            <td>${data.dept}</td>
            <td>${data.qty}</td>
            <td>${data.staff}</td>
        `;
        tbody.appendChild(row);
    });
}

// Generate consumables data
function generateConsumablesData() {
    const consumables = [
        { name: 'HP 토너 카트리지', quantity: 45, price: 85000, status: '충분' },
        { name: 'Canon 토너 카트리지', quantity: 12, price: 75000, status: '부족' },
        { name: 'A4 용지 (1박스)', quantity: 200, price: 8000, status: '충분' },
        { name: '프린터 드럼 유닛', quantity: 8, price: 120000, status: '보통' },
        { name: '토너 폐기함', quantity: 15, price: 25000, status: '충분' }
    ];
    
    const tbody = document.getElementById('consumablesData');
    tbody.innerHTML = '';
    
    consumables.forEach(item => {
        const row = document.createElement('tr');
        let statusColor = '#28a745';
        if (item.status === '부족') statusColor = '#dc3545';
        if (item.status === '보통') statusColor = '#ffc107';
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}개</td>
            <td>₩${item.price.toLocaleString()}</td>
            <td style="color: ${statusColor}; font-weight: bold;">${item.status}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initInventory();
});