document.addEventListener('DOMContentLoaded', () => {
    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');

    // Elementos de la página que cambiarán de idioma
    const artistName = document.getElementById('artist-name');
    // Removed: const bioTitle = document.getElementById('bio-title');
    // Removed: const bioContent = document.getElementById('bio-content');
    const hireMusicianBtn = document.getElementById('hire-musician');
    const hireTeacherBtn = document.getElementById('hire-teacher');

    // Contenido en diferentes idiomas
    const content = {
        es: {
            artistName: 'YUNIOR MARTINEZ', // Spanish version of the name
            // Removed: bioTitle: 'Biografía',
            // Removed: bioContent: `Aquí irá la biografía de Yunior Martinez...`,
            hireMusician: 'Contratar como Músico',
            hireTeacher: 'Contratar como Profesor'
        },
        en: {
            artistName: 'YUNIOR MARTINEZ', // English version of the name (can be different if desired)
            // Removed: bioTitle: 'Biography',
            // Removed: bioContent: `Here will be Yunior Martinez's biography...`,
            hireMusician: 'Hire as Musician',
            hireTeacher: 'Hire as Teacher'
        }
    };

    // Función para actualizar el contenido de la página
    function updateContent(language) {
        artistName.textContent = content[language].artistName; // Update H1 text
        // Removed: bioTitle.textContent = content[language].bioTitle;
        // Removed: bioContent.textContent = content[language].bioContent;
        hireMusicianBtn.textContent = content[language].hireMusician;
        hireTeacherBtn.textContent = content[language].hireTeacher;
        document.documentElement.lang = language; // Actualiza el atributo lang de la etiqueta html
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

    // Opcional: Lógica para los botones de contratación (ej. abrir un formulario, una nueva página, etc.)
    hireMusicianBtn.addEventListener('click', () => {
        alert('Botón "Contratar como Músico" clickeado. Aquí puedes redirigir a un formulario de contacto o página de servicios musicales.');
        // window.location.href = 'hire-musician.html'; // Ejemplo de redirección
    });

    hireTeacherBtn.addEventListener('click', () => {
        alert('Botón "Contratar como Profesor" clickeado. Aquí puedes redirigir a una página de información de clases o formulario de inscripción.');
        // window.location.href = 'hire-teacher.html'; // Ejemplo de redirección
    });
});
