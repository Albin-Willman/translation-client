import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class LoginPage extends React.Component {
  static defaultProps = {
    user: {},
    onUsernameChange: $=>{},
    onPasswordChange: $=>{},
    submit: $=>{},
    title: ''
  };

  render() {
    var { onUsernameChange, onPasswordChange, submit, title, user } = this.props;
    return (
      <Row>
        <Col md={4} mdOffset={4}>
          <Well>
            <FormGroup>
              <FormControl
                type="text"
                placeholder={'Username'}
                onChange={e => onUsernameChange(e.target.value)}
                value={user.username}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="password"
                placeholder={'Password'}
                onChange={e => onPasswordChange(e.target.value)}
                value={user.password}
              />
            </FormGroup>
            <Button block bsStyle={'primary'} onClick={submit}>
              {title}
            </Button>
          </Well>
        </Col>
      </Row>

    );
  };
}
