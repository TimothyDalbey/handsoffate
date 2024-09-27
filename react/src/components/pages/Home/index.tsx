import { Helmet } from 'react-helmet'
import Hero from './Hero'
import MailingList from '../../MailingList'
import SocialMedia from '../../SocialMedia'

function Home () {
  return (
    <div>
      <Helmet>
        <title>Coffee & Sandwiches - Lake Oswego, Oregon -  Hands of Fate Coffee & Sandwiches</title>
      </Helmet>
      <Hero />
      <SocialMedia />
      <MailingList />
    </div>
  )
}

export default Home
