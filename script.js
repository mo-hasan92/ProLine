// ========================================
// HAMBURGER MENU SCRIPT
// ProLine MontaWerk & Transport
// ========================================

// Warte bis DOM geladen ist
document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    // Prüfe ob Elemente existieren
    if (hamburger && navMenu) {
        
        // Toggle Menu beim Klick auf Hamburger
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Schließe Menu beim Klick auf einen Link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Schließe Menu beim Klick außerhalb
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
});