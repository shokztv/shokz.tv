import classNames from "classnames";
import { ReactElement } from "react";

interface Props {
    link?: string;
    smaller?: boolean;
    noHover?: boolean;
}

export default function Twitch({link = '', smaller, noHover}: Props): ReactElement {
    return <a className={'link twitch'} href={link} target={'_blank'}>
        <svg height={smaller ? 25 : 40} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={classNames('icon', {noHover})}>
            <path d="M38.2002 10.1045H34.4277V20.8174H38.2002V10.1045ZM27.832 10.0586H24.0596V20.7764H27.832V10.0586ZM11.7998 0L2.37402 8.92773V41.0723H13.6855V50L23.1123 41.0723H30.6563L47.626 25V0H11.7998ZM43.8545 23.2178L36.3135 30.3584H28.7705L22.1689 36.6084V30.3584H13.6855V3.57227H43.8545V23.2178Z" />
        </svg>

        <style jsx>{`
            .icon {
                cursor: pointer;
                fill: #DDD;
                transition: fill 120ms ease-in-out;
            }
            
            .icon:hover, .icon.noHover {
                fill: #6441a5;
            }

            .icon.noHover {
                margin-bottom: -4px;
            }
        `}</style>
    </a>;
}