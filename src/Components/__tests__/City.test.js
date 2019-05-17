import React from 'react';
import { shallow, mount } from 'enzyme';
import City from '../City';

const props = {
  city: { location: { city: 'Kampala' } }
}
describe('It will test City Component', () => {
  it('will render City Component', () => {
    const wrapper = shallow(<City {...props} />)

  })

})