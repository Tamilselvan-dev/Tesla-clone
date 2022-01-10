import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Main() {
    return (
        <Container>
            <Section 
            title="Model 3" 
            description="Order Online for Touchless Delivery" 
            backgroundImg="model-3.jpg"
            leftBtnText="custom order"
            rightBtnText="exsisting inventory"
            downArrow="true"/>

            <Section 
            title="Model X" 
            description="Order Online for Touchless Delivery" 
            backgroundImg="model-x.jpg"
            leftBtnText="custom order"
            rightBtnText="exsisting inventory"
            downArrow="true"/>

            <Section 
            title="Model Y" 
            description="Order Online for Touchless Delivery" 
            backgroundImg="model-y.jpg"
            leftBtnText="custom order"
            rightBtnText="exsisting inventory"
            downArrow="true"/>


            <Section 
            title="Model S" 
            description="Order Online for Touchless Delivery" 
            backgroundImg="model-s.jpg"
            leftBtnText="custom order"
            rightBtnText="exsisting inventory"
            downArrow="true"/>

            <Section 
            title="Solar Panels" 
            description="Lowest Cost Solar Panels in America" 
            backgroundImg="solar-panel.jpg"
            leftBtnText="order now"
            rightBtnText="exsisting inventory"
            downArrow="true"/>


            <Section 
            title="Solar Roof" 
            description="Produce Clean Energy From Your Roo" 
            backgroundImg="solar-roof-2.jpg"
            leftBtnText="order now"
            rightBtnText="exsisting inventory"
            downArrow="true"/>

            <Section 
            title="Accessories"
            backgroundImg="accessories.jpg"
            leftBtnText="shop now"
            footerDown="true"
             />

        </Container>
    )
}

export default Main


const Container = styled.div`
height: 100vh;
width: 100vw;
scroll-snap-type: y proximity;
overflow: auto;
scroll-behavior: smooth;
transition:all 0.5s ease-in-out;
`
