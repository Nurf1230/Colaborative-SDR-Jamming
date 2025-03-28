// 운용 개념 페이지 JavaScript 파일
document.addEventListener('DOMContentLoaded', function() {
    // 운용 모드 탭 기능
    const modeTabs = document.querySelectorAll('.mode-tab');
    
    modeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            modeTabs.forEach(t => t.classList.remove('active'));
            
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
            
            // 모든 패널 숨기기
            const modePanels = document.querySelectorAll('.mode-panel');
            modePanels.forEach(panel => panel.classList.remove('active'));
            
            // 선택된 모드 패널 표시
            const modeType = this.getAttribute('data-mode');
            const selectedPanel = document.getElementById(modeType + '-mode');
            
            if (!selectedPanel) {
                // 패널이 없으면 동적으로 생성
                createModePanel(modeType);
            } else {
                selectedPanel.classList.add('active');
            }
        });
    });
    
    // 특수 작전 시나리오 탭 기능
    const scenarioTabs = document.querySelectorAll('.scenario-tab');
    
    scenarioTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            scenarioTabs.forEach(t => t.classList.remove('active'));
            
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
            
            // 모든 패널 숨기기
            const scenarioPanels = document.querySelectorAll('.scenario-panel');
            scenarioPanels.forEach(panel => panel.classList.remove('active'));
            
            // 선택된 시나리오 패널 표시
            const scenarioType = this.getAttribute('data-scenario');
            const selectedPanel = document.getElementById(scenarioType + '-scenario');
            
            if (!selectedPanel) {
                // 패널이 없으면 동적으로 생성
                createScenarioPanel(scenarioType);
            } else {
                selectedPanel.classList.add('active');
            }
        });
    });
    
    // 드론 유형 탭 기능
    const droneTabs = document.querySelectorAll('.drone-tab');
    
    droneTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            droneTabs.forEach(t => t.classList.remove('active'));
            
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
            
            // 모든 패널 숨기기
            const dronePanels = document.querySelectorAll('.drone-panel');
            dronePanels.forEach(panel => panel.classList.remove('active'));
            
            // 선택된 드론 패널 표시
            const droneType = this.getAttribute('data-drone');
            const selectedPanel = document.getElementById(droneType + '-drone');
            
            if (!selectedPanel) {
                // 패널이 없으면 동적으로 생성
                createDronePanel(droneType);
            } else {
                selectedPanel.classList.add('active');
            }
        });
    });
    
    // 운용 모드 패널 동적 생성 함수
    function createModePanel(modeType) {
        const modeContent = document.querySelector('.mode-content');
        const newPanel = document.createElement('div');
        newPanel.className = 'mode-panel active';
        newPanel.id = modeType + '-mode';
        
        // 모드별 내용 설정
        const modeData = {
            'communication': {
                title: '통신 모드',
                description: '일반 전술 무전기로 사용하여 음성 및 데이터 통신을 수행하는 기본 모드입니다. 이 모드에서는 기존 군용 무전기의 모든 기능을 그대로 사용할 수 있으며, 암호화된 통신을 통해 안전한 정보 교환이 가능합니다.',
                description2: '통신 모드에서도 백그라운드에서 드론 신호 탐지 기능이 작동하여 위협 상황 발생 시 신속하게 다른 모드로 전환할 수 있습니다.',
                features: [
                    '음성 통신 지원',
                    '데이터 통신 지원',
                    '암호화 통신 기능',
                    '백그라운드 드론 신호 모니터링'
                ]
            },
            'surveillance': {
                title: '감시 모드',
                description: '주변 전자기 스펙트럼을 지속적으로 스캔하여 드론 신호를 탐지하고 방향을 추적하는 모드입니다. 이 모드에서는 통신 기능을 유지하면서도 드론 탐지 성능이 향상됩니다.',
                description2: '감시 모드는 특히 감시/정찰용 드론의 조기 탐지에 효과적이며, 드론의 신호 특성을 분석하여 유형을 분류합니다.',
                features: [
                    '전자기 스펙트럼 스캔',
                    '드론 신호 탐지 및 방향 추적',
                    '드론 유형 분류',
                    '통신 기능 유지'
                ]
            },
            'independent': {
                title: '독립 방어 모드',
                description: '단일 무전기가 독립적으로 드론 방어 기능을 수행하는 모드입니다. 주변에 다른 통합형 무전기가 없거나 네트워크 연결이 불가능한 상황에서 사용됩니다.',
                description2: '독립 방어 모드에서는 제한된 출력으로 인해 방어 범위가 축소되지만, 개인 전투원 수준의 기본적인 방어 능력을 제공합니다.',
                features: [
                    '독립적 드론 탐지 및 재밍',
                    '개인 전투원 수준 방어',
                    '제한된 방어 범위',
                    '최소 전력 소모 최적화'
                ]
            },
            'cooperative': {
                title: '협력 방어 모드',
                description: '여러 무전기가 네트워크로 연결되어 협력적으로 드론 방어 기능을 수행하는 모드입니다. 각 노드가 수집한 정보를 공유하고, 삼각측량을 통해 드론 위치를 정확히 추적합니다.',
                description2: '협력 방어 모드에서는 여러 노드가 동시에 재밍 신호를 방사하여 효과적인 드론 무력화가 가능합니다.',
                features: [
                    '노드 간 정보 공유',
                    '삼각측량 기반 정확한 위치 추적',
                    '협력적 재밍 신호 방사',
                    '넓은 방어 범위 확보'
                ]
            },
            'integrated': {
                title: '통합 운용 모드',
                description: '상위 지휘통제체계 및 방공체계와 연동하여 통합된 방어 능력을 제공하는 모드입니다. 상위 체계로부터 드론 위협 정보를 수신하고, 탐지된 드론 정보를 상위 체계로 전송합니다.',
                description2: '통합 운용 모드에서는 계층적 방어 개념을 구현하여 효과적인 드론 대응이 가능합니다.',
                features: [
                    '상위 체계와의 정보 교환',
                    '통합 상황 인식 구현',
                    '계층적 방어 개념 적용',
                    '작전 지역 전체 방어 기여'
                ]
            },
            'covert': {
                title: '은밀 감시 모드',
                description: '최소한의 전자기 방출로 드론을 탐지하고 추적하는 모드입니다. 아군의 전자기 신호를 최소화하여 적의 전자전 탐지를 회피하면서 드론 활동을 모니터링합니다.',
                description2: '은밀 감시 모드는 특수 작전이나 적 지역 침투 시 유용하며, 특히 감시/정찰용 드론의 활동 패턴을 분석하는 데 효과적입니다.',
                features: [
                    '최소 전자기 방출',
                    '수동적 드론 신호 탐지',
                    '드론 활동 패턴 분석',
                    '적 전자전 탐지 회피'
                ]
            },
            'selective': {
                title: '선택적 재밍 모드',
                description: '드론의 특정 주파수 대역만을 선택적으로 재밍하는 모드입니다. 통신 및 항법 신호는 차단하면서도 주변 아군 장비에 미치는 영향을 최소화합니다.',
                description2: '선택적 재밍 모드는 특히 감시/정찰용 드론에 효과적이며, 드론의 정보 수집 능력을 무력화하면서도 아군 작전에 미치는 영향을 최소화합니다.',
                features: [
                    '특정 주파수 대역 선택적 재밍',
                    '아군 장비 영향 최소화',
                    '드론 정보 수집 차단',
                    '낮은 전력 소모'
                ]
            },
            'intensive': {
                title: '고강도 재밍 모드',
                description: '드론의 모든 주요 주파수 대역을 강력하게 재밍하는 모드입니다. 통신, 항법, 제어 신호를 동시에 차단하여 드론을 완전히 무력화합니다.',
                description2: '고강도 재밍 모드는 특히 공격용 드론에 효과적이며, 긴급 상황에서 신속한 위협 제거가 필요할 때 사용됩니다.',
                features: [
                    '광대역 고출력 재밍',
                    '통신/항법/제어 신호 동시 차단',
                    '신속한 드론 무력화',
                    '높은 전력 소모'
                ]
            },
            'drone-specific': {
                title: '드론 유형별 대응 모드',
                description: '드론의 유형과 특성에 따라 최적화된 대응 전략을 적용하는 모드입니다. 감시/정찰용 드론과 공격용 드론에 대해 각각 다른 대응 방식을 사용합니다.',
                description2: '드론 유형별 대응 모드는 AI 기반 드론 분류 알고리즘을 활용하여 드론의 유형을 정확히 식별하고, 최적의 대응 전략을 자동으로 선택합니다.',
                features: [
                    'AI 기반 드론 유형 분류',
                    '감시/정찰용 드론 맞춤형 대응',
                    '공격용 드론 맞춤형 대응',
                    '자원 효율적 할당'
                ]
            }
        };
        
        const modeInfo = modeData[modeType];
        
        newPanel.innerHTML = `
            <h3>${modeInfo.title}</h3>
            <div class="mode-details">
                <div class="mode-image">
                    <div class="placeholder-image">
                        <div class="image-placeholder">${modeInfo.title} 시각화</div>
                    </div>
                </div>
                <div class="mode-description">
                    <p>${modeInfo.description}</p>
                    <p>${modeInfo.description2}</p>
                    <ul class="mode-features">
                        ${modeInfo.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        modeContent.appendChild(newPanel);
    }
    
    // 특수 작전 시나리오 패널 동적 생성 함수
    function createScenarioPanel(scenarioType) {
        const scenarioContent = document.querySelector('.scenario-content');
        const newPanel = document.createElement('div');
        newPanel.className = 'scenario-panel active';
        newPanel.id = scenarioType + '-scenario';
        
        // 시나리오별 내용 설정
        const scenarioData = {
            'vip': {
                title: 'VIP 경호 시나리오',
                description: 'VIP 경호 작전에서는 통합형 무전기를 휴대한 경호원들이 VIP 주변에 배치되어 드론 위협으로부터 보호합니다. 특히 감시/정찰용 드론의 접근을 조기에 탐지하여 VIP의 위치 및 이동 경로가 노출되지 않도록 합니다.',
                description2: '경호 작전 중 드론 탐지 시 즉각적인 대응이 가능하며, 상황에 따라 은밀 감시 모드 또는 선택적 재밍 모드를 활용하여 드론의 정보 수집을 차단합니다.'
            },
            'forward': {
                title: '전진 기지 방어 시나리오',
                description: '전진 기지 방어 작전에서는 기지 주변에 통합형 무전기를 휴대한 병력을 배치하여 드론 위협으로부터 기지를 보호합니다. 외곽에 배치된 인원은 조기 경보 역할을 수행하고, 내부에 배치된 인원은 집중 방어를 담당합니다.',
                description2: '특히 자폭 드론의 접근을 조기에 탐지하여 고강도 재밍으로 무력화하고, 감시/정찰용 드론에 대해서는 선택적 재밍으로 정보 수집을 차단합니다.'
            },
            'special': {
                title: '특수부대 작전 시나리오',
                description: '특수부대 작전에서는 소규모 팀(4-6명)이 통합형 무전기를 휴대하고 은밀하게 작전을 수행합니다. 평시에는 최소 전자기 방출 모드로 운용하다가 드론 위협 탐지 시 상황에 따라 대응 모드를 전환합니다.',
                description2: '침투 단계에서는 은밀 감시 모드로 드론을 탐지하고, 임무 수행 단계에서는 선택적 재밍으로 드론의 정보 수집을 차단하며, 탈출 단계에서는 필요시 고강도 재밍으로 탈출로를 확보합니다.'
            }
        };
        
        const scenarioInfo = scenarioData[scenarioType];
        
        newPanel.innerHTML = `
            <div class="scenario-visualization">
                <div class="placeholder-image">
                    <div class="image-placeholder">${scenarioInfo.title} 애니메이션</div>
                </div>
            </div>
            <div class="scenario-description">
                <h3>${scenarioInfo.title}</h3>
                <p>${scenarioInfo.description}</p>
                <p>${scenarioInfo.description2}</p>
            </div>
        `;
        
        scenarioContent.appendChild(newPanel);
    }
    
    // 드론 유형 패널 동적 생성 함수
    function createDronePanel(droneType) {
        const droneContent = document.querySelector('.drone-content');
        const newPanel = document.createElement('div');
        newPanel.className = 'drone-panel active';
        newPanel.id = droneType + '-drone';
        
        // 드론 유형별 내용 설정
        const droneData = {
            'surveillance': {
                title: '감시/정찰용 드론 대응 전략',
                description: '감시/정찰용 드론은 직접적인 살상력은 없으나, 아군의 작전 보안을 심각하게 위협하고 후속 타격의 정확도를 높이는 등 전략적으로 매우 중요한 위협입니다. 이러한 드론에 대한 대응 전략은 다음과 같습니다:',
                steps: [
                    {
                        title: '1. 조기 탐지 및 식별',
                        description: '외곽 탐지층에서 드론 신호를 조기에 탐지하고, AI 기반 신호 분석을 통해 감시/정찰용 드론으로 식별합니다.'
                    },
                    {
                        title: '2. 은밀 감시 모드 전환',
                        description: '드론의 활동 패턴을 분석하여 임무 유형과 목표를 파악합니다.'
                    },
                    {
                        title: '3. 정보 수집 차단',
                        description: '광학/적외선 센서 교란 기술을 활용하여 드론의 정보 수집 능력을 무력화합니다.'
                    },
                    {
                        title: '4. 선택적 재밍 실행',
                        description: '드론의 통신 및 제어 신호를 선택적으로 재밍하여 임무 수행을 방해합니다.'
                    }
                ]
            },
            'attack': {
                title: '공격용 드론 대응 전략',
                description: '공격용 드론(자폭 드론, 무장 드론 등)은 직접적인 인명 및 장비 피해를 유발할 수 있는 심각한 위협입니다. 이러한 드론에 대한 대응 전략은 다음과 같습니다:',
                steps: [
                    {
                        title: '1. 신속 탐지 및 위협 평가',
                        description: '드론 신호를 신속히 탐지하고, 비행 패턴 및 신호 특성을 분석하여 공격용 드론으로 식별합니다.'
                    },
                    {
                        title: '2. 고강도 재밍 모드 전환',
                        description: '모든 가용 노드가 협력하여 드론의 통신, 항법, 제어 신호를 동시에 재밍합니다.'
                    },
                    {
                        title: '3. 드론 제어 상실 유도',
                        description: '강력한 재밍으로 드론이 제어 신호를 상실하도록 하여 자동 귀환 모드로 전환되거나 추락하도록 유도합니다.'
                    },
                    {
                        title: '4. 안전 지역으로 유도',
                        description: '선택적 주파수 재밍을 통해 드론을 안전 지역으로 유도하여 피해를 최소화합니다.'
                    }
                ]
            }
        };
        
        const droneInfo = droneData[droneType];
        
        newPanel.innerHTML = `
            <div class="drone-visualization">
                <div class="placeholder-image">
                    <div class="image-placeholder">${droneInfo.title} 시각화</div>
                </div>
            </div>
            <div class="drone-strategy">
                <h3>${droneInfo.title}</h3>
                <p>${droneInfo.description}</p>
                <div class="strategy-steps">
                    ${droneInfo.steps.map(step => `
                        <div class="strategy-step">
                            <h4>${step.title}</h4>
                            <p>${step.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        droneContent.appendChild(newPanel);
    }
    
    // 초기 패널 생성
    if (document.getElementById('communication-mode') === null) {
        createModePanel('communication');
    }
    
    if (document.getElementById('attack-drone') === null) {
        createDronePanel('attack');
    }
    
    // 스크롤 시 요소 애니메이션
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
