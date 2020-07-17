// Import `shallowMount` from Vue Test Utils and the component being tested
import { shallowMount } from "@vue/test-utils";
import YogaPoses from "./../../src/components/YogaPoses.vue";

// Test Data Import
// Array is xxx long
import TestData from "./../TestData.json";

// Mount the component
const wrapper = shallowMount(YogaPoses);

describe("YogaTutorial", () => {
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it("has a created hook", () => {
    expect(typeof YogaPoses.created).toBe("function");
  });
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      "<p>...and a yoga sequence diagram will be generated for you below</p>"
    );
  });
  it("has convert button", () => {
    expect(wrapper.contains("#convert-button")).toBe(true);
  });

  // it("can convert a pose", () => {
  //   const deeperWrapper = shallowMount(YogaPoses, {
  //     propsData: {
  //       poses: TestData.result
  //     }
  //   });
  //   const inputArea = deeperWrapper.find("#input");
  //   inputArea.setValue("mtn");
  //   const button = deeperWrapper.find("#convert-button");
  //   button.trigger("click");
  //   expect(deeperWrapper.contains(".pose-card")).toBe(true);

  // });
  
});
//   // Mount an instance and inspect the render output
//   it("renders the wrapper", () => {
//     expect(typeof wrapper.element).toBe("object");
//     expect(wrapper.element.classList).toContain("yoga-tutorial-component");
//   });

//   // Mount an instance with props
//   it("renders the correct messages based on props", () => {

// })
