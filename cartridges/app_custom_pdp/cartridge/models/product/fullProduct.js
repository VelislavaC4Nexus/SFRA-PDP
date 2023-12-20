'use strict'

var base = module.superModule;
var decorators = require('*/cartridge/models/product/decorators/index');

module.exports = function fullProduct(product, apiProduct, option) {
    base.call(this, product, apiProduct, option);

    decorators.deliveryInformation(product, apiProduct);

    return product;

}