// 공통 JavaScript 기능
document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글 기능
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // 아이콘 변경 (메뉴/닫기)
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // 스크롤 애니메이션
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // 초기 로드 시 애니메이션 적용
    animateOnScroll();
    
    // 스크롤 시 애니메이션 적용
    window.addEventListener('scroll', animateOnScroll);
    
    // 섹션 전환 애니메이션
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-visible');
        }, 200 * index);
    });
    
    // 이미지 플레이스홀더 처리
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        // 실제 구현 시에는 여기에 이미지 로드 코드가 들어갈 수 있음
        placeholder.classList.add('placeholder-loaded');
    });
});
