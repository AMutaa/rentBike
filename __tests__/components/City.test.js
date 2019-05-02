import React from 'react';
import { shallow } from 'enzyme';
import City from '../../src/Components/City'

describe('City Component', () => {
  it('Renders', () => {
    const wrapper = shallow(<City />)
    console.log(wrapper)
    console.log("WRAPPER", wrapper.debug())
  })
})

// expect(wrapper.find({ dataTest: 'us-cities' }).text()).to.include('USA Cities')
// expect(wrapper.find({ 'data-test': 'us-cities' }).text()).to.include('USA Cities')
