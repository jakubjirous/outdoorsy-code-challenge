import { render } from "@testing-library/react";
import Loading from "../../../components/Loading/Loading";

const renderContainer = () => {
  return render(<Loading />);
};

describe("<Loading/>", () => {
  test("should render correctly", () => {
    const { baseElement } = renderContainer();

    expect(baseElement).toMatchSnapshot();
  });
});
