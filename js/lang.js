const langBtn = document.getElementById('langBtn');
const bioBox = document.getElementById('bioBox');
const hireMusician = document.getElementById('hireMusician');
const hireTeacher = document.getElementById('hireTeacher');
const headerTitle = document.querySelector('header h1');

// Traducciones
const es = {
    header: "Yunior Martinez Music",
    bio: "Yunior Martínez es un músico apasionado con años de experiencia en escenarios nacionales e internacionales. Pianista profesional, compositor y maestro, ha dedicado su vida a inspirar a otros a través de la música. Ofrece clases de piano online y presentaciones personalizadas para eventos especiales.",
    hireMusician: "Contratar como Músico",
    hireTeacher: "Contratar como Maestro",
    langBtn: "English"
};
const en = {
    header: "Yunior Martinez Music",
    bio: "Yunior Martinez is a passionate musician with years of experience on national and international stages. A professional pianist, composer, and teacher, he has dedicated his life to inspiring others through music. He offers online piano lessons and personalized performances for special events.",
    hireMusician: "Hire as Musician",
    hireTeacher: "Hire as Teacher",
    langBtn: "Español"
};

let currentLang = 'es';

langBtn.addEventListener('click', () => {
    if(currentLang === 'es'){
        headerTitle.textContent = en.header;
        bioBox.textContent = en.bio;
        hireMusician.textContent = en.hireMusician;
        hireTeacher.textContent = en.hireTeacher;
        langBtn.textContent = en.langBtn;
        currentLang = 'en';
    } else {
        headerTitle.textContent = es.header;
        bioBox.textContent = es.bio;
        hireMusician.textContent = es.hireMusician;
        hireTeacher.textContent = es.hireTeacher;
        langBtn.textContent = es.langBtn;
        currentLang = 'es';
    }
});

