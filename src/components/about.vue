<template>
  <main id="about">
    <div class="thumbnail">
      <div class="card cardAbout" data-aos="fade-up">
        <p><strong>Shounen Shoujo</strong> adalah 日本 Bukatsu Project (Japan Club) SMKN 2 Kota Sukabumi. Shounen Shoujo ini didirikan pada 19
          Februari 2023 dengan tujuan menjadi wadah bagi para siswa-siswi di SMKN2 Kota Sukabumi untuk mengembangkan minat dan bakat mereka dalam berbagai aspek budaya Jepang.<br> 
          Di Shounen Shoujo, terdapat tiga bidang utama yang dapat diikuti, yaitu Nihongo (Bahasa Jepang), Manga Club (Menggambar),
          dan Bunka (Kebudayaan) seperti Anime, Tokusatsu, Cosplay, Dorama, Jpop. <br> Dengan beragam bidang ini, Shounen Shoujo menjadi tempat yang menarik bagi siswa-siswi SMKN2 Kota Sukabumi untuk mengembangkan minat mereka dalam berbagai aspek budaya Jepang.
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
  margin-top: 9000px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;

  max-width: 600px;
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


@media (min-width: 1024px) {
  .thumbnail {
    padding-top: 10%;
  }

  .cardAbout {
    font-size: 1em;
  }
}

@media (max-width: 768px) {
  .thumbnail {
    scale: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 3em;
    padding-left: 3em;
  }

  .cardAbout {
    margin: 2em auto;
    margin-right: 0.4em;
    margin-left: 0.4em;
    font-size: 0.6em;
    height: fit-content;
    max-height: 100%;
    scale: 1.3;
  }
  
  .card{
    margin-top: -10em;
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