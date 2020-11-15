import { ReactElement } from "react";
import Link from 'next/link';

export default function Header(): ReactElement {
    return <header>
        <div className={'inner'}>
            <Link href={'/'}>
                <div className={'logo'}>
                    <img height={'50px'} src={'/images/logo.png'} />
                </div>
            </Link>

            <nav>
                <Link href={'/videos'}>
                    <a>
                        Alle Videos
                    </a>
                </Link>
                <Link href={'/articles'}>
                    <a>
                        Alle Artikel
                    </a>
                </Link>
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
                z-index: 2;
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
                font-size: .9rem;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                flex-grow: 1;
                font-weight: bold;
            }

            a {
                color: #FFF;
                text-decoration: none;
            }
        `}</style>
    </header>;
}