import { renderHook } from "@testing-library/react-hooks";
import { enableFetchMocks } from "jest-fetch-mock";
import { PropsWithChildren, ReactNode } from "react";
import { Provider } from "react-redux";
import { Query, Rental, useGetRentalQuery } from "../../../../redux/features/rental/rentalApi";
import { getStore } from "../../../../redux/getStore";
import * as rentalMock from "./rentalMock.json";

const initialProps: Query = {
  keywords: ["test"],
};

const responseData: Rental[] = [
  {
    id: 131280,
    name: "Avi",
    imageUrl:
      "https://res.cloudinary.com/outdoorsy/image/upload/v1578298549/p/rentals/131280/images/ae9pnscbky1ozyhrbbtf.jpg",
  },
];

const renderContainer = (query: Query) => {
  return renderHook(() => useGetRentalQuery(query), {
    wrapper: ({ children }: Partial<PropsWithChildren<ReactNode>>) => {
      return <Provider store={getStore()}>{children}</Provider>;
    },
  });
};

describe("rentalApi", () => {
  describe("useGetRentalQuery", () => {
    enableFetchMocks();
    beforeEach(() => {
      fetchMock.resetMocks();
    });

    test("response should be successful", async () => {
      fetchMock.mockResponse(JSON.stringify(rentalMock));

      const { result, waitForNextUpdate } = renderContainer(initialProps);

      const initialResponse = result.current;

      expect(initialResponse.data).toBeUndefined();
      expect(initialResponse.isLoading).toBeTruthy();
      expect(initialResponse.isFetching).toBeTruthy();
      expect(initialResponse.isSuccess).toBeFalsy();

      await waitForNextUpdate();

      const nextResponse = result.current;

      expect(nextResponse.data).toBeDefined();
      expect(nextResponse.data).toStrictEqual(responseData);
      expect(nextResponse.isLoading).toBeFalsy();
      expect(nextResponse.isFetching).toBeFalsy();
      expect(nextResponse.isSuccess).toBeTruthy();
    });

    test("should fail with internal server error", async () => {
      fetchMock.mockReject(new Error("Internal Server Error"));

      const { result, waitForNextUpdate } = renderContainer(initialProps);

      const initialResponse = result.current;

      expect(initialResponse.data).toBeUndefined();
      expect(initialResponse.isLoading).toBeTruthy();

      await waitForNextUpdate();

      const nextResponse = result.current;

      expect(nextResponse.data).toBeUndefined();
      expect(nextResponse.isLoading).toBeFalsy();
      expect(nextResponse.isFetching).toBeFalsy();
      expect(nextResponse.isError).toBeTruthy();
    });
  });
});
