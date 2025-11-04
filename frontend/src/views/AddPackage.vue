<template>
     <div class="bg-blue-100 p-6 mb-8">
            <form class="space-y-6">
                <h2 class="text-2xl font-bold mb-6 text-center">Ajouter un forfait</h2>
                <div class="bg-red-500 mb-2 text-white p-2 rounded">Error Message</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="form-control">
                        <label htmlFor="nomForfait">Nom du forfait</label>
                        <input class="input-group"
                        type="text"
                        id='nomForfait'
                        name='NomForfait'
                        placeholder="Nom du forfait"
                        value={nomForfait}
                        
                        />
                    </div>
                    <div class="form-control">
                        <label htmlFor="prix">Prix</label>
                        <input class="input-group"
                        type="number"
                        id='prix'
                        name='prix'
                        min={0}
                        step={0.01}
                        placeholder="Entrez un prix"
                        value={prix}
                        
                        />
                    </div>
                    <div class="form-control">
                        <label htmlFor="categorie">Catégorie</label>
                        <input class="input-group"
                        type="text"
                        id='categorie'
                        name='categorie'
                        placeholder="Entrez une catégorie"
                        value={categorie}
                       
                        />
                    </div>
                    <div class="form-control">
                        <label htmlFor="image">Image</label>
                        <input class="input-group"
                        type="url"
                        id='image'
                        name='image'
                        placeholder="Entrez un URL"
                        value={image}
                        />
                    </div>
                </div>
                <div class="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea class="input-group h-50"
                    id='description'
                    name='description'
                    placeholder="Description"
                    value={description}
                    ></textarea>
                </div>
                <input type="submit" class="btn-blue mt-6 mb-6" value= 'Ajouter'/>
                <div class="text-green-600 font-semibold mb-4">Success Message</div>
        <button class="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
          New Product
        </button>
            </form>
        </div>
</template>