<template>
    <div class="gallery-page">
        <div class="external" id="gallery">
        <div class="horizontal-scroll-wrapper">
            <div class="img-wrappergallery slower">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1"><img
                        src="/src/assets/fotbar/1.jpg" alt="">
                </a>
            </div>

            <div class="img-wrappergallery faster">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1"
                    rel="noopener">
                    <img src="/src/assets/fotbar/2.jpg" alt="">
                </a>
            </div>


            <div class="img-wrappergallery">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1"
                    rel="noopener">
                    <img src="/src/assets/fotbar/3.jpg" alt="">
                </a>
            </div>

            <div class="img-wrappergallery slower">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1" rel="noopener">
                    <img src="/src/assets/fotbar/9.jpg" alt="">
                </a>
            </div>

            <div class="img-wrappergallery faster1">
                <a href="#galerry"
                    data-lightbox="gallery" data-title="Image 1" rel="noopener">
                    <img src="/src/assets/fotbar/4.jpg" alt="">
                </a>
            </div>

            <div class="img-wrappergallery slower slower2">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1"
                    rel="noopener">
                    <img src="/src/assets/fotbar/6.jpg" alt="">
                </a>
            </div>

            <div class="img-wrappergallery">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1"
                    rel="noopener">
                    <img src="/src/assets/fotbar/7.jpg" alt="">
                </a>
            </div>

            <div class="img-wrappergallery slower">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1"
                    rel="noopener">
                    <img src="/src/assets/fotbar/5.jpg" alt="">
                </a>
            </div>

            <div class="img-wrappergallery">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1"
                    rel="noopener">
                    <img src="/src/assets/fotbar/10.jpg" alt="">
                </a>
            </div>

            <div class="img-wrappergallery slower last">
                <a href="#galerry" data-lightbox="gallery" data-title="Image 1"
                    rel="noopener">
                    <img src="/src/assets/fotbar/8.jpg" alt="">
                </a>
            </div>

            
        </div>
    </div>
    </div>
</template>

<script>
export default {
  mounted() {
    const horizontalScrollWrapper = document.querySelector('.horizontal-scroll-wrapper');

    let startX;
    let currentX;

    horizontalScrollWrapper.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    horizontalScrollWrapper.addEventListener('touchmove', (e) => {
      if (startX === undefined) {
        return;
      }
      currentX = e.touches[0].clientX;
      const scrollOffset = startX - currentX;
      horizontalScrollWrapper.scrollLeft += scrollOffset;
      startX = currentX;
    });

    horizontalScrollWrapper.addEventListener('touchend', () => {
      startX = undefined;
    });
  },
};
</script>

<style>
/* Inspired by this pen by Pieter Biesemans https://codepen.io/pieter-biesemans/pen/BQBWXX and My Mother Before Me project http://mymotherbeforeme.com/ */



/* hide scrollbar */
::-webkit-scrollbar {
    width: 1px;
    height: 1px;
}

::-webkit-scrollbar-button {
    width: 1px;
    height: 1px;
}

.gallery-page{
    height: 100vh;
    background: url('/src/assets/background/bg-gallery.jpg');
    background-size: cover;
}

.external {
    /* overflow:  */
    height: 20vh;
}

.horizontal-scroll-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vh;
    transform: rotate(-90deg) translate3d(0, -100vh, 0);
    transform-origin: right top;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    height: 100vw;
    perspective: 1px;
    transform-style: preserve-3d;
    padding-bottom: 10rem;
    overflow-x: auto; /* Mengaktifkan scrollbar horizontal */
    white-space: nowrap; /* Menghindari pemisahan ke baris baru */
    -webkit-overflow-scrolling: touch; /* Efek scrolling halus di perangkat iOS */
}

.img-wrappergallery {
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    transform-origin: 50% 40%;
    transform: rotate(90deg) translateZ(.1px) scale(0.9) translateX(0px) translateY(-3vh);
    transition: 1s;
}

.img-wrappergallery:hover {
    min-height: 65vh;
}

.slower {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(-10vh);
}

.slower1 {
    transform: rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0%) translateY(8vh);
}

.slower2 {
    transform: rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0%) translateY(2vh);
}

.slower-down {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(16vh);
}

.faster {
    transform: rotate(90deg) translateZ(.15px) scale(0.8) translateX(0%) translateY(14vh);
}

.faster1 {
    transform: rotate(90deg) translateZ(.05px) scale(0.8) translateX(0%) translateY(10vh);
}

.fastest {
    transform: rotate(90deg) translateZ(.22px) scale(0.7) translateX(-10vh) translateY(-15vh);
}

.vertical {
    transform: rotate(90deg) translateZ(-.15px) scale(1.15) translateX(0%) translateY(0%);
}

.last {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh) translateY(-8vh);
}

.scroll-info,
header {
    position: absolute;
    left: 1rem;
}


header {
    bottom: 1rem;
}

.scroll-info {
    top: 1rem;
}



.img-wrappergallery a {
    overflow: hidden;
    display: block;
    padding: 1vh;
    background: #efecdb;
    box-shadow: 0 10px 50px #5f2f1182;
}

.img-wrappergallery a img{
    max-width: 45vh;
    max-height: 50vh;
    transition: .5s;
    vertical-align: top;
}


.scroll-info {
    margin: 0;
}

.scroll-info {
    display: flex;
    align-items: center;
}

.icon svg {
    width: 50px;
    fill: currentcolor;
}

/* Untuk perangkat mobile dengan lebar maksimum 768px */

/* Hapus transformasi dan transisi pada perangkat seluler dengan lebar maksimum 768px */
@media (max-width: 768px) {
    .horizontal-scroll-wrapper {
        overflow-y: scroll !important;
        overflow-x: scroll !important; /* Aktifkan scrolling horizontal */
        white-space: nowrap; /* Hindari pemisahan ke baris baru */
        -webkit-overflow-scrolling: touch;
        padding: 0;
    }

    .horizontal-scroll-wrapper::-webkit-scrollbar-thumb {
    background-color: transparent; /* Hapus warna latar belakang thumb */
  }
    
    .img-wrappergallery {
        transform: rotate(90deg) !important;
    }

    .scroll-info,
    header {
    position: relative;
    left: 1rem;
    }
}
</style>

