import * as React from 'react';
import { create } from 'react-test-renderer';
import DeepIntegrationIcon from '../deep-integration';
describe('Deep Integration Icon', () => {
    it('should show Deep Integration Icon', () => {
        const component = create(React.createElement(DeepIntegrationIcon, null));
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=deep-integration.js.map