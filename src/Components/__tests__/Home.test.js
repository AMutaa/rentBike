import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../Home';

describe('Tests Home Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.exists()).toBe(true)
  })
})