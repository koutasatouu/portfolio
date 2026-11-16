// Structural data. All visible text lives in { en, id } pairs so both language versions stay in sync.
export const site = {
    name: 'Raditya Abib',
    email: 'radityaabib511@gmail.com',
    whatsapp: '6282235468531', // international format, no "+" (taken from the CV; confirm it is the WhatsApp number)
    github: 'https://github.com/koutasatouu',
    linkedin: 'https://www.linkedin.com/in/radityaabib/',
    instagram: 'https://www.instagram.com/radityaabib/'
};

// Set enabled:false on a category to hide it again; its content stays in this file.
export const categories = [
    { name: 'All', enabled: true }, { name: 'Web', enabled: true },
    { name: 'Design', enabled: true }, { name: 'Motion', enabled: true }
];

export const projects = [
    { slug: 'tetra-coffee', type: 'Web', group: 'frontend', url: 'https://tetracoffee.vercel.app/', stack: 'React · Tailwind CSS', t: {
        en: { title: 'Tetra Coffee House', role: 'Design & frontend', description: 'A minimalist coffee landing page focused on navigation and brand presentation.', detail: 'Designed and deployed a minimalist landing page with a clear visual identity. Responsive CSS structures keep the layout consistent across mobile and desktop, with navigation organized around the brand and its products.', focus: ['Brand presentation', 'Responsive layouts', 'Clear navigation'] },
        id: { title: 'Tetra Coffee House', role: 'Desain & frontend', description: 'Landing page kedai kopi yang minimalis, fokus ke navigasi dan tampilan brand.', detail: 'Aku desain dan rilis landing page minimalis dengan identitas visual yang jelas. CSS-nya responsif, jadi tampilannya tetap rapi di HP maupun desktop, dan navigasinya ditata di sekitar brand dan produknya.', focus: ['Tampilan brand', 'Layout responsif', 'Navigasi yang jelas'] } } },
    { slug: 'visionema', type: 'Web', group: 'frontend', url: 'https://visionemanet-nu.vercel.app/', stack: 'React · Vite', t: {
        en: { title: 'Visionema Net', role: 'Frontend development', description: 'A digital home for a creative agency, from visual layout to responsive implementation.', detail: 'Frontend development for a creative agency website. The work connects visual layouts with reusable interface components, responsive page structures, and ongoing website maintenance.', focus: ['Frontend development', 'Reusable components', 'Responsive implementation'] },
        id: { title: 'Visionema Net', role: 'Pengembangan frontend', description: 'Rumah digital buat agensi kreatif, dari layout visual sampai jadi website responsif.', detail: 'Aku garap frontend website agensi kreatif. Kerjaannya nyambungin layout visual ke komponen yang bisa dipakai ulang, struktur halaman responsif, dan perawatan website terus-menerus.', focus: ['Pengembangan frontend', 'Komponen reusable', 'Implementasi responsif'] } } },
    { slug: 'bura-bura', type: 'Web', group: 'frontend', url: 'https://buraburacoffee.vercel.app/', stack: 'React · Tailwind CSS', t: {
        en: { title: 'Bura Bura Coffee', role: 'Design & frontend', description: 'A mobile-first coffee website with dynamic menus and interactive product showcases.', detail: 'Built a mobile-first web platform featuring dynamic menu layouts and interactive product showcases. Modular UI components support consistent presentation and smooth transitions across the site.', focus: ['Mobile-first development', 'Dynamic menus', 'Modular components'] },
        id: { title: 'Bura Bura Coffee', role: 'Desain & frontend', description: 'Website kopi mobile-first dengan menu dinamis dan etalase produk interaktif.', detail: 'Aku bangun platform web mobile-first dengan layout menu dinamis dan etalase produk interaktif. Komponen UI-nya modular, jadi tampilannya konsisten dan transisinya halus di seluruh situs.', focus: ['Mobile-first', 'Menu dinamis', 'Komponen modular'] } } },
    { slug: 'bento-coffee', type: 'Web', group: 'frontend', url: 'https://bentocoffee.vercel.app/', stack: 'React · Vite', t: {
        en: { title: 'Bento Coffee', role: 'Design & frontend', description: 'A Japanese-inspired coffee website with a clear visual rhythm.', detail: 'A coffee website that brings brand presentation and responsive frontend layouts together. The interface uses a consistent visual rhythm to organize the browsing experience across different screen sizes.', focus: ['Visual layout', 'Brand presentation', 'Responsive frontend'] },
        id: { title: 'Bento Coffee', role: 'Desain & frontend', description: 'Website kopi bernuansa Jepang dengan ritme visual yang enak diikuti.', detail: 'Website kopi yang menyatukan tampilan brand dan frontend responsif. Ritme visualnya dijaga konsisten biar enak dijelajahi di semua ukuran layar.', focus: ['Layout visual', 'Tampilan brand', 'Frontend responsif'] } } },
    { slug: 'zanoid', type: 'Web', group: 'frontend', url: 'https://zanoid.vercel.app/', stack: 'React · Tailwind CSS', t: {
        en: { title: 'Zanoid', role: 'Design & frontend', description: 'An expressive web presence for an independent agency.', detail: 'An agency website focused on visual presentation and responsive interface development. Layout and reusable styling establish a consistent identity throughout the browsing experience.', focus: ['Agency presentation', 'Interface development', 'Consistent styling'] },
        id: { title: 'Zanoid', role: 'Desain & frontend', description: 'Tampilan web yang ekspresif buat agensi independen.', detail: 'Website agensi yang fokus ke tampilan visual dan antarmuka responsif. Layout dan styling yang bisa dipakai ulang bikin identitasnya konsisten dari awal sampai akhir.', focus: ['Tampilan agensi', 'Pengembangan antarmuka', 'Styling konsisten'] } } },
    { slug: 'toleransi-kopi', type: 'Web', group: 'frontend', url: 'https://toleransikopi.vercel.app/', stack: 'React · Tailwind CSS', t: {
        en: { title: 'Toleransi Kopi', role: 'Design & frontend', description: 'A neighborhood coffee shop brought to the web.', detail: 'A web presence for a neighborhood coffee brand. The project combines approachable visual presentation with responsive page layouts for visitors on mobile and desktop.', focus: ['Coffee brand website', 'Responsive layouts', 'Visual presentation'] },
        id: { title: 'Toleransi Kopi', role: 'Desain & frontend', description: 'Kedai kopi lingkungan sekitar yang akhirnya punya rumah di web.', detail: 'Website buat brand kopi lokal. Tampilannya ramah, dengan layout responsif biar nyaman dibuka dari HP maupun desktop.', focus: ['Website brand kopi', 'Layout responsif', 'Tampilan visual'] } } },
    { slug: 'gamescout', type: 'Web', image: '/works/gamescout.webp', stack: 'Game search', t: {
        en: { kind: 'Web application', title: 'GameScout', role: 'Web application', description: 'A game search and discovery website with filters and curated collections.', detail: 'GameScout is a website for finding games. You can search by genre, mood, or character, narrow results by interest, platform, rating, or free-to-play, and browse curated collections like Trending Now and Hidden Gems.', focus: ['Search by genre, mood, or character', 'Filters by interest, platform, and rating', 'Curated game collections'], alt: 'GameScout home page with a search box, filters, and a Better Together collection of games.' },
        id: { kind: 'Web application', stack: 'Pencarian game', title: 'GameScout', role: 'Web application', description: 'Website pencarian dan penemuan game dengan filter dan koleksi pilihan.', detail: 'GameScout adalah website buat nyari game. Kamu bisa cari lewat genre, mood, atau karakter, saring berdasarkan minat, platform, rating, atau yang gratis aja, plus ada koleksi pilihan kayak Trending Now dan Hidden Gems.', focus: ['Cari lewat genre, mood, atau karakter', 'Filter minat, platform, dan rating', 'Koleksi game pilihan'], alt: 'Halaman utama GameScout dengan kolom pencarian, filter, dan koleksi Better Together berisi daftar game.' } } },
    { slug: 'bct-feed-1', type: 'Design', group: 'feed', image: '/works/bct-feed-1.webp', stack: 'Canva', t: {
        en: { title: 'Opening slide', role: 'Feed design', description: 'A big hook over a before-and-after photo. The post earned over 1.3k likes.', detail: '', focus: [], alt: 'Opening slide of a BCT Yogyakarta carousel: a before-and-after lighting photo with the headline about expensive lenses going to waste.' },
        id: { title: 'Slide pembuka', role: 'Desain feed', description: 'Hook besar di atas foto sebelum/sesudah. Postingannya dapat lebih dari 1,3 ribu like.', detail: '', focus: [], alt: 'Slide pembuka carousel BCT Yogyakarta: foto perbandingan pencahayaan dengan judul soal lensa mahal yang jadi percuma.' } } },
    { slug: 'bct-feed-2', type: 'Design', group: 'feed', image: '/works/bct-feed-2.webp', stack: 'Canva', t: {
        en: { title: 'Technique slide: Rembrandt', role: 'Feed design', description: 'One technique per slide, with a lamp-position icon and a short explanation.', detail: '', focus: [], alt: 'A carousel slide about Rembrandt lighting: portrait photos, a light-angle icon, and a short explanation.' },
        id: { title: 'Slide teknik: Rembrandt', role: 'Desain feed', description: 'Satu teknik per slide, lengkap dengan ikon posisi lampu dan penjelasan singkat.', detail: '', focus: [], alt: 'Slide carousel soal pencahayaan Rembrandt: foto potret, ikon sudut cahaya, dan penjelasan singkat.' } } },
    { slug: 'vector-studies', type: 'Design', image: '/works/illustrator.jpeg', stack: 'Adobe Illustrator', t: {
        en: { title: 'Vector & visual studies', role: 'Illustration', description: 'A look inside my illustration and visual design practice.', detail: 'A coffee-shop logo study open in Adobe Illustrator, with its layers and vector paths visible. It shows how I build marks and badges, and is a study of process rather than a shipped client project.', focus: ['Logo and badge layout', 'Vector construction', 'Lettering on a path'], alt: 'Adobe Illustrator workspace showing a circular coffee shop logo with text on a path, beside the layers panel.' },
        id: { title: 'Studi vektor & visual', role: 'Ilustrasi', description: 'Sekilas proses ilustrasi dan desain visualku.', detail: 'Studi logo kedai kopi yang kebuka di Adobe Illustrator, lengkap sama layer dan path vektornya. Ini nunjukin cara aku bikin logo dan badge. Ini studi proses, bukan proyek klien yang udah rilis.', focus: ['Layout logo dan badge', 'Konstruksi vektor', 'Lettering di path'], alt: 'Workspace Adobe Illustrator dengan logo kedai kopi melingkar yang teksnya mengikuti path, di samping panel layer.' } } },
    { slug: 'editing-workspace', type: 'Motion', image: '/works/premiere.jpeg', stack: 'Adobe Premiere Pro', t: {
        en: { title: 'Editing workspace', role: 'Video editing', description: 'Behind the scenes of my video editing workflow.', detail: 'A close look at an editing timeline in Adobe Premiere Pro, with video and audio layered across cuts and effects applied along the way. It shows the working process behind promotional video editing, not a finished film.', focus: ['Timeline editing', 'Audio and video layering', 'Effects and pacing'], alt: 'Close-up of an Adobe Premiere Pro timeline with layered video and audio clips and effect markers.' },
        id: { title: 'Workspace editing', role: 'Editing video', description: 'Di balik layar cara aku ngedit video.', detail: 'Sekilas timeline editing di Adobe Premiere Pro, dengan video dan audio yang bertumpuk di antara potongan dan efek. Ini nunjukin proses di balik video promosi, bukan film jadi.', focus: ['Editing timeline', 'Layer audio dan video', 'Efek dan tempo'], alt: 'Close-up timeline Adobe Premiere Pro dengan klip video dan audio berlapis serta penanda efek.' } } }
];

export const experienceGroups = [
    { key: 'dev', en: 'Development', id: 'Pengembangan' },
    { key: 'design', en: 'Design & motion', id: 'Desain & motion' },
    { key: 'community', en: 'Community', id: 'Komunitas' }
];

export const experience = [
    { group: 'dev', current: true, company: 'Texere Studio',
      date: { en: 'June 2026 — Present', id: 'Juni 2026 — Sekarang' },
      role: { en: 'Core Developer', id: 'Core Developer' },
      desc: { en: 'Develop responsive websites with React, Tailwind CSS, and Astro. Translate visual requirements into reusable components and maintainable frontend code, refine layouts across devices, and collaborate on website implementation and maintenance.',
              id: 'Bikin website responsif pakai React, Tailwind CSS, dan Astro. Ngubah kebutuhan visual jadi komponen yang bisa dipakai ulang dan kode frontend yang gampang dirawat, ngerapiin layout di berbagai perangkat, dan ikut ngurus implementasi serta perawatan website.' } },
    { group: 'dev', current: true, company: 'Visionema.net',
      date: { en: 'August 2026 — Present', id: 'Agustus 2026 — Sekarang' },
      role: { en: 'Web Developer', id: 'Web Developer' },
      desc: { en: 'Build and maintain responsive websites, translating visual requirements into reusable components and maintainable frontend code. Work across page layouts, interface styling, cross-device refinement, and ongoing implementation, with responsibilities aligned to my Core Developer role at Texere Studio.',
              id: 'Bangun dan rawat website responsif, ngubah kebutuhan visual jadi komponen reusable dan kode yang gampang dirawat. Ngerjain layout halaman, styling, penyesuaian lintas perangkat, dan implementasi lanjutan, dengan tanggung jawab yang sejalan sama peranku di Texere Studio.' } },
    { group: 'dev', current: true, company: 'Independent',
      date: { en: 'April 2026 — Present', id: 'April 2026 — Sekarang' },
      role: { en: 'Freelance Frontend Developer', id: 'Freelance Frontend Developer' },
      desc: { en: 'Build custom, responsive web interfaces using React, JavaScript, and Tailwind CSS. Translate design requirements into clean, maintainable frontend code with cross-browser compatibility.',
              id: 'Bikin antarmuka web custom yang responsif pakai React, JavaScript, dan Tailwind CSS. Ngubah kebutuhan desain jadi kode frontend yang bersih, gampang dirawat, dan jalan mulus di banyak browser.' } },
    { group: 'dev', current: false, company: 'PT. Indo Techno Medic',
      date: { en: 'June 2023 — January 2024', id: 'Juni 2023 — Januari 2024' },
      role: { en: 'Software Engineer Intern', id: 'Software Engineer Intern' },
      desc: { en: 'Developed healthcare web applications with Laravel, MySQL, and SQL Server. Investigated and resolved software bugs to support system stability, and maintained medical databases with attention to accuracy and patient confidentiality.',
              id: 'Bikin aplikasi web layanan kesehatan pakai Laravel, MySQL, dan SQL Server. Nyari dan benerin bug biar sistem tetap stabil, plus ngurus database medis dengan teliti dan jaga kerahasiaan data pasien.' } },
    { group: 'design', current: true, company: 'Independent',
      date: { en: 'June 2025 — Present', id: 'Juni 2025 — Sekarang' },
      role: { en: 'Freelance Graphic Designer', id: 'Freelance Graphic Designer' },
      desc: { en: 'Produce custom graphic assets, brand identity materials, and promotional media. Create social media feeds and visual layouts aligned with each client’s brand guidelines.',
              id: 'Bikin aset grafis custom, materi identitas brand, dan media promosi. Ngerjain feed medsos dan layout visual yang sesuai panduan brand tiap klien.' } },
    { group: 'design', current: false, company: 'CV Solobeat International',
      date: { en: 'June — July 2024', id: 'Juni — Juli 2024' },
      role: { en: 'Graphic Designer & Web Administrator', id: 'Graphic Designer & Web Administrator' },
      desc: { en: 'Designed product mockups, digital marketing materials, and brand assets. Shot and edited promotional Instagram Reels with Premiere Pro and After Effects, and maintained website content and visual assets to improve loading speed and user experience.',
              id: 'Desain mockup produk, materi pemasaran digital, dan aset brand. Shooting dan ngedit Instagram Reels promosi pakai Premiere Pro dan After Effects, plus ngurus konten dan aset visual website biar loadingnya lebih cepat dan nyaman dipakai.' } },
    { group: 'community', current: false, company: 'Tomo Scans',
      date: { en: 'July 2025 — November 2026', id: 'Juli 2025 — November 2026' },
      role: { en: 'Volunteer Translator', id: 'Penerjemah Sukarela' },
      desc: { en: 'Translate Japanese dialogue into natural English, collaborating with editors on context, character voice, and story pacing.',
              id: 'Nerjemahin dialog Jepang ke Inggris yang natural, bareng editor soal konteks, suara karakter, dan tempo cerita.' } },
    { group: 'community', current: false, company: 'Karsa · PYFM2022',
      date: { en: 'December 2022', id: 'Desember 2022' },
      role: { en: 'Volunteer Art Director', id: 'Art Director Sukarela' },
      desc: { en: 'Conceptualized visual narratives and environmental design for project storytelling. Reviewed visual materials for brand alignment and design consistency.',
              id: 'Nyusun narasi visual dan desain lingkungan buat bercerita di proyek. Ngecek materi visual biar selaras sama brand dan konsisten.' } }
];

// Packages. Launch prices are shown while launchOffer.active is true; flip it off to show normal prices only.
export const launchOffer = { active: true, slots: 3 };
export const packages = [
    { key: 'starter', normal: 1500000, launch: 1000000, revisions: 1,
      days: { en: '5–7 working days', id: '5–7 hari kerja' },
      t: {
        en: { name: 'Starter', tag: 'Menu & Location', for: 'One page so customers find your menu, hours, and location.',
              items: ['One-page website: hero, menu, opening hours', 'Map location and WhatsApp button', 'Link to your Instagram', 'Mobile-first, responsive layout', 'Hosting and SSL included', 'First month of maintenance free'] },
        id: { name: 'Starter', tag: 'Menu & Lokasi', for: 'Satu halaman biar pelanggan gampang nemu menu, jam buka, dan lokasimu.',
              items: ['Website 1 halaman: hero, menu, jam buka', 'Peta lokasi dan tombol WhatsApp', 'Link ke Instagram-mu', 'Mobile-first dan responsif', 'Hosting dan SSL udah termasuk', 'Perawatan bulan pertama gratis'] } } },
    { key: 'standard', normal: 3000000, launch: 2000000, revisions: 2,
      days: { en: '10–14 working days', id: '10–14 hari kerja' },
      t: {
        en: { name: 'Standard', tag: 'Brand & Menu', for: 'For cafés that want the website to tell their brand story.',
              items: ['Everything in Starter', 'Photo gallery and brand story section', 'Menu organized by category', 'Basic SEO and Google Business tips', '.com domain setup', 'First month of maintenance free'] },
        id: { name: 'Standard', tag: 'Brand & Menu', for: 'Buat kafe yang pengin websitenya ikut nyeritain brand-nya.',
              items: ['Semua isi Starter', 'Galeri foto dan cerita brand', 'Menu dikelompokin per kategori', 'SEO dasar dan tips Google Bisnis', 'Pasang domain .com', 'Perawatan bulan pertama gratis'] } } },
    { key: 'premium', normal: 5000000, launch: 3500000, revisions: 3,
      days: { en: '14–21 working days', id: '14–21 hari kerja' },
      t: {
        en: { name: 'Premium', tag: 'Brand & Order', for: 'For cafés that also want ordering and a consistent Instagram look.',
              items: ['Everything in Standard', 'Order button that sends a prepared WhatsApp message', '3 Instagram feed templates (Illustrator / Canva)', '30-minute update walkthrough', '1 month of support'] },
        id: { name: 'Premium', tag: 'Brand & Pesan', for: 'Buat kafe yang pengin pesanan lewat WhatsApp dan tampilan Instagram yang kompak.',
              items: ['Semua isi Standard', 'Tombol pesan yang langsung bikin pesan WhatsApp otomatis', '3 template feed Instagram (Illustrator / Canva)', 'Panduan update 30 menit', 'Support 1 bulan'] } } }
];

export const monthly = [
    { price: 150000, from: false, t: {
        en: { name: 'Website maintenance', text: 'Menu and price updates plus regular checks. First month free with Starter and Standard.' },
        id: { name: 'Perawatan website', text: 'Update menu dan harga plus pengecekan rutin. Bulan pertama gratis di Starter dan Standard.' } } },
    { price: 500000, from: true, t: {
        en: { name: 'Instagram feed design', text: '8 designs a month, carousels included, in your brand colors.' },
        id: { name: 'Desain feed Instagram', text: '8 desain per bulan, termasuk carousel, pakai warna brand-mu.' } } }
];

// CV files: add the PDF to /public/cv and set href (e.g. '/cv/raditya-abib-web-developer.pdf'). Entries with href: null are not rendered.
export const cv = [
    { href: null, label: { en: 'Download CV — Web developer', id: 'Unduh CV · Web developer' } },
    { href: null, label: { en: 'Download CV — Designer', id: 'Unduh CV · Desainer' } }
];
