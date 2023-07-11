import phoneSrc from '../assets/phone.png'
import styled from 'styled-components'

export const Phone = styled.img`
    margin-top: 5vh;
    height: 400px;
    width: 200px;
`
Phone.defaultProps = {
    src: phoneSrc
}