(function () {
    var appUrl = GetUrlKeyValue("SPAppWebUrl");
    var hostUrl = GetUrlKeyValue("SPHostUrl");
    var productId = GetUrlKeyValue("ProductId");
    var repo = new XYZ.Repositories.ProductRepository(appUrl, hostUrl);

    jQuery(function () {
        var call = repo.getProduct(productId);
        call.done(function (data, textStatus, jqXHR) {
            var viewModel = getViewModel(data.d);
            ko.applyBindings(viewModel);

            var container = jQuery("#productContainer");
            container.show();
        });
        call.fail(failHandler);
    });

    function getViewModel(product) {
        var viewModel = {
            Id: product.Id,
            Title: ko.observable(product.Title),
            CategoryTitle: ko.observable(product.Category.Title),
            QuantityPerUnit: ko.observable(product.QuantityPerUnit),
            UnitPrice: ko.observable(product.UnitPrice),
            UnitsInStock: ko.observable(product.UnitsInStock),
            UnitsOnOrder: ko.observable(product.UnitsOnOrder),
            ReorderLevel: ko.observable(product.ReorderLevel),
            saveProduct: function () {
                UpdateFormDigest(_spPageContextInfo.webServerRelativeUrl, _spFormDigestRefreshInterval);

                var product = formatProduct(this);
                var call = repo.saveProduct(this.Id, product, jQuery("#__REQUESTDIGEST").val());
                call.done(function (data, textStatus, jqXHR) {
                    navigateHome();
                });
                call.fail(failHandler);
            },
            cancel: function () {
                navigateHome();
            }
        }

        return viewModel;
    }

    function formatProduct(data) {
        var fields = ["Title", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel"];

        var product = {
            "__metadata": { type: "SP.Data.ProductsListItem" }
        };
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (data[field] !== null) {
                var value = data[field];
                if (jQuery.isFunction(value)) {
                    value = value();
                }
                product[field] = value;
            }
        }

        return JSON.stringify(product);
    }

    function navigateHome() {
        var url = "Default.aspx";
        url = XYZ.UrlUtils.addStandardTokens(url);
        SP.Utilities.HttpUtility.navigateTo(url);
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