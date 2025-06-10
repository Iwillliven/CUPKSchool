// 移动端菜单功能
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileSeasonMenu = document.getElementById('mobileSeasonMenu');
    const mobileSeasonSubmenu = document.getElementById('mobileSeasonSubmenu');
    const mobileActivityMenu = document.getElementById('mobileActivityMenu');
    const mobileActivitySubmenu = document.getElementById('mobileActivitySubmenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('opacity-0');
            mobileMenu.classList.toggle('invisible');
            mobileMenu.classList.toggle('-translate-y-full');
        });
    }

    if (mobileSeasonMenu && mobileSeasonSubmenu) {
        mobileSeasonMenu.addEventListener('click', function() {
            mobileSeasonSubmenu.classList.toggle('hidden');
        });
    }

    if (mobileActivityMenu && mobileActivitySubmenu) {
        mobileActivityMenu.addEventListener('click', function() {
            mobileActivitySubmenu.classList.toggle('hidden');
        });
    }

    // 初始化所有轮播图
    initializeCarousels();
});

// 轮播图功能
function initializeCarousels() {
    console.log('initializeCarousels called');
    const carousels = document.querySelectorAll('.carousel-track');
    console.log('Found carousels:', carousels.length);
    
    carousels.forEach(carousel => {
        console.log('Processing carousel:', carousel.id);
        const slides = carousel.querySelectorAll('.carousel-slide');
        const indicators = document.getElementById(carousel.id.replace('carousel', 'indicators'));
        let currentSlide = 0;
        
        // 创建指示器
        if (indicators) {
            slides.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => goToSlide(index));
                indicators.appendChild(dot);
            });
        }
        
        // 更新轮播图位置
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            // 更新指示器状态
            if (indicators) {
                indicators.querySelectorAll('.carousel-indicator').forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }
        }
        
        // 切换到指定幻灯片
        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }
        
        // 下一张幻灯片
        window[`nextSlide_${carousel.id}`] = function() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        };
        
        // 上一张幻灯片
        window[`prevSlide_${carousel.id}`] = function() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        };
        
        // 自动播放
        setInterval(() => {
            window[`nextSlide_${carousel.id}`]();
        }, 5000);
    });
}

// 为了兼容现有的 onclick 调用
function nextSlide(carouselId) {
    window[`nextSlide_${carouselId}`]();
}

function prevSlide(carouselId) {
    window[`prevSlide_${carouselId}`]();
} 