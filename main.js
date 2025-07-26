// Simple JS for demo interactivity

document.addEventListener('DOMContentLoaded', function () {
    const uploadBtn = document.getElementById('uploadBtn');
    const payNowBtn = document.getElementById('payNowBtn');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    if (uploadBtn) {
        uploadBtn.addEventListener('click', function () {
            alert('Upload design functionality coming soon!');
        });
    }
    if (payNowBtn) {
        payNowBtn.addEventListener('click', function () {
            alert('Payment functionality coming soon!');
        });
    }
    // Mobile sidebar toggle
    if (mobileMenuBtn && mobileSidebar) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileSidebar.classList.remove('hidden');
        });
    }
    if (closeMobileMenu && mobileSidebar) {
        closeMobileMenu.addEventListener('click', function () {
            mobileSidebar.classList.add('hidden');
        });
    }
    // Close sidebar if clicking outside the sidebar (on overlay)
    if (mobileSidebar) {
        mobileSidebar.addEventListener('click', function (e) {
            if (e.target === mobileSidebar) {
                mobileSidebar.classList.add('hidden');
            }
        });
    }
});
