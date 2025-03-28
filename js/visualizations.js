// 기본 운용 개념 시각화 - SVG 다이어그램
function createModuleDiagram() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "400");
    svg.setAttribute("viewBox", "0 0 800 400");
    svg.setAttribute("class", "module-diagram");
    
    // 배경 그리드
    const grid = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
    grid.setAttribute("id", "grid");
    grid.setAttribute("width", "20");
    grid.setAttribute("height", "20");
    grid.setAttribute("patternUnits", "userSpaceOnUse");
    
    const gridPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    gridPath.setAttribute("d", "M 20 0 L 0 0 0 20");
    gridPath.setAttribute("fill", "none");
    gridPath.setAttribute("stroke", "#eee");
    gridPath.setAttribute("stroke-width", "1");
    grid.appendChild(gridPath);
    
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.appendChild(grid);
    svg.appendChild(defs);
    
    const gridRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    gridRect.setAttribute("width", "100%");
    gridRect.setAttribute("height", "100%");
    gridRect.setAttribute("fill", "url(#grid)");
    svg.appendChild(gridRect);
    
    // 중앙 무전기 모듈
    const centralModule = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    centralModule.setAttribute("x", "350");
    centralModule.setAttribute("y", "150");
    centralModule.setAttribute("width", "100");
    centralModule.setAttribute("height", "100");
    centralModule.setAttribute("rx", "10");
    centralModule.setAttribute("ry", "10");
    centralModule.setAttribute("fill", "#1A3A5F");
    centralModule.setAttribute("class", "central-module");
    svg.appendChild(centralModule);
    
    const centralText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    centralText.setAttribute("x", "400");
    centralText.setAttribute("y", "200");
    centralText.setAttribute("text-anchor", "middle");
    centralText.setAttribute("fill", "white");
    centralText.setAttribute("font-size", "14");
    centralText.textContent = "통합형 무전기";
    svg.appendChild(centralText);
    
    // 통신 모듈
    createModule(svg, "통신 모듈", "#4682B4", 200, 100, 100, 80);
    
    // 탐지/식별 모듈
    createModule(svg, "탐지/식별 모듈", "#2E5D4B", 500, 100, 120, 80);
    
    // 재밍 실행 모듈
    createModule(svg, "재밍 실행 모듈", "#D64045", 200, 250, 100, 80);
    
    // 네트워크 모듈
    createModule(svg, "네트워크 모듈", "#FFD166", 500, 250, 120, 80);
    
    // 연결선
    createConnection(svg, 300, 140, 350, 180);
    createConnection(svg, 500, 140, 450, 180);
    createConnection(svg, 300, 290, 350, 220);
    createConnection(svg, 500, 290, 450, 220);
    
    return svg;
}

// 모듈 생성 함수
function createModule(svg, text, color, x, y, width, height) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "module");
    
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("rx", "10");
    rect.setAttribute("ry", "10");
    rect.setAttribute("fill", color);
    rect.setAttribute("class", "module-rect");
    
    const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("x", x + width/2);
    textElement.setAttribute("y", y + height/2);
    textElement.setAttribute("text-anchor", "middle");
    textElement.setAttribute("fill", "white");
    textElement.setAttribute("font-size", "14");
    textElement.textContent = text;
    
    group.appendChild(rect);
    group.appendChild(textElement);
    svg.appendChild(group);
    
    // 모듈에 마우스 오버 이벤트 추가
    group.addEventListener("mouseover", function() {
        rect.setAttribute("filter", "url(#shadow)");
        rect.setAttribute("transform", "scale(1.05)");
        textElement.setAttribute("transform", "scale(1.05)");
    });
    
    group.addEventListener("mouseout", function() {
        rect.removeAttribute("filter");
        rect.removeAttribute("transform");
        textElement.removeAttribute("transform");
    });
}

// 연결선 생성 함수
function createConnection(svg, x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#333");
    line.setAttribute("stroke-width", "2");
    line.setAttribute("class", "connection");
    svg.appendChild(line);
}

// 분대급 운용 개념 시각화 - 인터랙티브 맵
function createSquadMap() {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 500;
    canvas.className = "squad-map";
    
    const ctx = canvas.getContext("2d");
    
    // 배경 그리기
    ctx.fillStyle = "#e8f4ea";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 지형 그리기
    drawTerrain(ctx, canvas.width, canvas.height);
    
    // 분대원 배치
    const squadMembers = [
        { x: 400, y: 250, role: "분대장", color: "#1A3A5F" },
        { x: 300, y: 150, role: "부분대장", color: "#2E5D4B" },
        { x: 500, y: 150, role: "지정 운용자", color: "#D64045" },
        { x: 200, y: 200, role: "분대원", color: "#4682B4" },
        { x: 600, y: 200, role: "분대원", color: "#4682B4" },
        { x: 300, y: 350, role: "분대원", color: "#4682B4" },
        { x: 500, y: 350, role: "분대원", color: "#4682B4" },
        { x: 200, y: 400, role: "분대원", color: "#4682B4" },
        { x: 600, y: 400, role: "분대원", color: "#4682B4" }
    ];
    
    // 네트워크 연결 그리기
    ctx.strokeStyle = "rgba(26, 58, 95, 0.5)";
    ctx.lineWidth = 2;
    
    for (let i = 0; i < squadMembers.length; i++) {
        for (let j = i + 1; j < squadMembers.length; j++) {
            ctx.beginPath();
            ctx.moveTo(squadMembers[i].x, squadMembers[i].y);
            ctx.lineTo(squadMembers[j].x, squadMembers[j].y);
            ctx.stroke();
        }
    }
    
    // 분대원 그리기
    for (const member of squadMembers) {
        drawSquadMember(ctx, member.x, member.y, member.role, member.color);
    }
    
    // 드론 접근 시뮬레이션
    const drone = { x: -50, y: 100 };
    let animationId;
    
    function animateDrone() {
        // 이전 프레임 지우기
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 배경 다시 그리기
        ctx.fillStyle = "#e8f4ea";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 지형 다시 그리기
        drawTerrain(ctx, canvas.width, canvas.height);
        
        // 네트워크 연결 다시 그리기
        ctx.strokeStyle = "rgba(26, 58, 95, 0.5)";
        ctx.lineWidth = 2;
        
        for (let i = 0; i < squadMembers.length; i++) {
            for (let j = i + 1; j < squadMembers.length; j++) {
                ctx.beginPath();
                ctx.moveTo(squadMembers[i].x, squadMembers[i].y);
                ctx.lineTo(squadMembers[j].x, squadMembers[j].y);
                ctx.stroke();
            }
        }
        
        // 드론이 접근하면 재밍 범위 표시
        if (drone.x > 100) {
            // 재밍 범위 그리기
            ctx.beginPath();
            ctx.arc(400, 250, 300, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(214, 64, 69, 0.1)";
            ctx.fill();
            
            // 재밍 파동 효과
            ctx.beginPath();
            ctx.arc(400, 250, 300 - (Date.now() % 1000) / 10, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(214, 64, 69, 0.5)";
            ctx.lineWidth = 3;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(400, 250, 300 - (Date.now() % 1000) / 5, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(214, 64, 69, 0.3)";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // 분대원 다시 그리기
        for (const member of squadMembers) {
            drawSquadMember(ctx, member.x, member.y, member.role, member.color);
        }
        
        // 드론 그리기
        drawDrone(ctx, drone.x, drone.y);
        
        // 드론 이동
        drone.x += 2;
        drone.y += 0.5;
        
        // 드론이 화면을 벗어나면 애니메이션 중지
        if (drone.x > canvas.width + 50) {
            cancelAnimationFrame(animationId);
            drone.x = -50;
            drone.y = 100;
            setTimeout(() => {
                animationId = requestAnimationFrame(animateDrone);
            }, 2000);
        } else {
            animationId = requestAnimationFrame(animateDrone);
        }
    }
    
    // 애니메이션 시작
    animationId = requestAnimationFrame(animateDrone);
    
    return canvas;
}

// 지형 그리기 함수
function drawTerrain(ctx, width, height) {
    // 언덕
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.bezierCurveTo(width/4, height-100, width/2, height-50, width, height);
    ctx.fillStyle = "#c8e6c9";
    ctx.fill();
    
    // 나무
    drawTree(ctx, 100, 350, 30);
    drawTree(ctx, 700, 380, 40);
    drawTree(ctx, 250, 420, 25);
    drawTree(ctx, 550, 430, 35);
    
    // 바위
    drawRock(ctx, 150, 300, 20);
    drawRock(ctx, 650, 320, 25);
    drawRock(ctx, 350, 400, 15);
}

// 나무 그리기 함수
function drawTree(ctx, x, y, size) {
    // 나무 줄기
    ctx.fillStyle = "#8d6e63";
    ctx.fillRect(x-size/10, y-size, size/5, size);
    
    // 나무 잎
    ctx.beginPath();
    ctx.arc(x, y-size, size, 0, Math.PI * 2);
    ctx.fillStyle = "#66bb6a";
    ctx.fill();
}

// 바위 그리기 함수
function drawRock(ctx, x, y, size) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = "#9e9e9e";
    ctx.fill();
}

// 분대원 그리기 함수
function drawSquadMember(ctx, x, y, role, color) {
    // 무전기 아이콘
    ctx.beginPath();
    ctx.rect(x-15, y-15, 30, 30);
    ctx.fillStyle = color;
    ctx.fill();
    
    // 역할 텍스트
    ctx.font = "12px Noto Sans KR";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.fillText(role, x, y+30);
}

// 드론 그리기 함수
function drawDrone(ctx, x, y) {
    // 드론 몸체
    ctx.beginPath();
    ctx.rect(x-15, y-5, 30, 10);
    ctx.fillStyle = "#333";
    ctx.fill();
    
    // 드론 프로펠러
    ctx.beginPath();
    ctx.arc(x-20, y-5, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#666";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x+20, y-5, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#666";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x-20, y+5, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#666";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x+20, y+5, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#666";
    ctx.fill();
}

// 소대급 운용 개념 시각화 - 계층적 방어 구조 다이어그램
function createLayeredDefenseDiagram() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "500");
    svg.setAttribute("viewBox", "0 0 800 500");
    svg.setAttribute("class", "layered-defense-diagram");
    
    // 그림자 필터
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    
    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", "shadow");
    filter.setAttribute("x", "-20%");
    filter.setAttribute("y", "-20%");
    filter.setAttribute("width", "140%");
    filter.setAttribute("height", "140%");
    
    const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
    feGaussianBlur.setAttribute("in", "SourceAlpha");
    feGaussianBlur.setAttribute("stdDeviation", "3");
    
    const feOffset = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
    feOffset.setAttribute("dx", "2");
    feOffset.setAttribute("dy", "2");
    feOffset.setAttribute("result", "offsetblur");
    
    const feComponentTransfer = document.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
    
    const feFuncA = document.createElementNS("http://www.w3.org/2000/svg", "feFuncA");
    feFuncA.setAttribute("type", "linear");
    feFuncA.setAttribute("slope", "0.2");
    
    feComponentTransfer.appendChild(feFuncA);
    
    const feMerge = document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
    
    const feMergeNode1 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
    const feMergeNode2 = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
    feMergeNode2.setAttribute("in", "SourceGraphic");
    
    feMerge.appendChild(feMergeNode1);
    feMerge.appendChild(feMergeNode2);
    
    filter.appendChild(feGaussianBlur);
    filter.appendChild(feOffset);
    filter.appendChild(feComponentTransfer);
    filter.appendChild(feMerge);
    
    defs.appendChild(filter);
    svg.appendChild(defs);
    
    // 외곽 탐지층
    const outerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    outerCircle.setAttribute("cx", "400");
    outerCircle.setAttribute("cy", "250");
    outerCircle.setAttribute("r", "200");
    outerCircle.setAttribute("fill", "rgba(26, 58, 95, 0.1)");
    outerCircle.setAttribute("stroke", "#1A3A5F");
    outerCircle.setAttribute("stroke-width", "2");
    outerCircle.setAttribute("class", "outer-layer");
    svg.appendChild(outerCircle);
    
    const outerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    outerText.setAttribute("x", "400");
    outerText.setAttribute("y", "80");
    outerText.setAttribute("text-anchor", "middle");
    outerText.setAttribute("fill", "#1A3A5F");
    outerText.setAttribute("font-size", "16");
    outerText.setAttribute("font-weight", "bold");
    outerText.textContent = "외곽 탐지층";
    svg.appendChild(outerText);
    
    // 중간 추적층
    const middleCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    middleCircle.setAttribute("cx", "400");
    middleCircle.setAttribute("cy", "250");
    middleCircle.setAttribute("r", "130");
    middleCircle.setAttribute("fill", "rgba(46, 93, 75, 0.1)");
    middleCircle.setAttribute("stroke", "#2E5D4B");
    middleCircle.setAttribute("stroke-width", "2");
    middleCircle.setAttribute("class", "middle-layer");
    svg.appendChild(middleCircle);
    
    const middleText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    middleText.setAttribute("x", "400");
    middleText.setAttribute("y", "140");
    middleText.setAttribute("text-anchor", "middle");
    middleText.setAttribute("fill", "#2E5D4B");
    middleText.setAttribute("font-size", "16");
    middleText.setAttribute("font-weight", "bold");
    middleText.textContent = "중간 추적층";
    svg.appendChild(middleText);
    
    // 내부 방어층
    const innerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    innerCircle.setAttribute("cx", "400");
    innerCircle.setAttribute("cy", "250");
    innerCircle.setAttribute("r", "70");
    innerCircle.setAttribute("fill", "rgba(214, 64, 69, 0.1)");
    innerCircle.setAttribute("stroke", "#D64045");
    innerCircle.setAttribute("stroke-width", "2");
    innerCircle.setAttribute("class", "inner-layer");
    svg.appendChild(innerCircle);
    
    const innerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    innerText.setAttribute("x", "400");
    innerText.setAttribute("y", "200");
    innerText.setAttribute("text-anchor", "middle");
    innerText.setAttribute("fill", "#D64045");
    innerText.setAttribute("font-size", "16");
    innerText.setAttribute("font-weight", "bold");
    innerText.textContent = "내부 방어층";
    svg.appendChild(innerText);
    
    // 분대 배치
    // 1분대 (외곽)
    createSquad(svg, 250, 150, "1분대", "#1A3A5F");
    createSquad(svg, 550, 150, "1분대", "#1A3A5F");
    createSquad(svg, 250, 350, "1분대", "#1A3A5F");
    createSquad(svg, 550, 350, "1분대", "#1A3A5F");
    
    // 2분대 (중간)
    createSquad(svg, 330, 180, "2분대", "#2E5D4B");
    createSquad(svg, 470, 180, "2분대", "#2E5D4B");
    createSquad(svg, 330, 320, "2분대", "#2E5D4B");
    c<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>