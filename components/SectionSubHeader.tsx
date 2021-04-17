import { ReactElement } from "react";

interface Props {
    children: string;
}

export default function SectionSubHeader({ children }: Props): ReactElement {
    return <h4>
        {children}

        <style jsx>{`
            h4 {
                font-size: 15px;
                font-weight: bold;
                font-style: italic;
                text-transform: uppercase;
                text-align: center;
                margin: 0;
                margin-bottom: 2rem;
                color: var(--orange);
            }    
        `}</style>
    </h4>
}