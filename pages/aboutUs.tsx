import Intro from "@components/pages/about-us/Intro"
import Manifesto from "@components/pages/about-us/manifesto/Manifesto"
import MeetTheElephants from "@components/pages/about-us/MeetTheElephants"
import WeAreElephants from "@components/pages/about-us/WeAreElephants"
import BasePage from "@components/templates/BasePage"
import { GetStaticProps } from "next"

export default function AboutUs() {
    return (
        <BasePage>
            <Intro />
            <WeAreElephants />
            <Manifesto />
            <MeetTheElephants />
        </BasePage>
    )
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            title: "About Us - Elephant Skin - Real State Creative Agency",
            description: "At Elephant Skin, we have assembled a team of the best minds and talents in 3D renderings, graphic design, film making, and branding with a diversity of backgrounds such as architecture, landscaping, and development to ensure that we know exactly what your real estate challenges are."
        }
    }
}