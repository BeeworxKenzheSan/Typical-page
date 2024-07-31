import { useReducer } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { ACTION_TYPES } from "../utils/constanst";
import { emailReducer, passwordReducer } from "../utils/helpers";

const initialState = {
  email: "",
  emailIsValid: true,
};

const Login = ({ onLogin }) => {
  const [emailData, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passwordData, dispatchPassword] = useReducer(passwordReducer, {
    password: "",
    passwordIsValid: true,
  });

  const emailChangeHandler = (event) => {
    const signal = {
      type: ACTION_TYPES.EMAIL_VALUE_HANDLE,
      payload: event.target.value,
    };
    dispatchEmail(signal);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: ACTION_TYPES.PASSWORD_VALUE_HANDLE,
      payload: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    const signal = { type: ACTION_TYPES.EMAIL_IS_VALID };
    dispatchEmail(signal);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: ACTION_TYPES.PASSWORD_IS_VALID });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(emailData.email, passwordData.password);
  };

  function isFormValid() {
    if (
      passwordData.password.trim().length > 6 &&
      emailData.email.includes("@")
    ) {
      return true;
    }
    return false;
  }

  return (
    <StyledLoginWrapper>
      <form onSubmit={submitHandler}>
        <ControlWrapper
          className={emailData.emailIsValid === false ? "invalid" : ""}
        >
          <StyledLable htmlFor="email">E-Mail</StyledLable>
          <StyledInput
            type="email"
            id="email"
            value={emailData.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </ControlWrapper>
        <ControlWrapper
          className={passwordData.passwordIsValid === false ? "invalid" : ""}
        >
          <StyledLable htmlFor="password">Password</StyledLable>
          <StyledInput
            type="password"
            id="password"
            value={passwordData.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </ControlWrapper>
        <StyledActions>
          <Button type="submit" disabled={!isFormValid()}>
            Login
          </Button>
        </StyledActions>
      </form>
    </StyledLoginWrapper>
  );
};

export default Login;

Login.propTypes = {
  onLogin: PropTypes.func,
};

const StyledLoginWrapper = styled(Card)`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

const StyledLable = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: #464646;
  margin-bottom: 0.5rem;
`;

const StyledActions = styled.div`
  text-align: center;
`;
const StyledInput = styled.input`
  display: block;
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const ControlWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &.invalid input {
    border-color: red;
    background: #fbdada;
  }
`;
