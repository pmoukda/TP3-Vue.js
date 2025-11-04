<template>
    <aside class="fixed top-0 right-0 w-125 bg-white shadow-lg h-full z-1 flex flex-col"
  >
    <!-- En-tête -->
    <!-- <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold">Mes réservations</h2>
      <button @click="toggle" class="text-2xl cursor-pointer">&times;</button>
    </div> -->

    <!-- Liste des articles -->
    <!-- <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <p v-if="!Object.keys(cartPackages).length">Vous n'avez pas de réservation.</p>
      <div
        v-for="(quantity, key, id ) in cartPackages"
        class="flex items-center space-x-3">
        <h3>Forfait</h3>
        <p>{{ key }}</p>
         <img :src="getImage(key)" alt="key" class="w-14 h-14 rounded" /> -->
         <!-- <img src="/img/dubai.avif" alt="dubai">
        <div>
          <p class="font-medium"> Forfait: {{ key}}</p>
          <span class="text-gray-500 text-sm">
            {{ (getPrice(key)*quantity).toFixed(0)}} $
          </span>
        </div>
      </div>
    </div> --> 
    <!-- Pied -->
    <!-- <div class="border-t border-gray-200 p-4 text-right">
      <p class="font-semibold mb-2">Total : {{ getTotal() }} $</p>
      <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full">
        Réserver Maintenant
      </button>
    </div> -->
    <!-- En-tête -->
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <h2 class="text-lg font-semibold">Mes réservations</h2>
      <button @click="toggle" class="text-2xl cursor-pointer">&times;</button>
    </div>

    <!-- Liste des articles -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <p v-if="!Object.keys(cartPackages).length">Vous n'avez pas de réservation.</p>
      <div class="flex items-center space-x-3 ">
        <img src="/img/dubai.avif" class="max-w-[150px] max-h-[150px]" alt="dubai">
       
          <!--<img :src="getImage(key)" alt="key" class="w-14 h-14 rounded" /> -->
        <div>
          <p class="font-medium"> Forfait: Dubai</p>
          <span class="text-gray-500 text-sm">
            100 $
          </span>
        </div>
      </div>
    </div> 
    <!-- Pied -->
    <div class="border-t border-gray-200 p-4 text-right">
      <p class="font-semibold mb-2">Total : {{ getTotal() }} $</p>
      <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full">
        Réserver Maintenant
      </button>
    </div>
  </aside>
</template>

<script>
    export default {
      props: ['toggle', 'cartPackages','package'],

      methods: {
        getPrice(name) {
          const packages = this.package.find((plan) =>{
            return plan.name === name
          })
          return packages.prix

        },
        getImage(name) {
          const packages = this.package.find((plan) =>{
            return plan.name === name
          })
          return packages.image
        },
        getTotal () {
            const total = Object.entries(this.cartPackages).reduce((acc, curr) => {
                return acc + (curr[1] * this.getPrice(curr[0]))
            }, 0)
            return total.toFixed(0)
        }
      }
    }
</script>   