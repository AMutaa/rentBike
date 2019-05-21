import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../Home';
import sinon from 'sinon'

describe('Tests Home Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.exists()).toBe(true)
  })

  test('should call ComponentDidMount', () => {
    const spy = sinon.spy(Home.prototype, 'componentDidMount');
    const wrapper = mount(<Home />)
    expect(spy.calledOnce).toBeTruthy();
  })
})