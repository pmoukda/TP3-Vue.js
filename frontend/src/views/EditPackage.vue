<template>
    <div class="bg-blue-100 p-6 mb-8">
        <div v-if="!submitted">
             <form class="space-y-6">
                 <h2 class="text-2xl font-bold mb-6 text-center">Modifier un forfait</h2>
                 <div v-if="message" class="bg-red-500 mb-2 text-white p-2 rounded text-center">{{ message }}</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="form-control">
                        <label for="nomForfait">Nom du forfait</label>
                        <input class="input-group"
                            type="text"
                            id='nomForfait'
                            name='nomForfait'
                            placeholder="Nom du forfait"
                            v-model="package.nomForfait"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label for="prix">Prix</label>
                        <input class="input-group"
                            type="number"
                            id='prix'
                            name='prix'
                            min={0}
                            step={0.01}
                            placeholder="Entrez un prix"
                            v-model.number="package.prix"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label for="categorie">Catégorie</label>
                        <select v-model="package.categorie" class="input-group" name="categorie" id="categorie" required>
                            <option value="">Choisir une categorie</option>
                            <option value="Sport">Sport</option>
                            <option value="bien-etre">Bien-être</option>
                            <option value="plage">Plage</option>
                            <option value="aventure">Aventure</option>
                            <option value="croissière">Croisière</option>
                            <option value="culturel">Culturel</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="image">Image</label>
                        <input class="input-group"
                            type="url"
                            id='image'
                            name='image'
                            placeholder="Entrez un URL"
                            v-model="package.image"
                            required
                        />
                    </div>
                </div>
                <div class="form-control">
                    <label for="description">Description</label>
                    <textarea class="input-group h-50"
                        id='description'
                        name='description'
                        placeholder="Description"
                        v-model="package.description"
                        required
                    ></textarea>
                </div>
                <button type="button" @click="updatePackage" class="btn-blue mt-6 mb-6 cursor-pointer">Modifier</button>
                <button type="button" @click="deletePackage" class="w-full text-lg bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 cursor-pointer">
                    Supprimer
                </button>
            </form>
        </div>    
        <div v-else>
            <div class="text-green-800 font-semibold text-center">Forfait modifié avec succès!</div>
        </div>
    </div>
    <router-link class="text-pink-600 px-2 py-4 underline hover:text-pink-800 gap-3" :to="{ name:'packages'}"> Retour aux forfaits</router-link>
</template>

<script>
    import PackageDataService from '../services/PackageDataService'

    export default {
        props: ['package', 'updatePack', 'removePlan', 'removePack'], 
        data() {
            return{
                message: null,
                submitted: false,
                package: {},
                id: parseInt(this.$route.params.id)
            }
        },
        mounted () {
            PackageDataService.get(this.id)
            .then(response => {
                this.package = response.data
            })
        },
        computed: {
            planIndex () {
                const index = this.inventory.findIndex((p) => {
                    return p.id === this.id
                })
            return index
            }
        },
        methods: {
            updatePackage () {
                PackageDataService.update(this.id,this.package)
                .then((response) => {
                    // console.log(response.data)
                    this.updatePack(this.planIndex, this.package)
                    this.message = null 
                    this.submitted = true 
                })
                .catch((e)=> {
                    this.message = e.response.data.message  
                })
            },
            deletePackage(){
                PackageDataService.delete(this.id)
                .then(response => {
                    this.removePack(this.package.nomForfait)
                    this.removePlan(this.planIndex)
                    this.$router.push({name: 'packages'})
                })
                .catch((e) => {
                    this.message = e.response.data.message
                })
            }  
        }
    }
         
</script>