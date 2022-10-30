import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"de"}>
        <Head>
          <link
            rel={"preload"}
            href={"/fonts/RobotoCondensed-Bold.ttf"}
            as={"font"}
            crossOrigin={""}
          />
          <link
            rel={"preload"}
            href={"/fonts/RobotoCondensed-Light.ttf"}
            as={"font"}
            crossOrigin={""}
          />
          <link
            rel={"preload"}
            href={"/fonts/RobotoCondensed-Regular.ttf"}
            as={"font"}
            crossOrigin={""}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
