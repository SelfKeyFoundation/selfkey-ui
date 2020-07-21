"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_test_renderer_1 = require("react-test-renderer");
var light_integration_1 = require("../light-integration");
describe('Light Integration Icon', function () {
    it('should show Light Integration Icon', function () {
        var component = react_test_renderer_1.create(React.createElement(light_integration_1.default, null));
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=light-integration.js.map