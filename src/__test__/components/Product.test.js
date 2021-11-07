import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock.test';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render de component Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );

    expect(product.length).toEqual(1);
  });

  test('Comprobar el botón de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <Product 
        product={ProductMock}
        handleAddToCart={handleAddToCart}
      />
    );
    wrapper.find('button').simulate('click');
    
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  })
});
