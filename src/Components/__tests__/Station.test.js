import React from 'react';
import { shallow, mount } from 'enzyme';
import Station from '../Station'


const props = {
  station: {
    name: 'Wonderland',
    free_bikes: 8,
    empty_slots: 9

  }
}
describe('Testing the Station Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Station {...props} />)
    expect(wrapper.exists()).toBe(true)
  })
  test('renders the right html', () => { })
})
