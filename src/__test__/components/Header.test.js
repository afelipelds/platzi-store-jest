import React from 'react'
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock.test';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render del título', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    
    expect(header.find("Header-title").children())
  });

});

describe('<Header /> Snapshot', () => {
  test('Comprobar Snapshot de <Header />', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
})