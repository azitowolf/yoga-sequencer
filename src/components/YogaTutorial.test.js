// Import `shallowMount` from Vue Test Utils and the component being tested
import { shallowMount } from "@vue/test-utils";
import YogaTutorial from "./YogaTutorial.vue";
import { describe, expect, it } from "jest";

// Mount the component
const wrapper = shallowMount(YogaTutorial);

describe("YogaTutorial", () => {
  // Inspect the raw component options
  it("has a created hook", () => {
    expect(typeof YogaTutorial.created).toBe("function");
  });

  // Evaluate the results of functions in
  // the raw component options
  it("sets the correct default data", () => {
    expect(typeof YogaTutorial.data).toBe("function");
    const defaultData = YogaTutorial.data();
    expect(defaultData.message).toBe("hello!");
  });

  // Inspect the component instance on mount
  it("correctly sets the message when created", () => {
    expect(wrapper.vm.$data.message).toBe("bye!");
  });

  // Mount an instance and inspect the render output
  it("renders the correct message", () => {
    expect(wrapper.text()).toBe("bye!");
  });
});
