import classNames from "classnames";
import { ReactElement } from "react";

interface Props {
    link?: string;
    smaller?: boolean;
    noHover?: boolean;
}

export default function Youtube({link = '', smaller, noHover}: Props): ReactElement {
    return <a className={'link youtube'} href={link} target={'_blank'}>
        <svg width={smaller ? 25 : 40} viewBox="0 0 58 40" xmlns="http://www.w3.org/2000/svg" className={classNames('icon', {noHover})}>
            <path d="M56.6332 6.25865C55.979 3.7951 54.0512 1.8549 51.6036 1.19646C47.1672 0 29.3775 0 29.3775 0C29.3775 0 11.5879 0 7.15135 1.19646C4.70374 1.855 2.77603 3.7951 2.12176 6.25865C0.933014 10.724 0.933014 20.0404 0.933014 20.0404C0.933014 20.0404 0.933014 29.3569 2.12176 33.8222C2.77603 36.2857 4.70374 38.1451 7.15135 38.8035C11.5879 40 29.3775 40 29.3775 40C29.3775 40 47.1671 40 51.6036 38.8035C54.0512 38.1451 55.979 36.2857 56.6332 33.8222C57.822 29.3569 57.822 20.0404 57.822 20.0404C57.822 20.0404 57.822 10.724 56.6332 6.25865V6.25865ZM23.5593 28.4991V11.5818L38.4279 20.0406L23.5593 28.4991V28.4991Z" />
        </svg>

        <style jsx>{`
            .icon {
                cursor: pointer;
                fill: #EEE;
                transition: fill 120ms ease-in-out;
            }

            .icon:hover, .icon.noHover {
                fill: #FF0000;
            }

            .icon.noHover {
                margin-bottom: -3px;
            }
        `}</style>
    </a>;
}