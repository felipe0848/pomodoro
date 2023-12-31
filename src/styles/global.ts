import { createGlobalStyle } from 'styled-components'

export const GloblaStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
}

body{
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']}
}

body, input, textarea, button{
    font-family: "roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
@media(max-width: 768px){
    html{
        font-size: 85%;
    }
}
@media(max-width: 560px){
    html{
        font-size: 70%;
    }
}
`
