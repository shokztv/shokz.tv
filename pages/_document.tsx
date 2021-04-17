import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang={'de'}>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet preload prefetch" as="style" crossOrigin="anonymous" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument