import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <a className="header__logo" href="/" role="link" tabIndex={0}>
                SkillDrive
            </a>
            <nav className="header__nav" role="navigation">
                <Link
                    to="/about"
                    className="header__link"
                    role="link"
                    tabIndex={1}
                >
                    About us
                </Link>
                <a className="header__link" href="#" role="link" tabIndex={2}>
                    Terms
                </a>
                <Link
                    to="/faq"
                    className="header__link"
                    href="./faq.html"
                    role="link"
                    tabIndex={3}
                >
                    FAQ
                </Link>
            </nav>
            <button
                className="header__button"
                aria-label="Button for login"
                tabIndex={4}
            >
                Login
            </button>
            <a className="header__navbars" href="#" role="link">
                <img
                    id="navbarsIcon"
                    src="./assets/menu-24px.svg"
                    alt="Menu icon"
                />
            </a>
        </header>
    );
}
