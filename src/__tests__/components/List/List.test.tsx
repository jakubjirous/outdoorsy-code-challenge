import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import List from "../../../components/List/List";
import { getStore } from "../../../redux/getStore";

const renderContainer = () => {
  return render(
    <Provider store={getStore()}>
      <List />
    </Provider>
  );
};

describe("<List/>", () => {
  test("should render correctly", () => {
    const { baseElement } = renderContainer();

    expect(baseElement).toMatchSnapshot();
  });
});
