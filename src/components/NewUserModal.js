import React, { useState } from 'react';
import { Button, Modal, Form, Message } from 'semantic-ui-react';

const NewUserModal = ({
  open = false,
  onClose = () => {},
  onClick = () => {},
}) => {
  const [state, setState] = useState({});

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    re.test(state.email)
      ? setState({ ...state, emailError: false })
      : setState({ ...state, emailError: true });
  };

  const validatePassword = () => {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
    re.test(state.password)
      ? setState({ ...state, passwordError: false })
      : setState({ ...state, passwordError: true });
  };

  const validateConfirmPassword = () => {
    state.password === state.confirm_password
      ? setState({ ...state, passwordMismatch: false })
      : setState({ ...state, passwordMismatch: true });
  };

  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header>Add new User</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              required
              placeholder="First Name"
              onChange={(e) =>
                setState({ ...state, first_name: e.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              required
              placeholder="Last Name"
              onChange={(e) =>
                setState({ ...state, last_name: e.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>email</label>
            <input
              placeholder="Email"
              onChange={(e) => setState({ ...state, email: e.target.value })}
              onBlur={validateEmail}
            />
            {state.emailError && <Message content="wrong email format" />}
          </Form.Field>
          <Form.Field>
            <label>job</label>
            <input
              placeholder="Job"
              onChange={(e) => setState({ ...state, job: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Address: street address</label>
            <input
              placeholder="address: street address"
              onChange={(e) => setState({ ...state, address: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
              onBlur={validatePassword}
            />
            {state.passwordError && (
              <Message
                content={`
              At least one upper case, one lower case, one special character and minimum 8 characters.`}
              />
            )}
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="confirm Password"
              onChange={(e) =>
                setState({ ...state, confirm_password: e.target.value })
              }
              onBlur={validateConfirmPassword}
            />
            {state.passwordMismatch && (
              <Message content="doesn't match the password" />
            )}
          </Form.Field>

          <Button type="submit" onClick={() => onClick(state)}>
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default NewUserModal;
