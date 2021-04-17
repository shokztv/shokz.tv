import React, { ReactElement, useCallback } from "react";
import Discord from "../Icons/Discord";
import Instagram from "../Icons/Instagram";
import Twitch from "../Icons/Twitch";
import Twitter from "../Icons/Twitter";
import Image from 'next/image';

export default function HeroBanner(): ReactElement {
    const scrollTo = useCallback((id: string) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' }), []);

    return <div className={'heroBanner'}>
        <div className={'inner'}>
            <div className={'logo'}>
                <Image width={280} src={'/images/herobanner_logo.png'} height={120} alt={'ShokzTV Logo'} />
            </div>

            <div className={'heroInfo'}>
                <h1>shokzTV</h1>
                <h2>Dota 2-Kommentatorenkanal</h2>
                <div className={'socials'}>
                    <div className={'link twitter'}>
                        <Twitter link={'https://twitter.com/shokzTV'} />
                    </div>
                    <div className={'link twitch'}>
                        <Twitch link={'https://twitch.tv/shokzTV'} />
                    </div>
                    <div className={'link discord'}>
                        <Discord link={'https://discord.gg/hagYNWg'} />
                    </div>
                    <div className={'link instagram'}>
                        <Instagram link={'https://www.instagram.com/shokzTV'} />
                    </div>
                </div>

                <div className={'btn'} onClick={() => scrollTo('portfolio')}>
                    Mehr über shokztv
                </div>
            </div>
        </div>

        <style jsx>{`
            .heroBanner {
                background-color: var(--blue);
                padding: 5rem 0 4rem;
            } 

            .inner {
                max-width: 1000px;
                margin: 0 auto;
                display: flex;
                align-items: center;
            }

            .logo {
                padding: 0 4rem;
            }

            h1 {
                color: var(--orange);
                margin: 0;
                margin-bottom: .5rem;
                font-size: 2rem;
            }

            h2 {
                color: #FFF;
                margin: 0;
                font-weight: 400;
                font-size: 1.25rem;
            }

            .socials {
                display: flex;
                align-items: center;
                padding: 2rem 0;
            }

            .link {
                cursor: pointer;
            }

            .twitter, .twitch, .discord {
                margin-right: 2rem;
            }

            .btn {
                display: inline-flex;
                color: #FFF;
                border-radius: 2px;
                border: 2px solid #FFF;
                font-size: .8rem;
                padding: .5rem 1rem;
                text-transform: uppercase;
                cursor: pointer;
            }

            @media only screen and (max-width: 750px) {
                .logo {
                    display: none;
                }

                .heroInfo {
                    padding: 0 3rem;
                }
            }
        `}</style>
    </div>;
}