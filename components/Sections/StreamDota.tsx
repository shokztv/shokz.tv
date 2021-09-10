import Container from "../Container";
import { ReactElement } from "react";
import SectionHeader from "../SectionHeader";
import SectionSubHeader from "../SectionSubHeader";

export default function StreamDota(): ReactElement {
  return (
    <Container>
      <SectionHeader noMargin>Mehr Production-Value</SectionHeader>
      <SectionSubHeader>
        // Dota 2-Ingame Production auf einem neuen Niveau //
      </SectionSubHeader>

      <div className={"productionInfo"}>
        Zusammen mit unserem Partner{" "}
        <a href={"https://streamdota.de"}>StreamDota.com</a> können wir den
        qualitativen Wert der Dota 2- Berichterstattung umfassend verbessern.
        Durch <span className={"highlight"}>Live-Statistiken</span> kann das
        Spielgeschehen für den Zuschauer verdeutlicht werden. Eine exklusiv
        gebrandete <span className={"highlight"}>Voting-Funktion</span> bietet
        die ideale Möglichkeit zur Produktplatzierung für Ihre Sponsoren - alles
        individuell anpassbar!
      </div>

      <div className={"preview"}>
        <div className={"previewContainer"}>
          <div className={"header"}>
            Beispiel: <b>Live-Statistiken</b>
          </div>
          <div className={"previewVideo"}>
            <video width={"100%"} autoPlay loop playsInline muted>
              <source src={"/videos/hero_stats.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className={"previewContainer"}>
          <div className={"header"}>
            Beispiel: <b>Voting-Funktion</b>
          </div>
          <div className={"previewVideo"}>
            <video width={"100%"} autoPlay loop playsInline muted>
              <source
                src={"/videos/branded_vote_system.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <style jsx>{`
        .productionInfo {
          text-align: center;
          font-size: 0.9rem;
          line-height: 1.3rem;
        }

        a {
          color: inherit;
          font-weight: bold;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .highlight {
          color: var(--orange);
        }

        .preview {
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          margin: 3rem 0 0 0;
        }

        .header {
          margin-bottom: 0.5rem;
        }

        .previewContainer {
          width: 45%;
          text-align: center;
        }

        @media only screen and (max-width: 850px) {
          .preview {
            flex-wrap: wrap;
          }
          .previewContainer {
            width: 95%;
            margin-bottom: 4rem;
          }
        }
      `}</style>
    </Container>
  );
}
