import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav aria-label="Main Navigation" role="navigation">
            <ul>
                <li><Link to="/">Women's</Link></li>
                <li><Link to="/">Men's</Link></li>
                <li><Link to="/">On the Street</Link></li>
                <li><Link to="/">The Catwalk</Link></li>
                <li><Link to="/">AdWatch</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
        </nav>
    )
}