import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Search from "../../../components/Search/Search";
import { getStore } from "../../../redux/getStore";

const renderContainer = () => {
  return render(
    <Provider store={getStore()}>
      <Search />
    </Provider>
  );
};

describe("<Search/>", () => {
  test("should render correctly", () => {
    const { baseElement } = renderContainer();

    expect(baseElement).toMatchSnapshot();
  });

  test("should add the new keyword to the search after user input and pressing enter key", () => {
    renderContainer();

    const search = screen.getByRole("textbox", {
      name: /search/i,
    });

    userEvent.type(search, "mercedes{enter}");

    expect(screen.getByText(/mercedes/i)).toBeInTheDocument();
  });
});
