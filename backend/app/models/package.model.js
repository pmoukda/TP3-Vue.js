module.exports = (connex, Sequelize) =>{
    const Package = connex.define('package', {
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
    
    return Package
}