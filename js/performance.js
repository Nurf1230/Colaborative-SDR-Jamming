// 주요 성능 페이지 JavaScript 파일
document.addEventListener('DOMContentLoaded', function() {
    // 기술 사양 탭 기능
    const specTabs = document.querySelectorAll('.spec-tab');
    
    specTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            specTabs.forEach(t => t.classList.remove('active'));
            
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
            
            // 모든 패널 숨기기
            const specPanels = document.querySelectorAll('.spec-panel');
            specPanels.forEach(panel => panel.classList.remove('active'));
            
            // 선택된 사양 패널 표시
            const specType = this.getAttribute('data-spec');
            const selectedPanel = document.getElementById(specType + '-spec');
            
            if (!selectedPanel) {
                // 패널이 없으면 동적으로 생성
                createSpecPanel(specType);
            } else {
                selectedPanel.classList.add('active');
            }
        });
    });
    
    // 사양 패널 동적 생성 함수
    function createSpecPanel(specType) {
        const specsContent = document.querySelector('.specs-content');
        const newPanel = document.createElement('div');
        newPanel.className = 'spec-panel active';
        newPanel.id = specType + '-spec';
        
        // 사양별 내용 설정
        const specData = {
            'hardware': {
                title: '하드웨어 사양',
                headers: ['항목', '사양', '비고'],
                rows: [
                    ['프로세서', '듀얼 코어 ARM Cortex-A53 1.5GHz', '저전력 고성능 프로세서'],
                    ['메모리', '2GB LPDDR4', '신호 처리 및 AI 연산용'],
                    ['저장 공간', '32GB eMMC', '드론 신호 데이터베이스 및 로그 저장'],
                    ['RF 프론트엔드', 'SDR 기반 광대역 수신기', '70MHz ~ 6GHz 주파수 대역 지원'],
                    ['안테나', '내장형 방향 탐지 안테나 어레이', '4개 방향 안테나로 방향 탐지'],
                    ['디스플레이', '2.4인치 컬러 TFT LCD', '햇빛 가시성 향상 처리'],
                    ['배터리', '리튬 이온 4,000mAh', '핫스왑 지원'],
                    ['방수/방진', 'IP67 등급', '완전 방진, 30분간 1m 수심 방수'],
                    ['내충격성', 'MIL-STD-810G', '1.5m 높이 낙하 테스트 통과']
                ]
            },
            'software': {
                title: '소프트웨어 사양',
                headers: ['항목', '사양', '비고'],
                rows: [
                    ['운영체제', '실시간 OS (RTOS)', '저지연 신호 처리 최적화'],
                    ['신호 처리 엔진', '자체 개발 SDR 프레임워크', '실시간 신호 분석 및 처리'],
                    ['드론 탐지 알고리즘', 'AI 기반 신호 특성 분석', '95% 이상 탐지율'],
                    ['드론 유형 분류', '기계학습 기반 분류 엔진', '90% 이상 분류 정확도'],
                    ['방향 탐지 알고리즘', '위상 비교 방식', '±5° 정확도'],
                    ['재밍 패턴 생성기', '적응형 재밍 패턴 생성', '드론 유형별 최적화'],
                    ['사용자 인터페이스', '직관적 그래픽 UI', '터치스크린 및 물리 버튼 지원'],
                    ['펌웨어 업데이트', 'OTA(Over-The-Air) 지원', '무선 업데이트 가능'],
                    ['로깅 시스템', '상세 이벤트 로깅', '사후 분석 및 훈련 데이터 활용']
                ]
            },
            'network': {
                title: '네트워크 사양',
                headers: ['항목', '사양', '비고'],
                rows: [
                    ['통신 프로토콜', '자체 개발 메쉬 네트워크', '분산 노드 간 자동 연결'],
                    ['통신 거리', '최대 1km (LOS)', '노드 간 직접 통신'],
                    ['데이터 전송률', '최대 1Mbps', '드론 정보 및 제어 명령 전송'],
                    ['암호화', 'AES-256', '군사급 보안'],
                    ['네트워크 토폴로지', '메쉬 네트워크', '단일 장애점 없음'],
                    ['노드 확장성', '최대 32개 노드', '단일 네트워크 내'],
                    ['지연 시간', '50ms 이하', '노드 간 통신'],
                    ['상위 체계 연동', 'TICN, JTDLS 지원', '표준 인터페이스 제공'],
                    ['주파수 대역', '군용 UHF 대역', '전용 주파수 할당']
                ]
            },
            'jamming': {
                title: '재밍 사양',
                headers: ['항목', '사양', '비고'],
                rows: [
                    ['재밍 방식', '협력적 분산 재밍', '다중 노드 동시 재밍'],
                    ['재밍 주파수 대역', '433MHz, 915MHz, 1.2GHz, 2.4GHz, 5.8GHz', '주요 드론 통신 주파수'],
                    ['재밍 출력', '최대 2W (개별 노드)', '협력 시 유효 출력 증가'],
                    ['재밍 패턴', '스위핑, 스팟, 바리케이드, 팔로우', '상황별 최적 패턴 선택'],
                    ['GPS/GNSS 재밍', 'L1/L2 대역 지원', '드론 항법 시스템 교란'],
                    ['센서 재밍', '광학/적외선 센서 교란', '레이저 기반 교란'],
                    ['선택적 재밍', '특정 주파수 대역만 재밍', '아군 통신 보호'],
                    ['적응형 재밍', '드론 대응에 따른 패턴 변경', 'AI 기반 최적화'],
                    ['재밍 효과 분석', '실시간 효과도 측정', '재밍 전략 자동 조정']
                ]
            }
        };
        
        const specInfo = specData[specType];
        
        let tableHTML = `
            <div class="spec-table">
                <table>
                    <thead>
                        <tr>
                            ${specInfo.headers.map(header => `<th>${header}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${specInfo.rows.map(row => `
                            <tr>
                                ${row.map(cell => `<td>${cell}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        newPanel.innerHTML = tableHTML;
        specsContent.appendChild(newPanel);
    }
    
    // 성능 지표 레이더 차트 생성
    function createPerformanceRadarChart() {
        const canvas = document.createElement('canvas');
        canvas.id = 'performanceRadarChart';
        canvas.width = 400;
        canvas.height = 400;
        
        const chartContainer = document.querySelector('.kpi-chart .placeholder-image');
        if (chartContainer) {
            chartContainer.innerHTML = '';
            chartContainer.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            
            // 레이더 차트 그리기
            drawRadarChart(ctx, canvas.width, canvas.height);
        }
    }
    
    // 레이더 차트 그리기 함수
    function drawRadarChart(ctx, width, height) {
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(centerX, centerY) * 0.8;
        
        // 성능 지표 및 값 (0-1 사이 값)
        const metrics = [
            { name: '탐지 거리', value: 0.85 },
            { name: '방향 탐지 정확도', value: 0.9 },
            { name: '재밍 유효 거리', value: 0.8 },
            { name: '신호 처리 속도', value: 0.95 },
            { name: '연속 운용 시간', value: 0.75 },
            { name: '중량', value: 0.7 }
        ];
        
        const numMetrics = metrics.length;
        const angleStep = (Math.PI * 2) / numMetrics;
        
        // 배경 그리드 그리기
        ctx.strokeStyle = '#e0e0e0';
        ctx.fillStyle = 'rgba(240, 244, 248, 0.5)';
        
        for (let level = 5; level > 0; level--) {
            const levelRadius = radius * (level / 5);
            
            ctx.beginPath();
            for (let i = 0; i < numMetrics; i++) {
                const angle = i * angleStep - Math.PI / 2;
                const x = centerX + levelRadius * Math.cos(angle);
                const y = centerY + levelRadius * Math.sin(angle);
                
                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }
        
        // 축 그리기
        ctx.strokeStyle = '#aaa';
        ctx.beginPath();
        for (let i = 0; i < numMetrics; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            
            // 축 레이블 그리기
            ctx.fillStyle = '#333';
            ctx.font = '12px Noto Sans KR';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            const labelX = centerX + (radius + 20) * Math.cos(angle);
            const labelY = centerY + (radius + 20) * Math.sin(angle);
            
            ctx.fillText(metrics[i].name, labelX, labelY);
        }
        ctx.stroke();
        
        // 데이터 그리기
        ctx.fillStyle = 'rgba(26, 58, 95, 0.2)';
        ctx.strokeStyle = '#1A3A5F';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        for (let i = 0; i < numMetrics; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const value = metrics[i].value;
            const x = centerX + radius * value * Math.cos(angle);
            const y = centerY + radius * value * Math.sin(angle);
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // 데이터 포인트 그리기
        ctx.fillStyle = '#1A3A5F';
        for (let i = 0; i < numMetrics; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const value = metrics[i].value;
            const x = centerX + radius * value * Math.cos(angle);
            const y = centerY + radius * value * Math.sin(angle);
            
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // 드론 탐지 성능 그래프 생성
    function createDetectionPerformanceGraph() {
        const canvas = document.createElement('canvas');
        canvas.id = 'detectionPerformanceGraph';
        canvas.width = 800;
        canvas.height = 400;
        
        const graphContainer = document.querySelector('.detection-visualization .placeholder-image');
        if (graphContainer) {
            graphContainer.innerHTML = '';
            graphContainer.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            
            // 탐지 성능 그래프 그리기
            drawDetectionGraph(ctx, canvas.width, canvas.height);
        }
    }
    
    // 탐지 성능 그래프 그리기 함수
    function drawDetectionGraph(ctx, width, height) {
        // 그래프 영역 설정
        const padding = 50;
        const graphWidth = width - padding * 2;
        const graphHeight = height - padding * 2;
        
        // 배경 그리기
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        
        // 축 그리기
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();
        
        // 축 레이블
        ctx.fillStyle = '#333';
        ctx.font = '14px Noto Sans KR';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // X축 레이블 (거리)
        ctx.fillText('거리 (km)', width / 2, height - 15);
        
        // Y축 레이블 (탐지 확률)
        ctx.save();
        ctx.translate(15, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('탐지 확률 (%)', 0, 0);
        ctx.restore();
        
        // X축 눈금
        const xStep = graphWidth / 5;
        for (let i = 0; i <= 5; i++) {
            const x = padding + i * xStep;
            
            ctx.beginPath();
            ctx.moveTo(x, height - padding);
            ctx.lineTo(x, height - padding + 5);
            ctx.stroke();
            
            ctx.fillText(i.toString(), x, height - padding + 20);
        }
        
        // Y축 눈금
        const yStep = graphHeight / 10;
        for (let i = 0; i <= 10; i++) {
            const y = height - padding - i * yStep;
            
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(padding - 5, y);
            ctx.stroke();
            
            ctx.textAlign = 'right';
            ctx.fillText((i * 10).toString(), padding - 10, y);
        }
        
        // 그리드 그리기
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        
        // 수평 그리드
        for (let i = 1; i <= 10; i++) {
            const y = height - padding - i * yStep;
            
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }
        
        // 수직 그리드
        for (let i = 1; i <= 5; i++) {
            const x = padding + i * xStep;
            
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, height - padding);
            ctx.stroke();
        }
        
        // 데이터 포인트 (감시/정찰용 드론)
        const surveillanceData = [
            { distance: 0, probability: 100 },
            { distance: 1, probability: 98 },
            { distance: 2, probability: 95 },
            { distance: 3, probability: 90 },
            { distance: 4, probability: 70 },
            { distance: 5, probability: 40 }
        ];
        
        // 데이터 포인트 (공격용 드론)
        const attackData = [
            { distance: 0, probability: 100 },
            { distance: 1, probability: 99 },
            { distance: 2, probability: 97 },
            { distance: 3, probability: 85 },
            { distance: 4, probability: 60 },
            { distance: 5, probability: 30 }
        ];
        
        // 데이터 포인트 (협력적 탐지)
        const cooperativeData = [
            { distance: 0, probability: 100 },
            { distance: 1, probability: 100 },
            { distance: 2, probability: 99 },
            { distance: 3, probability: 98 },
            { distance: 4, probability: 95 },
            { distance: 5, probability: 85 }
        ];
        
        // 감시/정찰용 드론 선 그리기
        drawDataLine(ctx, surveillanceData, '#1A3A5F', padding, graphWidth, graphHeight, height);
        
        // 공격용 드론 선 그리기
        drawDataLine(ctx, attackData, '#D64045', padding, graphWidth, graphHeight, height);
        
        // 협력적 탐지 선 그리기
        drawDataLine(ctx, cooperativeData, '#2E5D4B', padding, graphWidth, graphHeight, height);
        
        // 범례
        const legendX = width - padding - 150;
        const legendY = padding + 30;
        
        // 감시/정찰용 드론 범례
        ctx.fillStyle = '#1A3A5F';
        ctx.fillRect(legendX, legendY, 20, 10);
        ctx.fillStyle = '#333';
        ctx.textAlign = 'left';
        ctx.fillText('감시/정찰용 드론', legendX + 30, legendY + 5);
        
        // 공격용 드론 범례
        ctx.fillStyle = '#D64045';
        ctx.fillRect(legendX, legendY + 20, 20, 10);
        ctx.fillStyle = '#333';
        ctx.fillText('공격용 드론', legendX + 30, legendY + 25);
        
        // 협력적 탐지 범례
        ctx.fillStyle = '#2E5D4B';
        ctx.fillRect(legendX, legendY + 40, 20, 10);
        ctx.fillStyle = '#333';
        ctx.fillText('협력적 탐지', legendX + 30, legendY + 45);
    }
    
    // 데이터 선 그리기 함수
    function drawDataLine(ctx, data, color, padding, graphWidth, graphHeight, height) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + (point.distance / 5) * graphWidth;
            const y = height - padding - (point.probability / 100) * graphHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // 데이터 포인트 그리기
        ctx.fillStyle = color;
        data.forEach(point => {
            const x = padding + (point.distance / 5) * graphWidth;
            const y = height - padding - (point.probability / 100) * graphHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    // 드론 재밍 성능 그래프 생성
    function createJammingPerformanceGraph() {
        const canvas = document.createElement('canvas');
        canvas.id = 'jammingPerformanceGraph';
        canvas.width = 800;
        canvas.height = 400;
        
        const graphContainer = document.querySelector('.jamming-visualization .placeholder-image');
        if (gra<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>