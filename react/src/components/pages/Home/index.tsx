import { Helmet } from 'react-helmet'
import Hero from './Hero'
import SubHero from './SubHero'
import Partners from './Partners'
import Menu from './Menu'
import MailingList from '../../MailingList'
import SocialMedia from '../../SocialMedia'

function Home () {
  return (
    <div>
      <Helmet>
        <title>Coffee & Sandwiches - Lake Oswego, Oregon -  Hands of Fate Coffee & Sandwiches</title>
      </Helmet>
      <Hero />
      <SubHero />
      <Partners />
      <Menu />
      <SocialMedia />
      <MailingList />
    </div>
  )
}

export default Home
