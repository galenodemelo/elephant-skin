import { GetStaticProps } from "next"

export default function Stories() {
    return (
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: "Stories - Elephant Skin - Real State Creative Agency",
            description: "At Elephant Skin, we have assembled a team of the best minds and talents in 3D renderings, graphic design, film making, and branding with a diversity of backgrounds such as architecture, landscaping, and development to ensure that we know exactly what your real estate challenges are."
        }
    }
}