import { GetStaticProps } from "next"
import BasePage from "@components/templates/BasePage"
import Customers from "@components/templates/Customers"
import Footer from "@components/templates/Footer"
import HighlightedProjects from "@components/templates/HighlightedProjects"

export default function Home() {
    return (
        <BasePage>
            <HighlightedProjects />
            <Customers />
            <Footer />
        </BasePage>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: "Elephant Skin - Real State Creative Agency",
            description: "At Elephant Skin, we have assembled a team of the best minds and talents in 3D renderings, graphic design, film making, and branding with a diversity of backgrounds such as architecture, landscaping, and development to ensure that we know exactly what your real estate challenges are."
        }
    }
}