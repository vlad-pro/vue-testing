import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");

describe("MessageDisplay", () => {
  test("Calls getMessage and displays message", async () => {
    const MockedMessage = "Mock message from DB";
    getMessage.mockResolvedValueOnce({ text: MockedMessage });
    const wrapper = mount(MessageDisplay);
    await flushPromises()

    
  });

  test("Displays an error when getMessage call fails", async () => {});
});
