// 통합형 전술 무전기 기반 협력적 재밍 대적 드론 방어체계 대시보드 스크립트

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // 스크롤 이벤트 처리
    window.addEventListener('scroll', function() {
        // 맨 위로 버튼 표시/숨김
        const backToTopBtn = document.querySelector('.back-to-top');
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
        
        // 스크롤 애니메이션
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 탭 기능
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // 모든 탭 버튼에서 active 클래스 제거
                tabBtns.forEach(b => b.classList.remove('active'));
                // 클릭된 탭 버튼에 active 클래스 추가
                this.classList.add('active');
                
                // 모든 탭 콘텐츠 숨김
                const tabContents = document.querySelectorAll('.tab-content');
                tabContents.forEach(content => content.classList.remove('active'));
                
                // 선택된 탭 콘텐츠 표시
                const targetId = this.getAttribute('data-tab');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
        
        // 첫 번째 탭을 기본으로 활성화
        if (tabBtns[0]) {
            tabBtns[0].click();
        }
    }
    
    // 모달 기능
    const modalTriggers = document.querySelectorAll('[data-modal]');
    if (modalTriggers.length > 0) {
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                
                if (modal) {
                    modal.classList.add('active');
                    
                    // 모달 닫기 버튼
                    const closeBtn = modal.querySelector('.modal-close');
                    if (closeBtn) {
                        closeBtn.addEventListener('click', function() {
                            modal.classList.remove('active');
                        });
                    }
                    
                    // 모달 외부 클릭 시 닫기
                    modal.addEventListener('click', function(e) {
                        if (e.target === modal) {
                            modal.classList.remove('active');
                        }
                    });
                }
            });
        });
    }
    
    // 이미지 갤러리 기능
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').getAttribute('src');
                const imgAlt = this.querySelector('img').getAttribute('alt');
                
                // 이미지 모달 생성
                const modal = document.createElement('div');
                modal.classList.add('modal');
                modal.classList.add('active');
                
                const modalContent = document.createElement('div');
                modalContent.classList.add('modal-content');
                
                const closeBtn = document.createElement('button');
                closeBtn.classList.add('modal-close');
                closeBtn.innerHTML = '&times;';
                
                const img = document.createElement('img');
                img.setAttribute('src', imgSrc);
                img.setAttribute('alt', imgAlt);
                img.style.width = '100%';
                
                const caption = document.createElement('p');
                caption.textContent = imgAlt;
                caption.style.textAlign = 'center';
                caption.style.marginTop = '1rem';
                
                modalContent.appendChild(closeBtn);
                modalContent.appendChild(img);
                modalContent.appendChild(caption);
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
                
                // 닫기 기능
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
                
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        document.body.removeChild(modal);
                    }
                });
            });
        });
    }
    
    // 차트 렌더링 (Chart.js 사용)
    renderCharts();
});

// 차트 렌더링 함수
function renderCharts() {
    // 성능 비교 차트
    const performanceChartEl = document.getElementById('performanceChart');
    if (performanceChartEl) {
        const ctx = performanceChartEl.getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['탐지 거리', '방향 탐지 정확도', '위치 추적 정확도', '드론 유형 식별', '재밍 유효 거리', '재밍 성공률'],
                datasets: [
                    {
                        label: '통합형 무전기 체계',
                        data: [85, 90, 80, 85, 75, 80],
                        backgroundColor: 'rgba(26, 58, 95, 0.2)',
                        borderColor: 'rgba(26, 58, 95, 1)',
                        pointBackgroundColor: 'rgba(26, 58, 95, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(26, 58, 95, 1)'
                    },
                    {
                        label: '기존 체계',
                        data: [60, 65, 50, 55, 70, 60],
                        backgroundColor: 'rgba(214, 64, 69, 0.2)',
                        borderColor: 'rgba(214, 64, 69, 1)',
                        pointBackgroundColor: 'rgba(214, 64, 69, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(214, 64, 69, 1)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
    
    // 예산 분배 차트
    const budgetChartEl = document.getElementById('budgetChart');
    if (budgetChartEl) {
        const ctx = budgetChartEl.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['인건비', '재료비', '시제품 제작비', '시험평가비', '기술료', '기타 경비'],
                datasets: [{
                    data: [25, 15, 20, 8, 5, 2],
                    backgroundColor: [
                        'rgba(26, 58, 95, 0.8)',
                        'rgba(46, 93, 75, 0.8)',
                        'rgba(214, 64, 69, 0.8)',
                        'rgba(255, 209, 102, 0.8)',
                        'rgba(51, 51, 51, 0.8)',
                        'rgba(153, 102, 255, 0.8)'
                    ],
                    borderColor: [
                        'rgba(26, 58, 95, 1)',
                        'rgba(46, 93, 75, 1)',
                        'rgba(214, 64, 69, 1)',
                        'rgba(255, 209, 102, 1)',
                        'rgba(51, 51, 51, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                return `${label}: ${value}억원`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // 기술 수준 차트
    const techLevelChartEl = document.getElementById('techLevelChart');
    if (techLevelChartEl) {
        const ctx = techLevelChartEl.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['다기능 SDR 기술', '협력적 재밍 알고리즘', '드론 신호 식별 기술', '방향 탐지 기술', '메쉬 네트워크', '센서 교란 기술'],
                datasets: [
                    {
                        label: '현 기술 수준 (TRL)',
                        data: [6, 6, 6, 7, 7, 5],
                        backgroundColor: 'rgba(26, 58, 95, 0.8)'
                    },
                    {
                        label: '목표 기술 수준 (TRL)',
                        data: [8, 8, 7, 8, 8, 7],
                        backgroundColor: 'rgba(46, 93, 75, 0.8)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 9,
                        title: {
                            display: true,
                            text: '기술 준비 수준 (TRL)'
                        }
                    }
                }
            }
        });
    }
    
    // 드론 유형별 대응 효과 차트
    const droneResponseChartEl = document.getElementById('droneResponseChart');
    if (droneResponseChartEl) {
        const ctx = droneResponseChartEl.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['감시/정찰용 드론', '자폭형 드론', '무장형 드론'],
                datasets: [
                    {
                        label: '탐지 성공률',
                        data: [90, 85, 80],
                        backgroundColor: 'rgba(26, 58, 95, 0.8)'
                    },
                    {
                        label: '식별 정확도',
                        data: [85, 80, 75],
                        backgroundColor: 'rgba(46, 93, 75, 0.8)'
                    },
                    {
                        label: '무력화 성공률',
                        data: [80, 85, 75],
                        backgroundColor: 'rgba(214, 64, 69, 0.8)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: '성공률 (%)'
                        }
                    }
                }
            }
        });
    }
}

// 운용 모드 시뮬레이션 함수
function simulateOperationMode(mode) {
    const simulationContainer = document.getElementById('operationModeSimulation');
    if (!simulationContainer) return;
    
    // 시뮬레이션 내용 초기화
    simulationContainer.innerHTML = '';
    
    // 모드별 시뮬레이션 내용
    let content = '';
    
    switch(mode) {
        case 'communication':
            content = `
                <div class="simulation-content">
                    <h3>통신 모드 시뮬레이션</h3>
                    <p>일반 전술 무전기로 사용하여 음성 및 데이터 통신을 수행하는 모드입니다.</p>
                    <div class="simulation-animation">
                        <div class="radio-device">
                            <div class="radio-screen">통신 모드</div>
                            <div class="radio-signal"></div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'surveillance':
            content = `
                <div class="simulation-content">
                    <h3>감시 모드 시뮬레이션</h3>
                    <p>통신 기능을 유지하면서 백그라운드에서 드론 신호를 탐지하고 모니터링하는 모드입니다.</p>
                    <div class="simulation-animation">
                        <div class="radio-device">
                            <div class="radio-screen">감시 모드</div>
                            <div class="radio-signal"></div>
                            <div class="drone-signal"></div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'independent':
            content = `
                <div class="simulation-content">
                    <h3>독립 방어 모드 시뮬레이션</h3>
                    <p>단일 노드가 독립적으로 드론을 탐지하고 제한된 재밍을 수행하는 모드입니다.</p>
                    <div class="simulation-animation">
                        <div class="radio-device">
                            <div class="radio-screen">독립 방어 모드</div>
                            <div class="jamming-signal"></div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'cooperative':
            content = `
                <div class="simulation-content">
                    <h3>협력 방어 모드 시뮬레이션</h3>
                    <p>2개 이상의 노드가 네트워크로 연결되어 협력적 재밍을 수행하는 모드입니다.</p>
                    <div class="simulation-animation">
                        <div class="radio-network">
                            <div class="radio-device">
                                <div class="radio-screen">협력 방어 모드</div>
                                <div class="jamming-signal"></div>
                            </div>
                            <div class="radio-device">
                                <div class="radio-screen">협력 방어 모드</div>
                                <div class="jamming-signal"></div>
                            </div>
                            <div class="radio-device">
                                <div class="radio-screen">협력 방어 모드</div>
                                <div class="jamming-signal"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'integrated':
            content = `
                <div class="simulation-content">
                    <h3>통합 운용 모드 시뮬레이션</h3>
                    <p>상위 지휘통제 시스템과 연동하여 작전을 수행하는 모드입니다.</p>
                    <div class="simulation-animation">
                        <div class="command-system">
                            <div class="system-screen">지휘통제 시스템</div>
                        </div>
                        <div class="connection-line"></div>
                        <div class="radio-network">
                            <div class="radio-device">
                                <div class="radio-screen">통합 운용 모드</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'covert':
            content = `
                <div class="simulation-content">
                    <h3>은밀 감시 모드 시뮬레이션</h3>
                    <p>재밍 없이 드론 신호 탐지 및 모니터링만 수행하는 모드입니다. 특히 감시/정찰용 드론의 활동 패턴을 분석합니다.</p>
                    <div class="simulation-animation">
                        <div class="radio-device">
                            <div class="radio-screen">은밀 감시 모드</div>
                            <div class="drone-signal"></div>
                            <div class="analysis-overlay"></div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'selective':
            content = `
                <div class="simulation-content">
                    <h3>선택적 재밍 모드 시뮬레이션</h3>
                    <p>특정 주파수 대역 또는 특정 드론만 선택적으로 재밍하는 모드입니다.</p>
                    <div class="simulation-animation">
                        <div class="radio-device">
                            <div class="radio-screen">선택적 재밍 모드</div>
                            <div class="selective-jamming"></div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'highPower':
            content = `
                <div class="simulation-content">
                    <h3>고강도 재밍 모드 시뮬레이션</h3>
                    <p>모든 가용 노드의 최대 출력으로 집중 재밍하는 모드입니다. 통신 기능이 일시 중단됩니다.</p>
                    <div class="simulation-animation">
                        <div class="radio-network">
                            <div class="radio-device">
                                <div class="radio-screen">고강도 재밍 모드</div>
                                <div class="high-power-jamming"></div>
                            </div>
                            <div class="radio-device">
                                <div class="radio-screen">고강도 재밍 모드</div>
                                <div class="high-power-jamming"></div>
                            </div>
                            <div class="radio-device">
                                <div class="radio-screen">고강도 재밍 모드</div>
                                <div class="high-power-jamming"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'droneType':
            content = `
                <div class="simulation-content">
                    <h3>드론 유형별 대응 모드 시뮬레이션</h3>
                    <p>감시/정찰용 드론과 공격용 드론에 대한 맞춤형 대응 전략을 실행하는 모드입니다.</p>
                    <div class="simulation-animation">
                        <div class="drone-types">
                            <div class="drone surveillance-drone">
                                <div class="drone-label">감시/정찰용 드론</div>
                                <div class="response-strategy">은밀 감시 → 선택적 재밍</div>
                            </div>
                            <div class="drone attack-drone">
                                <div class="drone-label">공격용 드론</div>
                                <div class="response-strategy">즉시 탐지 → 고강도 재밍</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        default:
            content = '<p>모드를 선택해주세요.</p>';
    }
    
    simulationContainer.innerHTML = content;
}

// 드론 대응 시나리오 시뮬레이션 함수
function simulateDroneResponse(droneType) {
    const simulationContainer = document.getElementById('droneResponseSimulation');
    if (!simulationContainer) return;
    
    // 시뮬레이션 내용 초기화
    simulationContainer.innerHTML = '';
    
    // 드론 유형별 시뮬레이션 내용
    let content = '';
    
    switch(droneType) {
        case 'surveillance':
            content = `
                <div class="simulation-content">
                    <h3>감시/정찰용 드론 대응 시나리오</h3>
                    <div class="scenario-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>드론 신호 탐지</h4>
                                <p>통합형 무전기가 감시/정찰용 드론의 신호를 탐지합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>드론 유형 식별</h4>
                                <p>신호 특성 분석을 통해 감시/정찰용 드론임을 식별합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>은밀 감시 모드 전환</h4>
                                <p>드론의 활동 패턴을 분석하기 위해 은밀 감시 모드로 전환합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h4>정보 수집 차단 결정</h4>
                                <p>드론의 정보 수집을 차단할 필요가 있다고 판단되면 다음 단계로 진행합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h4>선택적 재밍 실행</h4>
                                <p>드론의 통신 및 센서 시스템에 대한 선택적 재밍을 실행합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">6</div>
                            <div class="step-content">
                                <h4>효과 평가 및 조정</h4>
                                <p>재밍 효과를 평가하고 필요시 전략을 조정합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'suicide':
            content = `
                <div class="simulation-content">
                    <h3>자폭형 드론 대응 시나리오</h3>
                    <div class="scenario-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>드론 신호 탐지</h4>
                                <p>통합형 무전기가 자폭형 드론의 신호를 탐지합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>드론 유형 식별</h4>
                                <p>신호 특성 분석을 통해 자폭형 드론임을 식별합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>고위협 경보 발령</h4>
                                <p>자폭형 드론 탐지 시 즉시 고위협 경보를 발령합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h4>협력 방어 모드 전환</h4>
                                <p>주변 노드들과 협력하여 방어 태세를 갖춥니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h4>고강도 재밍 실행</h4>
                                <p>드론의 통신 및 항법 시스템에 대한 고강도 재밍을 실행합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">6</div>
                            <div class="step-content">
                                <h4>드론 무력화 확인</h4>
                                <p>드론이 제어 불능 상태가 되어 추락하거나 귀환하는지 확인합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'armed':
            content = `
                <div class="simulation-content">
                    <h3>무장형 드론 대응 시나리오</h3>
                    <div class="scenario-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>드론 신호 탐지</h4>
                                <p>통합형 무전기가 무장형 드론의 신호를 탐지합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>드론 유형 식별</h4>
                                <p>신호 특성 분석을 통해 무장형 드론임을 식별합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>고위협 경보 발령</h4>
                                <p>무장형 드론 탐지 시 즉시 고위협 경보를 발령합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h4>통합 운용 모드 전환</h4>
                                <p>상위 지휘통제 시스템과 연동하여 통합 대응을 준비합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h4>다중 주파수 재밍 실행</h4>
                                <p>드론의 통신, 항법, 무장 제어 시스템에 대한 다중 주파수 재밍을 실행합니다.</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">6</div>
                            <div class="step-content">
                                <h4>안전 지역으로 유도</h4>
                                <p>가능한 경우 드론을 안전 지역으로 유도하여 위협을 최소화합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        default:
            content = '<p>드론 유형을 선택해주세요.</p>';
    }
    
    simulationContainer.innerHTML = content;
}
