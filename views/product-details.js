﻿MyApp['product-details'] = function (params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('')
    };
    return viewModel;
};