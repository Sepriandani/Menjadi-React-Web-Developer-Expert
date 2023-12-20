import { useDispatch } from 'react-redux';
import HeroImage from '../components/HeroImage';
import LoginForm from '../components/LoginForm';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
    const dispatch = useDispatch();

    const onLogin = ({ email, password }) => {
        dispatch(asyncSetAuthUser({ email, password }));
    };

    return(
        <div className='flex gap-24 h-screen items-center p-8'>
            <HeroImage />
            <LoginForm login={onLogin} />
        </div>
    );
}

export default LoginPage;