import { ReactElement } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";

export default function Contact(): ReactElement {
    return <Container id={'contact'}>
        <SectionHeader>Kontakt</SectionHeader>

        <div className={'center'}>Interesse an weiteren Informationen oder an einem Gespräch. Kontaktieren Sie mich gerne unter einem der aufgeführten Möglichkeiten.</div>
        <div className={'center'}>Außerdem sind die Postfächer auf den Social-Media Kanälen geöffnet, sodass ich auch dort erreichbar bin.</div>

        <div className={'contactRow'}>
            <div className={'contactByEmail'}>
                <a href={'mailto:kontakt@shokz.tv'}>
                    <span className={'icon'}>
                        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3125 12.6563H19.6875C20.2055 12.6563 20.625 12.2367 20.625 11.7188V10.7813C20.625 10.2633 20.2055 9.84376 19.6875 9.84376H10.3125C9.79453 9.84376 9.375 10.2633 9.375 10.7813V11.7188C9.375 12.2367 9.79453 12.6563 10.3125 12.6563ZM9.375 17.3438C9.375 17.8617 9.79453 18.2813 10.3125 18.2813H19.6875C20.2055 18.2813 20.625 17.8617 20.625 17.3438V16.4063C20.625 15.8883 20.2055 15.4688 19.6875 15.4688H10.3125C9.79453 15.4688 9.375 15.8883 9.375 16.4063V17.3438ZM15 24.4412C14.0379 24.4412 13.0758 24.1447 12.2543 23.5512L0 14.6988V27.1875C0 28.7408 1.25918 30 2.8125 30H27.1875C28.7408 30 30 28.7408 30 27.1875V14.6988L17.7457 23.5512C16.9242 24.1442 15.9621 24.4412 15 24.4412ZM28.9225 9.54786C28.4039 9.14122 27.9123 8.7586 27.1875 8.21133V5.625C27.1875 4.07168 25.9283 2.8125 24.375 2.8125H19.8311C19.6529 2.68359 19.4871 2.56289 19.3014 2.42812C18.3164 1.70918 16.3594 -0.0205102 15 -2.32187e-06C13.6406 -0.0205102 11.6842 1.70918 10.6986 2.42812C10.5129 2.56289 10.3471 2.68359 10.1689 2.8125H5.625C4.07168 2.8125 2.8125 4.07168 2.8125 5.625V8.21133C2.0877 8.75801 1.59609 9.14122 1.07754 9.54786C0.74189 9.8109 0.470458 10.1468 0.283778 10.5302C0.0970973 10.9137 5.77621e-05 11.3345 0 11.7609L0 12.385L5.625 16.4484V5.625H24.375V16.4484L30 12.385V11.7609C30 10.8973 29.6027 10.0811 28.9225 9.54786V9.54786Z" fill="currentColor"/>
                        </svg>
                    </span>
                    kontakt@shokz.tv
                </a>
            </div>
            <div className={'contactByDiscord'}>
                <a href={'mailto:kontakt@shokz.tv'}>
                    <span className={'icon discord'}>
                        <svg viewBox="0 0 44 50" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.025 23.75C29.025 25.275 27.9 26.525 26.475 26.525C25.075 26.525 23.925 25.275 23.925 23.75C23.925 22.225 25.05 20.975 26.475 20.975C27.9 20.975 29.025 22.225 29.025 23.75ZM17.35 20.975C15.925 20.975 14.8 22.225 14.8 23.75C14.8 25.275 15.95 26.525 17.35 26.525C18.775 26.525 19.9 25.275 19.9 23.75C19.925 22.225 18.775 20.975 17.35 20.975ZM43.75 5.15V50C37.4518 44.4342 39.466 46.2766 32.15 39.475L33.475 44.1H5.125C2.3 44.1 0 41.8 0 38.95V5.15C0 2.3 2.3 0 5.125 0H38.625C41.45 0 43.75 2.3 43.75 5.15ZM36.625 28.85C36.625 20.8 33.025 14.275 33.025 14.275C29.425 11.575 26 11.65 26 11.65L25.65 12.05C29.9 13.35 31.875 15.225 31.875 15.225C25.9364 11.9702 18.9605 11.9696 13.2 14.5C12.275 14.925 11.725 15.225 11.725 15.225C11.725 15.225 13.8 13.25 18.3 11.95L18.05 11.65C18.05 11.65 14.625 11.575 11.025 14.275C11.025 14.275 7.425 20.8 7.425 28.85C7.425 28.85 9.525 32.475 15.05 32.65C15.05 32.65 15.975 31.525 16.725 30.575C13.55 29.625 12.35 27.625 12.35 27.625C12.7178 27.8824 13.3242 28.2161 13.375 28.25C17.5947 30.6131 23.5887 31.3873 28.975 29.125C29.85 28.8 30.825 28.325 31.85 27.65C31.85 27.65 30.6 29.7 27.325 30.625C28.075 31.575 28.975 32.65 28.975 32.65C34.5 32.475 36.625 28.85 36.625 28.85V28.85Z" fill={'currentColor'} />
                        </svg>
                    </span>
                    shokzTV#7968
                </a>
            </div>

        </div>

        <style jsx>{`
            .center {
                text-align: center;
            }
            .contactRow {
                display: flex;
                justify-content: center;
                margin: 4rem 0 1rem 0;
            }
            .contactByDiscord, .contactByEmail {
                margin: 0 2rem;
            }
            a {
                display: flex;
                align-items: center;
                color: #888;
                font-weight: bold;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
            .icon svg {
                color: #888;
                width: 30px;
                margin: 0 1rem;
            }
            .discord  svg {
                margin-bottom: -4px;
            }
            @media only screen and (max-width: 580px) {
                .contactRow {
                    flex-direction: column;
                    align-items: center;
                }
                .contactByEmail {
                    margin-bottom: 2rem;
                }
                .icon svg {
                    margin: 0 1rem 0 0;
                }
            }
        `}</style>
    </Container>;
}