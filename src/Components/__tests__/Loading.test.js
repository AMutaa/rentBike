import React from 'react';
import { shallow, mount } from 'enzyme';
import Loading from '../Loading';

describe('Test loading component', () => {
  test('it renders', () => { })
  const wrapper = shallow(<Loading />)
  expect(wrapper.exists()).toBe(true)
})