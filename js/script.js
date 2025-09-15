document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling cho các liên kết điều hướng
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Trừ đi chiều cao navbar để không bị che
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hiển thị/ẩn form liên hệ
    const showContactFormBtn = document.getElementById('show-contact-form-btn');
    const contactForm = document.getElementById('contact-form');

    if (showContactFormBtn && contactForm) {
        showContactFormBtn.addEventListener('click', function() {
            contactForm.classList.toggle('hidden');
            if (!contactForm.classList.contains('hidden')) {
                showContactFormBtn.textContent = 'Ẩn form liên hệ';
            } else {
                showContactFormBtn.textContent = 'Gửi tin nhắn cho tôi';
            }
        });
    }

    // Hiệu ứng Fade-in khi scroll (sử dụng Intersection Observer)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Thêm class ban đầu để chuẩn bị hiệu ứng
        observer.observe(section);
    });

    // Thêm CSS cho hiệu ứng fade-in (cần thêm vào style.css)
    // .fade-in-section {
    //     opacity: 0;
    //     transform: translateY(20px);
    //     transition: opacity 1s ease-out, transform 1s ease-out;
    // }
    // .fade-in-section.fade-in-visible {
    //     opacity: 1;
    //     transform: translateY(0);
    // }
    // Lưu ý: Đã tích hợp các animation vào style.css ở trên,
    // nên không cần thêm đoạn này vào JS nữa.
});