import SignUpFrom from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

export default function AuthPage({ setUser }) {
    return(
        <main>
            <h1>AuthPage</h1>
            <SignUpFrom setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    )
}