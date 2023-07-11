import styled, {keyframes} from 'styled-components'
import { useState, useEffect } from 'react'

const wordList = ["raspado", "taco", "hot dog", "ice cream cone", "cheesesteak", "churro", "funnel cake"]

export default function TextAnimation() {
    const [index, setIndex] = useState(0)
    
    const [word, setWord] = useState(
        wordList[index]
    )

    //sets the state variable representing index to the next index in the list of words to animate
    useEffect(()=> {
        const timer = setInterval(() => setIndex(i => (i + 1) % wordList.length), 2000);
        return () => clearInterval(timer);
    }, []);

    //sets the state variable representing word to whatever the index is currently on
    useEffect(() => setWord(wordList[index]), [index])

    return <Wrapper>{word}</Wrapper>
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY(50px); }
    25% { opacity: 1; transform: translateY(0px) ; }
    75% { opacity: 1; transform: translateY(0px) ; }
    100% { opacity: 0; transform: translateY(50px) ; }
`

const Wrapper = styled.span`
    display: inline-block;
    
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    font-size: 48px;
    color: #94a8a0;
`