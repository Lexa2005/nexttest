import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Портфолио веб-разработчика Lexa2005</title>
                <meta name="description" content="Портфолио веб-разработчика" />
            </Head>
            <div className={styles.backgroundImage}></div>
            <div className={styles.container}>
                <Header />
                <main>
                    <section id="about" className={styles.banner}>
                        <img src="/images/IMG_20241011_110246_391.jpg" alt="Lexa2005" className={styles.profileImage} />
                        <h2>Обо мне</h2>
                        <p>Привет! Я Lexa2005, веб-разработчик с опытом в создании современных и функциональных веб-сайтов. Я люблю решать сложные задачи и создавать удобные интерфейсы.</p>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}