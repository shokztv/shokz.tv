import classNames from "classnames";
import { ReactElement } from "react";

interface Props {
    link?: string;
    smaller?: boolean;
    noHover?: boolean;
}

export default function Twitter({link = '', smaller, noHover}: Props): ReactElement {
    return <a className={'link twitter'} href={link} target={'_blank'}>
        <svg height={smaller ? 25 : 40} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={classNames('icon', {noHover})}>
            <path d="M44.8604 14.816C44.8921 15.2601 44.8921 15.7044 44.8921 16.1485C44.8921 29.6954 34.5812 45.3046 15.736 45.3046C9.93018 45.3046 4.53682 43.623 0 40.7044C0.824902 40.7995 1.61797 40.8312 2.47461 40.8312C7.26514 40.8312 11.6751 39.2133 15.1967 36.4531C10.6916 36.3579 6.91621 33.4074 5.61543 29.3465C6.25 29.4416 6.88447 29.5051 7.55078 29.5051C8.4708 29.5051 9.39092 29.3781 10.2475 29.1561C5.55205 28.2043 2.03037 24.08 2.03037 19.099V18.9722C3.39453 19.7336 4.98096 20.2095 6.6623 20.2728C3.90215 18.4327 2.09385 15.2919 2.09385 11.7386C2.09385 9.83505 2.60137 8.09012 3.48975 6.56727C8.53418 12.7855 16.1167 16.8464 24.6191 17.2906C24.4605 16.5292 24.3653 15.7361 24.3653 14.943C24.3653 9.29569 28.9339 4.6955 34.6128 4.6955C37.5633 4.6955 40.2282 5.9328 42.1001 7.93153C44.416 7.48739 46.6368 6.63075 48.6039 5.45692C47.8424 7.83641 46.2244 9.83514 44.0988 11.1041C46.161 10.8821 48.1598 10.3109 49.9998 9.51786C48.6041 11.5482 46.8591 13.3565 44.8604 14.816V14.816Z" />
        </svg>

        <style jsx>{`
            .icon {
                cursor: pointer;
                fill: #DDD;
                transition: fill 120ms ease-in-out;
            }
            
            .icon:hover, .icon.noHover {
                fill: #1DA1F2;
            }

            .icon.noHover {
                margin-bottom: -4px;
            }
        `}</style>
    </a>;
}