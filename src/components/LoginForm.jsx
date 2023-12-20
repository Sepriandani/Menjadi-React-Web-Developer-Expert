import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function LoginForm({ login }) {
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");

    return(
        <div className="flex-1">
            <div className="mx-16 p-8 shadow-md rounded-md">
                <h1 className="text-center text-2xl font-semibold mb-16">Silahkan Login</h1>
                <form className="flex flex-col">
                    <label className="mb-2" htmlFor="email">Email</label>
                    <input value={email} onChange={onEmailChange} className="mb-4 ring-gray-400 ring-1 p-2 rounded-sm" type="email" />
                    <label className="mb-2" htmlFor="password">Password</label>
                    <input value={password} onChange={onPasswordChange} className="mb-4 ring-gray-400 ring-1 p-2 rounded-sm" type="password" />
                    <div className="mb-4 text-sm">Belum punya akun ? <Link className="text-indigo-400" to="/register">Daftar disini</Link></div>
                    <button onClick={() => login({ email, password })} className="bg-indigo-400 p-2 rounded-sm" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginForm;