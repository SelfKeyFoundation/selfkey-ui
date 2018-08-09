"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var transaction_box_1 = require("./transaction-box");
describe('Transaction Box', function () {
    it('should show Transaction Box with ETH Icon', function () {
        var component = react_test_renderer_1.create(React.createElement(transaction_box_1.TransactionBox, { cryptoCurrency: 'ETH' }, "TEST"));
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should show Transaction Box with KEY Icon', function () {
        var component = react_test_renderer_1.create(React.createElement(transaction_box_1.TransactionBox, { cryptoCurrency: 'KEY' }, "TEST"));
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should show Transaction Box with Custom text', function () {
        var component = react_test_renderer_1.create(React.createElement(transaction_box_1.TransactionBox, { cryptoCurrency: 'IHT' }, "TEST"));
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=transaction-box.spec.js.map