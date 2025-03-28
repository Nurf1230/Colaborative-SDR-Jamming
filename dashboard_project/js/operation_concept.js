// 운용 개념 페이지 전용 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 운용 모드 탭 기능
    const modeTabs = document.querySelectorAll('.mode-tab');
    const modePanels = document.querySelectorAll('.mode-panel');
    
    if (modeTabs.length > 0) {
        modeTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 모든 탭에서 active 클래스 제거
                modeTabs.forEach(t => t.classList.remove('active'));
                // 클릭된 탭에 active 클래스 추가
                this.classList.add('active');
                
                // 모든 패널 숨기기
                modePanels.forEach(panel => panel.classList.remove('active'));
                
                // 선택된 모드 패널 표시
                const modeType = this.getAttribute('data-mode');
                const targetPanel = document.getElementById(modeType + '-mode');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
        
        // 다른 모드 패널 동적 생성
        createModePanels();
    }
    
    // 특수 작전 시나리오 탭 기능
    const scenarioTabs = document.querySelectorAll('.scenario-tab');
    const scenarioPanels = document.querySelectorAll('.scenario-panel');
    
    if (scenarioTabs.length > 0) {
        scenarioTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 모든 탭에서 active 클래스 제거
                scenarioTabs.forEach(t => t.classList.remove('active'));
                // 클릭된 탭에 active 클래스 추가
                this.classList.add('active');
                
                // 모든 패널 숨기기
                scenarioPanels.forEach(panel => panel.classList.remove('active'));
                
                // 선택된 시나리오 패널 표시
                const scenarioType = this.getAttribute('data-scenario');
                const targetPanel = document.getElementById(scenarioType + '-scenario');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
        
        // 다른 시나리오 패널 동적 생성
        createScenarioPanels();
    }
    
    // 드론 유형별 대응 탭 기능
    const droneTabs = document.querySelectorAll('.drone-tab');
    const dronePanels = document.querySelectorAll('.drone-panel');
    
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
                const targetPanel = document.getElementById(droneType + '-drone');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
        
        // 공격용 드론 패널 동적 생성
        createAttackDronePanel();
    }
    
    // 애니메이션 효과
    const animateElements = document.querySelectorAll('.role-card, .layer-card, .strategy-step');
    
    animateElements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.add('animated');
        }, 100 * index);
    });
});

// 운용 모드 패널 동적 생성 함수
function createModePanels() {
    const modeContent = document.querySelector('.mode-content');
    if (!modeContent) return;
    
    // 감시 모드 패널
    const surveillancePanel = document.createElement('div');
    surveillancePanel.className = 'mode-panel';
    surveillancePanel.id = 'surveillance-mode';
    surveillancePanel.innerHTML = `
        <h3>감시 모드</h3>
        <div class="mode-details">
            <div class="mode-image">
                <div class="placeholder-image">
                    <div class="image-placeholder">감시 모드 시각화</div>
                </div>
            </div>
            <div class="mode-description">
                <p>통신 기능을 유지하면서 백그라운드에서 드론 신호를 탐지하고 모니터링하는 모드입니다. 이 모드에서는 무전기의 일부 자원을 드론 신호 스캔에 할당하여 주변 환경을 지속적으로 감시합니다.</p>
                <p>감시 모드는 전투원의 정상적인 통신 활동에 영향을 미치지 않으면서도 드론 위협에 대한 조기 경보 능력을 제공합니다.</p>
                <ul class="mode-features">
                    <li>통신 기능 유지</li>
                    <li>백그라운드 드론 신호 스캔</li>
                    <li>자동 경보 기능</li>
                    <li>저전력 소모 설계</li>
                </ul>
            </div>
        </div>
    `;
    modeContent.appendChild(surveillancePanel);
    
    // 독립 방어 모드 패널
    const independentPanel = document.createElement('div');
    independentPanel.className = 'mode-panel';
    independentPanel.id = 'independent-mode';
    independentPanel.innerHTML = `
        <h3>독립 방어 모드</h3>
        <div class="mode-details">
            <div class="mode-image">
                <div class="placeholder-image">
                    <div class="image-placeholder">독립 방어 모드 시각화</div>
                </div>
            </div>
            <div class="mode-description">
                <p>단일 노드가 독립적으로 드론을 탐지하고 제한된 재밍을 수행하는 모드입니다. 다른 노드와의 연결이 불가능한 상황에서 개별 전투원이 자체적으로 드론 방어 능력을 발휘할 수 있습니다.</p>
                <p>독립 방어 모드에서는 제한된 출력으로 인해 재밍 효과가 협력 모드보다 낮지만, 긴급 상황에서 신속한 대응이 가능합니다.</p>
                <ul class="mode-features">
                    <li>독립적 드론 탐지</li>
                    <li>제한된 재밍 능력</li>
                    <li>360° 방향 탐지</li>
                    <li>긴급 대응 기능</li>
                </ul>
            </div>
        </div>
    `;
    modeContent.appendChild(independentPanel);
    
    // 협력 방어 모드 패널
    const cooperativePanel = document.createElement('div');
    cooperativePanel.className = 'mode-panel';
    cooperativePanel.id = 'cooperative-mode';
    cooperativePanel.innerHTML = `
        <h3>협력 방어 모드</h3>
        <div class="mode-details">
            <div class="mode-image">
                <div class="placeholder-image">
                    <div class="image-placeholder">협력 방어 모드 시각화</div>
                </div>
            </div>
            <div class="mode-description">
                <p>2개 이상의 노드가 네트워크로 연결되어 협력적 재밍을 수행하는 모드입니다. 각 노드가 수집한 드론 신호 정보를 공유하고, 삼각측량을 통해 정확한 드론 위치를 파악하며, 동기화된 재밍 신호를 방사합니다.</p>
                <p>협력 방어 모드에서는 여러 노드의 재밍 신호가 중첩되어 효과가 극대화되며, 드론의 통신 및 항법 시스템을 효과적으로 무력화할 수 있습니다.</p>
                <ul class="mode-features">
                    <li>노드 간 정보 공유</li>
                    <li>삼각측량 위치 추적</li>
                    <li>동기화된 재밍 신호</li>
                    <li>확장된 방어 범위</li>
                </ul>
            </div>
        </div>
    `;
    modeContent.appendChild(cooperativePanel);
    
    // 나머지 모드 패널들도 유사한 방식으로 생성
    const integratedPanel = document.createElement('div');
    integratedPanel.className = 'mode-panel';
    integratedPanel.id = 'integrated-mode';
    integratedPanel.innerHTML = `
        <h3>통합 운용 모드</h3>
        <div class="mode-details">
            <div class="mode-image">
                <div class="placeholder-image">
                    <div class="image-placeholder">통합 운용 모드 시각화</div>
                </div>
            </div>
            <div class="mode-description">
                <p>상위 지휘통제 시스템과 연동하여 작전을 수행하는 모드입니다. 통합형 무전기 체계가 TICN, JTDLS, 지상전술C4I체계 등 상위 체계와 연결되어 통합된 방어 능력을 제공합니다.</p>
                <p>통합 운용 모드에서는 상위 체계로부터 드론 위협 정보를 수신하고, 탐지된 드론 정보를 상위 체계로 전송하여 전장 상황 인식을 향상시킵니다.</p>
                <ul class="mode-features">
                    <li>상위 체계 연동</li>
                    <li>통합 상황 인식</li>
                    <li>조기 경보 수신</li>
                    <li>정보 공유 확대</li>
                </ul>
            </div>
        </div>
    `;
    modeContent.appendChild(integratedPanel);
    
    const covertPanel = document.createElement('div');
    covertPanel.className = 'mode-panel';
    covertPanel.id = 'covert-mode';
    covertPanel.innerHTML = `
        <h3>은밀 감시 모드</h3>
        <div class="mode-details">
            <div class="mode-image">
                <div class="placeholder-image">
                    <div class="image-placeholder">은밀 감시 모드 시각화</div>
                </div>
            </div>
            <div class="mode-description">
                <p>재밍 없이 드론 신호를 탐지하고 모니터링만 수행하는 모드입니다. 특히 감시/정찰용 드론의 활동 패턴을 분석하는 데 중점을 둡니다.</p>
                <p>은밀 감시 모드에서는 드론의 존재를 드러내지 않고 정보를 수집하여 드론의 임무, 비행 패턴, 통신 특성 등을 파악할 수 있습니다. 이를 통해 드론 운용자의 의도를 추론하고 최적의 대응 전략을 수립할 수 있습니다.</p>
                <ul class="mode-features">
                    <li>최소 전자기 방출</li>
                    <li>드론 활동 패턴 분석</li>
                    <li>드론 임무 유형 분류</li>
                    <li>데이터베이스 구축</li>
                </ul>
            </div>
        </div>
    `;
    modeContent.appendChild(covertPanel);
    
    const selectivePanel = document.createElement('div');
    selectivePanel.className = 'mode-panel';
    selectivePanel.id = 'selective-mode';
    selectivePanel.innerHTML = `
        <h3>선택적 재밍 모드</h3>
        <div class="mode-details">
            <div class="mode-image">
                <div class="placeholder-image">
                    <div class="image-placeholder">선택적 재밍 모드 시각화</div>
                </div>
            </div>
            <div class="mode-description">
                <p>특정 주파수 대역 또는 특정 드론만 선택적으로 재밍하는 모드입니다. 이 모드에서는 아군 통신에 대한 간섭을 최소화하면서 적 드론만 효과적으로 무력화할 수 있습니다.</p>
                <p>선택적 재밍 모드는 특히 감시/정찰용 드론에 대응할 때 유용하며, 드론의 통신 및 제어 신호만 정밀하게 재밍하여 드론의 임무 수행을 방해합니다.</p>
                <ul class="mode-features">
                    <li>주파수 선택적 재밍</li>
                    <li>드론 유형별 맞춤형 재밍</li>
                    <li>아군 통신 간섭 최소화</li>
                    <li>정밀 재밍 패턴 적용</li>
                </ul>
            </div>
        </div>
    `;
    modeContent.appendChild(selectivePanel);
    
    const intensivePanel = document.createElement('div');
    intensivePanel.className = 'mode-panel';
    intensivePanel.id = 'intensive-mode';
    intensivePanel.innerHTML = `
        <h3>고강도 재밍 모드</h3>
        <div class="mode-details">
            <div class="mode-image">
                <div class="placeholder-image">
                    <div class="image-placeholder">고강도 재밍 모드 시각화</div>
                </div>
            </div>
            <div class="mode-description">
                <p>모든 가용 노드의 최대 출력으로 집중 재밍을 수행하는 모드입니다. 이 모드에서는 통신 기능이 일시적으로 중단되고 모든 자원이 재밍에 집중됩니다.</p>
                <p>고강도 재밍 모드는 자폭 드론과 같은 긴급 위협 상황에서 사용되며, 최대한의 재밍 효과를 통해 드론을 신속하게 무력화합니다.</p>
                <ul class="mode-features">
                    <li>최대 출력 재밍</li>
                    <li>통신 기능 일시 중단</li>
                    <li>광대역 주파수 재밍</li>
                    <li>긴급 위협 대응</li>
                </ul>
            </div>
        </div>
    `;
    modeContent.appendChild(intensivePanel);
    
    const droneSpecificPanel = document.createElement('div');
    droneSpecificPanel.className = 'mode-panel';
    droneSpecificPanel.id = 'drone-specific-mode';
    droneSpecificPanel.innerHTML = `
        <h3>드론 유형별 대응 모드</h3>
        <div class="mode-details">
            <div class="mode-image">
                <div class="placeholder-image">
                    <div class="image-placeholder">드론 유형별 대응 모드 시각화</div>
                </div>
            </div>
            <div class="mode-description">
                <p>감시/정찰용 드론과 공격용 드론에 대한 맞춤형 대응 전략을 실행하는 모드입니다. 드론의 유형과 임무에 따라 최적화된 대응 방식을 적용합니다.</p>
                <p>드론 유형별 대응 모드에서는 AI 기반 드론 분류 알고리즘을 통해 드론의 유형을 식별하고, 각 유형에 맞는 최적의 대응 전략을 자동으로 선택하여 실행합니다.</p>
                <ul class="mode-features">
                    <li>AI 기반 드론 유형 분류</li>
                    <li>맞춤형 대응 전략</li>
                    <li>자동 모드 전환</li>
                    <li>상황 적응형 대응</li>
                </ul>
            </div>
        </div>
    `;
    modeContent.appendChild(droneSpecificPanel);
}

// 특수 작전 시나리오 패널 동적 생성 함수
function createScenarioPanels() {
    const scenarioContent = document.querySelector('.scenario-content');
    if (!scenarioContent) return;
    
    // 전진 기지 방어 시나리오 패널
    const forwardPanel = document.createElement('div');
    forwardPanel.className = 'scenario-panel';
    forwardPanel.id = 'forward-scenario';
    forwardPanel.innerHTML = `
        <div class="scenario-visualization">
            <div class="placeholder-image">
                <div class="image-placeholder">전진 기지 방어 시나리오 애니메이션</div>
            </div>
        </div>
        <div class="scenario-description">
            <h3>전진 기지 방어 시나리오</h3>
            <p>전진 기지 방어 작전에서는 통합형 무전기를 휴대한 전투원들이 기지 주변에 배치되어 드론 위협으로부터 기지를 보호합니다. 외곽에 배치된 노드들이 조기 경보 역할을 수행하고, 내부에 배치된 노드들이 핵심 시설을 보호합니다.</p>
            <p>특히 감시/정찰용 드론이 기지 정보를 수집하는 것을 차단하는 데 중점을 두며, 공격용 드론 접근 시에는 고강도 재밍으로 무력화합니다.</p>
        </div>
    `;
    scenarioContent.appendChild(forwardPanel);
    
    // 특수부대 작전 시나리오 패널
    const specialPanel = document.createElement('div');
    specialPanel.className = 'scenario-panel';
    specialPanel.id = 'special-scenario';
    specialPanel.innerHTML = `
        <div class="scenario-visualization">
            <div class="placeholder-image">
                <div class="image-placeholder">특수부대 작전 시나리오 애니메이션</div>
            </div>
        </div>
        <div class="scenario-description">
            <h3>특수부대 작전 시나리오</h3>
            <p>특수부대 작전 시에는 소규모 팀(4-6명)이 통합형 무전기를 휴대하고, 은밀 침투 시 최소 전자기 방출 모드를 유지합니다. 적 감시/정찰용 드론 발견 시 작전 보안을 위해 즉각적인 무력화가 필요하며, 이를 위한 특수 재밍 패턴을 적용합니다.</p>
            <p>또한 적 드론의 영상 센서에 대한 선택적 재밍을 통해 작전 은밀성을 보장하고, 필요시 단시간 고강도 재밍으로 탈출로를 확보합니다.</p>
        </div>
    `;
    scenarioContent.appendChild(specialPanel);
}

// 공격용 드론 패널 동적 생성 함수
function createAttackDronePanel() {
    const droneContent = document.querySelector('.drone-content');
    if (!droneContent) return;
    
    // 공격용 드론 패널
    const attackPanel = document.createElement('div');
    attackPanel.className = 'drone-panel';
    attackPanel.id = 'attack-drone';
    attackPanel.innerHTML = `
        <div class="drone-visualization">
            <div class="placeholder-image">
                <div class="image-placeholder">공격용 드론 대응 시각화</div>
            </div>
        </div>
        <div class="drone-strategy">
            <h3>공격용 드론 대응 전략</h3>
            <p>공격용 드론(자폭형, 무장형)은 직접적인 인명 및 장비 피해를 유발할 수 있는 심각한 위협입니다. 이러한 드론에 대한 대응 전략은 다음과 같습니다:</p>
            <div class="strategy-steps">
                <div class="strategy-step">
                    <h4>1. 신속 탐지 및 위협 평가</h4>
                    <p>드론 신호를 신속하게 탐지하고 AI 기반 분석을 통해 공격용 드론으로 식별하며, 위협 수준을 평가합니다.</p>
                </div>
                <div class="strategy-step">
                    <h4>2. 고강도 재밍 모드 전환</h4>
                    <p>모든 가용 노드의 최대 출력으로 집중 재밍을 실행하여 드론의 통신 및 항법 시스템을 무력화합니다.</p>
                </div>
                <div class="strategy-step">
                    <h4>3. 드론 제어 상실 유도</h4>
                    <p>드론의 제어 신호를 차단하여 조종 불능 상태로 만들거나, 안전 지역으로 유도합니다.</p>
                </div>
                <div class="strategy-step">
                    <h4>4. 다중 위협 대응</h4>
                    <p>여러 공격용 드론이 동시에 접근할 경우, 위협 우선순위에 따라 자원을 할당하고 순차적/동시적 재밍 전략을 실행합니다.</p>
                </div>
            </div>
        </div>
    `;
    droneContent.appendChild(attackPanel);
}
