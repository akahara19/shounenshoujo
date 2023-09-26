<template>
  <div id="activity" class="activity">
    <div class="heading-wrapper mt-5 pt-5">
      <h1 class="mt-20"><strong>Acitvity (毎日)</strong></h1>
    </div>
    <div class="img-wrapper">
      <div class="activity-card" data-aos="zoom-out-up"  data-aos-duration="800">
        <img class="img-activity" src="/src/assets/card-img/nihongo.png" alt="nihongo" loading="lazy" />
        <div class="text nigonho">
          <h2 class="text-3xl mt-3" style="text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.9);"><strong>Nihongo</strong></h2>
          <p class="w-96 pt-2 " style="text-shadow: 3px 2px 1px rgba(0, 0, 0, 0.9);">
            Nihongo (Bahasa Jepang) adalah kegiatan pembelajaran bahasa Jepang dari tingkat dasar. Di sini, Anda akan belajar tentang kosakata, tata bahasa, dan pengucapan yang benar dalam bahasa Jepang.
          </p>
        </div>
      </div>
      <div class="activity-card" data-aos="zoom-out-up"  data-aos-duration="800">
        <img class="img-activity bg-white" src="/src/assets/card-img/bunka.png" alt="bunka" loading="lazy" />
        <div class="text">
          <h2 class="text-3xl mt-3" style="text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.9);"><strong>Bunka</strong></h2>
          <p class="w-96 pt-2" style="text-shadow: 3px 2px 1px rgba(0, 0, 0, 0.9);">
            Bunka adalah kegiatan pembelajaran tentang budaya Jepang yang melibatkan beragam aspek warisan budaya. Ini termasuk elemen seperti anime, tokusatsu, cosplay, dorama, J-pop, dan seni tradisional.
          </p>
        </div>
      </div>
      <div class="activity-card" data-aos="zoom-out-up"  data-aos-duration="800">
        <img class="img-activity" src="/src/assets/card-img/manga.png" alt="manga" loading="lazy" />
        <div class="text">
          <h2 class="text-3xl mt-3" style="text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.9);"><strong>Manga Club</strong></h2>
          <p class="w-96 pt-2" style="text-shadow: 3px 2px 1px rgba(0, 0, 0, 0.9);">
            Manga Club adalah kegiatan yang mendorong kreativitas dalam seni menggambar, membuka pintu bagi imajinasi, dan menghidupkan karakter melalui garis, bentuk, dan warna.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activity-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  font-family: Poppins;
}

.text p{
  font-size: 1.1em;
}

#activity {
  background-image: url("/src/assets/background/bg-activity2.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: darken;
}

.img-activity {
  --parallax: 0.1;
  /* Parallax factor */
  --radius: 1rem;
  /* Radius */
  cursor: pointer;
  aspect-ratio: calc(1 + var(--parallax));
  width: 20rem; 
  clip-path: inset(0 calc(100% * var(--parallax) / (1 + var(--parallax))) 0 0 round var(--radius));
  object-fit: cover;
  transform: perspective(40rem) var(--x-axis, rotateY(var(--angle)));
  transition: 0.5s;
}

/* .img-activity:hover {
  clip-path: inset(0 0 0 calc(100% * var(--parallax) / (1 + var(--parallax))) round var(--radius));
  --x-axis: translateX(calc(-1 * calc(100% * var(--parallax) / (1 + var(--parallax))))) rotateY(calc(-1 * calc(90deg * var(--parallax))));
} */

.img-wrapper {
  display: grid;
  place-content: center;
  grid-auto-flow: column;
  gap: 3rem;
  margin-bottom: 7em;
  scale: 0.8;
}

.heading-wrapper {
  display: flex;
  margin: 0 0 2.4rem 0;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-size: 2.4rem;
  font-family: Poppins;
}

img[loading="lazy"] {
  transition: opacity 0.5s ease in;
}

img[loading="lazy"].loaded {
  opacity: 1;
}

@media (max-width: 768px) {
  .heading-wrapper {
    font-size: 1.8rem;
    text-shadow: 0 2px 1px black;
    margin-bottom: -1em;
  }

  .activity{
    max-height: fit-content;
    overflow-x: hidden;
    background-blend-mode: color;
    margin-bottom: -5em;
    background-position: center;
  }

  .img-wrapper {
    grid-auto-flow: row;
    gap: 1rem;
    margin-bottom: -4rem;
  }

  .activity-card {
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    margin-left: 2.2em;
  }

  .img-activity {
    width: 100%;
    height: auto;
    aspect-ratio: unset;
    clip-path: unset;
    transform: none;
    cursor: auto;
    margin-bottom: 1rem; /* Tambahkan margin bawah agar gambar tidak melebihi teks */
  }

  .img-activity {
    --parallax: 0.1;
    /* Parallax factor */
    --radius: 1rem;
    /* Radius */
    cursor: auto;
    aspect-ratio: calc(1 + var(--parallax));
    width: 20rem;
    clip-path: inset(0 calc(100% * var(--parallax) / (1 + var(--parallax))) 0 0 round var(--radius));
    object-fit: cover;
    transform: perspective(40rem) var(--x-axis, rotateY(var(--angle)));
    transition: 0.5s;
  }

  .text {
    margin-right: 1.3em;
    flex-wrap: wrap;
    font-size: 0.9em;
  }

  .text h2{
    font-weight: bold;
    padding: 0.2em;
  }
  .text p {
    font-weight: bold;
    padding: 0.5em;
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
