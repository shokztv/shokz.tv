import { ReactElement } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import SectionSubHeader from "../SectionSubHeader";

export default function Customers(): ReactElement {
    return <Container>
        <SectionHeader noMargin>Kundenportfolio</SectionHeader>
        <SectionSubHeader>// shokztv hat bereits mit folgenden turnierveranstaltern zusammengearbeitet //</SectionSubHeader>

        <div className={'customers'}>
            <div className={'row'}>
                <div className={'customer'}>
                    <img src={'/images/customers/eslm.png'} />
                </div>
                <div className={'customer'}>
                    <img src={'/images/customers/rog.png'} />
                </div>
                <div className={'customer'}>
                    <img src={'/images/customers/eslone.png'} />
                </div>
                <div className={'customer'}>
                    <img src={'/images/customers/joindota.png'} />
                </div>
            </div>
        </div>

        <style jsx>{`
            .customers {
                position: relative;
                height: 150px;
                width: 100vw;
                margin-left: calc((50vw - 600px) * -1);
                z-index: 0;
            }

            .row {
                width: 100%;
                display: flex;
                justify-content: space-around;
            }

            @media only screen and (max-width: 1200px) {
                .customers {
                    margin-left: 0;
                    padding: 0 4rem;
                    width: 100vw;
                }
            }
        `}</style>
    </Container>
}