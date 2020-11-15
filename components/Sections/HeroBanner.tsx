import React, { ReactElement } from "react";
import Discord from "../Icons/Discord";
import Instagram from "../Icons/Instagram";
import Twitch from "../Icons/Twitch";
import Twitter from "../Icons/Twitter";

export default function HeroBanner(): ReactElement {
    return <div className={'heroBanner'}>
        <div className={'inner'}>
            <div className={'logo'}>
                <img src={'/images/logo.png'} height={'120px'} />
            </div>
            <div className={'heroInfo'}>
                <h1>shokzTV</h1>
                <h2>Dota 2-Kommentatorenkanal</h2>
                <div className={'socials'}>
                    <a className={'link'}>
                        <Twitter />
                    </a>
                    <a className={'link twitch'}>
                        <Twitch />
                    </a>
                    <a className={'link discord'}>
                        <Discord />
                    </a>
                    <a className={'link instagram'}>
                        <Instagram />
                    </a>
                </div>

                <div className={'btn'}>
                    Mehr über shokztv
                </div>
            </div>
        </div>

        <style jsx>{`
            .heroBanner {
                background-color: var(--blue);
                padding: 3rem 0 4rem;
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
                margin: 0 1rem;
                cursor: pointer;
            }
            
            .link:first-child {
                margin-left: 0;
            }
            
            .link:last-child {
                margin-right: 0;
            }

            .btn {
                display: inline-flex;
                color: #FFF;
                border-radius: 2px;
                border: 2px solid #FFF;
                font-size: .75rem;
                padding: .5rem 1rem;
            }
        `}</style>
    </div>;
}