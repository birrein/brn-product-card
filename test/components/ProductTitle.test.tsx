import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  it('should render the component with a custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
