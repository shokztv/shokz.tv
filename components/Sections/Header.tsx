import { ReactElement, useCallback, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Header(): ReactElement {
  const [open, setOpen] = useState(false);
  const scrollTo = useCallback(
    (id: string) =>
      document.getElementById(id).scrollIntoView({ behavior: "smooth" }),
    []
  );

  return (
    <header>
      <div className={"inner"}>
        <Link href={"/"}>
          <div className={"logo"}>
            <Image
              width={117}
              height={"50px"}
              src={"/images/logo.png"}
              alt={"Logo"}
            />
          </div>
        </Link>

        <nav>
          <Link href={"/"}>
            <a onClick={() => scrollTo("portfolio")}>Portfolio</a>
          </Link>
          <Link href={"/videos"}>
            <a>Alle Videos</a>
          </Link>
          <Link href={"/articles"}>
            <a>Alle Artikel</a>
          </Link>
          <a
            href={"https://3dsupply.de/de/shokztv/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Merch
          </a>
        </nav>

        <div className="mobileMenuToggle" onClick={() => setOpen((o) => !o)}>
          <svg
            height="25"
            viewBox="0 0 500 445"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              d="M83.333 27.778C83.333 12.437 95.77 0 111.111 0h361.111C487.564 0 500 12.437 500 27.778c0 15.34-12.436 27.778-27.778 27.778H111.111c-15.341 0-27.778-12.437-27.778-27.778zm111.111 388.889c0-15.342 12.437-27.778 27.778-27.778h250c15.342 0 27.778 12.436 27.778 27.778 0 15.341-12.436 27.777-27.778 27.777h-250c-15.341 0-27.778-12.436-27.778-27.777zM27.778 194.444C12.437 194.444 0 206.881 0 222.222S12.437 250 27.778 250h444.444C487.564 250 500 237.563 500 222.222s-12.436-27.778-27.778-27.778H27.778z"
              fill="#FFF"
            ></path>
          </svg>
        </div>

        {open && (
          <nav className="mobileMenu">
            <Link href={"/"}>
              <a onClick={() => scrollTo("portfolio")}>Portfolio</a>
            </Link>
            <Link href={"/videos"}>
              <a>Alle Videos</a>
            </Link>
            <Link href={"/articles"}>
              <a>Alle Artikel</a>
            </Link>
            <a
              href={"https://3dsupply.de/de/shokztv/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Merch
            </a>
          </nav>
        )}
      </div>

      <style jsx>{`
            header {
                position: fixed;
                width: 100vw;
                height: 4rem;
                color: #FFF;
                background-color: var(--blue);
                box-shadow: 11px 15px 29px 0 rgba(48,48,48,0.3);
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
                cursor: pointer:
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

            nav.mobileMenu {
              position: fixed;
              top: 4rem;
              left: 0;
              right: 0;
              background-color: var(--blue);
              box-shadow: 11px 15px 29px 0 rgba(48,48,48,0.3);
              z-index: 2;
              grid-gap: 1rem;
              flex-wrap: wrap;
              padding: 1rem 2rem 2rem 2rem;
              align-items: center;
              justify-content: flex-start;
            }

            nav.mobileMenu > :global(a) {
              width: calc(50% - .5rem);
            }

            a {
                color: #FFF;
                text-decoration: none;
            }

            .mobileMenuToggle {
              display: none;
              cursor: pointer;
            }

            @media only screen and (max-width: 700px) {
                nav:not(.mobileMenu) {
                    display: none;
                }

                .inner {
                  justify-content: space-between;
                }
                
                .mobileMenuToggle {
                  display: block;
                }
            }
        `}</style>
    </header>
  );
}
