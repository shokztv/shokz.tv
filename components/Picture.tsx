import { ReactElement } from "react";

interface Props {
    src: string;
    webp: string;
    jp2: string;
    alt?: string;
}

export default function Picture({alt, jp2, src, webp}: Props): ReactElement {
    return <picture>
        <source type="image/webp" srcSet={process.env.API_URL + webp}/>
        <source type="image/jp2" srcSet={process.env.API_URL + jp2}/>
        <img className={'image'} src={process.env.API_URL + src} alt={alt} />

        <style jsx>{`
            .image {
                object-fit: contain;
                width: 100%;
                height: 100%;
            }    
        `}</style>
    </picture>;
}