
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    noMargin?: boolean;
    yellow?: boolean;
    white?: boolean;
}

export default function SectionHeader({children, noMargin, white, yellow}: Props): ReactElement {
    return <h3 className={classNames({noMargin, white, yellow})}>
        {children}

        <style jsx>{`
            h3 {
                font-size: 2rem;
                color: var(--darkGrey);
                margin-bottom: 4rem;
                text-transform: uppercase;
                text-align: center;
            }

            .noMargin {
                margin-bottom: .5rem;
            }

            .yellow {
                color: var(--yellow);
            }

            .white {
                color: #FFF;
            }
        `}</style>    
    </h3>;
}