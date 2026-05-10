// ملف البرمجة التفاعلية لموقع Loving Homes

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. التحقق من صحة نموذج الاتصال (Form Validation)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (name.length < 3) {
                alert('يرجى إدخال اسم صحيح (أكثر من 3 حروف)');
                e.preventDefault(); // منع الإرسال
                return;
            }
            
            alert('شكراً لتواصلك مع Loving Homes! سنرد عليك قريباً بخصوص استفسارك.');
        });
    }

    // 2. ميزة إمكانية الوصول: تكبير الخط (Accessibility Feature) 
    // هذه الميزة تساعد كبار السن وذوي الإعاقة البصرية
    const mainText = document.querySelector('body');
    const increaseFontBtn = document.createElement('button');
    increaseFontBtn.innerText = "تكبير الخط لأغراض الوصولية";
    increaseFontBtn.className = "accessibility-btn";
    increaseFontBtn.style.position = "fixed";
    increaseFontBtn.style.bottom = "10px";
    increaseFontBtn.style.left = "10px";
    
    document.body.appendChild(increaseFontBtn);

    increaseFontBtn.addEventListener('click', () => {
        const currentSize = window.getComputedStyle(mainText).fontSize;
        const newSize = parseFloat(currentSize) + 2;
        mainText.style.fontSize = newSize + 'px';
    });

    // 3. تأثير ظهور المحتوى عند التمرير (Interactive UX)
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
