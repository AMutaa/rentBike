import React from 'react';
import { shallow, mount } from 'enzyme';
import City from '../City';

const props = {
  city: { location: { city: 'Kampala' } }
}
describe('It will test City Component', () => {
  test('will render City Component', () => {
    const wrapper = shallow(<City {...props} />)
    expect(wrapper.exists()).toBe(true)
  })
  test('will render the right html', () => {
    const wrapper = shallow(<City{...props} />)
    expect(wrapper.find({ 'data-test': 'city' }).text()).toEqual(props.city.location.city)
  })

})