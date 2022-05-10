import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import Image from "../../../components/Image/Image";

const initialProps: ComponentProps<typeof Image> = {
  src: "https://res.cloudinary.com/outdoorsy/image/upload/v1578298549/p/rentals/131280/images/ae9pnscbky1ozyhrbbtf.jpg",
  alt: "Avi",
};

const renderContainer = (props: ComponentProps<typeof Image>) => {
  return render(<Image {...props} />);
};

describe("<Image/>", () => {
  test("should render correctly", () => {
    const { baseElement } = renderContainer(initialProps);

    expect(baseElement).toMatchSnapshot();
  });

  test("should render skeleton before loading image and then image", async () => {
    renderContainer(initialProps);

    expect(screen.getByTestId("image-skeleton")).toBeInTheDocument();

    expect(
      await screen.findByRole("img", {
        name: /avi/i,
      })
    ).toBeInTheDocument();
  });
});
