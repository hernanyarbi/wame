import SimpleButton from '@/components/SimpleButton.vue'
import { mount } from '@vue/test-utils'

describe('<SimpleButton/> Component', () => {
  it('Render Button With Simple Text.', () => {
    // Arrange
    const wrapper = mount(SimpleButton)
    expect(wrapper.find('button')).toBeTruthy()
  })
})
