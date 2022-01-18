import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Link from './Link';

function Section(props) {
    const footerArray = ['Tesla © 2022', 'Privacy & Legal', 'Contact', 'Careers', 'News', 'Engage', 'Locations'];
    console.log(props.footer);
    return (
        <Wrap bgimg={props.backgroundimg} footer={props.footer}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <CustomWrap>
                <Buttons>
                    {props.rbtn ?
                        <ButtonGroup>
                            <Fade left>
                                <LeftButton>
                                    {props.lbtn}
                                </LeftButton>
                            </Fade>
                            <Fade right>
                                <RightButton>
                                    {props.rbtn}
                                </RightButton>
                            </Fade>
                        </ButtonGroup> :
                        <ButtonGroup>
                            <Fade bottom>
                                <LeftButton>
                                    {props.lbtn}
                                </LeftButton>
                            </Fade>

                        </ButtonGroup>

                    }
                    {props.arrow ? <DownArrow src="/images/down-arrow.svg" /> : null}


                </Buttons>
                {props.footer && <Footer>
                    {footerArray.map((item) => {
                        return <Link text={item} />
                    })}

                </Footer>}

            </CustomWrap>



        </Wrap>
    )
}

export default Section

const Footer = styled.div`
    padding:20px;
    a{
        font-size:12px;
        font-weight:bold;
        padding:10px;
    }
`
const CustomWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Wrap = styled.div`

    width:100vw;
    height:100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgimg}")`};
    scroll-snap-align: start;
    scroll-snap-stop: normal;
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    h1{
    font-family: 'Gotham', sans-serif;
    ${'' /* font-weight:bold; */}
    font-size:40px;
    font-weight:500;
    }
`


const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width: 768px) {
        flex-direction: column;

    }


`

const LeftButton = styled.div`

    background-color: ${props => props.footer ? 'black' : 'rgba(23,26,32,0.85)'};
    
    height:40px;
    width:250px;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:100px;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity:0.65;
    color:black;
`
const DownArrow = styled.img`

    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
    color:#000;
`
const Buttons = styled.div`
`
