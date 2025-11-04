<template>
    <div class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-blue-100">
        <div v-for="(travelPlan, i) in package" :key="i" class="max-w-lg bg-white rounded-md shadow p-2 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden flex flex-col">
            <div class="px-2 py-2 flex-1">
                <h2 class="text-lg font-bold">{{travelPlan.nomForfait}}</h2>
                <p class="text-red-400 text-lg mt-2 mb-4"><strong>Prix: </strong>{{travelPlan.prix.toFixed(0)}} $</p>
            </div>
                <div class="overflow-hidden px-2">
                    <img class="aspect-4/3 object-cover" :src="travelPlan.image" alt="image" />
                </div>
            <div class="flex justify-center mb-3 px-2 pt-4">
                <router-link :to="{name: 'view-package', params: {id: travelPlan.id} }" class="btn-pink">Réserver</router-link>
            </div>
        </div>
     </div>
</template>
<script>
    export default {
        props: ['package', 'add']
    }
</script>