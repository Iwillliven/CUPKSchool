  // 配置音乐文件（请替换为实际音频文件路径）
        const audio = new Audio('music/autumn.mp3');
        const playBtn = document.getElementById('playBtn');
        const volumeSlider = document.getElementById('volumeSlider');
        const playerImg = document.getElementById('playerImg');
        const volumeBtn = document.getElementById('volumeBtn');

        let isPlaying = false;
        let isMuted = false;

        // 播放/暂停
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                playBtn.className = 'fa fa-play';
                playerImg.style.animation = 'none';
            } else {
                audio.play();
                playBtn.className = 'fa fa-pause';
                playerImg.style.animation = 'spin 4s linear infinite';
            }
            isPlaying = !isPlaying;
        });

        // 音量调节
        volumeSlider.addEventListener('change', () => {
            audio.volume = volumeSlider.value / 100;
            if (audio.volume === 0) {
                volumeBtn.className = 'fa fa-volume-off';
                isMuted = true;
            } else {
                volumeBtn.className = 'fa fa-volume-up';
                isMuted = false;
            }
        });

        // 静音切换
        volumeBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            audio.muted = isMuted;
            volumeBtn.className = isMuted ? 'fa fa-volume-off' : 'fa fa-volume-up';
            if (isMuted) {
                volumeSlider.value = 0;
            } else {
                volumeSlider.value = audio.volume * 100;
            }
        });

        // 初始化设置
        document.addEventListener('DOMContentLoaded', () => {
            audio.loop = true; // 循环播放
            audio.volume = 0.5; // 初始音量50%
            volumeSlider.value = 50;
        });