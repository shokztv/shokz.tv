import { ReactElement } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

export default function JanHoltmann(): ReactElement {
    return <Container bg={'blue'} reduceSpacing>
        <div className={'row outer'}>
            <div className={'row'}>
                <div className={'avatar'}>

                </div>
                <div className={'info'}>
                    <h6>Jan "shokz" Holtmann</h6>
                    <div className={'sub'}>
                        E-Sports Kommentator, Moderator & Host - Auch außerhalb von Dota 2
                    </div>
                </div>
            </div>

            <a href={''} className={'btn'}>
                Zur Website
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
                height: 60px;
                width: 60px;
                border-radius: 30px;
                flex-shrink: 0;
                margin: 0 1.5rem 0 0;
                background-color: #CCC;
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
            }

            .sub {
                font-size: .9rem;
            }

            .outer {
                padding: 0 2rem;
            }
        `}</style>
    </Container>
}