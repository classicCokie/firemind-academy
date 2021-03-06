import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>


                    <script
                        async
                        dangerouslySetInnerHTML={{
                            __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MD9ZVJ6');`
                        }}
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-82042429-5');`
                        }}
                    ></script>
                    <link
                        // @ts-ignore
                        async
                        href="https://fonts.googleapis.com/css?family=Lato:900&display=swap"
                        rel="stylesheet"
                    ></link>
                    <link
                        // @ts-ignore
                        async
                        href="https://fonts.googleapis.com/css?family=Nunito:300&display=swap"
                        rel="stylesheet"
                    ></link>
                    <link
                        // @ts-ignore
                        async
                        href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap"
                        rel="stylesheet"
                    ></link>
                    <style>{`body {margin: 0 !important;}`}</style>
                </Head>
                <body>
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe rel="preconnect" title="google tag manager" src="https://www.googletagmanager.com/ns.html?id=GTM-MD9ZVJ6" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>`
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
