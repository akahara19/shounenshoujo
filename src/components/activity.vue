<template>
    <div id="activity">
        <div class='heading-wrapper'>
            <h1 class="mt-20"><strong>Kegiatan Kita (毎日)</strong></h1>
        </div>
        <div class='img-wrapper'>
            <div class="activity-card">
                <img class="img-activity" src="/src/assets/card-img/nihongo.png" alt="shoe">
                <h2 class="text-3xl mt-3"><strong>Nihongo</strong></h2>
                <p class="w-96">Nihongo merupakan kegiatan yang mempelajari Bahasa Jepang dari mulai tingkat dasar. Dalam
                    kegiatan ini, mempelajari tentang kosa kata, tata bahasa, serta cara pengucapan yang benar dalam Bahasa
                    Jepang.</p>
            </div>
            <div class="activity-card">
                <img class="img-activity bg-white" src="/src/assets/card-img/bunka.png" alt="bottle">
                <h2 class="text-3xl mt-3"><strong>Bunka</strong></h2>
                <p class="w-96">Bunka adalah kegiatan belajar tentang Kebudayaan Jepang yang mencakup berbagai aspek warisan
                    budaya. Ini mencakup elemen-elemen seperti anime, tokusatsu, cosplay, dorama, J-pop, serta seni
                    tradisional. </p>
            </div>
            <div class="activity-card">
                <img class="img-activity" src="/src/assets/card-img/manga.png" alt="banana">
                <h2 class="text-3xl mt-3"><strong>Manga Club</strong></h2>
                <p class="w-96">Manga Club merupakan kegiatan untuk melatih kreatifitas dalam hal menggambar, membuka
                    pintu untuk meresapi dunia imajinasi dan menghidupkan karakter melalui garis, bentuk, dan warna. </p>
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

#activity{
    background-image: url('/src/assets/background/bg2.jpg');
    padding-bottom: 1em;
}

.img-activity {
    --parallax: .1;
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

.img-activity:hover {
    clip-path: inset(0 0 0 calc(100% * var(--parallax) / (1 + var(--parallax))) round var(--radius));
    --x-axis: translateX(calc(-1 * calc(100% * var(--parallax) / (1 + var(--parallax))))) rotateY(calc(-1 * calc(90deg * var(--parallax))));
}

.img-wrapper {
    display: grid;
    place-content: center;
    grid-auto-flow: column;
    gap: 3rem;
    margin-bottom: 7em;
}

.heading-wrapper {
    display: flex;
    margin: 0 0 2.4rem 0;
    justify-content: center;
    color: white;
    font-size: 2.4rem;
    font-family: Poppins;
}
</style>
