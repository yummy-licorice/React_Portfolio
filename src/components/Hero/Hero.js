import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,<br /> I am Luke
      </SectionTitle>
      <SectionText>
        I am a self taught full stack developer focusing on JavaScript
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Infinitybeond1/Infinitybeond1'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;