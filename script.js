// Generate outbound data
function generateOutboundData() {
    const tbody = document.getElementById('outboundData');
    tbody.innerHTML = '';
    
    const staff = ['김철수', '이영희', '박민수', '최지은', '정준호'];
    
    equipmentData.forEach((item, index) => {
        const row = document.createElement('tr');
        const outQuantity = Math.floor(Math.random() * 10) + 1; // 1~10 사이의 랜덤 수량
        const outDate = getRandomDateAfter(item.date, 365);
        const randomItemIndex = Math.floor(Math.random() * equipmentData.length); // 랜덤 물품 선택
        const randomItem = equipmentData[randomItemIndex];
        
        row.innerHTML = `
            <td>${outDate}</td>
            <td>${randomItem.code}</td>
            <td>${randomItem.name}</td>
            <td>${departments[index % departments.length]}</td>
            <td>${outQuantity}</td>
            <td>${staff[index % staff.length]}</td>
        `;
        tbody.appendChild(row);
    });
}