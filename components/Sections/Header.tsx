import { ReactElement } from "react";


export default function Header(): ReactElement {
    return <header>
        <div className={'inner'}>
            <div className={'logo'}>
                <img height={'50px'} src={'/images/logo.png'} />
            </div>

            <nav>
                <a>
                    Alle Videos
                </a>
                <a>
                    Alle Artikel
                </a>
                <a>
                    Portfolio
                </a>
                <a>
                    Merch
                </a>
                <a>
                    Kontakt
                </a>
            </nav>
        </div>

        <style jsx>{`
            header {
                position: fixed;
                width: 100vw;
                height: 4rem;
                color: #FFF;
                background-color: var(--blue);
                box-shadow: 2px 2px 10px rgba(0,0,0,.8);
            }

            .inner {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                padding: 0 2rem;
                height: 100%;
            }

            .logo {
                height: 100%;
                padding: .75rem 0;
                margin-top: -3px;
                flex-shrink: 0;
            }

            nav {
                font-size: 1.1rem;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                flex-grow: 1;
                font-weight: bold;
            }
        `}</style>
    </header>;
}