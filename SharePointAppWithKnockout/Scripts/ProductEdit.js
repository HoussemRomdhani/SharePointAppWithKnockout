(function () {
    "use strict";

    jQuery(function () {
        var message = jQuery("#message");
        showQueryStringVariable(message, "ProductId");
        showQueryStringVariable(message, "SPAppWebUrl");
        showQueryStringVariable(message, "SPHostUrl");
    });

    function showQueryStringVariable(message, key) {
        var value = GetUrlKeyValue(key);
        message.append("<br/>")
        message.append(key + ": " + value)
    }

})();