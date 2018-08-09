import * as React from 'react';
import { create } from 'react-test-renderer';
import { CryptoChartBox } from '../crypto-chart-box';


describe('Crypto Chart Box', () => {
  it('should show chart with Others', () => {
    const component = create(
      <CryptoChartBox
        locale="en"
        fiatCurrency="USD"
        tokens={[
          { name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0.42432 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
        ]}
        topTokenListSize={5}
        viewAll={false}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Chart with all', () => {
    const component = create(
      <CryptoChartBox
        locale="en"
        fiatCurrency="USD"
        tokens={[
          { name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0.42432 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
        ]}
        topTokenListSize={5}
        viewAll={true}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Chart with less than 5 items', () => {
    const component = create(
      <CryptoChartBox
        locale="en"
        fiatCurrency="USD"
        tokens={[
          { name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0.42432 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
        ]}
        topTokenListSize={5}
        viewAll={true}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call toggle function with false', () => {

    const mockFunction = jest.fn();

    const component = create(
      <CryptoChartBox
        locale="en"
        fiatCurrency="USD"
        tokens={[
          { name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0.42432 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
        ]}
        topTokenListSize={5}
        viewAll={false}
        toggleViewAll={mockFunction}
      />,
    );
    let tree = component.toJSON();
    const instance = component.root;
    expect(tree).toMatchSnapshot();

    const toggleButton = instance.find(el => el.type === 'div' && el.props.onClick);
    toggleButton.props.onClick();

    expect(mockFunction).toHaveBeenCalledWith(false);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call toggle function with true', () => {

    const mockFunction = jest.fn();

    const component = create(
      <CryptoChartBox
        locale="en"
        fiatCurrency="USD"
        tokens={[
          { name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0.42432 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
        ]}
        topTokenListSize={5}
        viewAll={true}
        toggleViewAll={mockFunction}
      />,
    );
    let tree = component.toJSON();
    const instance = component.root;
    expect(tree).toMatchSnapshot();

    const toggleButton = instance.find(el => el.type === 'div' && el.props.onClick);
    toggleButton.props.onClick();

    expect(mockFunction).toHaveBeenCalledWith(true);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not call toggle function when there is no function', () => {

    const mockFunction = jest.fn();

    const component = create(
      <CryptoChartBox
        locale="en"
        fiatCurrency="USD"
        tokens={[
          { name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0.42432 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
        ]}
        topTokenListSize={5}
        viewAll={true}
      />,
    );
    let tree = component.toJSON();
    const instance = component.root;
    expect(tree).toMatchSnapshot();

    const toggleButton = instance.find(el => el.type === 'div' && el.props.onClick);
    toggleButton.props.onClick();

    expect(mockFunction).not.toHaveBeenCalled();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call select functiond when onMouseEnter and onMouseLeave happen', () => {
    const component = create(
      <CryptoChartBox
        locale="en"
        fiatCurrency="USD"
        tokens={[
          { name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0.42432 },
          { name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
        ]}
        topTokenListSize={5}
        viewAll={true}
      />,
    );
    let tree = component.toJSON();
    const instance = component.root;
    expect(tree).toMatchSnapshot();

    const chart = instance.findAll(el => el.type === 'div' && el.props.onMouseEnter && el.props.onMouseLeave);
    chart[0].props.onMouseEnter();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    chart[0].props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





