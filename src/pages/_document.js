import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru">
                <Head>
                    {/* Другие мета-теги могут быть добавлены здесь */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="/script.js"></script> {/* Ваш скрипт */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;