import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../../../components/App/App";
import { getStore } from "../../../redux/getStore";

const renderContainer = () => {
  return render(
    <Provider store={getStore()}>
      <App />
    </Provider>
  );
};

describe("<App/>", () => {
  test("should render correctly", () => {
    const { baseElement } = renderContainer();

    expect(baseElement).toMatchSnapshot();
  });
});
