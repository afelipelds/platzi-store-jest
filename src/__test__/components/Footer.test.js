import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Test <Footer />', () => {
  const footer = mount(<Footer />);
  
  test('render of Footer', () => {
    expect(footer.length).toEqual(1);
  });
})

describe('Test <Footer /> Snapshot', () => {
  test('Comprobar UI de <Footer />', () => {
    const footer = create(<Footer />);
    
    expect(footer.toJSON()).toMatchSnapshot();
  })
})
