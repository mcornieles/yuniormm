document.addEventListener('DOMContentLoaded', () => {
    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');

    // Elementos de la página que cambiarán de idioma
    const artistName = document.getElementById('artist-name');
    const contactMessage = document.getElementById('contact-message'); // NEW: Get the contact message element

    // Contenido en diferentes idiomas
    const content = {
        es: {
            artistName: 'YUNIOR MARTINEZ',
            contactMessage: 'Para contratarme como musico o maestro enviame un email o un mensaje por whatsapp, Gracias.' // NEW: Spanish message
        },
        en: {
            artistName: 'YUNIOR MARTINEZ',
            contactMessage: 'To hire me as a musician or teacher, send me an email or a message via WhatsApp, Thanks.' // NEW: English message
        }
    };

    // Función para actualizar el contenido de la página
    function updateContent(language) {
        artistName.textContent = content[language].artistName;
        contactMessage.textContent = content[language].contactMessage; // NEW: Update contact message text
        document.documentElement.lang = language;
    }

    // Event Listeners para los botones de idioma
    langEsBtn.addEventListener('click', () => {
        updateContent('es');
    });

    langEnBtn.addEventListener('click', () => {
        updateContent('en');
    });

    // Cargar el idioma por defecto al cargar la página (ej. español)
    updateContent('es');

    // REMOVED: Lógica para los botones de contratación (hireMusicianBtn, hireTeacherBtn)
});
