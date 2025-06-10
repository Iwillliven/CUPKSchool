// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航栏滚动效果
    initNavbarScroll();
    
    // 初始化季节切换功能
    initSeasonTabs();
    
    // 初始化图片懒加载
    initLazyLoading();
    
    // 初始化活动卡片动画
    initActivityAnimations();
});

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.getElementById('main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 滚动时导航栏背景变化
        if (scrollTop > 50) {
            navbar.classList.add('bg-white', 'shadow-md');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            navbar.classList.add('bg-transparent');
        }
        
        // 滚动时导航栏显示/隐藏
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 季节切换功能
function initSeasonTabs() {
    const seasonTabs = document.querySelectorAll('.season-tab');
    const seasonContents = document.querySelectorAll('.season-content');
    
    seasonTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取目标季节ID
            const targetSeason = this.getAttribute('href').substring(1);
            
            // 隐藏所有季节内容
            seasonContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // 显示目标季节内容
            document.getElementById(targetSeason).style.display = 'block';
            
            // 更新活动标签样式
            seasonTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
            
            // 平滑滚动到季节内容
            document.getElementById(targetSeason).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// 图片懒加载
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    }
}

// 活动卡片动画
function initActivityAnimations() {
    const activityItems = document.querySelectorAll('.activity-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    activityItems.forEach(item => {
        observer.observe(item);
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 季节画廊图片模态框
function openGalleryModal(imageSrc, imageAlt) {
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    
    modalImage.src = imageSrc;
    modalCaption.textContent = imageAlt;
    modal.classList.remove('hidden');
    
    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.add('hidden');
}

// 关闭模态框的按键事件
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeGalleryModal();
    }
});    
 // 菜单脚本
        document.getElementById('menuBtn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('translate-y-0');
            mobileMenu.classList.toggle('-translate-y-full');
            mobileMenu.classList.toggle('opacity-100');
            mobileMenu.classList.toggle('opacity-0');
            mobileMenu.classList.toggle('visible');
            mobileMenu.classList.toggle('invisible');
        });

        // 滚动触发动画
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // 观察所有需要动画的元素
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // 导航栏滚动效果
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 100) {
                nav.classList.add('bg-white/95');
            } else {
                nav.classList.remove('bg-white/95');
            }
        });

        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // 移动端子菜单功能
        const mobileSeasonMenu = document.getElementById('mobileSeasonMenu');
        const mobileSeasonSubmenu = document.getElementById('mobileSeasonSubmenu');
        const mobileActivityMenu = document.getElementById('mobileActivityMenu');
        const mobileActivitySubmenu = document.getElementById('mobileActivitySubmenu');

        if (mobileSeasonMenu && mobileSeasonSubmenu) {
            mobileSeasonMenu.addEventListener('click', function() {
                mobileSeasonSubmenu.classList.toggle('hidden');
                mobileSeasonMenu.querySelector('i').classList.toggle('rotate-180');
            });
        }

        if (mobileActivityMenu && mobileActivitySubmenu) {
            mobileActivityMenu.addEventListener('click', function() {
                mobileActivitySubmenu.classList.toggle('hidden');
                mobileActivityMenu.querySelector('i').classList.toggle('rotate-180');
            });
        }

        // 添加加载动画
        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
        });