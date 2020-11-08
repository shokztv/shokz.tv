import { ReactElement } from "react";
import Container from "../Container";
import Discord from "../Icons/Discord";
import Instagram from "../Icons/Instagram";
import Twitch from "../Icons/Twitch";
import Twitter from "../Icons/Twitter";
import SectionHeader from "../SectionHeader";
import SectionSubHeader from "../SectionSubHeader";

const team = [
    {
        name: 'shokzTV',
        realName: 'Jan Holtmann',
    },
    {
        name: 'shokzTV',
        realName: 'Jan Holtmann',
    },
    {
        name: 'shokzTV',
        realName: 'Jan Holtmann',
    },
]

export default function Team(): ReactElement {
    return <Container>
        <SectionHeader noMargin>Das Team</SectionHeader>
        <SectionSubHeader>// Moderatoren, Kommentatoren und Analysten die mit uns arbeiten //</SectionSubHeader>


        <div className={'threeColRow'}>
            {team.map(({name, realName}) => <div className={'col'}>
                <div className={'colContent'}>
                    <div className={'userImage'}>
                        
                    </div>

                    <h5>{name}</h5>
                    <h6>{realName}</h6>

                    <div className={'socials'}>
                        <Twitter />
                        <Twitch />
                        <Discord />
                        <Instagram />
                    </div>
                </div>
            </div>)}
        </div>

        <style jsx>{`
            .threeColRow{
                display: flex;
                align-items: flex-start;
                margin: -1rem;
                justify-content: space-between;
            }

            .col {
                padding: 1rem;
                width: 32%
            }

            .colContent {
                padding: 3rem 2rem;
                display: flex;
                align-items: stretch;
                flex-direction: column;
                border-radius: .25rem;
            }

            .userImage {
                background-color: #000;
                height: 250px;
                width: 200px;
                margin: 0 auto;
            }

            h5, h6 {
                text-align: center;
                margin: 0;
            }

            h5 {
                font-size: 1rem;
                margin: 1rem 0 .5rem 0;
            }

            h6 {
                font-size: .8rem;
                font-style: italic;
            }

            .socials {
                display: flex;
                justify-content: space-evenly;
                margin: 2rem 0 0 0;
                width: calc(100% + 4rem);
                margin-left: -2rem;
            }
        `}</style>
    </Container>
}