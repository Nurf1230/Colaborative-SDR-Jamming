// 기대 효과 페이지 JavaScript 파일
document.addEventListener('DOMContentLoaded', function() {
    // 혁신성 다이어그램 생성
    function createInnovationDiagram() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "400");
        svg.setAttribute("viewBox", "0 0 800 400");
        svg.setAttribute("class", "innovation-diagram");
        
        const diagramContainer = document.querySelector('.innovation-image .placeholder-image');
        if (diagramContainer) {
            diagramContainer.innerHTML = '';
            diagramContainer.appendChild(svg);
            
            // 혁신성 다이어그램 그리기
            drawInnovationDiagram(svg);
        }
    }
    
    // 혁신성 다이어그램 그리기 함수
    function drawInnovationDiagram(svg) {
        // 중앙 원
        const centralCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        centralCircle.setAttribute("cx", "400");
        centralCircle.setAttribute("cy", "200");
        centralCircle.setAttribute("r", "80");
        centralCircle.setAttribute("fill", "#1A3A5F");
        svg.appendChild(centralCircle);
        
        // 중앙 텍스트
        const centralText1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        centralText1.setAttribute("x", "400");
        centralText1.setAttribute("y", "190");
        centralText1.setAttribute("text-anchor", "middle");
        centralText1.setAttribute("fill", "white");
        centralText1.setAttribute("font-size", "16");
        centralText1.setAttribute("font-weight", "bold");
        centralText1.textContent = "통합형 전술 무전기";
        svg.appendChild(centralText1);
        
        const centralText2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        centralText2.setAttribute("x", "400");
        centralText2.setAttribute("y", "215");
        centralText2.setAttribute("text-anchor", "middle");
        centralText2.setAttribute("fill", "white");
        centralText2.setAttribute("font-size", "16");
        centralText2.setAttribute("font-weight", "bold");
        centralText2.textContent = "협력적 재밍 체계";
        svg.appendChild(centralText2);
        
        // 혁신 요소들
        const innovations = [
            { name: "다기능 통합", x: 200, y: 100, color: "#2E5D4B" },
            { name: "협력적 재밍", x: 600, y: 100, color: "#D64045" },
            { name: "AI 기반 드론 식별", x: 150, y: 300, color: "#4682B4" },
            { name: "다중 드론 대응", x: 400, y: 350, color: "#FFD166" },
            { name: "상황 적응형 운용", x: 650, y: 300, color: "#6A0572" }
        ];
        
        // 혁신 요소 그리기
        innovations.forEach(innovation => {
            // 연결선
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", "400");
            line.setAttribute("y1", "200");
            line.setAttribute("x2", innovation.x);
            line.setAttribute("y2", innovation.y);
            line.setAttribute("stroke", innovation.color);
            line.setAttribute("stroke-width", "3");
            svg.appendChild(line);
            
            // 원
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", innovation.x);
            circle.setAttribute("cy", innovation.y);
            circle.setAttribute("r", "50");
            circle.setAttribute("fill", innovation.color);
            svg.appendChild(circle);
            
            // 텍스트
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", innovation.x);
            text.setAttribute("y", innovation.y);
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("fill", "white");
            text.setAttribute("font-size", "14");
            text.setAttribute("font-weight", "bold");
            
            // 긴 텍스트는 줄바꿈
            const words = innovation.name.split(' ');
            if (words.length > 1) {
                const tspan1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan1.setAttribute("x", innovation.x);
                tspan1.setAttribute("dy", "-7");
                tspan1.textContent = words[0];
                text.appendChild(tspan1);
                
                const tspan2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan2.setAttribute("x", innovation.x);
                tspan2.setAttribute("dy", "20");
                tspan2.textContent = words.slice(1).join(' ');
                text.appendChild(tspan2);
            } else {
                text.textContent = innovation.name;
            }
            
            svg.appendChild(text);
        });
        
        // 애니메이션 효과
        innovations.forEach(innovation => {
            const circle = svg.querySelector(`circle[cx="${innovation.x}"][cy="${innovation.y}"]`);
            
            // 펄스 애니메이션
            function pulseAnimation() {
                let scale = 1;
                let growing = false;
                
                function animate() {
                    if (growing) {
                        scale += 0.005;
                        if (scale >= 1.1) {
                            growing = false;
                        }
                    } else {
                        scale -= 0.005;
                        if (scale <= 0.9) {
                            growing = true;
                        }
                    }
                    
                    circle.setAttribute("transform", `scale(${scale}) translate(${(innovation.x * (1 - scale))}, ${(innovation.y * (1 - scale))})`);
                    
                    requestAnimationFrame(animate);
                }
                
                animate();
            }
            
            setTimeout(pulseAnimation, Math.random() * 1000);
        });
    }
    
    // 군사적 기대효과 다이어그램 생성
    function createMilitaryEffectsDiagram() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "400");
        svg.setAttribute("viewBox", "0 0 800 400");
        svg.setAttribute("class", "military-effects-diagram");
        
        const diagramContainer = document.querySelector('.effects-visualization .placeholder-image');
        if (diagramContainer) {
            diagramContainer.innerHTML = '';
            diagramContainer.appendChild(svg);
            
            // 군사적 기대효과 다이어그램 그리기
            drawMilitaryEffectsDiagram(svg);
        }
    }
    
    // 군사적 기대효과 다이어그램 그리기 함수
    function drawMilitaryEffectsDiagram(svg) {
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
        
        // 지형 그리기
        const terrain = document.createElementNS("http://www.w3.org/2000/svg", "path");
        terrain.setAttribute("d", "M0,400 L100,350 L200,380 L300,320 L400,350 L500,300 L600,330 L700,280 L800,320 L800,400 Z");
        terrain.setAttribute("fill", "#c8e6c9");
        svg.appendChild(terrain);
        
        // 소규모 제대 그리기
        const squad = document.createElementNS("http://www.w3.org/2000/svg", "g");
        squad.setAttribute("transform", "translate(400, 330)");
        
        // 분대원들
        const squadMembers = [
            { x: 0, y: 0, role: "분대장" },
            { x: -30, y: -20, role: "부분대장" },
            { x: 30, y: -20, role: "통신병" },
            { x: -60, y: -10, role: "분대원" },
            { x: 60, y: -10, role: "분대원" },
            { x: -40, y: 20, role: "분대원" },
            { x: 40, y: 20, role: "분대원" }
        ];
        
        squadMembers.forEach(member => {
            const soldier = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            soldier.setAttribute("cx", member.x);
            soldier.setAttribute("cy", member.y);
            soldier.setAttribute("r", "10");
            soldier.setAttribute("fill", "#1A3A5F");
            squad.appendChild(soldier);
        });
        
        svg.appendChild(squad);
        
        // 드론 그리기
        const drones = [
            { x: 200, y: 100, type: "감시/정찰용", color: "#2E5D4B" },
            { x: 600, y: 150, type: "공격용", color: "#D64045" }
        ];
        
        drones.forEach(drone => {
            const droneGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            droneGroup.setAttribute("transform", `translate(${drone.x}, ${drone.y})`);
            
            // 드론 몸체
            const droneBody = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            droneBody.setAttribute("x", "-15");
            droneBody.setAttribute("y", "-5");
            droneBody.setAttribute("width", "30");
            droneBody.setAttribute("height", "10");
            droneBody.setAttribute("fill", drone.color);
            droneGroup.appendChild(droneBody);
            
            // 드론 프로펠러
            const propPositions = [
                { x: -20, y: -5 },
                { x: 20, y: -5 },
                { x: -20, y: 5 },
                { x: 20, y: 5 }
            ];
            
            propPositions.forEach(pos => {
                const prop = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                prop.setAttribute("cx", pos.x);
                prop.setAttribute("cy", pos.y);
                prop.setAttribute("r", "5");
                prop.setAttribute("fill", "#666");
                droneGroup.appendChild(prop);
            });
            
            // 드론 유형 텍스트
            const droneText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            droneText.setAttribute("x", "0");
            droneText.setAttribute("y", "-15");
            droneText.setAttribute("text-anchor", "middle");
            droneText.setAttribute("fill", drone.color);
            droneText.setAttribute("font-size", "12");
            droneText.setAttribute("font-weight", "bold");
            droneText.textContent = drone.type;
            droneGroup.appendChild(droneText);
            
            svg.appendChild(droneGroup);
            
            // 드론 애니메이션
            function animateDrone() {
                let angle = 0;
                
                function animate() {
                    angle += 2;
                    droneGroup.setAttribute("transform", `translate(${drone.x}, ${drone.y}) rotate(${angle % 360}, 0, 0)`);
                    
                    requestAnimationFrame(animate);
                }
                
                animate();
            }
            
            animateDrone();
        });
        
        // 재밍 효과 그리기
        const jammingEffect = document.createElementNS("http://www.w3.org/2000/svg", "g");
        
        // 재밍 범위
        const jammingRange = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        jammingRange.setAttribute("cx", "400");
        jammingRange.setAttribute("cy", "330");
        jammingRange.setAttribute("r", "200");
        jammingRange.setAttribute("fill", "rgba(26, 58, 95, 0.1)");
        jammingRange.setAttribute("stroke", "#1A3A5F");
        jammingRange.setAttribute("stroke-width", "2");
        jammingRange.setAttribute("stroke-dasharray", "10,10");
        jammingEffect.appendChild(jammingRange);
        
        // 재밍 파동 애니메이션
        function createJammingWave() {
            const wave = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            wave.setAttribute("cx", "400");
            wave.setAttribute("cy", "330");
            wave.setAttribute("r", "0");
            wave.setAttribute("fill", "none");
            wave.setAttribute("stroke", "#1A3A5F");
            wave.setAttribute("stroke-width", "2");
            wave.setAttribute("opacity", "1");
            jammingEffect.appendChild(wave);
            
            // 파동 애니메이션
            let radius = 0;
            
            function animateWave() {
                radius += 2;
                wave.setAttribute("r", radius);
                wave.setAttribute("opacity", 1 - radius / 200);
                
                if (radius < 200) {
                    requestAnimationFrame(animateWave);
                } else {
                    jammingEffect.removeChild(wave);
                    setTimeout(createJammingWave, 500);
                }
            }
            
            animateWave();
        }
        
        svg.appendChild(jammingEffect);
        createJammingWave();
        
        // 기대효과 텍스트
        const effects = [
            { text: "소규모 제대 방어력 강화", x: 150, y: 50 },
            { text: "전술적 유연성 증대", x: 400, y: 30 },
            { text: "다층 방어체계 구축", x: 650, y: 50 },
            { text: "작전 효율성 향상", x: 400, y: 80 }
        ];
        
        effects.forEach(effect => {
            // 텍스트 배경
            const textBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            textBg.setAttribute("x", effect.x - 100);
            textBg.setAttribute("y", effect.y - 15);
            textBg.setAttribute("width", "200");
            textBg.setAttribute("height", "30");
            textBg.setAttribute("rx", "15");
            textBg.setAttribute("ry", "15");
            textBg.setAttribute("fill", "#1A3A5F");
            svg.appendChild(textBg);
            
            // 텍스트
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", effect.x);
            text.setAttribute("y", effect.y + 5);
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("fill", "white");
            text.setAttribute("font-size", "14");
            text.setAttribute("font-weight", "bold");
            text.textContent = effect.text;
            svg.appendChild(text);
        });
    }
    
    // 경제적 기대효과 그래프 생성
    function createEconomicEffectsGraph() {
        const canvas = document.createElement('canvas');
        canvas.id = 'economicEffectsGraph';
        canvas.width = 800;
        canvas.height = 400;
        
        const graphContainer = document.querySelector('.economic-visualization .placeholder-image');
        if (graphContainer) {
            graphContainer.innerHTML = '';
            graphContainer.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            
            // 경제적 기대효과 그래프 그리기
            drawEconomicEffectsGraph(ctx, canvas.width, canvas.height);
        }
    }
    
    // 경제적 기대효과 그래프 그리기 함수
    function drawEconomicEffectsGraph(ctx, width, height) {
        // 배경
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        
        // 그래프 설정
        const padding = 50;
        const graphWidth = width - padding * 2;
        const graphHeight = height - padding * 2;
        
        // 축 그리기
        ctx.st<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>