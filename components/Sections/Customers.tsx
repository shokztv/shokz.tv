import AldiGaming from "../../public/images/customers/aldi-gaming-logo.png";
import Container from "../Container";
import ESLM from "../../public/images/customers/eslm.png";
import ESLOne from "../../public/images/customers/eslone.png";
import Image from "next/image";
import JoinDota from "../../public/images/customers/joindota.png";
import Logitech from "../../public/images/customers/logitech.png";
import { ReactElement } from "react";
import SectionHeader from "../SectionHeader";
import SectionSubHeader from "../SectionSubHeader";
import Weplay from "../../public/images/customers/weplay.png";

export default function Customers(): ReactElement {
  return (
    <Container id={"portfolio"}>
      <SectionHeader noMargin>Kundenportfolio</SectionHeader>
      <SectionSubHeader>
        // shokztv hat unter anderem mit folgenden organisationen
        zusammengearbeitet //
      </SectionSubHeader>

      <div className={"customers"}>
        <div className={"customer"}>
          <Image
            width={128}
            height={128}
            alt={"ESL Meisterschaft Logo"}
            src={ESLM}
            placeholder={"blur"}
          />
        </div>
        <div className={"customer"}>
          <Image
            width={200}
            height={128}
            alt={"weplay Logo"}
            src={Weplay}
            placeholder={"blur"}
          />
        </div>
        <div className={"customer"}>
          <Image
            width={128}
            height={128}
            alt={"ESL One Logo"}
            src={ESLOne}
            placeholder={"blur"}
          />
        </div>
      </div>
      <div className={"customers"}>
        <div className={"customer"}>
          <Image
            width={128}
            height={128}
            alt={"joinDOTA Logo"}
            src={JoinDota}
            placeholder={"blur"}
          />
        </div>
        <div className={"customer"}>
          <Image
            width={178}
            height={100}
            alt={"Logitech"}
            src={Logitech}
            placeholder={"blur"}
          />
        </div>
        <div className={"customer"}>
          <Image
            width={168}
            height={100}
            alt={"Aldi Gaming"}
            src={AldiGaming}
            placeholder={"blur"}
          />
        </div>
      </div>

      <style jsx>{`
        .customers {
          padding: 0 4rem;
          display: flex;
          justify-content: space-around;
        }

        .customer {
          height: 150px;
          width: 33%;
          text-align: center;
          align-items: center;
          display: flex;
          justify-content: center;
        }

        @media only screen and (max-width: 900px) {
          .customers {
            flex-wrap: wrap;
          }
          .customer {
            width: 100%;
          }
        }
      `}</style>
    </Container>
  );
}
