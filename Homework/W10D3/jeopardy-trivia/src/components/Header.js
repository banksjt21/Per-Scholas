import logo from '../logo.svg';

export default function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt="logo" />
            <h1>Welcome to Jeopardy!</h1>
        </header>
    )
}