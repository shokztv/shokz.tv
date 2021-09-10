import Container from "../Container";
import Image from "next/image";
import { ReactElement } from "react";

export default function JanHoltmann(): ReactElement {
  return (
    <Container bg={"blue"} reduceSpacing>
      <div className={"row outer"}>
        <div className={"row"}>
          <div className={"avatar"}>
            <Image
              src={"/images/janholtmann.png"}
              alt={"jan holtmann avatar"}
              height={110}
              width={110}
            />
          </div>
          <div className={"info"}>
            <h6>Jan "shokz" Holtmann</h6>
            <div className={"sub"}>
              Beratung, Umsetzung & Produktion für Livestream-Konzepte
            </div>
          </div>
        </div>

        <a href={"https://jan-holtmann.de/"} className={"btn"}>
          Zur Webseite
        </a>
      </div>

      <style jsx>{`
        .row {
          display: flex;
          align-items: center;
          width: 100%;
          color: #fff;
        }

        .row.between {
          justify-content: space-between;
        }

        .avatar {
          height: 110px;
          border-radius: 50%;
          flex-shrink: 0;
          margin: 0 1.5rem 0 0;
        }

        h6 {
          font-size: 1.25rem;
          color: var(--orange);
          margin: 0;
        }

        .btn {
          padding: 0.6rem 1rem;
          color: #fff;
          text-decoration: none;
          flex-shrink: 0;
          border: 2px solid #fff;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .sub {
          font-size: 0.9rem;
          color: #fff;
        }

        .outer {
          padding: 0 2rem;
        }

        @media only screen and (max-width: 850px) {
          .outer {
            flex-wrap: wrap;
          }

          a {
            margin: 2rem auto 0 auto;
          }
        }
      `}</style>
    </Container>
  );
}
