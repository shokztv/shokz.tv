import { ReactElement } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import SectionSubHeader from "../SectionSubHeader";

export default function Stats(): ReactElement {
    return <Container bg={'blue'}>
        <SectionHeader white noMargin>Statistiken</SectionHeader>
        <SectionSubHeader>// Aus dem Jahr 2020 //</SectionSubHeader>

        <div className={'mainInfo'}>
            <div className={'logo'}>
                <img src={'/images/logo.png'} alt={'shokzTV logo'} height={'60px'} />
            </div>

            <div className={'description'}>
                <span className={'highlight'}>shokzTV</span> ist der größte Dota 2-Kanal auf der Livestreaming Platform  Twitch.tv. Es finden Liveübertragungen zu den wichtigsten nationalen & internationalen Evnets der Szene statt. Dazu gehören exklusive Titel wie die ESL Meisterschaft.
            </div>
        </div>

        <div className={'stats'}>
            <div className={'stat'}>
                <div className={'icon'}>
                    <svg height={30} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.8192 9.23958C26.9947 3.72865 21.4031 0 15.0005 0C8.59786 0 3.00463 3.73125 0.18171 9.2401C0.062565 9.47579 0.000488281 9.73617 0.000488281 10.0003C0.000488281 10.2643 0.062565 10.5247 0.18171 10.7604C3.00619 16.2714 8.59786 20 15.0005 20C21.4031 20 26.9963 16.2687 29.8192 10.7599C29.9384 10.5242 30.0004 10.2638 30.0004 9.99974C30.0004 9.73565 29.9384 9.47526 29.8192 9.23958V9.23958ZM15.0005 17.5C13.5171 17.5 12.0671 17.0601 10.8337 16.236C9.60031 15.4119 8.63902 14.2406 8.07136 12.8701C7.50371 11.4997 7.35518 9.99168 7.64457 8.53682C7.93396 7.08197 8.64826 5.74559 9.69716 4.6967C10.7461 3.64781 12.0824 2.9335 13.5373 2.64411C14.9921 2.35472 16.5001 2.50325 17.8706 3.0709C19.241 3.63856 20.4124 4.59985 21.2365 5.83322C22.0606 7.06659 22.5005 8.51664 22.5005 10C22.5009 10.985 22.3073 11.9605 21.9305 12.8707C21.5538 13.7809 21.0014 14.6078 20.3048 15.3044C19.6083 16.0009 18.7813 16.5533 17.8712 16.9301C16.961 17.3068 15.9855 17.5005 15.0005 17.5V17.5ZM15.0005 5C14.5542 5.00624 14.1108 5.07263 13.6822 5.1974C14.0355 5.67743 14.205 6.26817 14.16 6.86247C14.1151 7.45677 13.8586 8.01528 13.4372 8.43672C13.0157 8.85815 12.4572 9.1146 11.8629 9.15956C11.2686 9.20452 10.6779 9.03501 10.1979 8.68177C9.9245 9.68885 9.97385 10.7563 10.3389 11.7339C10.704 12.7114 11.3665 13.5499 12.2331 14.1312C13.0996 14.7126 14.1267 15.0075 15.1697 14.9746C16.2127 14.9416 17.2191 14.5824 18.0473 13.9476C18.8754 13.3127 19.4836 12.4341 19.7863 11.4354C20.089 10.4368 20.0708 9.36832 19.7345 8.38051C19.3981 7.39269 18.7604 6.53523 17.9112 5.92881C17.062 5.32239 16.044 4.99754 15.0005 5V5Z" fill="white"/>
                    </svg>
                </div>
                <div className={'divider'} />
                <div className={'value'}>406.219</div>
                <div className={'label'}>Stunden zugeschaut</div>
            </div>
            <div className={'stat'}>
                <div className={'icon'}>
                    <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7064 19.285H11.4905L14.7619 27.2533C14.9897 27.8057 14.7294 28.4251 14.2085 28.6595L11.3278 29.915C10.7907 30.1494 10.1885 29.8815 9.96064 29.3458L6.85207 21.7792L1.7741 27.0022C1.0974 27.6981 0 27.1616 0 26.2489V1.07244C0 0.111498 1.16725 -0.356959 1.77404 0.319155L18.4388 17.4603C19.111 18.1153 18.615 19.285 17.7064 19.285V19.285Z" fill="white"/>
                    </svg>
                </div>
                <div className={'divider'} />
                <div className={'value'}>3.333.316</div>
                <div className={'label'}>Views generiert</div>
            </div>
            <div className={'stat'}>
                <div className={'icon'}>
                    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6992 0.75H2.80078C1.25391 0.75 0 2.00391 0 3.55078V20.4492C0 21.9961 1.25391 23.25 2.80078 23.25H19.6992C21.2461 23.25 22.5 21.9961 22.5 20.4492V3.55078C22.5 2.00391 21.2461 0.75 19.6992 0.75ZM30.7969 2.95898L24.375 7.38867V16.6113L30.7969 21.0352C32.0391 21.8906 33.75 21.0176 33.75 19.5234V4.4707C33.75 2.98242 32.0449 2.10352 30.7969 2.95898Z" fill="white"/>
                    </svg>
                </div>
                <div className={'divider'} />
                <div className={'value'}>1.121</div>
                <div className={'label'}>Stunden live</div>
            </div>
            <div className={'stat'}>
                <div className={'icon'}>
                    <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.625 12.125C7.69336 12.125 9.375 10.4434 9.375 8.375C9.375 6.30664 7.69336 4.625 5.625 4.625C3.55664 4.625 1.875 6.30664 1.875 8.375C1.875 10.4434 3.55664 12.125 5.625 12.125ZM31.875 12.125C33.9434 12.125 35.625 10.4434 35.625 8.375C35.625 6.30664 33.9434 4.625 31.875 4.625C29.8066 4.625 28.125 6.30664 28.125 8.375C28.125 10.4434 29.8066 12.125 31.875 12.125ZM33.75 14H30C28.9687 14 28.0371 14.416 27.3574 15.0898C29.7187 16.3848 31.3945 18.7227 31.7578 21.5H35.625C36.6621 21.5 37.5 20.6621 37.5 19.625V17.75C37.5 15.6816 35.8184 14 33.75 14ZM18.75 14C22.377 14 25.3125 11.0645 25.3125 7.4375C25.3125 3.81055 22.377 0.875 18.75 0.875C15.123 0.875 12.1875 3.81055 12.1875 7.4375C12.1875 11.0645 15.123 14 18.75 14ZM23.25 15.875H22.7637C21.5449 16.4609 20.1914 16.8125 18.75 16.8125C17.3086 16.8125 15.9609 16.4609 14.7363 15.875H14.25C10.5234 15.875 7.5 18.8984 7.5 22.625V24.3125C7.5 25.8652 8.75977 27.125 10.3125 27.125H27.1875C28.7402 27.125 30 25.8652 30 24.3125V22.625C30 18.8984 26.9766 15.875 23.25 15.875ZM10.1426 15.0898C9.46289 14.416 8.53125 14 7.5 14H3.75C1.68164 14 0 15.6816 0 17.75V19.625C0 20.6621 0.837891 21.5 1.875 21.5H5.73633C6.10547 18.7227 7.78125 16.3848 10.1426 15.0898Z" fill="white"/>
                    </svg>
                </div>
                <div className={'divider'} />
                <div className={'value'}>6.103</div>
                <div className={'label'}>Max. gleichzeitige<br/>Zuschauer</div>
            </div>
        </div>

        <style jsx>{`
            .mainInfo {
                display: flex;
                align-items: center;
            }    

            .logo {
                padding: 0 3rem;
            }

            .description {
                padding: 0 1rem;
                color: #FFF;
                font-size: .9rem;
                line-height: 1.3rem;
            }

            .highlight {
                color: var(--yellow);
            }
            .stats {
                margin: 6rem 0 2rem 0;
                color: #FFF;
                display: flex;
                justify-content: space-between;
            }
            .stat {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .divider {
                width: 3rem;
                margin: 1rem 0;
                height: 1px;
                background-color: var(--yellow);
            }
            .value {
                font-size: 1.5rem;
                font-weight: bold;
                color: #FFF;
            }
            .label {
                text-transform: uppercase;
                text-align: center;
                color: #FFF;
            }
        `}</style>
    </Container>
}