"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var deep_integration_1 = require("../deep-integration");
describe('Deep Integration Icon', function () {
    it('should show Deep Integration Icon', function () {
        var component = react_test_renderer_1.create(React.createElement(deep_integration_1.default, null));
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=deep-integration.js.map