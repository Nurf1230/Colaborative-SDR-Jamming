// 주요 성능 페이지 전용 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 드론 유형별 대응 성능 탭 기능
    const droneTabs = document.querySelectorAll('.drone-tab');
    const dronePanels = document.querySelectorAll('.drone-performance-panel');
    
    if (droneTabs.length > 0) {
        droneTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 모든 탭에서 active 클래스 제거
                droneTabs.forEach(t => t.classList.remove('active'));
                // 클릭된 탭에 active 클래스 추가
                this.classList.add('active');
                
                // 모든 패널 숨기기
                dronePanels.forEach(panel => panel.classList.remove('active'));
                
                // 선택된 드론 패널 표시
                const droneType = this.getAttribute('data-drone');
                const targetPanel = document.getElementById(droneType + '-performance');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
        
        // 공격용 드론 대응 성능 패널 동적 생성
        createAttackDronePanel();
    }
    
    // 애니메이션 효과
    const animateElements = document.querySelectorAll('.kpi-card, .metric-card, .specs-card');
    
    animateElements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.add('animated');
        }, 100 * index);
    });
    
    // 성능 차트 애니메이션
    const chartBars = document.querySelectorAll('.bar-fill');
    
    chartBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
});

// 공격용 드론 대응 성능 패널 동적 생성 함수
function createAttackDronePanel() {
    const dronePerformanceContent = document.querySelector('.drone-performance-content');
    if (!dronePerformanceContent) return;
    
    // 공격용 드론 대응 성능 패널
    const attackPanel = document.getElementById('attack-performance');
    if (!attackPanel) return;
    
    attackPanel.innerHTML = `
        <div class="performance-metrics">
            <div class="metric-card">
                <h4>탐지 성공률</h4>
                <div class="metric-chart">
                    <div class="chart-bar">
                        <div class="bar-fill" style="width: 98%;">98%</div>
                    </div>
                </div>
            </div>
            <div class="metric-card">
                <h4>식별 정확도</h4>
                <div class="metric-chart">
                    <div class="chart-bar">
                        <div class="bar-fill" style="width: 95%;">95%</div>
                    </div>
                </div>
            </div>
            <div class="metric-card">
                <h4>재밍 효과</h4>
                <div class="metric-chart">
                    <div class="chart-bar">
                        <div class="bar-fill" style="width: 85%;">85%</div>
                    </div>
                </div>
            </div>
            <div class="metric-card">
                <h4>무력화 성공률</h4>
                <div class="metric-chart">
                    <div class="chart-bar">
                        <div class="bar-fill" style="width: 80%;">80%</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="performance-details">
            <h3>공격용 드론 대응 성능 상세</h3>
            <p>공격용 드론(자폭형, 무장형)에 대한 대응은 신속한 탐지와 즉각적인 무력화에 중점을 둡니다. 본 체계는 다음과 같은 성능을 제공합니다:</p>
            <ul>
                <li><strong>신속 탐지 및 위협 평가:</strong> 공격용 드론을 98% 이상의 확률로 신속하게 탐지하고, AI 기반 분석을 통해 위협 수준을 평가</li>
                <li><strong>고강도 재밍:</strong> 모든 가용 노드의 최대 출력으로 집중 재밍을 실행하여 드론의 통신 및 항법 시스템을 무력화</li>
                <li><strong>드론 제어 상실 유도:</strong> 드론의 제어 신호를 차단하여 조종 불능 상태로 만들거나, 안전 지역으로 유도</li>
                <li><strong>다중 위협 대응:</strong> 여러 공격용 드론이 동시에 접근할 경우, 위협 우선순위에 따라 자원을 할당하고 순차적/동시적 재밍 전략 실행</li>
            </ul>
        </div>
    `;
}
