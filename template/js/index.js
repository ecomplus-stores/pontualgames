import '#template/js/'
import './custom-js/pages'

storefront.on('widget:@ecomplus/widget-minicart', function () {setTimeout(function () {document.getElementById('product-payment').classList.add('show')}, 1000);})