import { ReactElement } from "react";
import Container from "../Container";
import Hoverable from "../Hoverable";
import SectionHeader from "../SectionHeader";
import SectionSubHeader from "../SectionSubHeader";

export default function Services(): ReactElement {
    return <Container bg={'grey'}>
        <SectionHeader noMargin>Leistungen</SectionHeader>
        <SectionSubHeader>// Wir kümmern uns um (fast) alles //</SectionSubHeader>
        
        <div className={'threeColRow'}>
            <div className={'col'}>
                <Hoverable>
                    <div className={'colContent'}>
                        <div className={'icon'}>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.75 20.3125C18.75 18.5869 17.3506 17.1875 15.625 17.1875H14.0625C10.6104 17.1875 7.8125 19.9854 7.8125 23.4375V28.125C7.8125 31.5771 10.6104 34.375 14.0625 34.375H15.625C17.3506 34.375 18.75 32.9756 18.75 31.25V20.3125ZM35.9375 34.375C39.3896 34.375 42.1875 31.5771 42.1875 28.125V23.4375C42.1875 19.9854 39.3896 17.1875 35.9375 17.1875H34.375C32.6494 17.1875 31.25 18.5869 31.25 20.3125V31.25C31.25 32.9756 32.6494 34.375 34.375 34.375H35.9375ZM25 0C11.0527 0 0.447266 11.6045 0 25V26.5625C0 27.4258 0.699219 28.125 1.5625 28.125H3.125C3.98828 28.125 4.6875 27.4258 4.6875 26.5625V25C4.6875 13.7998 13.7998 4.6875 25 4.6875C36.2002 4.6875 45.3125 13.7998 45.3125 25H45.3008C45.3086 25.2373 45.3125 41.1836 45.3125 41.1836C45.3125 43.4639 43.4639 45.3125 41.1836 45.3125H31.25C31.25 42.7236 29.1514 40.625 26.5625 40.625H23.4375C20.8486 40.625 18.75 42.7236 18.75 45.3125C18.75 47.9014 20.8486 50 23.4375 50H41.1836C46.0527 50 50 46.0527 50 41.1836V25C49.5527 11.6045 38.9473 0 25 0Z" fill="#373737"/>
                            </svg>
                        </div>
                        <h5>Kommentieren</h5>
                        <div className={'description'}>
                            Wir kommentieren & moderieren Ihr Dota 2-Event. Dies kann auf unserem "shokzTV" Kanal geschehen oder Ihrem Kanal. Dabei kümmern wir uns um die Einteilung der Kommentatoren.
                        </div>
                    </div>
                </Hoverable>
            </div>
            <div className={'col'}>
                <Hoverable>
                    <div className={'colContent'}>
                        <div className={'icon'}>
                            <svg width="35" height="50" viewBox="0 0 35 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1875 34.375C22.3652 34.375 26.5625 30.1777 26.5625 25V9.375C26.5625 4.19727 22.3652 0 17.1875 0C12.0098 0 7.8125 4.19727 7.8125 9.375V25C7.8125 30.1777 12.0098 34.375 17.1875 34.375ZM32.8125 18.75H31.25C30.3867 18.75 29.6875 19.4492 29.6875 20.3125V25C29.6875 32.3047 23.3896 38.166 15.9385 37.4395C9.44434 36.8057 4.6875 30.9678 4.6875 24.4434V20.3125C4.6875 19.4492 3.98828 18.75 3.125 18.75H1.5625C0.699219 18.75 0 19.4492 0 20.3125V24.2344C0 32.9883 6.24707 40.792 14.8438 41.9775V45.3125H9.375C8.51172 45.3125 7.8125 46.0117 7.8125 46.875V48.4375C7.8125 49.3008 8.51172 50 9.375 50H25C25.8633 50 26.5625 49.3008 26.5625 48.4375V46.875C26.5625 46.0117 25.8633 45.3125 25 45.3125H19.5312V42.0146C27.9014 40.8662 34.375 33.6816 34.375 25V20.3125C34.375 19.4492 33.6758 18.75 32.8125 18.75Z" fill="#373737"/>
                            </svg>
                        </div>
                        <h5>Produzieren</h5>
                        <div className={'description'}>
                            Wir produzieren den Livestream zu Ihrem Event. Vor einer simplen Spielübertragung bishin zu einer Übertragung mit Gästen aus einem Studio und Videoproduktionen rund um das Event.
                        </div>
                        
                    </div>
                </Hoverable>
            </div>
            <div className={'col'}>
                <Hoverable>
                    <div className={'colContent'}>
                        <div className={'icon'}>
                            <svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.8125 6.25H25C25 2.80273 22.1973 0 18.75 0C15.3027 0 12.5 2.80273 12.5 6.25H4.6875C2.09961 6.25 0 8.34961 0 10.9375V45.3125C0 47.9004 2.09961 50 4.6875 50H32.8125C35.4004 50 37.5 47.9004 37.5 45.3125V10.9375C37.5 8.34961 35.4004 6.25 32.8125 6.25ZM18.75 3.90625C20.0488 3.90625 21.0938 4.95117 21.0938 6.25C21.0938 7.54883 20.0488 8.59375 18.75 8.59375C17.4512 8.59375 16.4062 7.54883 16.4062 6.25C16.4062 4.95117 17.4512 3.90625 18.75 3.90625ZM6.40625 20.4492L7.64648 19.2188C7.85156 19.0137 8.18359 19.0137 8.38867 19.2188L10.4004 21.25L15.0488 16.6406C15.2539 16.4355 15.5859 16.4355 15.791 16.6406L17.0215 17.8809C17.2266 18.0859 17.2266 18.418 17.0215 18.623L10.752 24.834C10.5469 25.0391 10.2148 25.0391 10.0098 24.834L6.40625 21.1914C6.20117 20.9863 6.20117 20.6543 6.40625 20.4492ZM9.375 38.2812C8.07617 38.2812 7.03125 37.2363 7.03125 35.9375C7.03125 34.6387 8.07617 33.5938 9.375 33.5938C10.6738 33.5938 11.7188 34.6387 11.7188 35.9375C11.7188 37.2363 10.6738 38.2812 9.375 38.2812ZM31.25 36.7188C31.25 37.1484 30.8984 37.5 30.4688 37.5H16.4062C15.9766 37.5 15.625 37.1484 15.625 36.7188V35.1562C15.625 34.7266 15.9766 34.375 16.4062 34.375H30.4688C30.8984 34.375 31.25 34.7266 31.25 35.1562V36.7188ZM31.25 24.2188C31.25 24.6484 30.8301 25 30.3125 25H15.0488L18.2031 21.875H30.3125C30.8301 21.875 31.25 22.2266 31.25 22.6562V24.2188Z" fill="#373737"/>
                            </svg>
                        </div>
                        <h5>Organisieren</h5>
                        <div className={'description'}>
                            Auch bei einem der Organisationen kann unsere Expertise mit einfließen. Der besondere Fokus liegt dabei auf der idealen Darstellung Ihrer Marke und Einbindung der Sponsoren. Sprechen SIe uns einfach an für unsere Ideen!
                        </div>
                        
                    </div>
                </Hoverable>
            </div>
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
                align-items: center;
                flex-direction: column;
                border-radius: .25rem;
            }
            h5 {
                text-transform: uppercase;
                color: #373737;
                font-size: 1rem;
                position: relative;
                margin-bottom: 2rem;
            }
            h5:after {
                position: absolute;
                content: '';
                height: 2px;
                width: 70px;
                background-color: var(--orange);
                bottom: -1rem;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
            .description {
                text-align: center;
                font-size: .9rem;
                line-height: 1.5em;
                font-weight: 300;
            }
            @media only screen and (max-width: 1180px) {
                .threeColRow {
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .col {
                    width: 45%;
                }
            }
            @media only screen and (max-width: 850px) {
                .col {
                    width: 90%;
                }
            }
        `}</style>
    </Container>
}