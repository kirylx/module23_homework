import React from "react";

export default function Footer() {
    return (
        <>
            <footer class="footer">
                <p class="footer__copyright">© SkillDrive Inc. 2020</p>
                <div>
                    <a
                        class="footer__icon"
                        href="https://www.vk.com"
                        target="_blank"
                    >
                        <img
                            src="./assets/vk.svg"
                            alt="VK icon"
                            aria-label="Link to Vkontakte main page"
                            tabindex="5"
                        />
                    </a>
                    <a
                        class="footer__icon"
                        href="https://www.instagram.com"
                        target="_blank"
                    >
                        <img
                            src="./assets/instagram.svg"
                            alt="Instagram icon"
                            aria-label="Link to Instagram main page"
                            tabindex="6"
                        />
                    </a>
                    <a
                        class="footer__icon"
                        href="https://www.facebook.com"
                        target="_blank"
                    >
                        <img
                            src=" ./assets/facebook.svg"
                            alt="Facebook icon"
                            aria-label="Link to Facebook main page"
                            tabindex="7"
                        />
                    </a>
                </div>
            </footer>
        </>
    );
}
