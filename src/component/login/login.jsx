import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Login = ({Email, Password, HandleOnChange, HandleOnSubmit, FormSwitcher}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr />
                    <form onSubmit={HandleOnSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={Email} onChange={HandleOnChange} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={Password} onChange={HandleOnChange} />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </Col>
            </Row>
            <Row><Col><a href="#!" onClick={() => FormSwitcher(false)}>Forgot Password?</a></Col></Row>     
        </Container>
    )
};

Login.propTypes = {
    Email :  PropTypes.string.isRequired,
    Password : PropTypes.string.isRequired,
    HandleOnChange : PropTypes.func.isRequired,
    HandleOnSubmit :  PropTypes.func.isRequired,
};

export default Login;