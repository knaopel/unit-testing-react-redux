import React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  within
} from "@testing-library/react";

import { store } from "../../../../app/store";
import { ProfileCard } from "./ProfileCard";
import { Provider } from "react-redux";

const renderCard = (): RenderResult =>
  render(
    <Provider store={store}>
      <ProfileCard />
    </Provider>
  );

test("renders the Profile Card", () => {
  const subjectCard = renderCard();
  expect(subjectCard.asFragment()).toMatchSnapshot();
  expect(screen.getByLabelText(/profile card/i)).toBeInTheDocument();
  const profileList = screen.getByRole("list");
  expect(profileList).toBeInTheDocument();
  const profileListItems = within(profileList).getAllByRole("listitem");
  expect(profileListItems).toHaveLength(2);
});

test("test delete button", () => {
  const { rerender, asFragment } = renderCard();
  const profileList = screen.getByRole("list");
  let profileListItems = within(profileList).getAllByRole("listitem");
  const deleteButton = within(profileListItems[0]).getByText(/delete/i);
  fireEvent.click(deleteButton);
  rerender(
    <Provider store={store}>
      <ProfileCard />
    </Provider>
  );
  profileListItems = within(profileList).getAllByRole("listitem");
  expect(asFragment()).toMatchSnapshot();
});
