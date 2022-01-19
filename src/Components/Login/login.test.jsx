import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount } from "enzyme";
import LoginForm from "./loginForm";
import { AuthContext, AuthProvider } from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("Text login form", () => {
  it("Changes email value", () => {
    const Testcomponent = () => {
      const { login } = React.useContext(AuthContext);
      return <button onClick={login} login></button>;
    };
    const wrapper = mount(
      <AuthProvider>
        <BrowserRouter>
          <LoginForm email={test.com} />
        </BrowserRouter>
      </AuthProvider>
    );
    wrapper
      .find('[data-testid="email"]')
      .simulate("change", { target: { name: "email", value: "test.com" } });

    wrapper
      .find('[data-testid="email"]')
      .simulate("change", { target: { name: "password", value: "password" } });
  });
});
