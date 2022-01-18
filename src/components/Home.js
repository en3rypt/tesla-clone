import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import model3 from '../images/model-3.jpg';
import modely from "../images/model-y.jpg";
import models from "../images/model-s.jpg";
import modelx from "../images/model-x.jpg";
import solarroof from "../images/solar-roof.jpg";
import solarpanel from "../images/solar-panel.jpg";
import accessories from "../images/accessories.jpg";

function Home() {
    return (
        <Container>
            <Section
                arrow={true}
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundimg={model3}
                lbtn="CUSTOM ORDER"
                rbtn="EXISTING INVENTORY"
                footer={false}
            />
            <Section
                arrow={false}
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundimg={modely}
                lbtn="CUSTOM ORDER"
                rbtn="EXISTING INVENTORY"
                footer={false}
            />
            <Section
                arrow={false}
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundimg={models}
                lbtn="CUSTOM ORDER"
                rbtn="EXISTING INVENTORY"
                footer={false}
            />
            <Section
                arrow={false}
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundimg={modelx}
                lbtn="CUSTOM ORDER"
                rbtn="EXISTING INVENTORY"
                footer={false}
            />
            <Section
                arrow={false}
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundimg={solarpanel}
                lbtn="ORDER NOW"
                rbtn="LEARN MORE"
                footer={false}
            />

            <Section
                arrow={false}
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundimg={solarroof}
                lbtn="ORDER NOW"
                rbtn="LEARN MORE"
                footer={false}
            />
            <Section
                arrow={false}
                title="Accessories"
                backgroundimg={accessories}
                lbtn="SHOP NOW"
                footer={true}
            />


        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
    overflow: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;

`