// Import `shallowMount` from Vue Test Utils and the component being tested
import { shallowMount, mount } from "@vue/test-utils";
import YogaTutorial from "./../../src/components/YogaTutorial.vue";

// Test Data

import TestData from "./../TestData.json";

// Mount the component
const wrapper = shallowMount(YogaTutorial);
const deeperWrapper = shallowMount(YogaTutorial, {
  propsData: {
    poses: TestData.result
  }
});

describe("YogaTutorial", () => {

  // testing test setup successful
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(deeperWrapper.isVueInstance()).toBeTruthy();
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      "<p>The idea is simple: You enter your sequence in the format below:</p>"
    );
  });

  it("has convert button", () => {
    expect(wrapper.contains(".supported-poses-list")).toBe(true);
  });

  it("contains the expected props", () => {
    expect(deeperWrapper.vm.poses).toBe(TestData.result);
  });

  // it("renders all poses", () => {
  //   expect(document.getElementsByClassName('.alias-dropdown')).toHaveLength(TestData.length);
  // });

});
