
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

export default function SectionHeader({children, yellow}: {children: ReactNode; yellow?: boolean;}): ReactElement {
    return <h3 className={classNames({yellow})}>
        {children}

        <style jsx>{`
            h3 {
                font-size: 2rem;
                color: var(--darkGrey);
                margin-bottom: 4rem;
                text-transform: uppercase;
                text-align: center;
            }
            .yellow {
                color: var(--yellow);
            }
        `}</style>    
    </h3>;
}