import * as React from 'react';
import { create } from 'react-test-renderer';
import { CalendarDepositIcon } from '../calendar-deposit';

describe('Calendar Deposit Icon', () => {
	it('should show Calendar Deposit Icon', () => {
		const component = create(<CalendarDepositIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
