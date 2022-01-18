import React from 'react'
import styled from 'styled-components'

import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                arrow={true}
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundimg="model-3.jpg"
                lbtn="CUSTOM ORDER"
                rbtn="EXISTING INVENTORY"
                footer={false}
            />
            <Section
                arrow={false}
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundimg="model-y.jpg"
                lbtn="CUSTOM ORDER"
                rbtn="EXISTING INVENTORY"
                footer={false}
            />
            <Section
                arrow={false}
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundimg="model-s.jpg"
                lbtn="CUSTOM ORDER"
                rbtn="EXISTING INVENTORY"
                footer={false}
            />
            <Section
                arrow={false}
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundimg="model-x.jpg"
                lbtn="CUSTOM ORDER"
                rbtn="EXISTING INVENTORY"
                footer={false}
            />
            <Section
                arrow={false}
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundimg="solar-panel.jpg"
                lbtn="CUSTOM ORDER"
                rbtn="LEARN MORE"
                footer={false}
            />

            <Section
                arrow={false}
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundimg="solar-roof.jpg"
                lbtn="ORDER NOW"
                rbtn="LEARN MORE"
                footer={false}
            />
            <Section
                arrow={false}
                title="Accessories"
                backgroundimg="accessories.jpg"
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