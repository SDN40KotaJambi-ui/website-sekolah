// Initialize Lucide Icons
lucide.createIcons();

// Gallery Data
const galleryData = {
  pramuka: {
    title: 'Pramuka',
    images: [
      { url: 'https://images.pexels.com/photos/19716149/pexels-photo-19716149.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'A group of scouts smiling and posing with the Indonesian flag outdoors' },
      { url: 'https://images.pexels.com/photos/9303784/pexels-photo-9303784.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Children wearing scout uniforms participate in outdoor activities at a campsite' }
    ]
  },
  cermat: {
    title: 'Cerdas Cermat & Teknologi Pembelajaran',
    images: [
      { url: 'https://images.pexels.com/photos/8087937/pexels-photo-8087937.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Children actively participating in classroom learning environment' },
      { url: 'https://images.pexels.com/photos/8465436/pexels-photo-8465436.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Group of kids playing chess indoor at school' }
    ]
  },
  drumband: {
    title: 'Drum Band',
    images: [
      { url: 'https://images.pexels.com/photos/36447911/pexels-photo-36447911.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'A vibrant youth marching band performing in a festive outdoor parade' },
      { url: 'https://images.pexels.com/photos/20265661/pexels-photo-20265661.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Group of children in vibrant traditional uniforms during a festive street parade' }
    ]
  },
  tari: {
    title: 'Tari Tradisional',
    images: [
      { url: 'https://images.pexels.com/photos/35365582/pexels-photo-35365582.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Young dancers in vibrant costumes perform a traditional Balinese dance' },
      { url: 'https://images.pexels.com/photos/35113938/pexels-photo-35113938.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Colorful cultural dance with children in traditional attire' }
    ]
  },
  karate: {
    title: 'Karate',
    images: [
      { url: 'https://images.pexels.com/photos/10404785/pexels-photo-10404785.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Young boys in karate uniforms meditating in a dojo' },
      { url: 'https://images.pexels.com/photos/19437725/pexels-photo-19437725.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Kids in martial arts uniforms sitting in a dojo' }
    ]
  },
  futsal: {
    title: 'Futsal',
    images: [
      { url: 'https://images.pexels.com/photos/34007009/pexels-photo-34007009.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Group of young boys engaged in a lively indoor soccer game' },
      { url: 'https://images.pexels.com/photos/16378321/pexels-photo-16378321.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'A teenage girl skillfully maneuvers the futsal ball' }
    ]
  },
  dokter: {
    title: 'Dokter Kecil',
    images: [
      { url: 'https://images.pexels.com/photos/3992931/pexels-photo-3992931.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'A cheerful young girl receives a band-aid' },
      { url: 'https://images.pexels.com/photos/7447002/pexels-photo-7447002.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Young girl in clinic receiving a checkup' }
    ]
  },
  hadrah: {
    title: 'Kompangan/Hadrah',
    images: [
      { url: 'https://images.pexels.com/photos/19011910/pexels-photo-19011910.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Group of children enjoying and playing traditional musical instruments' },
      { url: 'https://images.pexels.com/photos/36628395/pexels-photo-36628395.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Group of boys playing drums against a historic stone wall' }
    ]
  },
  quran: {
    title: 'Seni Baca Al-Qur\'an',
    images: [
      { url: 'https://images.pexels.com/photos/35105938/pexels-photo-35105938.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Three children reading the Quran together' },
      { url: 'https://images.pexels.com/photos/37350652/pexels-photo-37350652.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'A young boy in a traditional outfit reading the Quran' }
    ]
  },
  solo: {
    title: 'Solo Song',
    images: [
      { url: 'https://images.pexels.com/photos/236149/pexels-photo-236149.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cute young girl passionately singing into a microphone on stage' },
      { url: 'https://images.pexels.com/photos/7521306/pexels-photo-7521306.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'A young girl singing into a microphone in a recording studio' }
    ]
  },
  cerita: {
    title: 'Cerita Bergambar',
    images: [
      { url: 'https://images.pexels.com/photos/8423050/pexels-photo-8423050.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Young student proudly presents a hand-drawn family portrait' },
      { url: 'https://images.pexels.com/photos/1822375/pexels-photo-1822375.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Child attentively drawing in a classroom setting' }
    ]
  },
  anyam: {
    title: 'Menganyam',
    images: [
      { url: 'https://images.pexels.com/photos/36382589/pexels-photo-36382589.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Three generations crafting traditional baskets' },
      { url: 'https://images.pexels.com/photos/35157712/pexels-photo-35157712.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Women engaging in traditional textile weaving' }
    ]
  },
  modeling: {
    title: 'Modeling',
    images: [
      { url: 'https://images.pexels.com/photos/5767321/pexels-photo-5767321.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'A young girl wearing a stylish pink outfit poses confidently' },
      { url: 'https://images.pexels.com/photos/5767293/pexels-photo-5767293.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'A young girl sings on stage wearing a colorful pink outfit' }
    ]
  }
};

// Program Data
const programs = [
  { id: 'pramuka', name: 'Pramuka', desc: 'Membangun karakter dan kepemimpinan melalui kegiatan outdoor dan pelatihan disiplin.' },
  { id: 'cermat', name: 'Cerdas Cermat', desc: 'Kompetisi pengetahuan untuk meningkatkan pemahaman akademik siswa.' },
  { id: 'drumband', name: 'Drum Band', desc: 'Menampilkan bakat musik dan seni marching untuk berbagai acara.' },
  { id: 'tari', name: 'Tari Tradisional', desc: 'Melestarikan budaya melalui pembelajaran seni tari nusantara.' },
  { id: 'karate', name: 'Karate', desc: 'Mengembangkan disiplin, kepercayaan diri, dan kemampuan pertahanan diri.' },
  { id: 'futsal', name: 'Futsal', desc: 'Olahraga tim untuk meningkatkan kerjasama dan kesehatan fisik.' },
  { id: 'dokter', name: 'Dokter Kecil', desc: 'Melatih siswa menjadi petugas kesehatan sekolah yang bertanggung jawab.' },
  { id: 'hadrah', name: 'Kompangan/Hadrah', desc: 'Seni musik tradisional untuk mengekspresikan kreativitas siswa.' },
  { id: 'quran', name: 'Seni Baca Al-Qur\'an', desc: 'Pembelajaran membaca dan menghafal Al-Qur\'an dengan tartil yang baik.' },
  { id: 'solo', name: 'Solo Song', desc: 'Bakat menyanyi solo untuk mengembangkan kepercayaan diri di atas panggung.' },
  { id: 'cerita', name: 'Cerita Bergambar', desc: 'Seni bercerita dengan ilustrasi untuk mengasah kreativitas dan imajinasi.' },
  { id: 'modeling', name: 'Modeling', desc: 'Program fashion dan etika untuk mengembangkan kepercayaan diri siswa.' }
];

// Render Programs
function renderPrograms() {
  const container = document.getElementById('programs-container');
  programs.forEach(program => {
    const programImg = galleryData[program.id]?.images[0]?.url || 'https://images.pexels.com/photos/35365582/pexels-photo-35365582.jpeg?auto=compress&cs=tinysrgb&w=800';
    const card = document.createElement('button');
    card.className = 'rounded-2xl overflow-hidden shadow-lg fade-in cursor-pointer hover:shadow-xl transition-shadow text-left bg-white';
    card.innerHTML = `
      <img class="w-full h-48 object-cover" src="${programImg}" loading="lazy" alt="${program.name}">
      <div class="p-6">
        <h4 class="font-bold text-xl text-gray-900">${program.name}</h4>
        <p class="mt-2 text-gray-600">${program.desc}</p>
      </div>
    `;
    card.addEventListener('click', () => openGallery(program.id));
    container.appendChild(card);
  });
}

// Gallery Modal Functions
function openGallery(programId) {
  const modal = document.getElementById('gallery-modal');
  const data = galleryData[programId];
  if (!data) return;

  document.getElementById('gallery-title').textContent = data.title;
  const mainImg = document.getElementById('gallery-main-img');
  mainImg.src = data.images[0].url;
  mainImg.alt = data.images[0].alt;

  const thumbsContainer = document.getElementById('gallery-thumbs');
  thumbsContainer.innerHTML = '';
  data.images.forEach((img, idx) => {
    const thumb = document.createElement('img');
    thumb.src = img.url;
    thumb.alt = img.alt;
    thumb.className = 'gallery-thumb rounded w-full h-20 object-cover ' + (idx === 0 ? 'active' : '');
    thumb.addEventListener('click', () => {
      mainImg.src = img.url;
      mainImg.alt = img.alt;
      document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
    thumbsContainer.appendChild(thumb);
  });

  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  modal.style.display = 'flex';
}

function closeGallery() {
  const modal = document.getElementById('gallery-modal');
  modal.classList.add('modal-hidden');
  modal.classList.remove('modal-visible');
  modal.style.display = 'none';
}

// Event Listeners
document.getElementById('close-gallery-btn').addEventListener('click', closeGallery);
document.getElementById('gallery-modal').addEventListener('click', (e) => {
  if (e.target.id === 'gallery-modal') closeGallery();
});

// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Fade In Animation on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('#contact-slides > div');
const totalSlides = slides.length;
const slidesContainer = document.getElementById('contact-slides');

function updateSlide() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.contact-indicator').forEach((btn, idx) => {
    if (idx === currentSlide) {
      btn.classList.add('bg-white');
      btn.classList.remove('bg-white/50');
    } else {
      btn.classList.remove('bg-white');
      btn.classList.add('bg-white/50');
    }
  });
}

document.getElementById('contact-prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
});

document.getElementById('contact-next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
});

document.querySelectorAll('.contact-indicator').forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentSlide = parseInt(e.target.dataset.slide);
    updateSlide();
  });
});

// Initialize
renderPrograms();
lucide.createIcons();

// Auto-update icons when content changes
const observer2 = new MutationObserver(() => {
  lucide.createIcons();
});
observer2.observe(document.body, { childList: true, subtree: true });