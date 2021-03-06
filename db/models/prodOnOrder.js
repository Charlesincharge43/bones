'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('prodOnOrders', {
  price: {
    type: Sequelize.DECIMAL,
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports.associations = (ProdOnOrder, {Order}) => {
  ProdOnOrder.belongsTo(Order)
}
