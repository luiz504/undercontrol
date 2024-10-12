import { render, screen } from "@testing-library/react-native";
import { MonoText } from ".";

describe("Component: MonoText", () => {
  it("should render correctly", () => {
    const id = "mono-text";
    const { debug } = render(<MonoText testID={id} />);

    expect(screen.getByTestId(id)).toBeOnTheScreen();
  });
});
