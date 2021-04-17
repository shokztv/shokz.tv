import { ReactElement } from "react";
import Container from "../Container";
import Homepage from "../Icons/Homepage";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import SectionHeader from "../SectionHeader";
import SectionSubHeader from "../SectionSubHeader";
import Image from 'next/image';

const team = [
    {
        image: '/images/team/shokztv.png',
        name: 'shokz',
        realName: 'Jan Holtmann',
        homepage: 'https://jan-holtmann.de/',
        twitter: 'https://twitter.com/janholtma',
        instagram: 'https://instagram.com/janholtma',

    },
    {
        image: '/images/team/dahorsty.png',
        name: 'DaHorsty',
        realName: 'Nicolai Krybus',
        twitter: 'https://twitter.com/dahorsty',
        instagram: 'https://instagram.com/dahorsty',
    },
    {
        image: '/images/team/dogeasy.png',
        name: 'dogeasy',
        realName: 'Pascal Uhlig',
        twitter: 'https://twitter.com/dogeasydota',
    },
];

const team2 = [
    {
        image: '/images/team/dbread.png',
        name: 'd_bread',
        realName: 'Dominic Fuss',
        twitter: 'https://twitter.com/d0mlthebread',
    },
]

export default function Team(): ReactElement {
    return <Container>
        <SectionHeader noMargin>Das Team</SectionHeader>
        <SectionSubHeader>// Moderatoren, Kommentatoren und Analysten die mit uns arbeiten //</SectionSubHeader>

        <div className={'threeColRow'}>
            {team.map(({ image, name, realName, homepage, twitter, instagram }) => <div className={'col'} key={name}>
                <div className={'colContent'}>
                    <div className={'userImage'}>
                        <Image src={image} alt={name + ' avatar'} width={200} height={200} />
                    </div>

                    <h5>{name}</h5>
                    <h6>{realName}</h6>

                    <div className={'socials'}>
                        {homepage && <Homepage link={homepage} />}
                        {twitter && <Twitter link={twitter} />}
                        {instagram && <Instagram link={instagram} />}
                    </div>
                </div>
            </div>)}
        </div>

        <div className={'threeColRow threeColRow2'}>
            {team2.map(({ image, name, realName, twitter }) => <div className={'col'} key={name}>
                <div className={'colContent'}>
                    <div className={'userImage'}>
                        <Image src={image} alt={name + ' avatar'} width={200} height={200} />
                    </div>

                    <h5>{name}</h5>
                    <h6>{realName}</h6>

                    <div className={'socials'}>
                        {twitter && <Twitter link={twitter} />}
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

            .threeColRow2 {
                justify-content: center;
                margin-top: 1rem;
            }

            .col {
                padding: 1rem;
                width: 32%
            }

            .colContent {
                display: flex;
                align-items: stretch;
                flex-direction: column;
                border-radius: .25rem;
            }

            .userImage {
                width: 200px;
                margin: 0 auto;
            }

            img {
                border-radius: 50%;
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

            @media only screen and (max-width: 900px) {
                .threeColRow {
                    flex-wrap: wrap;
                    margin: 0;
                    justify-content: space-evenly;
                }

                .col {
                    width: 45%;
                    margin-bottom: 2rem;
                }
            }

            @media only screen and (max-width: 720px) {
                .col {
                    width: 95%;
                    margin-bottom: 2rem;
                }
            }
        `}</style>
    </Container>
}