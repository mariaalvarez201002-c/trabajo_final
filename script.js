
// =========================================
// COOFFE HOUSE - FUNCIONES JAVASCRIPT
// =========================================

// 1. MENÚ RESPONSIVE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
});


// Cerrar el menú al seleccionar una sección

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// 2. FILTRAR PRODUCTOS DEL MENÚ

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Activar botón seleccionado

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Obtener categoría seleccionada

        const category = button.dataset.filter;

        // Mostrar productos correspondientes

        productCards.forEach(card => {

            if (
                category === "todos" ||
                card.dataset.category === category
            ) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    });

});


// 3. CONTADOR DE PEDIDOS

let cartCount = 0;

const addButtons = document.querySelectorAll(".add-btn");
const cartMessage = document.getElementById("cartMessage");
const cartText = document.getElementById("cartText");
const cartCountElement = document.getElementById("cartCount");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Aumentar contador

        cartCount++;

        // Actualizar cantidad

        cartCountElement.textContent = cartCount;

        // Mostrar producto agregado

        const productName = button.dataset.name;

        cartText.textContent = `${productName} agregado correctamente`;

        cartMessage.classList.add("show");

        // Efecto visual

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = "+";
        }, 700);

    });

});


// 4. AÑO AUTOMÁTICO EN EL FOOTER

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// 5. ANIMACIÓN SUAVE DE ENTRADA

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".about-content, .product-card, .review-card, .special-content"
).forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});

// Estilos de entrada al aparecer

const animationStyle = document.createElement("style");

animationStyle.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(animationStyle);

