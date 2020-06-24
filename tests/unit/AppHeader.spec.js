import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  test("If user is not logged in, do not show logoutbutton", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });

  test("If user is logged in, do show logoutbutton", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });
    await wrapper.vm.$nextTick;
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
