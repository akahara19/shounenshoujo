<script setup>
import welcome from "./components/welcome.vue";
import about from "./components/about.vue";
import activity from "./components/activity.vue";
import gallery from "./components/gallery.vue";

</script>

<template>
  <nav class="w-full bg-blue-500 border-gray-200 dark:bg-gray-900" id="nav">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#youkoso!" class="flex items-center">
        <img
          src="../src/assets/shounenshoujo.png"
          class="h-12 mr-3"
          alt="ShounenShoujo Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >ShounenShoujo</span
        >
      </a>
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div :class="menuClass" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#youkoso!" v-smooth-scroll
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-200 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about" v-smooth-scroll
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-200 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >About</a
            >
          </li>
          <li>
            <a
              href="#activity" v-smooth-scroll
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-200 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Activity</a
            >
          </li>
          <li>
            <a
              href="#gallery" v-smooth-scroll
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-200 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
              >Gallery</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <welcome />
  <about />
  <activity />
  <gallery />
</template>
<style>
nav {
  position: fixed;
  z-index: 2;
}

/* Gaya CSS untuk scroll halus */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

nav{
    max-width: 100vw;
}

@media screen and (max-width: 768px) {
 
}
</style>
<script>

export default {
    
  data() {
    return {
      isMenuOpen: false,
      isTransparent: true, // Initial state for transparency
    };
    
  },
  computed: {
    
    menuClass() {
      return {
        hidden: !this.isMenuOpen,
        "w-full": this.isMenuOpen,
        "md:block md:w-auto": !this.isMenuOpen,
      };
    },
    navClass() {
      return {
        "bg-white": this.isTransparent, // Apply white background when transparent
        "bg-opacity-75": !this.isTransparent, // Apply semi-transparent background when not transparent
      };
    },
  },
  mounted() {
    
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    
  },
};


</script>
  