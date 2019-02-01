import tw from 'tailwind.macro'
import styled from 'styled-components'

const Description = styled('div')<{ long?: boolean }>`
  ${tw`text-sm sm:text-base md:text-lg max-w-lg text-grey-lighter`};
  span {
    ${tw`text-orange`};
  }
  a {
    ${tw`no-underline text-orange hover:text-orange-light`};
  }
  pre {
    ${tw`bg-indigo-darker rounded px-4 py-2 shadow-md mb-8`};
  }
  code {
    ${tw`break-normal whitespace-pre-line text-grey`};
    word-spacing: normal;
    word-break: normal;
    tab-size: 4;
    span {
      ${tw`text-yellow`};
    }
  }
  ${props => props.long && 'max-width: 60rem'};
`

export default Description
