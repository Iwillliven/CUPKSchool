 // 为按钮添加点击事件
        document.getElementById('scrollBtn').addEventListener('click', function() {
            // 获取目标区域（这里假设是main元素）
            const targetSection = document.querySelector('main');
            
            // 平滑滚动到目标区域
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });

        // 移动端菜单展开/收起
        document.getElementById('menuBtn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('invisible')) {
                mobileMenu.classList.remove('invisible', 'opacity-0', '-translate-y-full');
                mobileMenu.classList.add('opacity-100', 'translate-y-0');
            } else {
                mobileMenu.classList.add('opacity-0', '-translate-y-full');
                mobileMenu.classList.remove('opacity-100', 'translate-y-0');
                setTimeout(() => {
                    mobileMenu.classList.add('invisible');
                }, 300);
            }
        });

        // 移动端子菜单展开/收起
        document.getElementById('mobileSeasonMenu').querySelector('button').addEventListener('click', function() {
            const submenu = document.getElementById('mobileSeasonSubmenu');
            submenu.classList.toggle('hidden');
        });

        // 导航栏滚动效果
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'shadow-md', 'bg-white/80');
                nav.classList.remove('py-3', 'bg-white/60');
            } else {
                nav.classList.add('py-3', 'bg-white/60');
                nav.classList.remove('py-2', 'shadow-md', 'bg-white/80');
            }
        });
