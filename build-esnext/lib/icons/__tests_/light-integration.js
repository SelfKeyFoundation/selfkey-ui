import * as React from 'react';
import { create } from 'react-test-renderer';
import LightIntegrationIcon from '../light-integration';
describe('Light Integration Icon', () => {
    it('should show Light Integration Icon', () => {
        const component = create(React.createElement(LightIntegrationIcon, null));
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=light-integration.js.map