import { GetStaticProps } from "next"
import BasePage from "@components/templates/BasePage"
import Intro from "@components/pages/home/Intro"
import Concept from "@components/pages/home/Concept"
import Facade from "@components/pages/home/Facade"

export default function Home() {
    return (
        <BasePage>
            <Intro />
            <Concept />
            <Facade />
        </BasePage>
    )
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            title: "Elephant Skin - Real State Creative Agency",
            description: "At Elephant Skin, we have assembled a team of the best minds and talents in 3D renderings, graphic design, film making, and branding with a diversity of backgrounds such as architecture, landscaping, and development to ensure that we know exactly what your real estate challenges are."
        }
    }
}