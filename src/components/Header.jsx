import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>SOUNCLOUD</h1>
            <p>sh!</p>
            <nav className="navigation">
                <Link to="/">
                Главная
                </Link>
                <Link to="/profile">
                Моя страница
                </Link>
                <Link to="/settings">
                Настройки
                </Link>
                <Link to="/about">
                О проекте
                </Link>
            </nav>
        </header>
    )
}

export default Header;