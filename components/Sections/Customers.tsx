import { ReactElement } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import SectionSubHeader from "../SectionSubHeader";

export default function Customers(): ReactElement {
    return <Container id={'portfolio'}>
        <SectionHeader noMargin>Kundenportfolio</SectionHeader>
        <SectionSubHeader>// shokztv hat bereits mit folgenden organisationen zusammengearbeitet //</SectionSubHeader>

        <div className={'customers'}>
            <div className={'customer'}>
                <img src={'/images/customers/eslm.png'} />
            </div>
            <div className={'customer'}>
                <img src={'/images/customers/weplay.png'} />
            </div>
            <div className={'customer'}>
                <img src={'/images/customers/eslone.png'} />
            </div>
            <div className={'customer'}>
                <img src={'/images/customers/joindota.png'} />
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
                width: 25%;
                text-align: center;
            }

            @media only screen and (max-width: 900px) {
                .customers {
                    flex-wrap: wrap;
                }
                .customer {
                    width: 45%;
                }
            }
        `}</style>
    </Container>
}