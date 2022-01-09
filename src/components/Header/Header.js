import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGitlab, AiFillInstagram, AiFillLinkedin, AiFillMessage, AifillDiscord } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <DiCssdeck size='3rem' /> <Span>Infinitybeond1</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Infinitybeond1">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://gitlab.com/Infinitybeond1">
        <AiFillGitlab size="3rem" />
      </SocialIcons>      
      <SocialIcons href="https://discord.gg/5T7nDZFGft">
        <AiFillMessage size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
