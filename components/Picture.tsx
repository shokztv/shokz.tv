import classNames from "classnames";
import { ReactElement, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

interface Props {
    src: string;
    webp: string;
    jp2: string;
    alt?: string;
    rounded?: boolean;
}

export default function Picture({alt, jp2, src, webp, rounded}: Props): ReactElement {
    const [loaded, setLoaded] = useState(false);

    return <VisibilitySensor  scrollCheck partialVisibility={true}>
        {({ isVisible }) => <div className={'container'}>
            {(loaded || isVisible) && <picture>
                <source type="image/webp" srcSet={process.env.NEXT_PUBLIC_API_URL + webp}/>
                <source type="image/jp2" srcSet={process.env.NEXT_PUBLIC_API_URL + jp2}/>
                <img className={classNames('image', {rounded})} src={process.env.NEXT_PUBLIC_API_URL + src} alt={alt} onLoad={() => setLoaded(true)}/>
            </picture>}

            {!loaded &&  <div className={'imageSkeleton'} />}

            <style jsx>{`

                .rounded {
                    border-radius: .5rem
                }

                .imageSkeleton, .image {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    display: block;
                    border-radius: .5rem;
                }

                .image {
                    object-fit: contain;
                    width: 100%;
                    height: 100%;
                }    

                .imageSkeleton {
                    overflow: hidden;
                    background-color: #EEE;
                }

                .container {
                    width: 100%;
                    height: 100%;
                    display: blocK;
                    padding-top: 56.25%;
                    position: relative;
                }
            `}</style>
        </div>}
    </VisibilitySensor>;
}