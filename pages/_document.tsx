import Document, { Html, Head, Main, NextScript } from 'next/document'
import { initGA, logPageView } from '../services/analytics';

class MyDocument extends Document {
    componentDidMount() {
        // @ts-ignore
        if (!window.GA_INITIALIZED) {
            initGA()
            // @ts-ignore
            window.GA_INITIALIZED = true
        }
        logPageView()
    }


    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-82042429-5"></script>

                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:900&display=swap"
                        rel="stylesheet"
                        // @ts-ignore
                        async={true}
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css?family=Nunito:300&display=swap"
                        rel="stylesheet"
                        // @ts-ignore
                        async={true}
                    ></link>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                        rel="stylesheet"
                        // @ts-ignore
                        async={true}
                    ></link>
                    <style>{`body {margin: 0 !important;}`}</style>
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