<template>
  <header class="lg:px-16 px-4 bg-red-400 flex flex-wrap items-center py-4 shadow-md">
    <div class="flex-1 flex justify-between items-center">
      <router-link class="text-3xl font-bold text-yellow-400" to="/">SunVacay</router-link>
    </div>
    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg class="fill-current text-white w-6 h-6"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input v-model="menuOpen" id="menu-toggle" type="checkbox" class="hidden" aria-label="Menu"/>
    <div :class="[
          menuOpen ? 'block' : 'hidden','md:flex md:items-center md:w-auto w-full'
          ]" id="menu">
      <nav>
         <ul class="md:flex items-center justify-between text-lg text-white pt-4 md:pt-0">
          <li><router-link class="md:p-4 py-3 px-0 block hover:underline" to="/" @click="closeMenu">Accueil</router-link></li>
          <li><router-link class="md:p-4 py-3 px-0 block hover:underline" to="/apropos" @click="closeMenu">À Propos</router-link></li>
          <li><router-link class="md:p-4 py-3 px-0 block hover:underline" to="/forfaits" @click="closeMenu">Les Forfaits</router-link></li>
          <div class="relative inline-block">
            <button type="button" class="mr-2 cursor-pointer">
              <Io5Cart class="text-2xl" />
            </button>
            <span class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/4 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5"></span>
          </div>
        </ul>
      </nav>
    </div>
  </header>
  <Hero/>
  <div class="font-sans min-h-screen mt-24">
    <div class="container mx-auto p-2 max-w-screen-lg ">
      <router-view/>
    </div>
  </div>
  <Footer/>
</template>

<script>
  import Hero from './components/Hero.vue';
  import Footer from './components/Footer.vue';
  import { Io5Cart  } from 'vue-icons-plus/io5';

  export default {
      components: {
        Hero,
        Footer,
        Io5Cart   
      },
      data() {
        return {
        menuOpen: false
        }
      }, 
      methods: {
        toggleMenu(){
          this.menuOpen =!this.menuOpen;
        },
        closeMenu() {
          this.menuOpen = false;
        } 
      }
  }
</script>

