import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PasswordReset = ({Email, HandleOnChange, HandleOnSubmit, FormSwitcher}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Password Reset</h1>
                <hr />
                    <form onSubmit={HandleOnSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={Email} onChange={HandleOnChange} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Reset Password</button>
                    </form>
                </Col>
            </Row>
            <Row><Col><button class="btn btn-primary" onClick={() => FormSwitcher(true)}>Login</button></Col></Row>     
        </Container>
    )
};

PasswordReset.propTypes = {
    Email :  PropTypes.string.isRequired,
    HandleOnChange : PropTypes.func.isRequired,
    HandleOnSubmit :  PropTypes.func.isRequired,
};

export default PasswordReset;