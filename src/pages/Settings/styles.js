import styled from 'styled-components'
import { Container } from '@/globalStyles'

export const SettingsContainer = styled(Container)`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    label {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: ${props => props.theme.indents.mb};
        color: ${props => props.theme.colors.textColor}
    }

    select {
        margin-bottom: ${props => props.theme.indents.mb};
    }

    button {
        text-align: start;
    }

    select, button {
        display: inline-block;
        padding: 15px 0 15px 10px;
        width: 20%;
        border: 1.5px solid ${props => props.theme.colors.headerAndLines};
        border-radius: 5px;
        font-size: 20px;
        font-weight: 500;
    }

    option {
        font-size: 20px;
        font-weight: 500;
    }
`

export const SettingsHeadline = styled.h2`
    margin: 30px 0 30px;
    font-size: 40px;
    font-weight: 500;
    color: ${props => props.theme.colors.textColor}

 `