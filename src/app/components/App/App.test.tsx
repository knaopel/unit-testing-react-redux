import { render, RenderResult, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import App from "./App";

const renderApp = (): RenderResult =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

test("renders the app", () => {
  const { asFragment } = renderApp();
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByLabelText(/profile card/i)).toBeInTheDocument();
  // expect(screen.getByLabelText(/profile card/i)).toBeInTheDocument();
});
