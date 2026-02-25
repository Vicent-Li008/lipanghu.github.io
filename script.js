const title = document.querySelector('h1');
title.addEventListener('click', function() {
    // 点击一次，切换一种颜色，循环切换（蓝色、橙色、紫色、绿色）
    const colors = ['#4169e1', '#ff6347', '#9370db', '#32cd32'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = randomColor;
});

// 点击导航，跳转到对应板块（平滑滚动，体验更好）
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
              