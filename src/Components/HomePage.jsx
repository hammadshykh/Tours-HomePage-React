
import React from "react"
import Categories from "./Sections/Categories"
import Header from "./Sections/Header"
import { Box } from "@chakra-ui/react"
import LocationCards from "./Sections/locations/LocationCards"
import Travello from "./Sections/Travello"
import Footer from "./Sections/Footer/Footer"
import { default as locationData } from './location.json'

const HomePage = () => {
    return (
        <>
            <Box>
                <Header />
                <Categories />
                <LocationCards items={locationData} />
                <Travello />
                <Footer />
            </Box>
        </>
    )
}
export default HomePage