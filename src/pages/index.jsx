/* global tw */
/* eslint no-unused-expressions: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import styled, { injectGlobal } from 'react-emotion';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'typeface-montserrat';
import favicon from '../favicon.png';
import rightArrow from '../right-arrow.svg';
import '../swiper.css';

injectGlobal`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #6574cd;
  }
  html {
    background: #6574cd;
    border: 0;
    margin: 0;
    font-size: 18px;
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    padding-bottom: 6rem;
    padding-top: 4rem;
  }
  .swiper-button-prev, .swiper-button-next {
    top: 0;
    margin-top: 0;
    padding-left: 4px;
    padding-right: 4px;
    transform: scale(1.4);
    width: 44px;
    transition: transform 0.2s ease-in-out;
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    transform: scale(1);
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    left: 60px;
  }
`;

const Page = styled.div`
  ${tw(
    'text-white font-sans p-0 m-0 bg-indigo-darker antialiased border-8 sm:border-16 border-solid border-indigo leading-normal relative'
  )};
  background: #191e38
    url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%232f365f' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
  min-height: calc(100vh - 16px);
  @media (min-width: 576px) {
    min-height: calc(100vh - 32px);
  }
`;

const Content = styled.main`
  ${tw('sm:px-8 py-8 md:py-16 px-4 md:px-24')};
`;

const Title = styled.h1`
  ${tw('text-3xl md:text-5xl')};
  span {
    ${tw('text-orange')};
  }
`;

const Description = styled.p`
  ${tw('text-sm sm:text-base md:text-lg max-w-lg text-grey-lighter')};
  span {
    ${tw('text-orange')};
  }
`;

const Social = styled.section`
  ${tw('flex flex-wrap items-center justify-center sm:justify-start mt-8')};
`;

const Button = styled.a`
  ${tw(
    'cursor-pointer text-sm md:text-base mx-2 sm:mx-0 py-2 px-4 md:px-8 rounded-full no-underline shadow-md focus:outline-none focus:shadow-outline'
  )};
  transition: all 0.3s ease-in-out;
`;

const Homepage = styled(Button)`
  ${tw('bg-indigo hover:bg-indigo-light text-white')};
`;

const GitHub = styled(Button)`
  ${tw('bg-black hover:bg-grey-darkest text-white sm:mx-4 my-4 sm:my-0')};
`;

const Twitter = styled(Button)`
  ${tw('bg-blue hover:bg-blue-light text-white')};
`;

const SliderWrapper = styled.section`
  ${tw('sm:px-8 px-4 md:px-24')};
`;

const Footer = styled.footer`
  ${tw('absolute pin-b pin-x text-center pb-4 text-xs text-grey-light tracking-wide')};
  text-transform: uppercase;
  a {
    ${tw('text-orange hover:text-orange-light no-underline')};
  }
`;

const Item = styled.div`
  ${tw('w-64 bg-black rounded-lg shadow-lg flex')};
  height: 525px;
`;

const ItemContent = styled.div`
  ${tw('py-8 px-6 flex flex-wrap content-between relative')};
`;

const Top = styled.div`
  ${tw('z-30')};
`;

const Bottom = styled.div`
  ${tw('z-30')};
`;

const Preview = styled.a`
  ${tw('text-white inline-block text-lg relative mb-4 py-1 tracking-wide no-underline')};
  text-transform: uppercase;
  img {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    position: relative;
    top: 1px;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: translateX(10px);
    }
  }
`;

const Desc = styled.div`
  ${tw('text-sm text-white opacity-75')};
`;

const BGImage = styled.div`
  ${tw('absolute pin rounded-lg')};
  .gatsby-image-outer-wrapper {
    position: static !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
  img {
    ${tw('rounded-lg')};
    opacity: 0.5 !important;
  }
`;

const ItemTitle = styled.h2`
  ${tw('text-white text-3xl mb-4')};
`;

const Gradient = styled.div`
  ${tw('absolute pin rounded-lg z-20')};
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.75) 100%);
`;

const Divider = styled.div`
  ${tw('bg-orange w-16 mb-4')};
  height: 2px;
`;

const FeaturesWrapper = styled.div`
  ${tw('text-grey-lighter text-xs flex items-end')};
  min-height: 50px;
`;

class Index extends Component {
  render() {
    const {
      data: {
        allSitesYaml: { edges },
        site: { siteMetadata },
      },
    } = this.props;

    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        460: {
          slidesPerView: 1,
        },
      },
    };

    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <title>{siteMetadata.siteTitle}</title>
          <meta
            name="description"
            content="Gatsby.js Starters by LekoArts. Primarily aimed at Designers & Photographers. Minimalistic & fast websites!"
          />
          <meta name="image" content={favicon} />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="lekoarts.de" />
          <meta property="og:url" content="https://gatsby-starter-portfolio.netlify.com" />
          <meta property="og:title" content="Gatsby Starter Portfolio Overview by LekoArts" />
          <meta
            property="og:description"
            content="Gatsby.js starters by LekoArts. Primarily aimed at Designers & Photographers. Minimalistic & fast websites!"
          />
          <meta property="og:image" content={favicon} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@lekoarts.de" />
          <meta name="twitter:title" content="Gatsby Starter Portfolio Overview by LekoArts" />
          <meta
            name="twitter:description"
            content="Gatsby.js starters by LekoArts. Primarily aimed at Designers & Photographers. Minimalistic & fast websites!"
          />
          <meta name="twitter:image" content={favicon} />
        </Helmet>
        <Page>
          <Content>
            <Title>
              Hi<span>.</span>
            </Title>
            <Description>
              I'm LekoArts and I create starters for Gatsby.js<span>.</span> <br />
              If you're a designer (and front-end developer) like me or a photographer you'll enjoy my Gatsby projects
              as those two groups are the target audience<span>.</span> You can bootstrap your personal project quick{' '}
              <span>&</span> easy with my minimalistic and fast starters<span>.</span>
            </Description>
            <Social>
              <Homepage role="button" href="https://www.lekoarts.de" target="_blank" rel="noopener noreferrer">
                Homepage
              </Homepage>
              <GitHub role="button" href="https://github.com/LeKoArts" target="_blank" rel="noopener noreferrer">
                GitHub
              </GitHub>
              <Twitter role="button" href="https://twitter.com/lekoarts_de" target="_blank" rel="noopener noreferrer">
                Twitter
              </Twitter>
            </Social>
          </Content>
          <SliderWrapper>
            <Swiper {...params}>
              {edges.map(site => {
                const { id, title, description, preview, features, cover } = site.node;
                return (
                  <Item key={id}>
                    <ItemContent>
                      <Top>
                        <Preview href={preview} target="_blank" rel="noopener noreferrer">
                          Preview <img src={rightArrow} alt="Arrow" aria-hidden="true" />
                        </Preview>
                        <Desc>{description}</Desc>
                      </Top>
                      <Bottom>
                        <ItemTitle>{title}</ItemTitle>
                        <Divider />
                        <FeaturesWrapper>{features.join(', ')}</FeaturesWrapper>
                      </Bottom>
                      <BGImage>
                        <Gradient />
                        <Img fluid={cover.childImageSharp.fluid} />
                      </BGImage>
                    </ItemContent>
                  </Item>
                );
              })}
            </Swiper>
          </SliderWrapper>
          <Footer>
            Design by LekoArts.{' '}
            <a href="https://www.lekoarts.de" target="_blank" rel="noopener noreferrer">
              Source
            </a>.
          </Footer>
        </Page>
      </React.Fragment>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allSitesYaml: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }),
  }).isRequired,
};

export const overviewQuery = graphql`
  query OverviewQuery {
    allSitesYaml {
      edges {
        node {
          id
          title
          description
          preview
          features
          cover {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteTitle
      }
    }
  }
`;
