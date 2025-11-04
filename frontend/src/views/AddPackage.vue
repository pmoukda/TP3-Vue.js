<template>
    <div class="bg-blue-100 p-6 mb-8">
        <div v-if="!submitted">
             <form class="space-y-6">
                 <h2 class="text-2xl font-bold mb-6 text-center">Ajouter un forfait</h2>
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
                        />
                    </div>
                    <div class="form-control">
                        <label for="categorie">Catégorie</label>
                        <select v-model="package.categorie" class="input-group" name="categorie" id="categorie">
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
                    ></textarea>
                </div>
                <button type="button" @click="savePackage" class="btn-blue mt-6 mb-6">Ajouter</button>
            </form>
        </div>    
        <div v-else>
            <div class="text-green-800 font-semibold mb-4">Création du forfait réussit!</div>
            <button @click="newPackage" class="w-full bg-green-700 text-white p-2 rounded-3xl hover:bg-green-800">
                Ajouter un nouveau forfait
            </button>
        </div>
    </div>
</template>

<script>
    import PackageDataService from '../services/PackageDataService'

    export default {
        props: ['addPack'], 
        data() {
            return{
                message: null,
                submitted: false,
                package: {
                    nomForfait: '',
                    description: '',
                    prix: '',
                    categorie : '',
                    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
                }
            }
        },
        methods: {
            savePackage () {
            PackageDataService.create(this.package)
                .then((response) => {
                // console.log(response.data)
                    this.addPack(response.data)
                    this.message = null 
                    this.submitted = true    
                })
                .catch((e)=> {
                    this.message = e.response.data.message

                })
            },
            newPackage(){
                this.submitted = false
                this.package = {
                    nomForfait: '',
                    description: '',
                    prix: '',
                    categorie: '',
                    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
                }
            }
        },

    }
         
</script>