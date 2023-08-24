<template>
    <div class="wrapper">
        <video class="background-video opacity-75" playsinline autoplay muted loop 
            poster="bg.png">
            <source src="wall.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <img class="title" src="text/shounenshoujo.png" />
    </div>
</template>

<style>
body {
    width: 100%;
    height: 100%;
    margin: 0;
    background: black;
    overflow-x: hidden;
}

img {
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    object-fit: cover;
}

.background-video {
    width: 100vw;
    background: url("bg.png");
    background-size: cover;
    position: relative;
}

.title {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
}

@media (max-aspect-ratio: 16/9) {
    .wrapper {
        height: 100vh;
        position: relative;
    }

    .background-video {
        height: 100vh;
        width: 177.78vh;
        position: absolute;
        left: 50%;
        /* % of surrounding element */
        top: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }

    .title {
        width: 70%;
    }
}
</style>



