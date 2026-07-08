<!DOCTYPE html>

<html class="dark scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fahreza Adam - Portfolio</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS & Config -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": {
                "background": "#0b1326",
                "tertiary": "#7bd0ff",
                "surface-tint": "#b9c3ff",
                "on-primary-fixed": "#001258",
                "on-tertiary-container": "#63caff",
                "on-surface-variant": "#c5c5d4",
                "inverse-surface": "#dae2fd",
                "surface-container-high": "#222a3d",
                "error-container": "#93000a",
                "surface-container": "#171f33",
                "on-secondary-container": "#a9bad3",
                "primary-fixed-dim": "#b9c3ff",
                "secondary": "#b7c8e1",
                "on-error": "#690005",
                "secondary-fixed": "#d3e4fe",
                "secondary-container": "#3a4a5f",
                "on-primary-container": "#afbbff",
                "primary-container": "#2e44a7",
                "on-secondary-fixed-variant": "#38485d",
                "tertiary-fixed": "#c4e7ff",
                "secondary-fixed-dim": "#b7c8e1",
                "error": "#ffb4ab",
                "tertiary-fixed-dim": "#7bd0ff",
                "surface-container-lowest": "#060e20",
                "outline-variant": "#454652",
                "surface-container-low": "#131b2e",
                "on-tertiary-fixed": "#001e2c",
                "inverse-on-surface": "#283044",
                "tertiary-container": "#005473",
                "surface-bright": "#31394d",
                "primary": "#b9c3ff",
                "on-primary-fixed-variant": "#263da0",
                "on-tertiary-fixed-variant": "#004c69",
                "primary-fixed": "#dee1ff",
                "surface-dim": "#0b1326",
                "outline": "#8f909e",
                "on-tertiary": "#00354a",
                "on-secondary-fixed": "#0b1c30",
                "on-background": "#dae2fd",
                "on-secondary": "#213145",
                "surface-variant": "#2d3449",
                "inverse-primary": "#4156b9",
                "surface-container-highest": "#2d3449",
                "surface": "#0b1326",
                "on-surface": "#dae2fd",
                "on-error-container": "#ffdad6",
                "on-primary": "#022289"
        },
        "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
        },
        "spacing": {
                "lg": "24px",
                "sm": "8px",
                "md": "16px",
                "gutter": "24px",
                "xs": "4px",
                "unit": "4px",
                "margin-mobile": "16px",
                "xl": "32px",
                "margin-desktop": "40px",
                "container-max": "1200px"
        },
        "fontFamily": {
                "headline-md": [
                        "Plus Jakarta Sans", "sans-serif"
                ],
                "label-sm": [
                        "Plus Jakarta Sans", "sans-serif"
                ],
                "headline-lg": [
                        "Plus Jakarta Sans", "sans-serif"
                ],
                "label-md": [
                        "Plus Jakarta Sans", "sans-serif"
                ],
                "headline-lg-mobile": [
                        "Plus Jakarta Sans", "sans-serif"
                ],
                "body-md": [
                        "Plus Jakarta Sans", "sans-serif"
                ],
                "body-lg": [
                        "Plus Jakarta Sans", "sans-serif"
                ],
                "display": [
                        "Plus Jakarta Sans", "sans-serif"
                ]
        },
        "fontSize": {
                "headline-md": [
                        "28px",
                        {
                                "lineHeight": "36px",
                                "fontWeight": "600"
                        }
                ],
                "label-sm": [
                        "12px",
                        {
                                "lineHeight": "16px",
                                "fontWeight": "600"
                        }
                ],
                "headline-lg": [
                        "40px",
                        {
                                "lineHeight": "48px",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "700"
                        }
                ],
                "label-md": [
                        "14px",
                        {
                                "lineHeight": "20px",
                                "letterSpacing": "0.01em",
                                "fontWeight": "500"
                        }
                ],
                "headline-lg-mobile": [
                        "32px",
                        {
                                "lineHeight": "40px",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "700"
                        }
                ],
                "body-md": [
                        "16px",
                        {
                                "lineHeight": "24px",
                                "fontWeight": "400"
                        }
                ],
                "body-lg": [
                        "18px",
                        {
                                "lineHeight": "28px",
                                "fontWeight": "400"
                        }
                ],
                "display": [
                        "48px",
                        {
                                "lineHeight": "1.1",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "800"
                        }
                ],
                "display-mobile": [
                        "36px",
                        {
                                "lineHeight": "1.2",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "800"
                        }
                ]
        }
},
    },
  }
</script>
<style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #0b1326; /* fallback */
        }
        
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        /* Subtle glow utilities */
        .glow-hover:hover {
            box-shadow: 0 0 15px rgba(46, 68, 167, 0.3);
        }
        
        .ambient-shadow {
            box-shadow: 0 10px 25px -5px rgba(46, 68, 167, 0.08);
        }
        
        .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px -10px rgba(46, 68, 167, 0.12);
        }
    </style>
</head>
<body class="bg-background text-on-background min-h-screen pt-24 selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar (Shared Component) -->
<header class="bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-outline-variant/30">
<nav class="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto w-full z-50">
<a class="font-display text-headline-md font-bold text-primary dark:text-primary hover:text-primary-container transition-colors" href="#">Fahreza Adam</a>
<div class="hidden md:flex items-center space-x-md">
<a class="text-primary dark:text-primary font-bold border-b-2 border-primary transition-all duration-300 ease-in-out py-1" href="#profile">Profile</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors py-1" href="#education">Education</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors py-1" href="#skills">Skills</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors py-1" href="#projects">Projects</a>
<a class="text-on-surface-variant hover:text-primary transition-colors py-1" href="#contact">Contact</a>
<a class="text-on-surface-variant hover:text-primary transition-colors py-1 ml-2 flex items-center" href="?theme=light" title="Switch to Light Mode">
    <span class="material-symbols-outlined text-[20px]">light_mode</span>
</a>
<a class="bg-primary-container hover:brightness-110 text-on-primary-container font-label-md px-4 py-2 rounded-lg transition-transform hover:scale-105 active:scale-95 ml-4 glow-hover" href="#">Resume</a>
</div>
<div class="flex items-center md:hidden">
    <a href="?theme=light" class="text-on-surface hover:text-primary p-2 flex items-center">
        <span class="material-symbols-outlined text-[20px]">light_mode</span>
    </a>
    <button class="text-on-surface hover:text-primary p-2">
        <span class="material-symbols-outlined" data-icon="menu">menu</span>
    </button>
</div>
</nav>
</header>
<main class="pb-xl">
<!-- Hero Section -->
<section class="max-w-container-max mx-auto px-gutter py-xl md:py-[120px] flex flex-col md:flex-row items-center gap-lg">
<div class="flex-1 space-y-6">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30">
<span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span class="font-label-md text-label-md text-on-surface-variant">Available for Opportunities</span>
</div>
<h1 class="font-display text-display-mobile md:text-display text-on-surface">
                    Hi, I'm <span class="text-primary">Fahreza Adam</span><br/>
                    Full Stack Developer Intern.
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Information Technology student at Universitas Jember with a 3.96 GPA. Passionate about building robust web and mobile applications with modern tech stacks.
                </p>
<div class="pt-4 flex flex-wrap gap-4">
<a class="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 rounded-lg hover:brightness-110 transition-all hover:scale-105 flex items-center gap-2 glow-hover" href="#projects">
                        View Projects
                        <span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</a>
<a class="bg-transparent border border-outline-variant text-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2" href="#contact">
                        Contact Me
                    </a>
</div>
</div>
<div class="flex-1 relative w-full aspect-square max-w-[400px]">
<div class="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
<img alt="Fahreza Adam Workspace" class="relative z-10 w-full h-full object-cover rounded-2xl shadow-sm border border-outline-variant/30 ambient-shadow" data-alt="A professional, modern portrait-style abstract illustration of a developer workspace. The scene features a sleek laptop displaying clean code on a dark theme editor, resting on a minimalist white desk. Soft, high-key studio lighting highlights the metallic edges of the laptop and casts gentle, diffuse shadows. Subtle geometric shapes in deep indigo and light cyan float gently in the blurred background, reinforcing a precise, technical, and competent aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADJn-MP564PqbiNEZZyW11gZ-Zm5s74lCBLrdExBAlaCRh7AT8cqDlfKFta90y9ZfxlJUx-jxAhMKn3ztqV1RmhrYqG-zYSOjDlMz1K44mfilQrmP2-QjJO7FM1IJ5Riv8i-CgyO10bSnhwBStoGMspKvzONHeufcciFt9vCBxX8pJlK5E7VK0Nki0eZ67X4OgJpSAv_GitYkCX4S3Hw3k7Oh150OzQ_o7bMQWDJCEud2czrFKwao3qA"/>
</div>
</section>
<!-- Profile Section -->
<section class="bg-surface-container-lowest border-y border-outline-variant/20 py-xl" id="profile">
<div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-8">
<div class="md:col-span-4">
<h2 class="font-headline-lg text-headline-lg text-on-surface flex items-center gap-3">
<span class="material-symbols-outlined text-primary" data-icon="person">person</span>
                        Profile
                    </h2>
</div>
<div class="md:col-span-8">
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                        I am an enthusiastic Information Technology student with a strong focus on full-stack development. I enjoy building comprehensive projects that solve real-world problems. Throughout my academic journey and practical experiences, I have cultivated a deep understanding of teamwork, effective problem-solving, and the software development lifecycle. I am always eager to learn new technologies and apply them to create efficient, user-centric applications.
                    </p>
</div>
</div>
</section>
<!-- Education Section -->
<section class="max-w-container-max mx-auto px-gutter py-xl" id="education">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">Education &amp; Academics</h2>
<div class="bg-surface-container border border-outline-variant/30 rounded-xl p-8 max-w-3xl mx-auto card-hover ambient-shadow relative overflow-hidden">
<div class="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed-dim/10 rounded-bl-full -z-10"></div>
<div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Universitas Jember</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Bachelor of Information Technology</p>
</div>
<div class="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 rounded-lg border border-primary/20 flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]" data-icon="school">school</span>
                        GPA: 3.96 / 4.00
                    </div>
</div>
<div class="mt-8 pt-6 border-t border-outline-variant/30">
<h4 class="font-label-md text-label-md text-on-surface mb-4 uppercase tracking-wider">Relevant Coursework</h4>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container-highest px-3 py-1.5 rounded text-sm text-on-surface-variant font-code-sm">Web &amp; Mobile Programming</span>
<span class="bg-surface-container-highest px-3 py-1.5 rounded text-sm text-on-surface-variant font-code-sm">API Interface</span>
<span class="bg-surface-container-highest px-3 py-1.5 rounded text-sm text-on-surface-variant font-code-sm">Database Systems</span>
<span class="bg-surface-container-highest px-3 py-1.5 rounded text-sm text-on-surface-variant font-code-sm">SQL</span>
<span class="bg-surface-container-highest px-3 py-1.5 rounded text-sm text-on-surface-variant font-code-sm">Software Analysis &amp; Design</span>
</div>
</div>
</div>
</section>
<!-- Skills Section -->
<section class="bg-surface-container-low py-xl" id="skills">
<div class="max-w-container-max mx-auto px-gutter">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-12 text-center">Technical Arsenal</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Languages -->
<div class="bg-surface-container border border-outline-variant/30 rounded-xl p-6 hover:border-primary/50 transition-colors">
<div class="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-on-primary-container" data-icon="code">code</span>
</div>
<h3 class="font-headline-md text-[20px] font-bold text-on-surface mb-4">Languages</h3>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">JavaScript</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Dart</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">C#</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">PHP</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Python</span>
</div>
</div>
<!-- Frameworks -->
<div class="bg-surface-container border border-outline-variant/30 rounded-xl p-6 hover:border-primary/50 transition-colors">
<div class="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-on-primary-container" data-icon="web">web</span>
</div>
<h3 class="font-headline-md text-[20px] font-bold text-on-surface mb-4">Frameworks</h3>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Flutter</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Node.js</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Express.js</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Laravel</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Firebase</span>
</div>
</div>
<!-- Databases -->
<div class="bg-surface-container border border-outline-variant/30 rounded-xl p-6 hover:border-primary/50 transition-colors">
<div class="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-on-primary-container" data-icon="database">database</span>
</div>
<h3 class="font-headline-md text-[20px] font-bold text-on-surface mb-4">Databases</h3>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">MySQL</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">PostgreSQL</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Supabase</span>
</div>
</div>
<!-- Tools -->
<div class="bg-surface-container border border-outline-variant/30 rounded-xl p-6 hover:border-primary/50 transition-colors">
<div class="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-on-primary-container" data-icon="build">build</span>
</div>
<h3 class="font-headline-md text-[20px] font-bold text-on-surface mb-4">Tools &amp; Others</h3>
<div class="flex flex-wrap gap-2">
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Git</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">REST API</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">MQTT</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">ESP32/IoT</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2.5 py-1 rounded">Figma</span>
</div>
</div>
</div>
</div>
</section>
<!-- Projects Section (Bento Grid Style) -->
<section class="max-w-container-max mx-auto px-gutter py-xl" id="projects">
<div class="flex justify-between items-end mb-12">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">Featured Projects</h2>
<p class="font-body-md text-on-surface-variant">A selection of my recent full-stack and IoT work.</p>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- Project 1 (Large) -->
<div class="lg:col-span-8 bg-surface-container rounded-xl border border-outline-variant/30 overflow-hidden card-hover ambient-shadow flex flex-col md:flex-row">
<div class="md:w-1/2 h-64 md:h-auto bg-surface-container-low relative">
<img alt="EarthCare App" class="w-full h-full object-cover" data-alt="A clean, minimalist UI mockup of an environmental mobile application displayed on a modern smartphone screen. The app interface features crisp typography, subtle depth shadows, and an intuitive dashboard showing eco-metrics. The smartphone is positioned diagonally on a pristine white surface with soft, diffused top-down lighting. The color palette incorporates vibrant greens against white backgrounds, emphasizing a fresh, professional, and tech-forward design suitable for a portfolio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSIj4Xw59jsTHEEVezq2YT5InBdcu7hEGxV6Rq5tH5FbK58Yv4LY2Zy2jwn956JRgNIxUS1ZAwZBEjkwksCXTQCygK9EITDGN5LaTJO6x2hMMVP82imXrsXKAmxNAPJDk1daJNCKrWjScy3a7GhjScFloQJN0v3xmhG_Bkjx4SDkhFqhtH4XKxYtjH1vwggkCMiu-sQkmrutTQFwJdFm8TWTm175Yg8uQum1w5_Cpk9a2xrB7CtDrbtg"/>
</div>
<div class="p-6 md:w-1/2 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-3">
<span class="bg-primary-container/30 text-primary font-label-md px-2 py-0.5 rounded text-xs border border-primary/20">Mobile</span>
<span class="bg-primary-container/30 text-primary font-label-md px-2 py-0.5 rounded text-xs border border-primary/20">Cloud</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-3">EarthCare</h3>
<p class="font-body-md text-on-surface-variant mb-6">
                            Mobile application for environmental damage reporting. Architected the database, developed the backend utilizing modern cloud services, and implemented a robust real-time notification system.
                        </p>
<div class="mt-auto">
<a class="inline-flex items-center gap-1 text-primary font-label-md hover:text-tertiary transition-colors group" href="#">
                                View Case Study <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" data-icon="arrow_right_alt">arrow_right_alt</span>
</a>
</div>
</div>
</div>
<!-- Project 2 (Small) -->
<div class="lg:col-span-4 bg-surface-container rounded-xl border border-outline-variant/30 overflow-hidden card-hover ambient-shadow flex flex-col">
<div class="h-48 bg-surface-container-low relative">
<img alt="AquaSync Dashboard" class="w-full h-full object-cover" data-alt="A sophisticated dashboard interface for an IoT aquaculture monitoring system displayed on a sleek tablet screen. The UI shows real-time data charts, water quality metrics in crisp data visualizations, and clean typography on a light background. The lighting is bright and evenly distributed, highlighting the interface's structure. The visual style is highly analytical and modern, employing precise lines and a calm blue and cyan color palette to convey reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKaNz_9H0gFKhM8InpK_zuzokahrqQbJhdCeQPk-3A9CAA-XnVc7YHKBloqxxZZESSUj-wkQ5I0F8K0x7WjpS8t1P2grmv1HQJrTVPXjLMQUCU6KOpgmSvc1CL9q5mZUiTtNFIfCH7qyqgUNIhgLeb0LVpmL6EtXGbtMayycvFwfvQ4FLi6_sFNgTfxE-h7iGtU22DsemhVtSqatfK154_chMrTjvLFHNNKrxkWdp1ZQqwWNsYUkBx9Q"/>
</div>
<div class="p-6 flex-1 flex flex-col">
<div class="flex items-center gap-2 mb-3">
<span class="bg-tertiary-container/30 text-tertiary font-label-md px-2 py-0.5 rounded text-xs border border-tertiary/20">IoT</span>
<span class="bg-tertiary-container/30 text-tertiary font-label-md px-2 py-0.5 rounded text-xs border border-tertiary/20">Web</span>
</div>
<h3 class="font-headline-md text-[20px] text-on-surface mb-2">AquaSync</h3>
<p class="font-body-md text-sm text-on-surface-variant mb-4">
                            IoT &amp; Web-based automated catfish pond monitoring system. Developed real-time data communications and water quality monitoring algorithms.
                        </p>
</div>
</div>
<!-- Project 3 (Medium Full Width) -->
<div class="lg:col-span-12 bg-surface-container rounded-xl border border-outline-variant/30 overflow-hidden card-hover ambient-shadow flex flex-col md:flex-row items-center p-6 gap-8">
<div class="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-[32px]" data-icon="volunteer_activism">volunteer_activism</span>
</div>
<div class="flex-1">
<div class="flex items-center gap-2 mb-2">
<span class="bg-surface-container-highest text-on-surface font-label-md px-2 py-0.5 rounded text-xs border border-outline-variant/50">Web</span>
<span class="bg-surface-container-highest text-on-surface font-label-md px-2 py-0.5 rounded text-xs border border-outline-variant/50">Laravel Blade</span>
</div>
<h3 class="font-headline-md text-[20px] text-on-surface mb-2">Berbagi</h3>
<p class="font-body-md text-on-surface-variant max-w-3xl">
                            A comprehensive web system for the donation and distribution of used goods. Served as Frontend Developer utilizing Laravel Blade to create an accessible, responsive, and intuitive user interface for donors and administrators.
                        </p>
</div>
</div>
</div>
</section>
<!-- Experience Section -->
<section class="bg-surface-container-lowest border-y border-outline-variant/20 py-xl">
<div class="max-w-container-max mx-auto px-gutter">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-10 text-center flex justify-center items-center gap-3">
<span class="material-symbols-outlined text-primary" data-icon="work">work</span>
                    Experience
                </h2>
<div class="max-w-3xl mx-auto">
<div class="relative pl-8 border-l-2 border-primary/30 pb-8">
<div class="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 ring-4 ring-surface-container-lowest"></div>
<h3 class="font-headline-md text-[20px] text-on-surface font-bold">Divisi Teknologi - Tim PPK Ormawa BEM FKM</h3>
<p class="font-label-md text-primary mb-3">Universitas Jember</p>
<p class="font-body-md text-on-surface-variant bg-surface-container p-4 rounded-lg border border-outline-variant/30">
                            Spearheaded the development of a comprehensive flood monitoring website integrated with IoT sensors specifically designed for Nogosari Village. Managed the end-to-end implementation of the technical solution to aid local disaster mitigation efforts.
                        </p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant/20 transition-opacity duration-200 full-width" id="contact">
<div class="flex flex-col md:flex-row justify-between items-center py-lg px-gutter max-w-container-max mx-auto w-full gap-8">
<div class="text-center md:text-left">
<h2 class="font-headline-md font-bold text-primary mb-2">Let's Connect</h2>
<p class="text-on-surface-variant font-body-md text-sm">
                    © 2024 Fahreza Adam Nuardiansyah. Built with precision.
                </p>
</div>
<div class="flex flex-col md:flex-row gap-6 items-center">
<a class="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors" href="tel:+6281231916297">
<span class="material-symbols-outlined text-[20px]" data-icon="call">call</span>
<span class="font-label-md text-sm">+62 81231916297</span>
</a>
<a class="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors" href="mailto:fahrezaadam1784@gmail.com">
<span class="material-symbols-outlined text-[20px]" data-icon="mail">mail</span>
<span class="font-label-md text-sm">Email</span>
</a>
<a class="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors" href="https://www.linkedin.com/in/fahreza-adam-nuardiansyah/" target="_blank">
<span class="material-symbols-outlined text-[20px]" data-icon="link">link</span>
<span class="font-label-md text-sm">LinkedIn</span>
</a>
<a class="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]" data-icon="code">code</span>
<span class="font-label-md text-sm">GitHub</span>
</a>
</div>
</div>
</footer>
<script>
        // Simple active state navigation logic for scroll
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('header nav a[href^="#"]');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= (sectionTop - 200)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('text-primary', 'font-bold', 'border-b-2', 'border-primary');
                    link.classList.add('text-on-surface-variant');
                    if (link.getAttribute('href').includes(current) && current !== '') {
                        link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-primary');
                        link.classList.remove('text-on-surface-variant');
                    }
                });
            });
        });
    </script>
</body></html>