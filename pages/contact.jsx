import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Contact-components/Hero';
const Contact = () => {
    return ( 
        <div className="has-navbar-fixed-top">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">           
                <Header>
                    <Hero/>
                </Header> 
                <div>
                    Contact page
                </div>
            </main>
       </div>
    );
}
 
export default Contact;