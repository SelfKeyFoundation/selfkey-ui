"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var transaction_no_gas_error_1 = require("./transaction-no-gas-error");
describe('Transaction no Gas Error', function () {
    it('should show Transaction not enough gas error screen', function () {
        var component = react_test_renderer_1.create(React.createElement(transaction_no_gas_error_1.TransactionNoGasError, { cryptoCurrency: 'ETH', publicKey: '0x4184288c556524df9cb9e58b73265ee66dca4efe' }));
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=transaction-no-gas-error.spec.js.map