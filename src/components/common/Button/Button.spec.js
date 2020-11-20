import { mount } from "@vue/test-utils"
import Button from "@/components/common/Button/Button.vue"

describe("Button.vue", () => {

  it("renders standart text without props passed", () => {
    const msg = "Кнопка"
    const wrapper = mount(Button);
    expect(wrapper.text()).toMatch(msg)
  })

  it("match snapshot", () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toMatchSnapshot();
  })
})
