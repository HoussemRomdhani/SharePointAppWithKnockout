(function () {
    "use strict";

    var appUrl = GetUrlKeyValue("SPAppWebUrl");
    var hostUrl = GetUrlKeyValue("SPHostUrl");
    var repo = new XYZ.Repositories.ProductRepository(appUrl, hostUrl);

    jQuery(document).ready(function () {
        var call = repo.getProducts("Id desc", 15);
        call.done(function (data, textStatus, jqXHR) {
            var viewModel = getViewModel(data.d.results);
            ko.applyBindings(viewModel);

            var container = jQuery("#productsContainer");
            container.show();
        });
        call.fail(failHandler);
    });

    function getViewModel(products) {
        var viewModel = {};
        viewModel.products = [];
        jQuery.each(products, function (index, value) {
            var product = {
                Id: value.Id,
                Title: value.Title,
                CategoryTitle: value.Category.Title,
                UnitPrice: String.format("${0:N2}", value.UnitPrice),
                UnitsInStock: value.UnitsInStock,
                UnitsOnOrder: value.UnitsOnOrder
            }
            viewModel.products.push(product);
        });

        return viewModel;
    }

    function failHandler(jqXHR, textStatus, errorThrown) {
        var response = "";
        try {
            var parsed = JSON.parse(jqXHR.responseText);
            response = parsed.error.message.value;
        } catch (e) {
            response = jqXHR.responseText;
        }
        alert("Call failed. Error: " + response);
    }

})();
