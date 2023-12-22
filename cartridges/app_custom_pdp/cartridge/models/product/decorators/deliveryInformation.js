'use strict'

module.exports = function (object, product) {
    Object.defineProperty(object, 'deliveryInformation', {
        enumerable: true,
        value: product.custom.v_delivery_information ? product.custom.v_delivery_information : null
    });
};