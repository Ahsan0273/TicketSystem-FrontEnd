import {React, useState} from 'react';
import './landingpage.css';
import {Jumbotron} from 'react-bootstrap';
import Login from '../../component/login/login';
import PasswordReset from '../../component/password-reset/passwordReset';

const LandingPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginPage, setIsLoginPage] = useState(true);
    const handleOnSubmit = e => {
        const {name, value} =  e.target;
    };
    const formSwitcher = (value) => {
        setIsLoginPage(value);
    }
    const handleOnChange = e => {
        const {name, value} =  e.target;
        switch(name){
            case 'email' :
                setEmail(value);
                break;
            case 'password' :
                setPassword(value);
                break;
            default:
                break;
        }
    };
    return(
        <div className="login bg-info">
            <Jumbotron>
                {
                isLoginPage && 
                (<Login Email = {email} Password = {password} HandleOnChange={handleOnChange} HandleOnSubmit= {handleOnSubmit} FormSwitcher = {formSwitcher} />)
                }
                {
                    !isLoginPage && 
                    (<PasswordReset Email = {email} HandleOnChange={handleOnChange} HandleOnSubmit= {handleOnSubmit} FormSwitcher =  {formSwitcher} />)
                }
            </Jumbotron>
        </div>
    )
}

export default LandingPage;