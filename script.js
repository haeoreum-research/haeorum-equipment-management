// Equipment data - 실제 비품 목록 (가나다 순 정렬)
const equipmentData = [
    { id: 1, name: '4900mAh 배터리', code: 'BAT001', category: '부품', date: '2018/08/24', quantity: 300, price: 12000, status: '폐기 처리', distribution: null },
    { id: 2, name: '50MP 카메라', code: 'CAM001', category: '카메라', date: '2018/08/24', quantity: 200, price: 125920, status: '사용중', distribution: null },
    { id: 3, name: '강화플라스틱케이스', code: 'ACC002', category: '액세서리', date: '2018/08/01', quantity: 10, price: 15000, status: '보관중', distribution: null },
    { id: 4, name: '계산기', code: 'OFF003', category: '사무용품', date: '2019/01/26', quantity: 4, price: 25000, status: '사용중', distribution: null },
    { id: 5, name: '고무 바퀴 세트', code: 'CAR001', category: '부품', date: '2018/07/20', quantity: 150, price: 8000, status: '사용중', distribution: null },
    { id: 6, name: '곡선 자', code: 'OFF007', category: '사무용품', date: '2019/02/12', quantity: 30, price: 3000, status: '사용중', distribution: null },
    { id: 7, name: '골판지 박스 (10개)', code: 'BOX001', category: '보관용품', date: '2018/10/04', quantity: 50, price: 5000, status: '보관중', distribution: null },
    { id: 8, name: '관형 네온등', code: 'LMP003', category: '조명', date: '2019/02/12', quantity: 5, price: 35000, status: '보관중', distribution: null },
    { id: 9, name: '네임펜 세트', code: 'OFF008', category: '사무용품', date: '2019/02/12', quantity: 20, price: 8000, status: '사용중', distribution: null },
    { id: 10, name: '노트북', code: 'NB002', category: '컴퓨터', date: '2018/08/01', quantity: 5, price: 400000, status: '사용중', distribution: null },
    { id: 11, name: '노트북 덮개', code: 'ACC001', category: '액세서리', date: '2018/08/01', quantity: 20, price: 30000, status: '사용중', distribution: null },
    { id: 12, name: '라벨 프린터', code: 'PR002', category: '주변장치', date: '2018/10/16', quantity: 2, price: 250000, status: '사용중', distribution: null },
    { id: 13, name: '랜선', code: 'NET001', category: '네트워크', date: '2019/03/12', quantity: 20, price: 15000, status: '사용중', distribution: null },
    { id: 14, name: '링바인더', code: 'OFF009', category: '사무용품', date: '2019/02/12', quantity: 25, price: 5000, status: '사용중', distribution: null },
    { id: 15, name: '마우스 패드', code: 'ACC003', category: '액세서리', date: '2018/08/01', quantity: 15, price: 12000, status: '사용중', distribution: null },
    { id: 16, name: '망치', code: 'TLS004', category: '공구', date: '2019/01/26', quantity: 2, price: 11000, status: '사용중', distribution: null },
    { id: 17, name: '멀티탭', code: 'ELC001', category: '전자용품', date: '2018/10/16', quantity: 50, price: 25000, status: '사용중', distribution: null },
    { id: 18, name: '모니터', code: 'MN001', category: '주변장치', date: '2018/10/16', quantity: 3, price: 220000, status: '사용중', distribution: null },
    { id: 19, name: '무선 마우스', code: 'MS002', category: '주변장치', date: '2019/03/12', quantity: 4, price: 35000, status: '사용중', distribution: null },
    { id: 20, name: '무선 키보드', code: 'KB002', category: '주변장치', date: '2019/03/12', quantity: 4, price: 45000, status: '사용중', distribution: null },
    { id: 21, name: '무전기', code: 'COM001', category: '통신용품', date: '2019/02/12', quantity: 4, price: 150000, status: '보관중', distribution: null },
    { id: 22, name: '문서세단기', code: 'OFF006', category: '사무용품', date: '2019/02/12', quantity: 1, price: 180000, status: '사용중', distribution: null },
    { id: 23, name: '미니 형광펜', code: 'OFF010', category: '사무용품', date: '2019/02/12', quantity: 40, price: 2000, status: '사용중', distribution: null },
    { id: 24, name: '바인더', code: 'OFF005', category: '사무용품', date: '2019/02/12', quantity: 50, price: 2800, status: '사용중', distribution: null },
    { id: 25, name: '보관용 박스', code: 'STG001', category: '보관용품', date: '2019/02/12', quantity: 20, price: 8000, status: '보관중', distribution: null },
    { id: 26, name: '보조의자', code: 'FRN012', category: '가구', date: '2019/02/12', quantity: 10, price: 25000, status: '사용중', distribution: null },
    { id: 27, name: '복합기 토너 (검정색)', code: 'SUP002', category: '소모품', date: '2018/09/14', quantity: 8, price: 85000, status: '사용중', distribution: null },
    { id: 28, name: '분리수거함', code: 'TRS001', category: '사무용품', date: '2019/01/26', quantity: 3, price: 45000, status: '사용중', distribution: null },
    { id: 29, name: '블루투스 스피커', code: 'SPK001', category: '음향기기', date: '2018/09/14', quantity: 6, price: 65000, status: '사용중', distribution: null },
    { id: 30, name: '브래킷 세트', code: 'HDW001', category: '부품', date: '2018/07/20', quantity: 100, price: 3500, status: '사용중', distribution: null },
    { id: 31, name: '빔 프로젝터', code: 'PRJ001', category: '주변장치', date: '2018/10/16', quantity: 2, price: 850000, status: '사용중', distribution: null },
    { id: 32, name: '빨간펜', code: 'PEN001', category: '사무용품', date: '2019/01/26', quantity: 100, price: 800, status: '사용중', distribution: null },
    { id: 33, name: '사다리', code: 'TLS001', category: '공구', date: '2019/01/26', quantity: 2, price: 90000, status: '사용중', distribution: null },
    { id: 34, name: '선반', code: 'FRN008', category: '가구', date: '2018/10/04', quantity: 6, price: 70000, status: '보관중', distribution: null },
    { id: 35, name: '스탠드 조명', code: 'LMP001', category: '조명', date: '2018/10/04', quantity: 2, price: 55000, status: '사용중', distribution: null },
    { id: 36, name: '스테이플러', code: 'OFF004', category: '사무용품', date: '2019/01/26', quantity: 5, price: 12000, status: '사용중', distribution: null },
    { id: 37, name: '슬림 노트북', code: 'NB001', category: '컴퓨터', date: '2018/08/01', quantity: 20, price: 600000, status: '사용중', distribution: null },
    { id: 38, name: '습식 타올', code: 'CLN004', category: '청소용품', date: '2019/02/12', quantity: 30, price: 5000, status: '사용중', distribution: null },
    { id: 39, name: '실리콘 패킹', code: 'PAR002', category: '부품', date: '2018/07/20', quantity: 100, price: 15000, status: '폐기 처리', distribution: null },
    { id: 40, name: '쌍코일 노트', code: 'OFF011', category: '사무용품', date: '2019/02/12', quantity: 35, price: 4000, status: '사용중', distribution: null },
    { id: 41, name: '아이포레(30판) [EA]', code: 'SUP001', category: '소모품', date: '2018/09/14', quantity: 10, price: 8000, status: '보관중', distribution: null },
    { id: 42, name: '안경닦이', code: 'ACC004', category: '액세서리', date: '2018/08/01', quantity: 20, price: 2000, status: '사용중', distribution: null },
    { id: 43, name: '앞치마 (5개)', code: 'CLN005', category: '청소용품', date: '2019/02/12', quantity: 10, price: 12000, status: '보관중', distribution: null },
    { id: 44, name: '에어탱크 부품', code: 'PAR001', category: '부품', date: '2018/07/20', quantity: 1500, price: 5500, status: '폐기 처리', distribution: null },
    { id: 45, name: '에어컨 필터', code: 'MNT001', category: '유지보수', date: '2019/01/26', quantity: 8, price: 18000, status: '사용중', distribution: null },
    { id: 46, name: '여권케이스', code: 'ACC005', category: '액세서리', date: '2018/08/01', quantity: 10, price: 8000, status: '보관중', distribution: null },
    { id: 47, name: '연장코드 (5m)', code: 'ELC003', category: '전자용품', date: '2018/10/16', quantity: 15, price: 15000, status: '사용중', distribution: null },
    { id: 48, name: '연필깎이', code: 'OFF012', category: '사무용품', date: '2019/02/12', quantity: 8, price: 3000, status: '사용중', distribution: null },
    { id: 49, name: '영상회의 카메라', code: 'CAM002', category: '카메라', date: '2018/08/24', quantity: 4, price: 450000, status: '사용중', distribution: null },
    { id: 50, name: '오디오 인터페이스', code: 'AUD001', category: '음향기기', date: '2018/09/14', quantity: 3, price: 280000, status: '보관중', distribution: null },
    { id: 51, name: '우산 (검정색)', code: 'ACC006', category: '액세서리', date: '2018/08/01', quantity: 12, price: 15000, status: '보관중', distribution: null },
    { id: 52, name: '운반용 카트', code: 'TLS002', category: '공구', date: '2019/01/26', quantity: 5, price: 120000, status: '보관중', distribution: null },
    { id: 53, name: '웹캠', code: 'CAM003', category: '카메라', date: '2018/08/24', quantity: 10, price: 65000, status: '사용중', distribution: null },
    { id: 54, name: '유리 클리너', code: 'CLN006', category: '청소용품', date: '2019/02/12', quantity: 20, price: 8000, status: '사용중', distribution: null },
    { id: 55, name: '유리 테이블', code: 'FRN013', category: '가구', date: '2018/10/04', quantity: 2, price: 280000, status: '사용중', distribution: null },
    { id: 56, name: '윈도우 클리너', code: 'CLN007', category: '청소용품', date: '2019/02/12', quantity: 15, price: 6000, status: '사용중', distribution: null },
    { id: 57, name: '음성 레코더', code: 'REC001', category: '음향기기', date: '2018/09/14', quantity: 2, price: 180000, status: '보관중', distribution: null },
    { id: 58, name: '의자 쿠션', code: 'FRN014', category: '가구', date: '2019/02/12', quantity: 15, price: 25000, status: '사용중', distribution: null },
    { id: 59, name: '이동식 옷걸이', code: 'FRN011', category: '가구', date: '2019/02/12', quantity: 2, price: 75000, status: '사용중', distribution: null },
    { id: 60, name: '이동식 철판', code: 'FRN010', category: '가구', date: '2019/01/26', quantity: 20, price: 140000, status: '보관중', distribution: null },
    { id: 61, name: '이어폰 (3개)', code: 'ACC007', category: '액세서리', date: '2018/08/01', quantity: 25, price: 18000, status: '사용중', distribution: null },
    { id: 62, name: '인쇄용 봉투', code: 'SUP003', category: '소모품', date: '2018/09/14', quantity: 500, price: 800, status: '사용중', distribution: null },
    { id: 63, name: '일회용 마스크 (50개)', code: 'SUP004', category: '소모품', date: '2018/09/14', quantity: 20, price: 5000, status: '사용중', distribution: null },
    { id: 64, name: '잠금장치', code: 'HDW002', category: '부품', date: '2018/07/20', quantity: 20, price: 8000, status: '사용중', distribution: null },
    { id: 65, name: '장시간 배터리', code: 'BAT002', category: '부품', date: '2018/08/24', quantity: 100, price: 35000, status: '사용중', distribution: null },
    { id: 66, name: '재충전가능 건전지', code: 'BAT003', category: '부품', date: '2018/08/24', quantity: 50, price: 12000, status: '사용중', distribution: null },
    { id: 67, name: '적외선 온도계', code: 'TMP001', category: '측정기기', date: '2019/01/26', quantity: 3, price: 85000, status: '사용중', distribution: null },
    { id: 68, name: '종이타올', code: 'SUP005', category: '소모품', date: '2018/09/14', quantity: 100, price: 3000, status: '사용중', distribution: null },
    { id: 69, name: '종이클립 (50개)', code: 'OFF013', category: '사무용품', date: '2019/02/12', quantity: 30, price: 1500, status: '사용중', distribution: null },
    { id: 70, name: '주석 필기펜', code: 'PEN002', category: '사무용품', date: '2019/01/26', quantity: 60, price: 1200, status: '사용중', distribution: null },
    { id: 71, name: '줄자', code: 'TLS005', category: '공구', date: '2019/01/26', quantity: 5, price: 8000, status: '사용중', distribution: null },
    { id: 72, name: '중고 노트북', code: 'NB003', category: '컴퓨터', date: '2018/08/01', quantity: 8, price: 250000, status: '보관중', distribution: null },
    { id: 73, name: '증류수 (5L)', code: 'CHM001', category: '화학용품', date: '2019/01/26', quantity: 10, price: 8000, status: '사용중', distribution: null },
    { id: 74, name: '진공청소기', code: 'CLN008', category: '청소용품', date: '2019/02/12', quantity: 2, price: 320000, status: '사용중', distribution: null },
    { id: 75, name: '책상', code: 'FRN006', category: '가구', date: '2018/10/04', quantity: 4, price: 150000, status: '사용중', distribution: null },
    { id: 76, name: '책상 스탠드', code: 'LMP004', category: '조명', date: '2019/02/12', quantity: 8, price: 45000, status: '사용중', distribution: null },
    { id: 77, name: '책장', code: 'FRN015', category: '가구', date: '2018/10/04', quantity: 3, price: 120000, status: '사용중', distribution: null },
    { id: 78, name: '천연 스펀지', code: 'CLN009', category: '청소용품', date: '2019/02/12', quantity: 25, price: 4000, status: '사용중', distribution: null },
    { id: 79, name: '체인 (10m)', code: 'HDW003', category: '부품', date: '2018/07/20', quantity: 5, price: 25000, status: '보관중', distribution: null },
    { id: 80, name: '초인종 버튼', code: 'ELC004', category: '전자용품', date: '2018/10/16', quantity: 20, price: 5000, status: '사용중', distribution: null },
    { id: 81, name: '충전식 손전등', code: 'LMP005', category: '조명', date: '2019/02/12', quantity: 4, price: 35000, status: '사용중', distribution: null },
    { id: 82, name: '출입증 카드', code: 'ID001', category: '사무용품', date: '2019/01/26', quantity: 50, price: 2000, status: '사용중', distribution: null },
    { id: 83, name: '칠판 (흰색)', code: 'OFF014', category: '사무용품', date: '2019/02/12', quantity: 3, price: 28000, status: '사용중', distribution: null },
    { id: 84, name: '칠판지우개', code: 'OFF015', category: '사무용품', date: '2019/02/12', quantity: 10, price: 2000, status: '사용중', distribution: null },
    { id: 85, name: '칫솔살균기', code: 'HEL001', category: '헬스기기', date: '2019/02/12', quantity: 2, price: 45000, status: '보관중', distribution: null },
    { id: 86, name: '캐비닛', code: 'FRN005', category: '가구', date: '2018/10/04', quantity: 20, price: 180000, status: '사용중', distribution: null },
    { id: 87, name: '캐릭터 스티커', code: 'ACC008', category: '액세서리', date: '2018/08/01', quantity: 100, price: 3000, status: '보관중', distribution: null },
    { id: 88, name: '캡슐형 보안열쇠', code: 'SEC001', category: '보안용품', date: '2019/01/26', quantity: 15, price: 12000, status: '사용중', distribution: null },
    { id: 89, name: '타이머', code: 'ELC002', category: '전자용품', date: '2019/02/12', quantity: 10, price: 70000, status: '사용중', distribution: null },
    { id: 90, name: '타이핑 매트', code: 'ACC009', category: '액세서리', date: '2018/08/01', quantity: 12, price: 22000, status: '사용중', distribution: null },
    { id: 91, name: '탁상시계', code: 'CLK001', category: '시계', date: '2019/01/26', quantity: 6, price: 28000, status: '사용중', distribution: null },
    { id: 92, name: '탁상용 선풍기', code: 'FAN001', category: '냉방용품', date: '2019/02/12', quantity: 5, price: 42000, status: '사용중', distribution: null },
    { id: 93, name: '탈취제 (300ml)', code: 'CHM002', category: '화학용품', date: '2019/01/26', quantity: 30, price: 5000, status: '사용중', distribution: null },
    { id: 94, name: '터미널 블록', code: 'ELC005', category: '전자용품', date: '2018/10/16', quantity: 50, price: 3000, status: '보관중', distribution: null },
    { id: 95, name: '토너카트리지 (검정)', code: 'SUP006', category: '소모품', date: '2018/09/14', quantity: 15, price: 75000, status: '사용중', distribution: null },
    { id: 96, name: '토너카트리지 (컬러)', code: 'SUP007', category: '소모품', date: '2018/09/14', quantity: 10, price: 95000, status: '사용중', distribution: null },
    { id: 97, name: '토너폐기함', code: 'TRS002', category: '사무용품', date: '2018/09/14', quantity: 5, price: 25000, status: '사용중', distribution: null },
    { id: 98, name: '트레이', code: 'OFF016', category: '사무용품', date: '2019/02/12', quantity: 20, price: 8000, status: '사용중', distribution: null },
    { id: 99, name: '트레이 스탠드', code: 'OFF017', category: '사무용품', date: '2019/02/12', quantity: 10, price: 12000, status: '사용중', distribution: null },
    { id: 100, name: '튜브형 보온병', code: 'KIT002', category: '주방용품', date: '2018/10/16', quantity: 4, price: 65000, status: '사용중', distribution: null }
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
    '무선 마우스': '🖱️',
    '라벨 프린터': '🏷️',
    '빔 프로젝터': '🎬',
    '블루투스 스피커': '🔊',
    '영상회의 카메라': '📹',
    '웹캠': '📷',
    '진공청소기': '🧹',
    '책장': '📚',
    '유리 테이블': '🪟',
    '탁상시계': '⏰'
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

// Generate inbound data
function generateInboundData() {
    const tbody = document.getElementById('inboundData');
    tbody.innerHTML = '';
    
    equipmentData.forEach((item, index) => {
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

// Generate outbound data (한 번만 생성, 이후 캐시 사용)
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
    
    // 캐시된 데이터를 테이블에 표시
    outboundData.forEach(data => {
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