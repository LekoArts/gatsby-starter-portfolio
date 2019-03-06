import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import tw from 'tailwind.macro'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import 'typeface-montserrat'

import Content from '../components/Content'
import Description from '../components/Description'
import Header from '../components/Header'

import favicon from '../favicon.png'
import rightArrow from '../right-arrow.svg'
import github from '../github.svg'

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f6993f;
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
  select {
    appearance: none;
    border:none;
    font-size: 1rem;
    width: 100%;
    color: white;
    padding: .75rem 1rem;
    border-radius: .25rem;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='white'%3E%3Cpolygon points='0,0 100,0 50,50'/%3E%3C/svg%3E") #7886d7 no-repeat 98% 77%;
    background-size: 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08);
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 3px rgba(101,116,205,.5);
    }
    &:hover {
      cursor: pointer;
    }
  }
  select::-ms-expand {
    display:none;
  }
  select option {
    background: #6574cd;
    font-size: 1rem;
  }
`

const Page = styled.div`
  ${tw`text-white font-sans p-0 m-0 bg-indigo-darker antialiased border-8 sm:border-16 border-solid border-indigo leading-normal relative`};
  background: #191e38
    url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%232f365f' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
  min-height: calc(100vh - 16px);
  @media (min-width: 576px) {
    min-height: calc(100vh - 32px);
  }
`

const SliderWrapper = styled.section`
  ${tw`sm:px-8 px-4 md:px-24`};
`

const Footer = styled.footer`
  ${tw`text-center pb-8 pt-16 text-xs text-grey-light tracking-wide z-50 uppercase`};
  a {
    ${tw`text-orange hover:text-orange-light no-underline`};
  }
`

const Item = styled.div`
  ${tw`bg-black rounded-lg shadow-lg flex`};
  height: 525px;
  @media (max-width: 500px) {
    height: 450px;
  }
`

const ItemContent = styled.div`
  ${tw`py-8 px-6 flex flex-wrap content-between relative`};
`

const Top = styled.div`
  ${tw`z-30 flex flex-col`};
`

const Bottom = styled.div`
  ${tw`z-30`};
`

const Preview = styled(OutboundLink)`
  ${tw`text-white inline-block text-xl relative mb-0 py-1 tracking-wide no-underline uppercase`};
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
`

const Repo = styled(OutboundLink)`
  ${tw`text-white text-sm inline-block mb-4 py-1 tracking-wide no-underline opacity-75`};
  transition: all 0.4s ease-in-out;
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    position: relative;
    top: 2px;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    ${tw`opacity-100`};
  }
`

const Desc = styled.div`
  ${tw`text-sm text-white opacity-75`};
`

const BGImage = styled.div`
  ${tw`absolute pin rounded-lg`};
  .gatsby-image-outer-wrapper {
    position: static !important;
  }
  .gatsby-image-wrapper {
    position: static !important;
  }
  img {
    ${tw`rounded-lg`};
    opacity: 0.5 !important;
  }
`

const ItemTitle = styled.h2`
  ${tw`text-white text-3xl mb-4`};
`

const Gradient = styled.div`
  ${tw`absolute pin rounded-lg z-20`};
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.75) 100%);
`

const Divider = styled.div`
  ${tw`bg-orange w-16 mb-4`};
  height: 3px;
`

const FeaturesWrapper = styled.div`
  ${tw`text-grey-lighter text-xs flex items-end`};
  min-height: 50px;
`

const Heading = styled.h2`
  ${tw`text-2xl md:text-4xl font-normal`};
`

const SelectWrapper = styled.div`
  ${tw`mb-12`};
`

const Grid = styled.div`
  ${tw`py-12`};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
`

type PageProps = {
  data: {
    allSitesYaml: {
      edges: {
        node: {
          id: string
          title: string
          url: string
          name: string
          description: string
          preview: string
          features: string[]
          cover: {
            childImageSharp: {
              fluid: {
                aspectRatio: number
                src: string
                srcSet: string
                sizes: string
                base64: string
                tracedSVG: string
                srcWebp: string
                srcSetWebp: string
              }
            }
          }
        }
      }[]
    }
    site: {
      siteMetadata: {
        siteTitle: string
        siteDescription: string
        siteUrl: string
      }
    }
  }
}

const Index: React.FunctionComponent<PageProps> = ({
  data: {
    allSitesYaml: { edges: sites },
    site: { siteMetadata },
  },
}) => {
  const [info, setInfo] = React.useState({ name: '[DIRECTORY_NAME]', url: '[GITHUB_REPO_URL]' })
  const { name, url } = info

  const selectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault()

    const element = event.target as HTMLSelectElement
    const name = element.value
    const url =
      sites
        .filter(p => p.node.name === name)
        .map(x => x.node.url)
        .toString() || '[GITHUB_REPO_URL]'

    setInfo({
      name,
      url,
    })
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{siteMetadata.siteTitle}</title>
        <meta name="description" content={siteMetadata.siteDescription} />
        <meta name="image" content={favicon} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="lekoarts.de" />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:title" content={siteMetadata.siteTitle} />
        <meta property="og:description" content={siteMetadata.siteDescription} />
        <meta property="og:image" content={favicon} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@lekoarts.de" />
        <meta name="twitter:title" content={siteMetadata.siteTitle} />
        <meta name="twitter:description" content={siteMetadata.siteDescription} />
        <meta name="twitter:image" content={favicon} />
      </Helmet>
      <Page>
        <Header />
        <SliderWrapper>
          <Heading>Overview</Heading>
          <Grid>
            {sites.map(site => {
              const { id, title, description, preview, features, cover, url } = site.node
              return (
                <Item key={id}>
                  <ItemContent>
                    <Top>
                      <Preview href={preview}>
                        Preview <img src={rightArrow} alt="Arrow" aria-hidden="true" />
                      </Preview>
                      <Repo href={url}>
                        <img src={github} alt="Arrow" aria-hidden="true" /> GitHub
                      </Repo>
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
              )
            })}
          </Grid>
        </SliderWrapper>
        <Content>
          <Heading>Getting started</Heading>
          <Description>
            <p>
              Make sure that you have <a href="https://nodejs.org/en/">Node.js</a> and{' '}
              <a href="https://github.com/nodejs/node-gyp#installation">node-gyp</a> installed on your system. In order
              to use <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b">npx</a>{' '}
              you'll need to have an up-to-date npm version installed.
            </p>
          </Description>
          <Description long={true}>
            <h3>Choose one of the starters and install it!</h3>
            <SelectWrapper>
              <select value={info.name} onChange={e => selectChange(e)}>
                <option value="[DIRECTORY_NAME]">---</option>
                {sites.map(site => {
                  const { id, name, title } = site.node
                  return (
                    <option key={id} value={name}>
                      {title}
                    </option>
                  )
                })}
              </select>
              <pre>
                <code>
                  <span>$ npx gatsby new</span> <i>{name}</i> {url}
                </code>
              </pre>
            </SelectWrapper>
            <p>Go into the newly created directory:</p>
            <pre>
              <code>
                <span>$ cd </span>
                <i>{name}</i>
              </code>
            </pre>
            <p>Start the development server:</p>
            <pre>
              <code>
                <span>$ npm run develop</span>
              </code>
            </pre>
          </Description>
        </Content>
        <Footer>
          Design by <OutboundLink href="https://www.lekoarts.de">LekoArts</OutboundLink>.{' '}
          <OutboundLink href="https://github.com/LeKoArts/gatsby-starter-portfolio">Source</OutboundLink>.
        </Footer>
      </Page>
      <GlobalStyles />
    </>
  )
}

export default Index

export const overviewQuery = graphql`
  query OverviewQuery {
    allSitesYaml {
      edges {
        node {
          id
          title
          url
          name
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
        siteUrl
        siteDescription
      }
    }
  }
`
