        // Initialize AOS
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });

        // Smooth scrolling for anchor links
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

        // Counter animation for statistics
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = parseInt(counter.textContent);
                const increment = target / 100;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
                    
                    if (current >= target) {
                        counter.textContent = target + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
                        clearInterval(timer);
                    }
                }, 20);
            });
        }

        // Intersection Observer for counter animation
        const statsSection = document.querySelector('.stats-section');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        });

        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Add loading animation to service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.main-header');
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(82, 196, 26, 0.15)';
            } else {
                navbar.style.boxShadow = '0 4px 20px rgba(82, 196, 26, 0.1)';
            }
        });

        // Preloader (if needed)
        window.addEventListener('load', function() {
            const preloader = document.querySelector('.se-pre-con');
            if (preloader) {
                preloader.style.display = 'none';
            }
        });

        // Add hover effects for service cards
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-8px) scale(1)';
            });
        });

        // WhatsApp floating button (optional)
        function createWhatsAppButton() {
            const whatsappBtn = document.createElement('a');
            whatsappBtn.href = 'https://wa.me/919914652346';
            whatsappBtn.target = '_blank';
            whatsappBtn.className = 'whatsapp-float';
            whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
            
            whatsappBtn.style.cssText = `
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 30px;
                right: 30px;
                background-color: #25D366;
                color: white;
                border-radius: 50px;
                text-align: center;
                font-size: 30px;
                box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            `;
            
            whatsappBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            whatsappBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            document.body.appendChild(whatsappBtn);
        }

        // Initialize WhatsApp button
        createWhatsAppButton();