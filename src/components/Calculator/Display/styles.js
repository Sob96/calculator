import styled from 'styled-components'

export const DisplayWrapper = styled.section`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: ${props => props.theme.indents.p};
   border-bottom: 1.5px solid ${props => props.theme.colors.headerAndLines};
   margin-bottom: ${props => props.theme.indents.mb};
   

   div {
         font-size: 40px;
         font-weight: 500;
         padding-right: 8%;
         color: ${props => props.theme.colors.textColor};
      }  
`

