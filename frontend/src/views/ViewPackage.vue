<template>
  <div class="max-w-screen-md mx-auto p-4 bg-blue-100 mb-10">
    <div class="bg-white rounded-md shadow">
      <img class="rounded-t w-full object-cover" :src="travelPlan.image" alt="Image" />
      <div class="border-b border-gray-300 flex items-center justify-between p-4">
        <p class="text-red-400 text-lg mt-2 mb-4"> <strong>Catégorie -</strong> {{travelPlan.categorie}}</p>
        <small>Forfait: #{{travelPlan.id}}</small>
      </div>
      <div class="flex-1 p-4">
          <h2 class="text-2xl font-bold">{{travelPlan.nomForfait}}</h2>
          <p class="text-gray-700 text-lg mt-4"> {{travelPlan.description}} </p>
      </div>
      <div class="flex justify-between p-4 ">
        <p class="text-xl text-red-400 mb-4"><strong>Prix: </strong> {{travelPlan.prix}} $</p>
        <button @click="add(travelPlan.nomForfait, planIndex)" class="btn-pink btn-small cursor-pointer">Réserver</button>
      </div>
    </div>
    <div class="flex justify-between items-center text-pink-600 px-2 py-4 underline hover:text-pink-800 gap-3 mt-3">
      <div class=" flex gap-1">
        <FaAngleDoubleLeft /><router-link :to="{ name: 'packages' }"> Retour aux forfaits</router-link>
      </div>
        
      <router-link :to="{name: 'edit-package', params: { id: travelPlan.id} }" class="  btn-small-blue  flex gap-1 "><FaRegEdit />Modifier </router-link>
    </div>
  </div>     
</template>

<script>

import { FaAngleDoubleLeft, FaRegEdit } from 'vue-icons-plus/fa'

export default{
  props:['package', 'add'],
  components: {
    FaAngleDoubleLeft,
    FaRegEdit
  },
  computed: {
    travelPlan () {
        const travelPlan = this.package.find((plan) =>{
          return plan.id == Number(this.$route.params.id)
        }) 
        // console.log(travelPlan)
        return travelPlan
    },
    planIndex () {
        const index = this.package.findIndex((plan) => {
          return plan.id == Number(this.$route.params.id)
        })
        return index
    }
  }
}
</script>