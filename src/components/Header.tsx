import tw from 'tailwind.macro'
import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Content from './Content'
import Description from './Description'

const Intro = styled(Content)`
  ${tw`py-8 md:py-16`};
`

const Title = styled.h1`
  ${tw`text-3xl md:text-5xl`};
  span {
    ${tw`text-orange`};
  }
`

const Social = styled.section`
  ${tw`flex flex-wrap items-center justify-center sm:justify-start mt-8`};
`

const Button = styled(OutboundLink)`
  ${tw`cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline`};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-1px);
  }
`

const Homepage = styled(Button)`
  ${tw`bg-indigo text-white`};
`

const GitHub = styled(Button)`
  ${tw`bg-grey-dark text-white sm:mx-4 my-4 sm:my-0`};
`

const Twitter = styled(Button)`
  ${tw`bg-blue text-white`};
`

const Header = () => (
  <Intro>
    <Title>
      Hi
      <span>.</span>
    </Title>
    <Description>
      <p>
        I'm LekoArts and I create starters for Gatsby.js
        <span>.</span> <br />
        If you're a designer (and front-end developer) like me or a photographer you'll enjoy my Gatsby projects as
        those two groups are the target audience
        <span>.</span> You can bootstrap your personal project quick & easy with my minimalistic and fast starters
        <span>.</span>
      </p>
    </Description>
    <Social>
      <Homepage role="button" href="https://www.lekoarts.de">
        Homepage
      </Homepage>
      <GitHub role="button" href="https://github.com/LeKoArts">
        GitHub
      </GitHub>
      <Twitter role="button" href="https://twitter.com/lekoarts_de">
        Twitter
      </Twitter>
    </Social>
  </Intro>
)

export default Header
