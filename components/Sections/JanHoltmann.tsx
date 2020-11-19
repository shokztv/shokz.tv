import { ReactElement } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

export default function JanHoltmann(): ReactElement {
    return <Container bg={'blue'} reduceSpacing>
        <div className={'row outer'}>
            <div className={'row'}>
                <div className={'avatar'}>
                    <img src={'/images/janholtmann.png'} alt={'jan holtmann avatar'} />
                </div>
                <div className={'info'}>
                    <h6>Jan "shokz" Holtmann</h6>
                    <div className={'sub'}>
                        E-Sports Kommentator, Moderator & Host - Auch außerhalb von Dota 2
                    </div>
                </div>
            </div>

            <a href={'https://jan-holtmann.de/'} className={'btn'}>
                Zur Webseite
            </a>
        </div>

        <style jsx>{`
            .row {
                display: flex;
                align-items: center;
                width: 100%;
                color: #FFF;
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
                padding: .6rem 1rem;
                color: #FFF;
                text-decoration: none;
                flex-shrink: 0;
                border: 2px solid #FFF;
                border-radius: 4px;
                text-transform: uppercase;
            }

            .sub {
                font-size: .9rem;
                color: #FFF;
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
}