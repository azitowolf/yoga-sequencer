// Import `shallowMount` from Vue Test Utils and the component being tested
import { shallowMount } from "@vue/test-utils";
import YogaTutorial from "./../../src/components/YogaTutorial.vue";

// Test Data

const testProps = [
  {
    Description:
      "Half moon pose, or ardha chandrasana, is both a standing and balancing posture. With one foot rooted firmly to the ground, the other lifts toward the sky. The hands do the same; one hand rests on the ground while the other lifts toward the sky. The pose develops focus and concentration.",
    _createdAt: "2020-06-27T15:08:27Z",
    _id: "067e6398-855e-4c64-82ba-9e9638bbd2d9",
    _rev: "fC2enKhGoDy6Fwhgs4Pova",
    _type: "pose",
    _updatedAt: "2020-07-05T15:12:26Z",
    aliases: ["half moon", "hfmn"],
    difficulty: {
      _ref: "2b11d4de-c6b9-4f04-9fcc-334031e1fc8c",
      _type: "reference",
    },
    image: {
      _type: "image",
      asset: {
        _ref: "image-4a20044b0501c8c918854a0dfed09b8902b873b7-130x130-png",
        _type: "reference",
      },
    },
    name: "Half Moon",
    sanskrit: "Ardha Chandrasana",
  },
];

// Mount the component
const wrapper = shallowMount(YogaTutorial);
function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}

describe("YogaTutorial", () => {
  // Inspect the raw component options
  it("has a created hook", () => {
    expect(typeof YogaTutorial.created).toBe("function");
  });

  // Mount an instance and inspect the render output
  it("renders the wrapper", () => {
    expect(typeof wrapper.element).toBe("object");
    expect(wrapper.element.classList).toContain("yoga-tutorial-component");
  });

  // Mount an instance with props
  it("renders the correct messages based on props", () => {
    const wrapperWithProps = getMountedComponent(YogaTutorial, {
      props: testProps,
    });

    expect(wrapperWithProps.exists()).toBe(true);
    expect(typeof wrapperWithProps.element).toBe("object");
    // renders a single yoga pose with the name correctly    });
});
