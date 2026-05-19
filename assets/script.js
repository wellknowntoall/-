const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.available': 'Available for work',
        'hero.greeting': 'Hi, I\'m',
        'hero.name': 'Alex Johnson',
        'hero.title': 'Full Stack Developer',
        'hero.description': 'Building scalable web applications with modern technologies. Passionate about creating elegant solutions that solve real-world problems.',
        'hero.viewProjects': 'View Projects',
        'hero.getInTouch': 'Get in Touch',
        'about.label': 'About Me',
        'about.title': 'Building Digital Experiences',
        'about.subtitle': 'I\'m a passionate developer with years of experience creating innovative solutions for web and mobile platforms.',
        'about.journey': 'My Journey',
        'about.skills': 'Skills & Technologies',
        'about.funFact': 'Fun Fact',
        'about.funFactText': 'When I\'m not coding, you can find me hiking in the mountains or playing guitar. I believe a balanced lifestyle makes for better code!',
        'about.exp1.title': 'Senior Developer',
        'about.exp1.company': 'Tech Corp',
        'about.exp1.desc': 'Leading development of enterprise web applications',
        'about.exp2.title': 'Full Stack Developer',
        'about.exp2.company': 'Startup X',
        'about.exp2.desc': 'Built scalable applications from ground up',
        'about.exp3.title': 'Junior Developer',
        'about.exp3.company': 'Digital Agency',
        'about.exp3.desc': 'Developed client websites and applications',
        'projects.label': 'Projects',
        'projects.title': 'My Work',
        'projects.subtitle': 'A showcase of my latest projects, built with modern technologies and best practices.',
        'projects.viewProject': 'View Project',
        'projects.viewMore': 'View More on GitHub',
        'projects.taskflow.desc': 'A productivity app that helps teams manage tasks efficiently with real-time collaboration.',
        'projects.eshop.desc': 'An e-commerce platform with secure payment integration and personalized recommendations.',
        'projects.dataviz.desc': 'Interactive data visualization tool for business analytics with customizable charts.',
        'contact.label': 'Contact',
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Have a project in mind or want to collaborate? Send me a message and let\'s create something amazing together.',
        'contact.location': 'Location',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.availableForHire': 'Available for Hire',
        'contact.availableForHireText': 'I\'m currently accepting new projects and opportunities. Feel free to reach out!',
        'contact.name': 'Name',
        'contact.message': 'Message',
        'contact.sendMessage': 'Send Message',
        'footer.tagline': 'Building innovative solutions with modern technologies. Let\'s create something amazing together.',
        'footer.quickLinks': 'Quick Links',
        'footer.resources': 'Resources',
        'footer.blog': 'Blog',
        'footer.tutorials': 'Tutorials',
        'footer.openSource': 'Open Source',
        'footer.resume': 'Resume',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service'
    },
    zh: {
        'nav.home': '首页',
        'nav.about': '关于',
        'nav.projects': '项目',
        'nav.contact': '联系',
        'hero.available': '正在找工作',
        'hero.greeting': '你好，我是',
        'hero.name': '张明',
        'hero.title': '全栈开发工程师',
        'hero.description': '使用现代技术构建可扩展的 Web 应用程序。致力于创造解决实际问题的优雅解决方案。',
        'hero.viewProjects': '查看项目',
        'hero.getInTouch': '联系我',
        'about.label': '关于我',
        'about.title': '打造数字体验',
        'about.subtitle': '我是一名充满热情的开发人员，在创建 Web 和移动平台创新解决方案方面拥有多年经验。',
        'about.journey': '我的经历',
        'about.skills': '技能与技术',
        'about.funFact': '趣味小知识',
        'about.funFactText': '当我不写代码时，你可能会发现我在山里徒步或者弹吉他。我相信平衡的生活方式能让代码更出色！',
        'about.exp1.title': '高级开发工程师',
        'about.exp1.company': '科技公司',
        'about.exp1.desc': '主导企业级 Web 应用程序开发',
        'about.exp2.title': '全栈开发工程师',
        'about.exp2.company': '创业公司 X',
        'about.exp2.desc': '从零开始构建可扩展应用程序',
        'about.exp3.title': '初级开发工程师',
        'about.exp3.company': '数字代理公司',
        'about.exp3.desc': '为客户开发网站和应用程序',
        'projects.label': '项目',
        'projects.title': '我的作品',
        'projects.subtitle': '展示我使用现代技术和最佳实践构建的最新项目。',
        'projects.viewProject': '查看项目',
        'projects.viewMore': '在 GitHub 上查看更多',
        'projects.taskflow.desc': '一款高效的任务管理应用，帮助团队实时协作完成任务。',
        'projects.eshop.desc': '带有安全支付集成和个性化推荐功能的电商平台。',
        'projects.dataviz.desc': '用于商业分析的可定制交互式数据可视化工具。',
        'contact.label': '联系我',
        'contact.title': '保持联系',
        'contact.subtitle': '有项目想法或想合作？给我发消息，让我们一起创造精彩！',
        'contact.location': '位置',
        'contact.email': '邮箱',
        'contact.phone': '电话',
        'contact.availableForHire': '正在求职',
        'contact.availableForHireText': '我目前接受新的项目和工作机会，欢迎联系我！',
        'contact.name': '姓名',
        'contact.message': '留言',
        'contact.sendMessage': '发送消息',
        'footer.tagline': '用现代技术创新解决方案。让我们一起创造精彩！',
        'footer.quickLinks': '快速链接',
        'footer.resources': '资源',
        'footer.blog': '博客',
        'footer.tutorials': '教程',
        'footer.openSource': '开源项目',
        'footer.resume': '简历',
        'footer.privacy': '隐私政策',
        'footer.terms': '服务条款'
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.getElementById('lang-label').textContent = lang === 'en' ? '中文' : 'EN';
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
}

function toggleMobileMenu() {
    document.getElementById('mobile-nav').classList.toggle('active');
}

function handleSubmit(e) {
    e.preventDefault();
    alert(currentLang === 'en' ? 'Thank you for your message! I will get back to you soon.' : '感谢您的留言！我会尽快回复您。');
    e.target.reset();
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    setLanguage(currentLang);
});