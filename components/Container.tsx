import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    bg?: 'white' | 'grey' | 'blue'; 
    id?: string;
    reduceSpacing?: boolean;
}
export default function Container({children, bg = 'white', id, reduceSpacing}: Props): ReactElement {
    return <div className={classNames('container', bg, {reduceSpacing})} id={id}>
        <div className={'innerContainer'}>
            {children}
        </div>

        <style jsx>{`
            .container {
                padding: 4rem 1rem;
            }
            .innerContainer {
                max-width: 1200px;
                margin: 0 auto;
            }
            .grey {
                background: var(--lightGrey);
            }
            .blue {
                background: var(--blue);
            }

            .reduceSpacing {
                padding: 2rem 1rem;
            }
        `}</style>
    </div>
}