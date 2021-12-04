import React, {ReactNode} from "react";
import {Button} from "../atoms/Button";
import {Input} from "../atoms/Input";

const LoginContent:React.FC<ReactNode> = (): JSX.Element => {
    const [userName, setUserName] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [usernameValid, setUsernameValid] = React.useState<string>('');
    const [passwordValid, setPasswordValid] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const handleChangeUsername = (value: string):void => {
        setUserName(value);
        setUsernameValid('');
    }
    const handleChangePassword = (value: string):void => {
        setPassword(value);
        setPasswordValid('');
    }
    const handleSubmit = ():void =>{
        setIsLoading(true);
        setTimeout(() => {
            if(!userName.length) {
                setUsernameValid(`* Username can't not be null`);
            }
            if(password.length < 9) {
                setPasswordValid(`* Password is required`);
            }
            setIsLoading(false);
        },1000)
    }
    return(
        <div className={'login-content'}>
            <div className={'login-header'}>
                <span className={'login-text'}>LOGIN</span>
            </div>
            <div className={'input-container'}>
                <div className={'input-w-err'}>
                    <Input
                        type={'text'}
                        placeholder={'Username'}
                        value={userName} onChange={(e) => handleChangeUsername(e.target.value)}
                    />
                    <div className={'display-error'}>{usernameValid}</div>
                </div>
                <div className={'input-w-err'}>
                    <Input
                        type={'password'}
                        placeholder={'Password'}
                        value={password} onChange={(e) => handleChangePassword(e.target.value)}
                    />
                    <div className={'display-error'}>{passwordValid}</div>
                </div>
                <div className={'forgot-password'}>
                    <span>
                        forgot
                        <a href="" style={{ color: "#76e10b"}}>Username</a>
                        /
                        <a style={{ color: "#76e10b"}} href="">Password</a>
                    </span>
                </div>
            </div>
            <Button title={'Sign in'} isLoading={isLoading} onClick={handleSubmit} />
            <div className={'create-acc'}>
                <span>{`don't have account`}</span>
                <div className={'sign-up'}>SIGN UP NOW</div>
            </div>
        </div>
    )
}
export {LoginContent}