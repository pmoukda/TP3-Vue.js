module.exports = (connex, Sequelize) =>{
    const Product = connex.define('product', {
        nomForfait: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        prix: {
            type: Sequelize.REAL
        },
        categorie: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        }
    })
    
    return Product
}