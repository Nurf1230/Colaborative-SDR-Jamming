// 사업 일정 및 예산 페이지 전용 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 타임라인 단계 호버 효과
    const timelinePhases = document.querySelectorAll('.timeline-phase');
    
    timelinePhases.forEach(phase => {
        phase.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '1';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        phase.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '0';
            this.style.boxShadow = 'none';
        });
    });
    
    // 예산 카테고리 애니메이션
    const budgetCategories = document.querySelectorAll('.budget-category');
    
    budgetCategories.forEach(function(category, index) {
        setTimeout(function() {
            category.classList.add('animated');
        }, 100 * index);
    });
    
    // 예산 연도별 바 애니메이션
    const yearBars = document.querySelectorAll('.year-fill');
    
    yearBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
    
    // 마일스톤 애니메이션
    const milestones = document.querySelectorAll('.milestone');
    
    milestones.forEach(function(milestone, index) {
        milestone.style.opacity = '0';
        milestone.style.transform = 'translateX(-20px)';
        
        setTimeout(function() {
            milestone.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            milestone.style.opacity = '1';
            milestone.style.transform = 'translateX(0)';
        }, 200 * index);
    });
});
