import { ReactElement, ReactNode } from "react";


export default function Hoverable({children}: {children: ReactNode}): ReactElement {
    return <div className={'hoverable'}>
        {children}

        <style jsx>{`
            .hoverable {
                transition: box-shadow 240ms ease-in-out;
            }
            .hoverable:hover {
                box-shadow: 0 0 15px rgba(0,0,0,.2);
            }
        `}</style>
    </div>
}