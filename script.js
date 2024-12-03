// التحكم في القائمة عند التمرير
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
    } else {
        navbar.style.backgroundColor = '#2c3e50';
    }
});

// التحقق من صحة النموذج وإرساله
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // التحقق من الحقول
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const service = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;

    if (!name || !email || !service || !message) {
        alert('الرجاء ملء جميع الحقول المطلوبة');
        return;
    }

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('الرجاء إدخال بريد إلكتروني صحيح');
        return;
    }

    // هنا يمكن إضافة كود لإرسال البيانات إلى الخادم
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    this.reset();
});

// إضافة تأثيرات التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// تحريك بطاقات الخدمات عند التمرير إليها
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// تحريك الصور في القسم الرئيسي
function heroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // تغيير الصورة كل 5 ثواني
    setInterval(nextSlide, 2000);
}

// تشغيل تحريك الصور عند تحميل الصفحة
window.addEventListener('load', heroSlider);
