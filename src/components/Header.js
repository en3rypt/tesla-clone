import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import Link from './Link';
import tesla from '../images/tesla.svg';
function Header() {

    const [bOpen, setBOpen] = useState(false);
    const MenuItem = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels'];
    const BMenu = ['Existing Inventory', 'Used Inventory', 'Trade-In', 'Test Drive', 'Cybertruck', 'Roadster', 'Semi', 'Charging', 'Powerwall', 'Commercial Energy', 'Utilities', 'Find Us', 'Support', 'Investor Relations'];

    return (

        <Container>
            <a href="#">
                <img src={tesla} alt="logo" />
            </a>
            <Menu>
                {MenuItem.map((item) => {
                    return (<Link text={item} />)
                })
                }

            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a onClick={() => setBOpen(prev => !prev)} href="#">Menu</a>
            </RightMenu>

            <BurgerNav stats={bOpen}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBOpen(prev => !prev)} />
                </CloseWrapper>
                <ul>
                    <Custom>
                        {MenuItem.map((item) => {
                            return (<li><Link text={item} /></li>)
                        })
                        }
                    </Custom>
                    {BMenu.map((item) => {
                        return (<li><Link text={item} /></li>)
                    })
                    }
                </ul>
            </BurgerNav>

        </Container>
    )
}

export default Header
const Container = styled.div`
     min-height:60px;
     position:fixed;
     display:flex;
     align-items:center;

     padding:0 20px;
     top:0;
     left: 0;
     right:0;
    
    justify-content: space-between;
    z-index:1;

    

    

    
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:bold;
        font-size:15px;
        padding:5px 17px;
        flex-wrap:nowrap;
        border-radius:10px;
    }
    a:hover{
        background-color: rgba(0,0,0,0.07);
        transition: 0.5s ease;
    }
    @media (max-width:1199px) {
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;

        padding:5px 10px;
    
        border-radius:10px;

    }
    a:hover{
        background-color: rgba(0,0,0,0.07);
        transition: 0.5s ease;
    }
`


const BurgerNav = styled.div`

    position:fixed;
    top:0;
    right:0;
    background-color:white;
    width:300px;
    height:100vh;
    list-style:none;
    padding: 0 20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.stats ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
    padding: 8px 0;
    font: "Gotham ssm", sans - serif;
        
    }
    ul{
    list-style: none;
    ${'' /* padding: 20px; */}
    overflow-y:scroll;
    
}
a{
        display:block;
        font-weight:bold;
        font-size:14px;

        padding:5px 10px;
    
        border-radius:10px;

    }
    a:hover{
        background-color: rgba(0,0,0,0.07);
    
        transition: 0.5s ease;
    }


`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
padding:20px;
`

const Custom = styled.div`
@media (min-width:1199px){
    display:none;
}


`

