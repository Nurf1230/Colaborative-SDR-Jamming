// 기대 효과 페이지 전용 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 효과 탭 기능
    const effectTabs = document.querySelectorAll('.effect-tab');
    const effectPanels = document.querySelectorAll('.effect-panel');
    
    if (effectTabs.length > 0) {
        effectTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 모든 탭에서 active 클래스 제거
                effectTabs.forEach(t => t.classList.remove('active'));
                // 클릭된 탭에 active 클래스 추가
                this.classList.add('active');
                
                // 모든 패널 숨기기
                effectPanels.forEach(panel => panel.classList.remove('active'));
                
                // 선택된 효과 패널 표시
                const effectType = this.getAttribute('data-effect');
                const targetPanel = document.getElementById(effectType + '-effect');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
        
        // 작전적 효과 패널 동적 생성
        createOperationalEffectPanel();
        
        // 전략적 효과 패널 동적 생성
        createStrategicEffectPanel();
    }
    
    // 애니메이션 효과
    const animateElements = document.querySelectorAll('.innovation-card, .effect-item, .economic-item, .technical-card');
    
    animateElements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.add('animated');
        }, 100 * index);
    });
    
    // 기술 수준 바 애니메이션
    const levelBars = document.querySelectorAll('.level-fill');
    
    levelBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
    
    // 로드맵 아이템 애니메이션
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    
    roadmapItems.forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(function() {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 * index);
    });
});

// 작전적 효과 패널 동적 생성 함수
function createOperationalEffectPanel() {
    const operationalEffect = document.getElementById('operational-effect');
    if (!operationalEffect) return;
    
    operationalEffect.innerHTML = `
        <div class="effect-grid">
            <div class="effect-item">
                <div class="effect-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h3>방공 체계 보완</h3>
                <p>기존 방공 체계의 사각지대를 보완하여 저고도 드론 위협에 대한 방어 능력 강화</p>
            </div>
            <div class="effect-item">
                <div class="effect-icon">
                    <i class="fas fa-chess"></i>
                </div>
                <h3>작전 유연성 증대</h3>
                <p>다양한 작전 환경에서 유연하게 운용 가능한 드론 방어 능력 제공으로 작전 수행 자유도 향상</p>
            </div>
            <div class="effect-item">
                <div class="effect-icon">
                    <i class="fas fa-project-diagram"></i>
                </div>
                <h3>통합 방어 체계 구축</h3>
                <p>기존 방공 체계와의 연동을 통한 다층적 통합 방어 체계 구축으로 방어 효과 극대화</p>
            </div>
            <div class="effect-item">
                <div class="effect-icon">
                    <i class="fas fa-satellite"></i>
                </div>
                <h3>전장 가시성 향상</h3>
                <p>적 드론 탐지 정보의 공유를 통한 전장 상황 인식 능력 향상 및 지휘 결심 지원</p>
            </div>
        </div>
    `;
}

// 전략적 효과 패널 동적 생성 함수
function createStrategicEffectPanel() {
    const strategicEffect = document.getElementById('strategic-effect');
    if (!strategicEffect) return;
    
    strategicEffect.innerHTML = `
        <div class="effect-grid">
            <div class="effect-item">
                <div class="effect-icon">
                    <i class="fas fa-balance-scale"></i>
                </div>
                <h3>비대칭 위협 대응</h3>
                <p>저비용 고효율의 드론 위협에 대한 효과적인 대응 수단 확보로 비대칭 전력 균형 유지</p>
            </div>
            <div class="effect-item">
                <div class="effect-icon">
                    <i class="fas fa-globe-asia"></i>
                </div>
                <h3>국방 자주성 강화</h3>
                <p>국내 기술로 개발된 핵심 방어 체계 확보를 통한 국방 자주성 강화</p>
            </div>
            <div class="effect-item">
                <div class="effect-icon">
                    <i class="fas fa-handshake"></i>
                </div>
                <h3>동맹국 협력 강화</h3>
                <p>선진 드론 방어 기술 보유를 통한 동맹국과의 기술 협력 및 상호운용성 강화</p>
            </div>
            <div class="effect-item">
                <div class="effect-icon">
                    <i class="fas fa-industry"></i>
                </div>
                <h3>방산 경쟁력 향상</h3>
                <p>혁신적 드론 방어 기술 확보를 통한 국내 방산 산업 경쟁력 향상 및 수출 기반 마련</p>
            </div>
        </div>
    `;
}
