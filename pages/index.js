import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import PageIntro from "../components/PageIntro/PageIntro";
import NewsletterSignupForm from "../components/NewsletterSignupForm/NewsletterSignupForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Newsletter Signup | Propel</title>
        <meta name="description"
              content="Next generation electric propulsion. Discover the most efficient electric boat motors in the industry."/>
        <link rel="icon" href="/favicon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Navbar/>

      <main className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-5">
            <PageIntro
              subtitle="Newsletter"
              title="Newsletter Signup"
              description="Curious about our new products? Sign up for our newsletter and we will make sure you have the latest news on our up and coming products."
            />
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <NewsletterSignupForm />
          </div>
        </div>

      </main>
    </>
  )
}
