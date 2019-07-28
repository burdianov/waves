import React from "react";
import MyButton from "../../utils/button";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              dicta rerum, ea delectus numquam doloribus quae similique vero
              suscipit eveniet modi. In, nostrum! Pariatur sint harum enim
              voluptatibus libero ab?
            </p>
            <MyButton
              type="default"
              title="Create an Account"
              linkTo="/register"
              addStyles={{
                margin: "10px 0 0 0"
              }}
            />
          </div>
          <div className="right">
            <h2>Registered Customers</h2>
            <p>If you have an account, please login.</p>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
