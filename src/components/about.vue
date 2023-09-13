<template>
  <main id="about">
    <div class="thumbnail">
      <div class="card cardAbout" data-aos="fade-up">
        <p><strong>Shounen Shoujo</strong> adalah 日本 Bukatsu (Japan Club) Project SMKN 2 Kota Sukabumi. Di dirikan pada 19
          Februari 2023 guna menjadi wadah untuk para siswa-siswi di SMKN2 Kota Sukabumi untuk mengasah minat dan bakat di
          skema jejepangan.<br>
          Di Shounen Shoujo ada 3 bidang yang kita miliki, dimulai dari Nihongo (Bahasa Jepang), Manga Club (Menggambar),
          dan Bunka (Kebudayaan) seperti Anime, Tokusatsu, Cosplay, Dorama, Jpop, dan masih banyak lagi.
        </p>
      </div>
    </div>
  </main>
</template>

<style>
#about {
  min-height: 100vh;
}

.thumbnail {
  background: url('/src/assets/background/school.jpg');
  min-height: 100vh;
  background-size: cover;
  padding-top: 15%;
}

.card p {
  margin: 0;
}

.card p:not(:last-child) {
  margin-bottom: 1.5em;
}

.card {
  margin-top: 1000px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;

  max-width: 500px;
  padding: 35px;
  margin: auto;

  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(6px);
}

.card-footer {
  font-size: 0.65em;
  color: #446;
}

::selection {
  background-color: #1cb4e2;
  color: #ffffff;
}

@media (max-width: 768px) {
  .thumbnail {
    padding-top: 13em;
    padding-right: 3em;
    padding-left: 3em;
  }

  .cardAbout {
    margin-right: 0.7em;
    margin-left: 0.7em;
    font-size: 0.8em;
    height: fit-content;
    max-height: 100%;
  }
}
</style>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'About',
  mounted() {
    AOS.init(); // Inisialisasi AOS
  }
}
</script>