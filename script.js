// Equipment data
const equipmentData = [
    { id: 1, name: '슬림 노트북', code: 'NB001', quantity: 15 },
    { id: 2, name: '데스크탑 컴퓨터', code: 'PC001', quantity: 8 },
    { id: 3, name: '프린터', code: 'PR001', quantity: 2 },
    { id: 4, name: '스캐너', code: 'SC001', quantity: 3 },
    { id: 5, name: '모니터', code: 'MN001', quantity: 12 },
    { id: 6, name: '키보드', code: 'KB001', quantity: 25 },
    { id: 7, name: '마우스', code: 'MS001', quantity: 30 },
    { id: 8, name: '헤드셋', code: 'HS001', quantity: 5 },
    { id: 9, name: '웹캠', code: 'WC001', quantity: 7 },
    { id: 10, name: '외장 하드드라이브', code: 'HDD001', quantity: 10 }
];

const departments = [
    '수면장애연구팀',
    '생체리듬연구팀',
    '임상연구팀',
    '자료분석팀',
    '연구지원팀'
];

let selectedItem = null;

// Generate inventory items
function initInventory() {
    const container = document.getElementById('inventoryItems');
    container.innerHTML = '';
    
    equipmentData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-image">?</div>
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-count">총 ${item.quantity}개</div>
            </div>
        `;
        card.onclick = () => selectItem(item, card);
        container.appendChild(card);
    });
}

// Select item and show details
function selectItem(item, element) {
    // Remove previous selection
    document.querySelectorAll('.item-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedItem = item;
    
    // Generate department distribution
    const detailPanel = document.getElementById('detailPanel');
    detailPanel.innerHTML = '';
    
    let totalDistributed = 0;
    const distribution = [];
    
    // Generate random distribution for each department
    departments.forEach((dept, index) => {
        const maxCount = Math.min(item.quantity - totalDistributed, Math.floor(Math.random() * 8) + 1);
        distribution.push({ dept, count: maxCount });
        totalDistributed += maxCount;
    });
    
    // Create dept boxes
    distribution.forEach(dist => {
        const box = document.createElement('div');
        box.className = 'dept-box';
        box.innerHTML = `
            <div class="dept-name">${dist.dept}</div>
            <div class="dept-count">${dist.count}</div>
            <div class="dept-label">보유중</div>
        `;
        detailPanel.appendChild(box);
    });
}

// Filter inventory
function filterInventory() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.item-card');
    
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

// Generate inbound data
function generateInboundData() {
    const tbody = document.getElementById('inboundData');
    tbody.innerHTML = '';
    
    const months = ['2024-10', '2024-09', '2024-08', '2024-07', '2024-06'];
    
    equipmentData.forEach((item, index) => {
        const date = new Date();
        date.setMonth(date.getMonth() - (index % 5));
        const dateStr = date.toISOString().split('T')[0];
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dateStr}</td>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${Math.floor(Math.random() * 10) + 5}</td>
        `;
        tbody.appendChild(row);
    });
}

// Generate outbound data
function generateOutboundData() {
    const tbody = document.getElementById('outboundData');
    tbody.innerHTML = '';
    
    const staff = ['김철수', '이영희', '박민수', '최지은', '정준호'];
    
    equipmentData.forEach((item, index) => {
        const date = new Date();
        date.setMonth(date.getMonth() - (index % 5));
        const dateStr = date.toISOString().split('T')[0];
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dateStr}</td>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${departments[index % departments.length]}</td>
            <td>${Math.floor(Math.random() * 5) + 1}</td>
            <td>${staff[index % staff.length]}</td>
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