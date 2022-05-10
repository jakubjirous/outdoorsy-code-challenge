import { render } from "@testing-library/react";
import NoResults from "../../../components/NoResults/NoResults";

const renderContainer = () => {
  return render(<NoResults />);
};

describe("<NoResults/>", () => {
  test("should render correctly", () => {
    const { baseElement } = renderContainer();

    expect(baseElement).toMatchSnapshot();
  });
});
