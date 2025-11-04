<template>
  <header class="lg:px-16 px-4 bg-red-400 flex flex-wrap items-center py-4 shadow-md">
    <div class="flex-1 flex justify-between items-center">
      <router-link class="text-3xl font-bold text-yellow-400" to="/">SunVacay</router-link>
    </div>
    <label for="menu-toggle" @click="toggleMenu" class="cursor-pointer md:hidden block">
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
          <li><router-link class="md:p-4 py-3 px-0 block hover:underline" :to="{ name:'home'}" @click="closeMenu">Accueil</router-link></li>
          <li><router-link class="md:p-4 py-3 px-0 block hover:underline" :to="{ name:'add-package'}" @click="closeMenu">Ajouter un forfait</router-link></li>
          <li><router-link class="md:p-4 py-3 px-0 block hover:underline" :to="{ name:'about' }" @click="closeMenu">À Propos</router-link></li>
          <li><router-link class="md:p-4 py-3 px-0 block hover:underline" :to="{ name:'packages' }" @click="closeMenu">Les Forfaits</router-link></li>
          <div class="relative inline-block">
            <button type="button" @click="toggleSideBar" class="flex items-center md:order-2 space-x-3 md:space-x-0 bg-blue-600 rounded px-1 cursor-pointer hover:bg-blue-400 ">
              <span>Mes réservations</span>
              <FaSuitcaseRolling class="h-4 w-6" />
            </button>
            <span class="absolute top-0 right-0 translate-x-1/2 -translate-y-2/4 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-1.5"></span>
          </div>
        </ul>
      </nav>
    </div>
  </header>
  <Hero/>
  <div class="font-sans min-h-screen mt-24">
    <div class="container mx-auto p-2 max-w-screen-lg ">
      <SideBar
      v-if="showCart"
      :toggle="toggleSideBar"
      :cartPackages="cartPackages"
      :package="package"
      :remove="removePlan"
      />
      <router-view
      :package="package" 
      :add="addToCart"
      :addPack="addPackage"
      :updatePack="updatePackage"
      :removePack="removePackage"
      :remove="removePlan"
      />
    </div>
  </div>
  <Footer/>
</template>

<script>
  import Hero from './components/Hero.vue';
  import Footer from './components/Footer.vue';
  import SideBar from './components/SideBar.vue';
  import { FaSuitcaseRolling  } from 'vue-icons-plus/fa';
  // import travelPlan from './travelPlan.json';
  import PackageDataService from './services/PackageDataService'

  export default {
    components: {
      Hero,
      Footer,
      SideBar,
      FaSuitcaseRolling, 
    },
      mounted () {
      PackageDataService.getAll()
      .then(response => {
        this.package = response.data
        // console.log(response.data)
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error)
      })
    },
    data() {
      return {
      menuOpen: false,
      showCart: false,
      package: [],
      cartPackages: {}
      }
    }, 
    methods: {
      toggleMenu(){
        this.menuOpen =!this.menuOpen;
      },
      closeMenu() {
        this.menuOpen = false;
      },
      toggleSideBar(){
        this.showCart = !this.showCart;
      },
      addPackage (travelPlan) {
      this.package.push(travelPlan)
      },
      updatePackage (index, data) {
      this.package[index] = data
      },
      removePackage (index) {
      this.package.splice(index,1)
      },
      addToCart(travelPlan, index){
      if (!this.cartPackages[travelPlan]) this.cartPackages[travelPlan] = 0
       this.cartPackages[travelPlan] += this.package[index].quantity
    },
      removePlan (nomForfait) {
      delete this.cartPackages[nomForfait]
      },
    }
  }
</script>

