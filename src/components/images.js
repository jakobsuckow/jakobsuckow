import { graphql, useStaticQuery } from 'gatsby'

export const useImages = () => {
const { allImages } = useStaticQuery(graphql`
query allImages {
  airtable {
    data {
      Title
    }
  }
}
`
)
return allImages.airtable.data

}

