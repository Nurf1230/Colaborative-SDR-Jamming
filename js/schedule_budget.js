// 사업 일정 및 예산 페이지 JavaScript 파일
document.addEventListener('DOMContentLoaded', function() {
    // 사업 개발 일정 타임라인 생성
    function createScheduleTimeline() {
        const canvas = document.createElement('canvas');
        canvas.id = 'scheduleTimeline';
        canvas.width = 1000;
        canvas.height = 200;
        
        const timelineContainer = document.querySelector('.schedule-timeline .placeholder-image');
        if (timelineContainer) {
            timelineContainer.innerHTML = '';
            timelineContainer.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            
            // 타임라인 그리기
            drawScheduleTimeline(ctx, canvas.width, canvas.height);
        }
    }
    
    // 타임라인 그리기 함수
    function drawScheduleTimeline(ctx, width, height) {
        // 배경
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        
        // 타임라인 설정
        const startYear = 2025;
        const endYear = 2028;
        const totalMonths = (endYear - startYear + 1) * 12;
        const padding = 50;
        const timelineWidth = width - padding * 2;
        const timelineHeight = height - padding * 2;
        const monthWidth = timelineWidth / totalMonths;
        
        // 타임라인 선 그리기
        ctx.strokeStyle = '#1A3A5F';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(padding, height / 2);
        ctx.lineTo(width - padding, height / 2);
        ctx.stroke();
        
        // 연도 표시
        ctx.fillStyle = '#333';
        ctx.font = '14px Noto Sans KR';
        ctx.textAlign = 'center';
        
        for (let year = startYear; year <= endYear; year++) {
            const x = padding + ((year - startYear) * 12) * monthWidth;
            
            // 연도 구분선
            ctx.strokeStyle = '#1A3A5F';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, height / 2 - 10);
            ctx.lineTo(x, height / 2 + 10);
            ctx.stroke();
            
            // 연도 텍스트
            ctx.fillText(year + '년', x, height / 2 + 30);
        }
        
        // 분기 표시
        ctx.fillStyle = '#666';
        ctx.font = '12px Noto Sans KR';
        
        for (let year = startYear; year <= endYear; year++) {
            for (let quarter = 1; quarter <= 4; quarter++) {
                const x = padding + ((year - startYear) * 12 + (quarter - 1) * 3) * monthWidth;
                
                // 분기 구분선
                ctx.strokeStyle = '#aaa';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x, height / 2 - 5);
                ctx.lineTo(x, height / 2 + 5);
                ctx.stroke();
                
                // 분기 텍스트
                ctx.fillText(quarter + 'Q', x, height / 2 - 15);
            }
        }
        
        // 단계 정보
        const phases = [
            { name: '개념 연구', start: { year: 2025, month: 1 }, end: { year: 2025, month: 6 }, color: '#1A3A5F' },
            { name: '핵심기술 개발', start: { year: 2025, month: 7 }, end: { year: 2026, month: 6 }, color: '#2E5D4B' },
            { name: '시제품 개발', start: { year: 2026, month: 7 }, end: { year: 2027, month: 6 }, color: '#4682B4' },
            { name: '시험평가', start: { year: 2027, month: 7 }, end: { year: 2027, month: 12 }, color: '#D64045' },
            { name: '양산 준비', start: { year: 2028, month: 1 }, end: { year: 2028, month: 6 }, color: '#FFD166' }
        ];
        
        // 단계 바 그리기
        phases.forEach((phase, index) => {
            const startMonth = (phase.start.year - startYear) * 12 + phase.start.month - 1;
            const endMonth = (phase.end.year - startYear) * 12 + phase.end.month - 1;
            const duration = endMonth - startMonth + 1;
            
            const x = padding + startMonth * monthWidth;
            const y = height / 2 - 40 - index * 20;
            const phaseWidth = duration * monthWidth;
            const phaseHeight = 15;
            
            // 단계 바
            ctx.fillStyle = phase.color;
            ctx.fillRect(x, y, phaseWidth, phaseHeight);
            
            // 단계 이름
            ctx.fillStyle = '#333';
            ctx.font = '12px Noto Sans KR';
            ctx.textAlign = 'left';
            ctx.fillText(phase.name, x, y - 5);
            
            // 기간 표시
            ctx.fillStyle = '#666';
            ctx.font = '10px Noto Sans KR';
            ctx.fillText(
                `${phase.start.year}.${phase.start.month} - ${phase.end.year}.${phase.end.month}`,
                x + phaseWidth + 5,
                y + phaseHeight / 2 + 3
            );
            
            // 단계 연결선
            ctx.strokeStyle = phase.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x + phaseWidth / 2, y + phaseHeight);
            ctx.lineTo(x + phaseWidth / 2, height / 2);
            ctx.stroke();
            
            // 단계 포인트
            ctx.fillStyle = phase.color;
            ctx.beginPath();
            ctx.arc(x + phaseWidth / 2, height / 2, 5, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    // 주요 마일스톤 시각화 생성
    function createMilestoneVisualization() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "200");
        svg.setAttribute("viewBox", "0 0 1000 200");
        svg.setAttribute("class", "milestone-svg");
        
        const milestoneContainer = document.querySelector('.milestone-visualization .placeholder-image');
        if (milestoneContainer) {
            milestoneContainer.innerHTML = '';
            milestoneContainer.appendChild(svg);
            
            // 마일스톤 시각화 그리기
            drawMilestoneVisualization(svg);
        }
    }
    
    // 마일스톤 시각화 그리기 함수
    function drawMilestoneVisualization(svg) {
        // 타임라인 설정
        const startYear = 2025;
        const endYear = 2028;
        const totalMonths = (endYear - startYear + 1) * 12;
        const padding = 50;
        const timelineWidth = 900;
        const monthWidth = timelineWidth / totalMonths;
        
        // 타임라인 선 그리기
        const timeline = document.createElementNS("http://www.w3.org/2000/svg", "line");
        timeline.setAttribute("x1", padding);
        timeline.setAttribute("y1", 100);
        timeline.setAttribute("x2", padding + timelineWidth);
        timeline.setAttribute("y2", 100);
        timeline.setAttribute("stroke", "#1A3A5F");
        timeline.setAttribute("stroke-width", "4");
        svg.appendChild(timeline);
        
        // 연도 표시
        for (let year = startYear; year <= endYear; year++) {
            const x = padding + ((year - startYear) * 12) * monthWidth;
            
            // 연도 구분선
            const yearLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
            yearLine.setAttribute("x1", x);
            yearLine.setAttribute("y1", 90);
            yearLine.setAttribute("x2", x);
            yearLine.setAttribute("y2", 110);
            yearLine.setAttribute("stroke", "#1A3A5F");
            yearLine.setAttribute("stroke-width", "2");
            svg.appendChild(yearLine);
            
            // 연도 텍스트
            const yearText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            yearText.setAttribute("x", x);
            yearText.setAttribute("y", 130);
            yearText.setAttribute("text-anchor", "middle");
            yearText.setAttribute("fill", "#333");
            yearText.setAttribute("font-size", "14");
            yearText.textContent = year + '년';
            svg.appendChild(yearText);
        }
        
        // 마일스톤 정보
        const milestones = [
            { name: '개념 연구 완료', date: { year: 2025, month: 6 }, color: '#1A3A5F' },
            { name: '핵심 기술 개발 완료', date: { year: 2026, month: 6 }, color: '#2E5D4B' },
            { name: '시제품 제작 완료', date: { year: 2027, month: 3 }, color: '#4682B4' },
            { name: '시험평가 완료', date: { year: 2027, month: 12 }, color: '#D64045' },
            { name: '양산 준비 완료', date: { year: 2028, month: 6 }, color: '#FFD166' }
        ];
        
        // 마일스톤 그리기
        milestones.forEach((milestone, index) => {
            const month = (milestone.date.year - startYear) * 12 + milestone.date.month - 1;
            const x = padding + month * monthWidth;
            
            // 마일스톤 아이콘
            const icon = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            icon.setAttribute("cx", x);
            icon.setAttribute("cy", 100);
            icon.setAttribute("r", "10");
            icon.setAttribute("fill", milestone.color);
            svg.appendChild(icon);
            
            // 마일스톤 연결선
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x);
            line.setAttribute("y1", 100);
            line.setAttribute("x2", x);
            line.setAttribute("y2", index % 2 === 0 ? 60 : 140);
            line.setAttribute("stroke", milestone.color);
            line.setAttribute("stroke-width", "2");
            svg.appendChild(line);
            
            // 마일스톤 텍스트 배경
            const textBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            textBg.setAttribute("x", x - 80);
            textBg.setAttribute("y", index % 2 === 0 ? 30 : 150);
            textBg.setAttribute("width", "160");
            textBg.setAttribute("height", "25");
            textBg.setAttribute("rx", "5");
            textBg.setAttribute("ry", "5");
            textBg.setAttribute("fill", milestone.color);
            svg.appendChild(textBg);
            
            // 마일스톤 텍스트
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", x);
            text.setAttribute("y", index % 2 === 0 ? 47 : 167);
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("fill", "white");
            text.setAttribute("font-size", "12");
            text.textContent = milestone.name;
            svg.appendChild(text);
            
            // 날짜 텍스트
            const dateText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            dateText.setAttribute("x", x);
            dateText.setAttribute("y", index % 2 === 0 ? 75 : 145);
            dateText.setAttribute("text-anchor", "middle");
            dateText.setAttribute("fill", "#666");
            dateText.setAttribute("font-size", "10");
            dateText.textContent = `${milestone.date.year}년 ${milestone.date.month}월`;
            svg.appendChild(dateText);
        });
    }
    
    // 사업 예산 차트 생성
    function createBudgetChart() {
        const canvas = document.createElement('canvas');
        canvas.id = 'budgetChart';
        canvas.width = 800;
        canvas.height = 400;
        
        const chartContainer = document.querySelector('.budget-visualization .placeholder-image');
        if (chartContainer) {
            chartContainer.innerHTML = '';
            chartContainer.appendChild(canvas);
            
            const ctx = canvas.getContext('2d');
            
            // 예산 차트 그리기
            drawBudgetChart(ctx, canvas.width, canvas.height);
        }
    }
    
    // 예산 차트 그리기 함수
    function drawBudgetChart(ctx, width, height) {
        // 배경
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        
        // 차트 설정
        const padding = 50;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        
        // 예산 데이터
        const budgetData = [
            { phase: '개념 연구', amount: 25, percent: 10, color: '#1A3A5F' },
            { phase: '핵심기술 개발', amount: 75, percent: 30, color: '#2E5D4B' },
            { phase: '시제품 개발', amount: 100, percent: 40, color: '#4682B4' },
            { phase: '시험평가', amount: 25, percent: 10, color: '#D64045' },
            { phase: '양산 준비', amount: 25, percent: 10, color: '#FFD166' }
        ];
        
        // 파이 차트 그리기
        const centerX = padding + chartWidth / 3;
        const centerY = padding + chartHeight / 2;
        const radius = Math.min(chartWidth, chartHeight) / 3;
        
        let startAngle = -Math.PI / 2;
        
        budgetData.forEach(item => {
            const sliceAngle = (item.percent / 100) * Math.PI * 2;
            
            // 파이 조각
            ctx.fillStyle = item.color;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
            ctx.closePath();
            ctx.fill();
            
            // 파이 조각 테두리
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // 다음 조각 시작 각도 업데이트
            startAngle += sliceAngle;
        });
        
        // 바 차트 그리기
        const barWidth = 40;
        const barSpacing = 20;
        const barChartX = padding + chartWidth * 2/3;
        const barChartY = padding + chartHeight;
        const barChartWidth = chartWidth / 3;
        const maxAmount = Math.max(...budgetData.map(item => item.amount));
        const barScale = chartHeight / maxAmount;
        
        budgetData.forEach((item, index) => {
            const x = barChartX + index * (barWidth + barSpacing);
            const barHeight = item.amount * barScale;
            const y = barChartY - barHeight;
            
            // 바
            ctx.fillStyle = item.color;
            ctx.fillRect(x, y, barWidth, barHeight);
            
            // 금액 텍스트
            ctx.fillStyle = '#333';
            ctx.font = '12px Noto Sans KR';
            ctx.textAlign = 'center';
            ctx.fillText(item.amount + '억원', x + barWidth / 2, y - 10);
            
            // 단계 텍스트
            ctx.fillText(item.phase, x + barWidth / 2, barChartY + 20);
        });
        
        // 범례
        const legendX = padding;
        const legendY = padding;
        
        budgetData.forEach((item, index) => {
            const y = legendY + index * 25;
            
            // 범례 색상 박스
            ctx.fillStyle = item.color;
            ctx.fillRect(legendX, y, 15, 15);
            
            // 범례 텍스트
            ctx.fillStyle = '#333';
            ctx.font = '14px Noto Sans KR';
            ctx.textAlign = 'left';
            ctx.fillText(`${item.phase} (${item.percent}%, ${item.amount}억원)`, legendX + 25, y + 12);
        });
        
        // 총 예산 텍스트
        ctx.fillStyle = '#1A3A5F';
        ctx.font = 'bold 16px Noto Sans KR';
        ctx.textAlign = 'center';
        ctx.fillText('총 사업 예산: 250억원', centerX, centerY - radius - 20);
    }
    
    // 사업 일정 및 예산 시각화 구현
    function implementScheduleBudgetVisualizations() {
        // 사업 개발 일정 타임라인
        createScheduleTimeline();
        
        // 주요 마일스톤 시각화
        createMilestoneVisualization();
        
        // 사업 예산 차트
        createBudgetChart();
    }
    
    // 페이지 로드 시 시각화 구현
    implementScheduleBudgetVisualizations();
});
