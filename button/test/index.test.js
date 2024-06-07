import { shallowMount } from '@vue/test-utils';
import CwButton from '../src/CwButton.vue';

describe('CwButton', () => {
  it('renders a CwButton', () => {
    const wrapper = shallowMount(CwButton);
    console.assert(wrapper.find('CwButton'));
  });
});
