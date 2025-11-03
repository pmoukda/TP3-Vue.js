<template>
    <div class=" lg:px-16 px-4">
        <div class='border border-gray-200 shadow-lg p-4 mb-10'>
                <h2>L'art du voyage, sur mesure</h2>
                <p class='mt-4'>Chez SunVacay, nous transformons <strong>vos rêves d’évasion en expériences inoubliables.</strong> Circuits organisés, séjours sur mesure ou escapades de dernière minute : notre équipe s’occupe de tout, pour que vous n’ayez qu’à profiter.</p>
                <ul class='flex flex-wrap gap-6 py-8'>
                    <li class='border border-gray-200 rounded p-2 bg-pink-100 text-pink-900'>Destinations d’exception</li>
                    <li class='border border-gray-200 rounded p-2 bg-pink-100 text-pink-900'>Expertise sur mesure </li>
                    <li class='border border-gray-200 rounded p-2 bg-pink-100 text-pink-900'>Accompagnement personnalisé</li>
                </ul>
                <div class="flex justify-end">
                    <router-link class='btn-pink btn-small mt-5' to="/about">En savoir plus</router-link>
                </div>
            </div>
            <div class='mt-15'>
                <h2>Nos Destinations populaires</h2>
                <div class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-blue-100">
                    <div v-for="(travelPlan, i) in package.slice(2, 6)" :key="i" class="max-w-lg bg-white rounded-md shadow p-2 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden flex flex-col">
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
            </div>
            <div class="flex justify-end">
                <router-link class='btn-pink btn-small mt-5' to="/packages">Voir plus</router-link>
            </div>
            <div class='mt-15 mb-6'>
                <h2>Galerie</h2>
                <div class="max-w-screen-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <img class='w-full h-full aspect-4/3' src="/img/dubai.avif" alt="dubai" />
                    <img class='w-full h-full aspect-4/3' src="/img/egypt.webp" alt="egypt" />
                    <img class='w-full h-full aspect-4/3' src="/img/monaco.jpg" alt="monaco" />
                    <img class='w-full h-full aspect-4/3' src="/img/croisiere-yangtse.jpg" alt="yantse" />
                    <img class='w-full h-full aspect-4/3' src="/img/suisse.jpg" alt="suisse" />
                    <img class='w-full h-full aspect-4/3' src="/img/tahiti-et-iles.jpg" alt="tahiti" />
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: ['package']
    }
</script>