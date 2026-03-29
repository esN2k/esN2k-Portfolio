const SITE_LANG_STORAGE_KEY = 'site-lang';
const SUPPORTED_LANGS = ['en', 'tr'];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const translations = {
    en: {
        meta: {
            title: 'Doğukan Balaman — Software Engineer & AI Specialist',
            description:
                'Portfolio of Doğukan Balaman — AI-focused Software Engineer, bilingual EN/TR specialist building intelligent systems from Istanbul.',
            ogDescription:
                'AI-focused Software Engineer with C2 English mastery. Building RAG systems, cross-platform apps, and data pipelines.',
            ogLocale: 'en_US',
            imageAlt: 'Portrait of Doğukan Balaman',
        },
        skip: {
            link: 'Skip to content',
        },
        nav: {
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            education: 'Education',
            contact: 'Contact',
            languageAria: 'Language switcher',
            toggleOpen: 'Open navigation menu',
            toggleClose: 'Close navigation menu',
            langButtons: {
                en: 'Switch to English',
                tr: 'Türkçe versiyona geç',
            },
        },
        sections: {
            about: 'About Me',
            skills: 'Skills & Tools',
            experience: 'Experience',
            projects: 'Featured Projects',
            education: 'Education & Certifications',
            contact: 'Get in Touch',
        },
        hero: {
            badge: 'Available for Work',
            greeting: "Hi, I'm",
            name: 'Doğukan Balaman',
            rolePrefix: 'I build',
            roleSummary:
                'AI-powered systems, cross-platform apps, RAG pipelines, data dashboards, and bilingual solutions.',
            roles: [
                'AI-Powered Systems',
                'Cross-Platform Apps',
                'RAG Pipelines',
                'Data Dashboards',
                'Bilingual Solutions',
                'Flutter Mobile Apps',
            ],
            description:
                'AI-focused Software Engineer with <strong>C2 English mastery</strong>, crafting intelligent systems from Istanbul for the world.',
            ctaPrimary: 'Explore My Work',
            ctaSecondary: 'Get in Touch',
            stats: {
                projects: {
                    label: 'Projects Built',
                    suffix: '+',
                },
                experience: {
                    label: 'Work Experiences',
                    suffix: '',
                },
                score: {
                    label: 'YÖKDİL Score',
                    suffix: '/100',
                },
            },
        },
        about: {
            imageAlt: 'Portrait of Doğukan Balaman',
            p1:
                "I'm a <strong>Computer Engineering</strong> senior at Selçuk University with a passion for building systems that think. My journey spans from <strong>AI-powered RAG chatbots</strong> to <strong>cross-platform mobile apps</strong> and <strong>enterprise analytics portals</strong>.",
            p2:
                "What sets me apart? I'm <strong>natively bilingual</strong> with verified C2 English mastery (YÖKDİL 85/100, EF SET C2), plus immersive study-abroad experience in the <span class=\"flag\">🇬🇧</span> UK and <span class=\"flag\">🇨🇦</span> Canada.",
            p3:
                "Currently, I'm building my thesis project, a <strong>multilingual RAG chatbot</strong> using LangChain, FAISS, and Ollama, while coordinating operations across 12 branches in my current role.",
            languages: {
                turkish: {
                    name: 'Turkish',
                    level: 'Native',
                },
                english: {
                    name: 'English',
                    level: 'C2 Mastery',
                },
            },
            details: {
                location: 'Location',
                locationValue: 'Istanbul, Turkey',
                languagesLabel: 'Languages',
            },
        },
        skills: {
            categories: {
                brain: 'The Brain — AI & ML',
                hands: 'The Hands — Dev/Ops',
                voice: 'The Voice — C2 English',
            },
        },
        experience: {
            bi: {
                role: 'BI & Data Engineering Intern',
                company: 'Bi-Art (Remote)',
                date: 'Oct 2025 — Jan 2026',
                bullets: [
                    'Conducted daily SQL and Power BI analysis, supported <strong>Data Warehouse workflows</strong>, and generated weekly metrics reports',
                    'Developed and presented detailed <strong>technical documentation</strong> and stakeholder-facing analytical deliverables',
                ],
            },
            logistics: {
                role: 'Logistics Coordinator',
                company: 'Ser Yöresel Dry Foods',
                date: 'Jul 2024 — Present',
                bullets: [
                    'Coordinating inventory, procurement, and warehouse operations across <strong>12 branches</strong>',
                    'Built internal inventory platform with <strong>55% faster fulfillment</strong> and <strong>60% fewer shortages</strong>',
                    'Applied data analytics for KPI monitoring, driving a <strong>35% efficiency boost</strong> and <strong>30% cost reduction</strong>',
                ],
            },
            export: {
                role: 'Export Operations Representative',
                company: 'Kardelen Nuts',
                date: 'Apr 2024 — Jul 2024',
                bullets: [
                    'Built the export pipeline from scratch and expanded international B2B relationships',
                    'Executed outreach campaigns contributing to a <strong>20% total revenue increase</strong>',
                ],
            },
            software: {
                role: 'Software Developer & Business Development',
                company: 'Essen Trade',
                date: 'Jan 2024 — Apr 2024',
                bullets: [
                    'Shipped <strong>EssenYemek</strong>, a cross-platform Flutter food delivery app for iOS, Android, and Web',
                    'Created the corporate website from scratch using JavaScript, HTML, and CSS',
                    'Delivered bilingual EN/TR technical translation for international client operations',
                ],
            },
        },
        projects: {
            selcuk: {
                title: 'Selçuk AI Assistant',
                badge: 'Thesis Project',
                description:
                    'End-to-end multilingual RAG pipeline supporting complex EN/TR contextual queries. Flutter UI + FastAPI backend powered by LangChain, FAISS, and Ollama.',
                linkLabel: 'Open Selçuk AI Assistant on GitHub',
            },
            perfectframe: {
                title: 'PerfectFrameAI',
                description:
                    'Scalable AI content enhancement tool with facial restoration using CodeFormer and cloud inference via Replicate API. Streamlit-powered interactive interface.',
                linkLabel: 'Open PerfectFrameAI on GitHub',
            },
            essenyemek: {
                title: 'EssenYemek',
                description:
                    'Cross-platform food delivery application for a live business, shipped to iOS, Android, and Web. Built with Flutter/Dart with real-time order tracking.',
                linkLabel: 'Open EssenYemek on GitHub',
            },
            biportal: {
                title: 'BiartBiPortal',
                description:
                    'Enterprise business intelligence portal with role-based access control, operational metrics dashboards, and analytical reporting.',
                linkLabel: 'Open BiartBiPortal on GitHub',
            },
            vbds: {
                title: 'VB_DS',
                description:
                    'End-to-end data transformation pipelines for missing data imputation and exploratory data analysis using Pandas, NumPy, and Jupyter Notebooks.',
                linkLabel: 'Open VB_DS on GitHub',
            },
            kavurma: {
                title: 'KAVURMA Corporate Website',
                description:
                    'SEO-optimized corporate B2B website for an industrial machinery company, designed to boost export visibility and international client acquisition.',
                linkLabel: 'Open KAVURMA Corporate Website on GitHub',
            },
        },
        education: {
            degree: {
                title: 'B.S. Computer Engineering',
                school: 'Selçuk University — Konya, Turkey',
                date: 'Expected Graduation: June 2026',
                description: 'GPA: 3.0/4.0 — Thesis: Selçuk AI Assistant (Multilingual RAG Chatbot)',
            },
            canada: {
                title: 'St. Giles Summer Camp',
                school: "St. Andrew's College — Ontario, Canada",
                date: 'Summer 2018',
                description: 'Certified C2 mastery level language education and bilingual immersion',
            },
            uk: {
                title: 'St. Giles Summer Camp',
                school: 'University of Nottingham — Nottingham, UK',
                date: 'Summer 2017',
                description: 'Certified C1 advanced level language education — GPA: 4.0',
            },
            certTitle: 'Certifications',
            certificates: {
                yokdil: {
                    name: 'YÖKDİL Academic English',
                    detail: 'Score 85/100 — C2 Equivalent',
                },
                efset: {
                    name: 'EF SET English Certificate',
                    detail: 'Proficient Level',
                },
            },
        },
        contact: {
            lead:
                "I'm currently looking for <strong>remote opportunities</strong> in software engineering, AI, and bilingual roles. Let's build something great together.",
            labels: {
                email: 'Email',
                linkedin: 'LinkedIn',
                github: 'GitHub',
                phone: 'Phone',
            },
            cta: 'Say Hello →',
        },
        footer: {
            credit: 'Designed &amp; Built by <strong>Doğukan Balaman</strong> — 2026',
        },
    },
    tr: {
        meta: {
            title: 'Doğukan Balaman — Yazılım Mühendisi ve Yapay Zeka Uzmanı',
            description:
                'Doğukan Balaman portfolyosu — Istanbul merkezli, EN/TR iki dilli, akıllı sistemler geliştiren yapay zeka odaklı yazılım mühendisi.',
            ogDescription:
                'C2 düzeyinde İngilizce yetkinliğine sahip, RAG sistemleri, çok platformlu uygulamalar ve veri akışları geliştiren yapay zeka odaklı yazılım mühendisi.',
            ogLocale: 'tr_TR',
            imageAlt: 'Doğukan Balaman portresi',
        },
        skip: {
            link: 'İçeriğe geç',
        },
        nav: {
            about: 'Hakkımda',
            skills: 'Yetenekler',
            experience: 'Deneyim',
            projects: 'Projeler',
            education: 'Eğitim',
            contact: 'İletişim',
            languageAria: 'Dil seçici',
            toggleOpen: 'Gezinme menüsünü aç',
            toggleClose: 'Gezinme menüsünü kapat',
            langButtons: {
                en: 'Switch to English',
                tr: 'Türkçeye geç',
            },
        },
        sections: {
            about: 'Hakkımda',
            skills: 'Yetenekler ve Araçlar',
            experience: 'Deneyim',
            projects: 'Öne Çıkan Projeler',
            education: 'Eğitim ve Sertifikalar',
            contact: 'İletişim',
        },
        hero: {
            badge: 'Yeni işlere açık',
            greeting: 'Merhaba, ben',
            name: 'Doğukan Balaman',
            rolePrefix: 'Şunları geliştiriyorum',
            roleSummary:
                'Yapay zeka destekli sistemler, çok platformlu uygulamalar, RAG pipeline’ları, veri panelleri ve iki dilli çözümler.',
            roles: [
                'Yapay zeka destekli sistemler',
                'Çok platformlu uygulamalar',
                'RAG pipeline’ları',
                'Veri panelleri',
                'İki dilli çözümler',
                'Flutter mobil uygulamaları',
            ],
            description:
                'İstanbul merkezli, <strong>C2 düzeyinde İngilizce yetkinliğine</strong> sahip yapay zeka odaklı bir yazılım mühendisi olarak akıllı sistemler geliştiriyorum.',
            ctaPrimary: 'Projelerimi Keşfet',
            ctaSecondary: 'İletişime Geç',
            stats: {
                projects: {
                    label: 'Tamamlanan Proje',
                    suffix: '+',
                },
                experience: {
                    label: 'İş Deneyimi',
                    suffix: '',
                },
                score: {
                    label: 'YÖKDİL Puanı',
                    suffix: '/100',
                },
            },
        },
        about: {
            imageAlt: 'Doğukan Balaman portresi',
            p1:
                '<strong>Bilgisayar Mühendisliği</strong> son sınıf öğrencisi olarak düşünebilen sistemler kurmaya odaklanıyorum. Yolculuğum <strong>RAG tabanlı sohbet botlarından</strong> <strong>çok platformlu mobil uygulamalara</strong> ve <strong>kurumsal analitik portallara</strong> uzanıyor.',
            p2:
                'Beni farklı kılan nokta, doğrulanmış C2 İngilizce yetkinliğiyle <strong>iki dilli</strong> çalışabilmem. YÖKDİL 85/100 ve EF SET C2 sonuçlarının yanında <span class="flag">🇬🇧</span> Birleşik Krallık ve <span class="flag">🇨🇦</span> Kanada deneyimlerim var.',
            p3:
                'Şu anda LangChain, FAISS ve Ollama kullanan <strong>çok dilli bir RAG chatbot</strong> tez projesi geliştirirken, mevcut işimde 12 şubenin operasyonunu koordine ediyorum.',
            languages: {
                turkish: {
                    name: 'Türkçe',
                    level: 'Ana dil',
                },
                english: {
                    name: 'İngilizce',
                    level: 'C2 Seviye',
                },
            },
            details: {
                location: 'Konum',
                locationValue: 'İstanbul, Türkiye',
                languagesLabel: 'Diller',
            },
        },
        skills: {
            categories: {
                brain: 'Beyin — Yapay Zeka',
                hands: 'Eller — Geliştirme',
                voice: 'Ses — C2 İngilizce',
            },
        },
        experience: {
            bi: {
                role: 'BI ve Veri Mühendisliği Stajyeri',
                company: 'Bi-Art (Uzaktan)',
                date: 'Eki 2025 — Oca 2026',
                bullets: [
                    'Günlük SQL ve Power BI analizleri yaparak <strong>Veri Ambarı iş akışlarını</strong> destekledim ve haftalık metrik raporları oluşturdum',
                    'Detaylı <strong>teknik dokümantasyon</strong> ve paydaşlara yönelik analitik çıktılar hazırladım',
                ],
            },
            logistics: {
                role: 'Lojistik Koordinatörü',
                company: 'Ser Yöresel Dry Foods',
                date: 'Tem 2024 — Günümüz',
                bullets: [
                    '<strong>12 şube</strong> genelinde stok, satın alma ve depo operasyonlarını koordine ediyorum',
                    'İç envanter platformu geliştirerek <strong>%55 daha hızlı sevkiyat</strong> ve <strong>%60 daha az stok sorunu</strong> sağladım',
                    'KPI takibi için veri analitiği uygulayarak <strong>%35 verimlilik artışı</strong> ve <strong>%30 maliyet düşüşü</strong> elde ettim',
                ],
            },
            export: {
                role: 'İhracat Operasyon Temsilcisi',
                company: 'Kardelen Nuts',
                date: 'Nis 2024 — Tem 2024',
                bullets: [
                    'İhracat sürecini sıfırdan kurup uluslararası B2B ilişkileri genişlettim',
                    'Yürüttüğüm outreach kampanyaları toplam gelirde <strong>%20 artışa</strong> katkı sağladı',
                ],
            },
            software: {
                role: 'Yazılım Geliştirici ve İş Geliştirme',
                company: 'Essen Trade',
                date: 'Oca 2024 — Nis 2024',
                bullets: [
                    'iOS, Android ve Web için <strong>EssenYemek</strong> adlı çok platformlu Flutter uygulamasını yayına aldım',
                    'Kurumsal web sitesini JavaScript, HTML ve CSS ile sıfırdan geliştirdim',
                    'Uluslararası müşteri operasyonlarında EN/TR teknik çeviri desteği sağladım',
                ],
            },
        },
        projects: {
            selcuk: {
                title: 'Selçuk AI Assistant',
                badge: 'Tez Projesi',
                description:
                    'Karmaşık EN/TR bağlamsal sorguları destekleyen uçtan uca çok dilli RAG pipeline’ı. Flutter arayüzü ve LangChain, FAISS, Ollama destekli FastAPI backend içeriyor.',
                linkLabel: 'Selçuk AI Assistant GitHub deposunu aç',
            },
            perfectframe: {
                title: 'PerfectFrameAI',
                description:
                    'CodeFormer ile yüz iyileştirme yapan ve Replicate API üzerinden bulut çıkarımı kullanan ölçeklenebilir bir AI içerik geliştirme aracı. Arayüzü Streamlit ile geliştirildi.',
                linkLabel: 'PerfectFrameAI GitHub deposunu aç',
            },
            essenyemek: {
                title: 'EssenYemek',
                description:
                    'Gerçek bir işletme için iOS, Android ve Web üzerinde çalışan çok platformlu yemek sipariş uygulaması. Flutter/Dart ile geliştirildi ve gerçek zamanlı sipariş takibi sunuyor.',
                linkLabel: 'EssenYemek GitHub deposunu aç',
            },
            biportal: {
                title: 'BiartBiPortal',
                description:
                    'Rol tabanlı erişim kontrolü, operasyonel metrik panelleri ve analitik raporlama içeren kurumsal iş zekası portalı.',
                linkLabel: 'BiartBiPortal GitHub deposunu aç',
            },
            vbds: {
                title: 'VB_DS',
                description:
                    'Eksik veri tamamlama ve keşifsel veri analizi için Pandas, NumPy ve Jupyter tabanlı uçtan uca veri dönüşüm pipeline’ları.',
                linkLabel: 'VB_DS GitHub deposunu aç',
            },
            kavurma: {
                title: 'KAVURMA Kurumsal Website',
                description:
                    'İhracat görünürlüğünü ve uluslararası müşteri kazanımını artırmak için optimize edilmiş, SEO odaklı kurumsal B2B web sitesi.',
                linkLabel: 'KAVURMA GitHub deposunu aç',
            },
        },
        education: {
            degree: {
                title: 'Bilgisayar Mühendisliği Lisans',
                school: 'Selçuk Üniversitesi — Konya, Türkiye',
                date: 'Beklenen Mezuniyet: Haziran 2026',
                description: 'GNO: 3.0/4.0 — Tez: Selçuk AI Assistant (Çok Dilli RAG Chatbot)',
            },
            canada: {
                title: 'St. Giles Yaz Kampı',
                school: "St. Andrew's College — Ontario, Kanada",
                date: 'Yaz 2018',
                description: 'C2 düzeyi dil eğitimi ve iki dilli immersion sertifikası',
            },
            uk: {
                title: 'St. Giles Yaz Kampı',
                school: 'University of Nottingham — Nottingham, Birleşik Krallık',
                date: 'Yaz 2017',
                description: 'C1 ileri düzey dil eğitimi sertifikası — GPA: 4.0',
            },
            certTitle: 'Sertifikalar',
            certificates: {
                yokdil: {
                    name: 'YÖKDİL Akademik İngilizce',
                    detail: '85/100 — C2 Düzeyi',
                },
                efset: {
                    name: 'EF SET İngilizce Sertifikası',
                    detail: 'İleri Seviye',
                },
            },
        },
        contact: {
            lead:
                '<strong>Uzaktan çalışma</strong> odaklı yazılım, yapay zeka ve iki dilli rollere açığım. Birlikte güçlü bir şey inşa edelim.',
            labels: {
                email: 'E-posta',
                linkedin: 'LinkedIn',
                github: 'GitHub',
                phone: 'Telefon',
            },
            cta: 'Merhaba Deyin →',
        },
        footer: {
            credit: '<strong>Doğukan Balaman</strong> tarafından tasarlandı ve geliştirildi — 2026',
        },
    },
};

const state = {
    lang: getInitialLang(),
    menuOpen: false,
    typingTimeoutId: null,
    typingToken: 0,
};

document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initLanguageControls();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initTimelineReveal();
    initStatCounters();
    initParticleNetwork();
    applyLanguage(state.lang, { persist: false });

    if (typeof prefersReducedMotion.addEventListener === 'function') {
        prefersReducedMotion.addEventListener('change', restartTypingEffect);
    }
});

function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    const heroElements = document.querySelectorAll('.hero-enter');

    // Hide loader after animation completes with better timing
    setTimeout(() => {
        if (loader) {
            loader.classList.add('hidden');
            document.body.classList.remove('loading');
        }

        // Trigger hero entrance animations with staggered delay
        setTimeout(() => {
            heroElements.forEach(el => el.classList.add('visible'));
        }, 200);
    }, 2200); // Increased from 1600ms to 2200ms for smoother experience
}

function getInitialLang() {
    return SUPPORTED_LANGS.includes(window.__INITIAL_SITE_LANG__) ? window.__INITIAL_SITE_LANG__ : 'en';
}

function getTranslation(lang, path) {
    return path.split('.').reduce((current, part) => current?.[part], translations[lang]);
}

function applyLanguage(lang, options = { persist: true }) {
    if (!SUPPORTED_LANGS.includes(lang)) return;

    state.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dataset.siteLang = lang;

    applyTextTranslations();
    applyAttributeTranslations();
    applyMetaTranslations();
    updateLanguageButtons();
    updateNavToggleLabel();
    restartTypingEffect();

    if (options.persist) {
        try {
            window.localStorage.setItem(SITE_LANG_STORAGE_KEY, lang);
        } catch {
            // Ignore storage failures.
        }
        updateLanguageQuery(lang);
    }
}

function applyTextTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = getTranslation(state.lang, element.dataset.i18n);
        if (typeof value === 'string') {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        const value = getTranslation(state.lang, element.dataset.i18nHtml);
        if (typeof value === 'string') {
            element.innerHTML = value;
        }
    });
}

function applyAttributeTranslations() {
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const value = getTranslation(state.lang, element.dataset.i18nAriaLabel);
        if (typeof value === 'string') {
            element.setAttribute('aria-label', value);
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
        const value = getTranslation(state.lang, element.dataset.i18nAlt);
        if (typeof value === 'string') {
            element.setAttribute('alt', value);
        }
    });
}

function applyMetaTranslations() {
    const meta = translations[state.lang].meta;
    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.ogDescription);
    setMetaContent('meta[property="og:locale"]', meta.ogLocale);
    setMetaContent('#ogUrlMeta', getLocalizedSiteUrl(state.lang));
    setMetaContent('meta[property="og:image:alt"]', meta.imageAlt);
    setMetaContent('meta[name="twitter:title"]', meta.title);
    setMetaContent('meta[name="twitter:description"]', meta.ogDescription);

    const canonicalLink = document.getElementById('canonicalLink');
    if (canonicalLink) {
        canonicalLink.setAttribute('href', getLocalizedSiteUrl(state.lang));
    }
}

function setMetaContent(selector, value) {
    const element = document.querySelector(selector);
    if (element && typeof value === 'string') {
        element.setAttribute('content', value);
    }
}

function initLanguageControls() {
    document.querySelectorAll('.lang-btn, .lang-switch').forEach((button) => {
        button.addEventListener('click', () => {
            const nextLang = button.dataset.lang;
            if (!SUPPORTED_LANGS.includes(nextLang) || nextLang === state.lang) {
                setMenuState(false);
                return;
            }
            applyLanguage(nextLang);
            setMenuState(false);
        });
    });
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn, .lang-switch').forEach((button) => {
        const isActive = button.dataset.lang === state.lang;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
        button.setAttribute('aria-label', getTranslation(state.lang, `nav.langButtons.${button.dataset.lang}`));
    });
}

function updateLanguageQuery(lang) {
    const url = new URL(window.location.href);
    if (lang === 'en') {
        url.searchParams.delete('lang');
    } else {
        url.searchParams.set('lang', lang);
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

function getLocalizedSiteUrl(lang) {
    return lang === 'tr' ? 'https://esn2k.engineer/?lang=tr' : 'https://esn2k.engineer/';
}

function restartTypingEffect() {
    const roleElement = document.getElementById('heroRole');
    const summaryElement = document.getElementById('heroRoleSummary');
    const roles = translations[state.lang].hero.roles;

    window.clearTimeout(state.typingTimeoutId);
    state.typingToken += 1;

    if (!roleElement || !roles.length) return;

    if (summaryElement) {
        summaryElement.textContent = translations[state.lang].hero.roleSummary;
    }

    roleElement.textContent = roles[0];

    if (prefersReducedMotion.matches) {
        return;
    }

    let roleIndex = 0;
    let charIndex = roles[0].length;
    let isDeleting = true;
    const token = state.typingToken;

    const triggerGlitch = () => {
        roleElement.classList.add('typing-glitch');
        setTimeout(() => roleElement.classList.remove('typing-glitch'), 150);
    };

    const step = () => {
        if (token !== state.typingToken) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex = Math.max(charIndex - 1, 0);
        } else {
            charIndex = Math.min(charIndex + 1, currentRole.length);
        }

        roleElement.textContent = currentRole.slice(0, charIndex);

        let delay = isDeleting ? 45 : 85;

        if (isDeleting && charIndex === 0) {
            roleIndex = (roleIndex + 1) % roles.length;
            isDeleting = false;
            delay = 400;
            triggerGlitch();
        } else if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            delay = 2000;
        }

        state.typingTimeoutId = window.setTimeout(step, delay);
    };

    state.typingTimeoutId = window.setTimeout(step, 2000);
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px',
        },
    );

    const sectionMap = new Map();
    
    elements.forEach((element) => {
        const section = element.closest('section');
        const sectionId = section ? section.id : 'default';
        
        if (!sectionMap.has(sectionId)) {
            sectionMap.set(sectionId, []);
        }
        sectionMap.get(sectionId).push(element);
    });

    sectionMap.forEach((sectionElements) => {
        sectionElements.forEach((element, index) => {
            element.style.transitionDelay = `${index * 100}ms`;
            observer.observe(element);
        });
    });
}

function initTimelineReveal() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (!timelineItems.length) return;

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
        timelineItems.forEach((item) => item.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px',
        },
    );

    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 150}ms`;
        observer.observe(item);
    });
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const updateNavbarState = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    };

    let ticking = false;
    window.addEventListener(
        'scroll',
        () => {
            if (ticking) return;
            window.requestAnimationFrame(() => {
                updateNavbarState();
                ticking = false;
            });
            ticking = true;
        },
        { passive: true },
    );
    updateNavbarState();

    if (!('IntersectionObserver' in window)) {
        return;
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.getAttribute('id'));
                }
            });
        },
        { rootMargin: '-20% 0px -70% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
}

function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu') || document.getElementById('navPanel');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        setMenuState(!state.menuOpen);
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuState(false);
        }
    });

    document.addEventListener('click', (event) => {
        if (!state.menuOpen) return;
        if (!event.target.closest('#navbar')) {
            setMenuState(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            setMenuState(false);
        }
    });

    setMenuState(false);
}

function setMenuState(isOpen) {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu') || document.getElementById('navPanel');
    if (!toggle || !menu) return;

    state.menuOpen = isOpen;
    menu.classList.toggle('open', isOpen);
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
    updateNavToggleLabel();
}

function updateNavToggleLabel() {
    const toggle = document.getElementById('navToggle');
    if (!toggle) return;
    toggle.setAttribute('aria-label', getTranslation(state.lang, state.menuOpen ? 'nav.toggleClose' : 'nav.toggleOpen'));
}

function initStatCounters() {
    const stats = document.querySelectorAll('.stat-number[data-target]');
    if (!stats.length) return;

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
        setStatsToTargets(stats);
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                animateCounter(entry.target, Number.parseInt(entry.target.dataset.target, 10));
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.5 },
    );

    stats.forEach((stat) => observer.observe(stat));
}

function setStatsToTargets(stats) {
    stats.forEach((stat) => {
        stat.textContent = stat.dataset.target;
    });
}

function animateCounter(element, target) {
    const duration = 1500;
    const start = performance.now();

    const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(eased * target);

        if (progress < 1) {
            window.requestAnimationFrame(update);
        }
    };

    window.requestAnimationFrame(update);
}

function initParticleNetwork() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas || prefersReducedMotion.matches) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let isVisible = true;

    const config = {
        particleCount: 60,
        particleSize: { min: 1.5, max: 3 },
        speed: { min: 0.15, max: 0.4 },
        connectionDistance: 150,
        colors: {
            purple: 'rgba(147, 51, 234, ',
            cyan: 'rgba(6, 182, 212, ',
            gold: 'rgba(245, 158, 11, '
        }
    };

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(dpr, dpr);
        initParticles(rect.width, rect.height);
    }

    function initParticles(width, height) {
        particles = [];
        const count = Math.min(config.particleCount, Math.floor((width * height) / 15000));
        
        for (let i = 0; i < count; i++) {
            const colorKeys = Object.keys(config.colors);
            const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
            
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * config.speed.max * 2,
                vy: (Math.random() - 0.5) * config.speed.max * 2,
                size: config.particleSize.min + Math.random() * (config.particleSize.max - config.particleSize.min),
                color: config.colors[colorKey],
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.03
            });
        }
    }

    function draw() {
        if (!isVisible) return;
        
        const width = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
        const height = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
        
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            p.x += p.vx;
            p.y += p.vy;
            p.pulse += p.pulseSpeed;
            
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            
            p.x = Math.max(0, Math.min(width, p.x));
            p.y = Math.max(0, Math.min(height, p.y));

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < config.connectionDistance) {
                    const alpha = (1 - dist / config.connectionDistance) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = p.color + alpha + ')';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            const pulseAlpha = 0.4 + Math.sin(p.pulse) * 0.2;
            const pulseSize = p.size * (1 + Math.sin(p.pulse) * 0.15);
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, pulseSize + 2, 0, Math.PI * 2);
            ctx.fillStyle = p.color + (pulseAlpha * 0.3) + ')';
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
            ctx.fillStyle = p.color + pulseAlpha + ')';
            ctx.fill();
        }

        animationId = requestAnimationFrame(draw);
    }

    const visibilityObserver = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animationId) {
            draw();
        } else if (!isVisible && animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }, { threshold: 0 });

    visibilityObserver.observe(canvas);

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 150);
    }, { passive: true });

    resize();
    draw();
}
