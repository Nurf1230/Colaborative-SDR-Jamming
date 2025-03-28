// 대시보드 기능 스크립트
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // 탭 기능
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            
            // 모든 탭 버튼에서 active 클래스 제거
            tabBtns.forEach(btn => btn.classList.remove('active'));
            
            // 모든 탭 콘텐츠에서 active 클래스 제거
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // 클릭한 탭 버튼과 해당 콘텐츠에 active 클래스 추가
            this.classList.add('active');
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });
    
    // 맨 위로 버튼
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 운용 모드 시뮬레이션
    window.simulateOperationMode = function(mode) {
        const simulationContainer = document.getElementById('operationModeSimulation');
        if (!simulationContainer) return;
        
        let content = '';
        
        switch(mode) {
            case 'communication':
                content = `
                    <h4>통신 모드 시뮬레이션</h4>
                    <p>일반 전술 무전기로 사용하여 음성 및 데이터 통신을 수행하는 모드입니다.</p>
                    <img src="images/communication_mode.png" alt="통신 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            case 'surveillance':
                content = `
                    <h4>감시 모드 시뮬레이션</h4>
                    <p>통신 기능을 유지하면서 백그라운드에서 드론 신호를 탐지하고 모니터링하는 모드입니다.</p>
                    <img src="images/surveillance_mode.png" alt="감시 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            case 'independent':
                content = `
                    <h4>독립 방어 모드 시뮬레이션</h4>
                    <p>단일 노드가 독립적으로 드론을 탐지하고 제한된 재밍을 수행하는 모드입니다.</p>
                    <img src="images/independent_mode.png" alt="독립 방어 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            case 'cooperative':
                content = `
                    <h4>협력 방어 모드 시뮬레이션</h4>
                    <p>2개 이상의 노드가 네트워크로 연결되어 협력적 재밍을 수행하는 모드입니다.</p>
                    <img src="images/cooperative_mode.png" alt="협력 방어 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            case 'integrated':
                content = `
                    <h4>통합 운용 모드 시뮬레이션</h4>
                    <p>상위 지휘통제 시스템과 연동하여 작전을 수행하는 모드입니다.</p>
                    <img src="images/integrated_mode.png" alt="통합 운용 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            case 'covert':
                content = `
                    <h4>은밀 감시 모드 시뮬레이션</h4>
                    <p>재밍 없이 드론 신호 탐지 및 모니터링만 수행하는 모드입니다.</p>
                    <img src="images/covert_mode.png" alt="은밀 감시 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            case 'selective':
                content = `
                    <h4>선택적 재밍 모드 시뮬레이션</h4>
                    <p>특정 주파수 대역 또는 특정 드론만 선택적으로 재밍하는 모드입니다.</p>
                    <img src="images/selective_mode.png" alt="선택적 재밍 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            case 'highPower':
                content = `
                    <h4>고강도 재밍 모드 시뮬레이션</h4>
                    <p>모든 가용 노드의 최대 출력으로 집중 재밍하는 모드입니다. 통신 기능이 일시 중단됩니다.</p>
                    <img src="images/high_power_mode.png" alt="고강도 재밍 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            case 'droneType':
                content = `
                    <h4>드론 유형별 대응 모드 시뮬레이션</h4>
                    <p>감시/정찰용 드론과 공격용 드론에 대한 맞춤형 대응 전략을 실행하는 모드입니다.</p>
                    <img src="images/drone_type_mode.png" alt="드론 유형별 대응 모드 시뮬레이션" style="max-width: 100%; height: auto;">
                `;
                break;
            default:
                content = `<p>선택한 모드에 대한 시뮬레이션이 없습니다.</p>`;
        }
        
        simulationContainer.innerHTML = content;
        simulationContainer.scrollIntoView({ behavior: 'smooth' });
    };
    
    // 성능 개요 차트
    const performanceChartEl = document.getElementById('performanceChart');
    if (performanceChartEl) {
        const ctx = performanceChartEl.getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['탐지 거리', '방향 탐지 정확도', '재밍 유효 거리', '드론 유형 식별', '통신 성능', '휴대성'],
                datasets: [
                    {
                        label: '통합형 무전기 체계',
                        data: [80, 85, 75, 85, 90, 95],
                        backgroundColor: 'rgba(26, 58, 95, 0.2)',
                        borderColor: 'rgba(26, 58, 95, 1)',
                        pointBackgroundColor: 'rgba(26, 58, 95, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(26, 58, 95, 1)'
                    },
                    {
                        label: '기존 체계',
                        data: [50, 40, 45, 30, 90, 60],
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
    
    // 기술 수준 차트
    const techLevelChartEl = document.getElementById('techLevelChart');
    if (techLevelChartEl) {
        const ctx = techLevelChartEl.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['다기능 SDR 기술', '협력적 재밍 알고리즘', '드론 신호 식별 기술', '방향 탐지 기술', '메쉬 네트워크 기술', '센서 교란 기술'],
                datasets: [
                    {
                        label: '현재 TRL',
                        data: [6, 6, 6, 7, 7, 5],
                        backgroundColor: 'rgba(26, 58, 95, 0.8)'
                    },
                    {
                        label: '목표 TRL',
                        data: [8, 8, 7, 8, 8, 7],
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
                        max: 9,
                        title: {
                            display: true,
                            text: 'TRL (기술 준비 수준)'
                        }
                    }
                }
            }
        });
    }
    
    // 드론 응답 차트
    const droneResponseChartEl = document.getElementById('droneResponseChart');
    if (droneResponseChartEl) {
        const ctx = droneResponseChartEl.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['감시/정찰용 드론', '자폭형 드론', '무장형 드론'],
                datasets: [
                    {
                        label: '임무 중단',
                        data: [85, 70, 65],
                        backgroundColor: 'rgba(26, 58, 95, 0.8)'
                    },
                    {
                        label: '경로 이탈',
                        data: [60, 90, 75],
                        backgroundColor: 'rgba(46, 93, 75, 0.8)'
                    },
                    {
                        label: '추락/귀환',
                        data: [40, 80, 60],
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
});
