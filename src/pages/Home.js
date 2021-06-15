import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HomeClients,
  HomeHero,
  HomeSkillTree,
  // HomeOverview,
  HomeRoles,
  HomeFeatures,
  HomeTestimonials
} from '../components/home';
import gtm from '../lib/gtm';

const Home = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Fred&apos;s Full-Stack Porfolio</title>
      </Helmet>
      <div>
        <HomeHero />
        <HomeSkillTree />
        <HomeRoles />
        <HomeTestimonials />
        <HomeFeatures />
        <HomeClients />
      </div>
    </>
  );
};

export default Home;
