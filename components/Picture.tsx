import classNames from "classnames";
import { ReactElement } from "react";

interface Props {
    src: string;
    webp: string;
    jp2: string;
    alt?: string;
    rounded?: boolean;
}

export default function Picture({alt, jp2, src, webp, rounded}: Props): ReactElement {
    return <picture>
        <source type="image/webp" srcSet={process.env.NEXT_PUBLIC_API_URL + webp}/>
        <source type="image/jp2" srcSet={process.env.NEXT_PUBLIC_API_URL + jp2}/>
        <img className={classNames('image', {rounded})} src={process.env.NEXT_PUBLIC_API_URL + src} alt={alt} />

        <style jsx>{`
            .image {
                object-fit: contain;
                width: 100%;
                height: 100%;
            }    

            .rounded {
                border-radius: .5rem
            }
        `}</style>
    </picture>;
}