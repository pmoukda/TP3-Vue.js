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
                    <router-link class='btn-pink btn-small mt-5' to="/apropos">En savoir plus</router-link>
                </div>
            </div>
            <div class='mt-15'>
                <h2>Nos Destinations populaires</h2>
                <div class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-blue-100">
                <!-- 
                    Liste des produits
                ))} -->
            </div>
            </div>
            <div class="flex justify-end">
                <router-link class='btn-pink btn-small mt-5' to="/forfaits">Voir plus</router-link>
            </div>
            <div class='mt-15 mb-6'>
                <h2>Galerie</h2>
                <div class="max-w-screen-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <img class='w-full h-full aspect-4/3' src="/img/Dubai.avif" alt="dubai" />
                    <img class='w-full h-full aspect-4/3' src="/img/egypt.webp" alt="egypt" />
                    <img class='w-full h-full aspect-4/3' src="/img/Monaco.jpg" alt="monaco" />
                    <img class='w-full h-full aspect-4/3' src="/img/Croisiere-Yangtse.jpg" alt="yantse" />
                    <img class='w-full h-full aspect-4/3' src="/img/suisse.jpg" alt="suisse" />
                    <img class='w-full h-full aspect-4/3' src="/img/tahiti-et-iles.jpg" alt="tahiti" />
                </div>
            </div>
        </div>
</template>
