// 운용 개념 시각화를 위한 SVG 이미지 생성
document.addEventListener('DOMContentLoaded', function() {
    // 기본 운용 개념 모듈형 다이어그램 생성
    createModularDiagram();
    
    // 분대급 운용 개념 인터랙티브 맵 생성
    createSquadMap();
    
    // 계층적 방어 구조 다이어그램 생성
    createLayeredDefenseDiagram();
    
    // 통합 운용 네트워크 다이어그램 생성
    createIntegrationDiagram();
    
    // 감시/정찰용 드론 대응 시각화 생성
    createSurveillanceDroneResponse();
    
    // 공격용 드론 대응 시각화 생성
    createAttackDroneResponse();
});

// 기본 운용 개념 모듈형 다이어그램 생성 함수
function createModularDiagram() {
    const communicationMode = document.getElementById('communication-mode');
    if (!communicationMode) return;
    
    const imagePlaceholder = communicationMode.querySelector('.image-placeholder');
    if (!imagePlaceholder) return;
    
    // SVG 컨테이너 생성
    const svgContainer = document.createElement('div');
    svgContainer.className = 'svg-container';
    svgContainer.style.width = '100%';
    svgContainer.style.height = '300px';
    
    // SVG 내용 생성
    const svgContent = `
    <svg width="100%" height="100%" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
        <!-- 중앙 무전기 모듈 -->
        <rect x="350" y="120" width="100" height="60" rx="10" fill="#1A3A5F" />
        <text x="400" y="155" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="14">통합형 무전기</text>
        
        <!-- 통신 모듈 -->
        <rect x="200" y="50" width="120" height="50" rx="10" fill="#4682B4" />
        <text x="260" y="80" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="14">통신 모듈</text>
        <path d="M320 75 L350 120" stroke="#333" stroke-width="2" fill="none" />
        
        <!-- 탐지/식별 모듈 -->
        <rect x="200" y="200" width="120" height="50" rx="10" fill="#2E5D4B" />
        <text x="260" y="230" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="14">탐지/식별 모듈</text>
        <path d="M320 225 L350 180" stroke="#333" stroke-width="2" fill="none" />
        
        <!-- 재밍 실행 모듈 -->
        <rect x="480" y="50" width="120" height="50" rx="10" fill="#8B4513" />
        <text x="540" y="80" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="14">재밍 실행 모듈</text>
        <path d="M480 75 L450 120" stroke="#333" stroke-width="2" fill="none" />
        
        <!-- 네트워크 모듈 -->
        <rect x="480" y="200" width="120" height="50" rx="10" fill="#800080" />
        <text x="540" y="230" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="14">네트워크 모듈</text>
        <path d="M480 225 L450 180" stroke="#333" stroke-width="2" fill="none" />
        
        <!-- 데이터 흐름 애니메이션 -->
        <circle class="data-flow" cx="335" y="97" r="5" fill="#FFD700">
            <animate attributeName="cx" values="320;350" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="75;120" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle class="data-flow" cx="335" y="202" r="5" fill="#FFD700">
            <animate attributeName="cx" values="320;350" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="225;180" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle class="data-flow" cx="465" y="97" r="5" fill="#FFD700">
            <animate attributeName="cx" values="450;480" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="120;75" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle class="data-flow" cx="465" y="202" r="5" fill="#FFD700">
            <animate attributeName="cx" values="450;480" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="180;225" dur="2s" repeatCount="indefinite" />
        </circle>
    </svg>
    `;
    
    svgContainer.innerHTML = svgContent;
    imagePlaceholder.parentNode.replaceChild(svgContainer, imagePlaceholder);
}

// 분대급 운용 개념 인터랙티브 맵 생성 함수
function createSquadMap() {
    const squadOperation = document.querySelector('.squad-operation');
    if (!squadOperation) return;
    
    const imagePlaceholder = squadOperation.querySelector('.image-placeholder');
    if (!imagePlaceholder) return;
    
    // SVG 컨테이너 생성
    const svgContainer = document.createElement('div');
    svgContainer.className = 'svg-container';
    svgContainer.style.width = '100%';
    svgContainer.style.height = '400px';
    
    // SVG 내용 생성
    const svgContent = `
    <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <!-- 배경 지형 -->
        <rect x="0" y="0" width="800" height="400" fill="#E8F4EA" />
        
        <!-- 지형 특징 -->
        <ellipse cx="150" cy="100" rx="80" ry="40" fill="#A0C8A0" />
        <ellipse cx="650" cy="300" rx="100" ry="50" fill="#A0C8A0" />
        <path d="M300 50 Q 400 20, 500 80 T 700 100" stroke="#6B8E23" stroke-width="3" fill="none" />
        <path d="M100 250 Q 200 300, 300 280 T 500 350" stroke="#6B8E23" stroke-width="3" fill="none" />
        
        <!-- 분대원 배치 -->
        <!-- 분대장 -->
        <circle cx="400" cy="200" r="15" fill="#1A3A5F" />
        <text x="400" y="205" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="10">대장</text>
        
        <!-- 부분대장 -->
        <circle cx="300" cy="150" r="12" fill="#2E5D4B" />
        <text x="300" y="154" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="8">부</text>
        
        <!-- 지정 운용자 -->
        <circle cx="500" cy="150" r="12" fill="#8B4513" />
        <text x="500" y="154" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="8">운용</text>
        
        <!-- 일반 분대원 -->
        <circle cx="200" cy="100" r="10" fill="#4682B4" />
        <circle cx="250" cy="250" r="10" fill="#4682B4" />
        <circle cx="350" cy="300" r="10" fill="#4682B4" />
        <circle cx="450" cy="300" r="10" fill="#4682B4" />
        <circle cx="550" cy="250" r="10" fill="#4682B4" />
        <circle cx="600" cy="100" r="10" fill="#4682B4" />
        
        <!-- 네트워크 연결 -->
        <line x1="400" y1="200" x2="300" y2="150" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        <line x1="400" y1="200" x2="500" y2="150" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        <line x1="400" y1="200" x2="200" y2="100" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        <line x1="400" y1="200" x2="250" y2="250" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        <line x1="400" y1="200" x2="350" y2="300" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        <line x1="400" y1="200" x2="450" y2="300" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        <line x1="400" y1="200" x2="550" y2="250" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        <line x1="400" y1="200" x2="600" y2="100" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        
        <!-- 협력적 재밍 범위 -->
        <circle cx="400" cy="200" r="180" fill="rgba(255, 0, 0, 0.1)" stroke="red" stroke-width="2" stroke-dasharray="10,5" />
        
        <!-- 드론 접근 -->
        <path d="M700 50 L 550 150 L 450 100" stroke="red" stroke-width="2" fill="none" />
        <polygon points="450,100 460,110 465,95" fill="red" />
        <text x="700" y="40" text-anchor="end" fill="red" font-family="'Noto Sans KR', sans-serif" font-size="12">적 드론 접근</text>
        
        <!-- 거리 표시 -->
        <line x1="300" y1="150" x2="400" y2="200" stroke="#666" stroke-width="1" />
        <text x="350" y="165" text-anchor="middle" fill="#666" font-family="'Noto Sans KR', sans-serif" font-size="10">약 100m</text>
        
        <line x1="400" y1="200" x2="500" y2="150" stroke="#666" stroke-width="1" />
        <text x="450" y="165" text-anchor="middle" fill="#666" font-family="'Noto Sans KR', sans-serif" font-size="10">약 100m</text>
    </svg>
    `;
    
    svgContainer.innerHTML = svgContent;
    imagePlaceholder.parentNode.replaceChild(svgContainer, imagePlaceholder);
}

// 계층적 방어 구조 다이어그램 생성 함수
function createLayeredDefenseDiagram() {
    const platoonOperation = document.querySelector('.platoon-operation');
    if (!platoonOperation) return;
    
    const imagePlaceholder = platoonOperation.querySelector('.image-placeholder');
    if (!imagePlaceholder) return;
    
    // SVG 컨테이너 생성
    const svgContainer = document.createElement('div');
    svgContainer.className = 'svg-container';
    svgContainer.style.width = '100%';
    svgContainer.style.height = '400px';
    
    // SVG 내용 생성
    const svgContent = `
    <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <!-- 배경 -->
        <rect x="0" y="0" width="800" height="400" fill="#F5F5F5" />
        
        <!-- 외곽 탐지층 -->
        <circle cx="400" cy="200" r="180" fill="rgba(70, 130, 180, 0.2)" stroke="#4682B4" stroke-width="3" />
        <text x="400" y="50" text-anchor="middle" fill="#4682B4" font-family="'Noto Sans KR', sans-serif" font-size="16" font-weight="bold">외곽 탐지층</text>
        <text x="400" y="70" text-anchor="middle" fill="#4682B4" font-family="'Noto Sans KR', sans-serif" font-size="12">조기 경보 및 위협 식별</text>
        
        <!-- 중간 추적층 -->
        <circle cx="400" cy="200" r="120" fill="rgba(46, 93, 75, 0.2)" stroke="#2E5D4B" stroke-width="3" />
        <text x="400" y="120" text-anchor="middle" fill="#2E5D4B" font-family="'Noto Sans KR', sans-serif" font-size="16" font-weight="bold">중간 추적층</text>
        <text x="400" y="140" text-anchor="middle" fill="#2E5D4B" font-family="'Noto Sans KR', sans-serif" font-size="12">드론 이동 경로 추적 및 분석</text>
        
        <!-- 내부 방어층 -->
        <circle cx="400" cy="200" r="60" fill="rgba(139, 69, 19, 0.2)" stroke="#8B4513" stroke-width="3" />
        <text x="400" y="190" text-anchor="middle" fill="#8B4513" font-family="'Noto Sans KR', sans-serif" font-size="16" font-weight="bold">내부 방어층</text>
        <text x="400" y="210" text-anchor="middle" fill="#8B4513" font-family="'Noto Sans KR', sans-serif" font-size="12">집중 재밍으로 핵심 지역 보호</text>
        
        <!-- 1분대 배치 -->
        <circle cx="300" cy="100" r="10" fill="#4682B4" />
        <circle cx="350" cy="80" r="10" fill="#4682B4" />
        <circle cx="400" cy="70" r="10" fill="#4682B4" />
        <circle cx="450" cy="80" r="10" fill="#4682B4" />
        <circle cx="500" cy="100" r="10" fill="#4682B4" />
        <text x="400" y="40" text-anchor="middle" fill="#333" font-family="'Noto Sans KR', sans-serif" font-size="12">1분대</text>
        
        <!-- 2분대 배치 -->
        <circle cx="250" cy="200" r="10" fill="#2E5D4B" />
        <circle cx="270" cy="150" r="10" fill="#2E5D4B" />
        <circle cx="530" cy="150" r="10" fill="#2E5D4B" />
        <circle cx="550" cy="200" r="10" fill="#2E5D4B" />
        <circle cx="530" cy="250" r="10" fill="#2E5D4B" />
        <circle cx="270" cy="250" r="10" fill="#2E5D4B" />
        <text x="200" y="200" text-anchor="middle" fill="#333" font-family="'Noto Sans KR', sans-serif" font-size="12">2분대</text>
        
        <!-- 3분대 배치 -->
        <circle cx="350" cy="300" r="10" fill="#8B4513" />
        <circle cx="400" cy="320" r="10" fill="#8B4513" />
        <circle cx="450" cy="300" r="10" fill="#8B4513" />
        <text x="400" y="350" text-anchor="middle" fill="#333" font-family="'Noto Sans KR', sans-serif" font-size="12">3분대</text>
        
        <!-- 소대장 -->
        <circle cx="400" cy="200" r="15" fill="#1A3A5F" />
        <text x="400" y="205" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="10">소대장</text>
        
        <!-- 방어 범위 표시 -->
        <text x="590" y="200" text-anchor="start" fill="#333" font-family="'Noto Sans KR', sans-serif" font-size="12">약 500m 방어 범위</text>
        <line x1="580" y1="200" x2="550" y2="200" stroke="#333" stroke-width="1" stroke-dasharray="5,5" />
        
        <!-- 드론 접근 경로 -->
        <path d="M700 50 L 500 150 L 400 200" stroke="red" stroke-width="2" fill="none" />
        <polygon points="400,200 410,190 390,190" fill="red" />
        <text x="700" y="40" text-anchor="end" fill="red" font-family="'Noto Sans KR', sans-serif" font-size="12">적 드론 접근</text>
    </svg>
    `;
    
    svgContainer.innerHTML = svgContent;
    imagePlaceholder.parentNode.replaceChild(svgContainer, imagePlaceholder);
}

// 통합 운용 네트워크 다이어그램 생성 함수
function createIntegrationDiagram() {
    const integratedOperation = document.querySelector('.integrated-operation');
    if (!integratedOperation) return;
    
    const imagePlaceholder = integratedOperation.querySelector('.image-placeholder');
    if (!imagePlaceholder) return;
    
    // SVG 컨테이너 생성
    const svgContainer = document.createElement('div');
    svgContainer.className = 'svg-container';
    svgContainer.style.width = '100%';
    svgContainer.style.height = '400px';
    
    // SVG 내용 생성
    const svgContent = `
    <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <!-- 배경 -->
        <rect x="0" y="0" width="800" height="400" fill="#F5F5F5" />
        
        <!-- 상위 체계 -->
        <rect x="300" y="30" width="200" height="60" rx="10" fill="#1A3A5F" />
        <text x="400" y="65" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="14" font-weight="bold">상위 지휘통제 체계</text>
        <text x="400" y="85" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="10">(TICN, JTDLS, C4I)</text>
        
        <!-- 중간 체계 -->
        <rect x="150" y="150" width="150" height="50" rx="10" fill="#4682B4" />
        <text x="225" y="180" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="12">대공경보체계</text>
        
        <rect x="325" y="150" width="150" height="50" rx="10" fill="#4682B4" />
        <text x="400" y="180" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="12">저고도 레이더 체계</text>
        
        <rect x="500" y="150" width="150" height="50" rx="10" fill="#4682B4" />
        <text x="575" y="180" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="12">방공지휘통제체계</text>
        
        <!-- 통합형 무전기 체계 -->
        <rect x="100" y="250" width="120" height="50" rx="10" fill="#2E5D4B" />
        <text x="160" y="280" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="12">분대급 체계</text>
        
        <rect x="250" y="250" width="120" height="50" rx="10" fill="#2E5D4B" />
        <text x="310" y="280" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="12">분대급 체계</text>
        
        <rect x="400" y="250" width="120" height="50" rx="10" fill="#2E5D4B" />
        <text x="460" y="280" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="12">소대급 체계</text>
        
        <rect x="550" y="250" width="120" height="50" rx="10" fill="#2E5D4B" />
        <text x="610" y="280" text-anchor="middle" fill="white" font-family="'Noto Sans KR', sans-serif" font-size="12">특수작전 체계</text>
        
        <!-- 개별 노드 -->
        <circle cx="130" cy="350" r="10" fill="#8B4513" />
        <circle cx="160" cy="350" r="10" fill="#8B4513" />
        <circle cx="190" cy="350" r="10" fill="#8B4513" />
        
        <circle cx="280" cy="350" r="10" fill="#8B4513" />
        <circle cx="310" cy="350" r="10" fill="#8B4513" />
        <circle cx="340" cy="350" r="10" fill="#8B4513" />
        
        <circle cx="430" cy="350" r="10" fill="#8B4513" />
        <circle cx="460" cy="350" r="10" fill="#8B4513" />
        <circle cx="490" cy="350" r="10" fill="#8B4513" />
        
        <circle cx="580" cy="350" r="10" fill="#8B4513" />
        <circle cx="610" cy="350" r="10" fill="#8B4513" />
        <circle cx="640" cy="350"<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>