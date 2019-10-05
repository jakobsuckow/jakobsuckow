import React from 'react'
import SEO from './components/seo';
import {graphql} from "gatsby";

const projectTemplate = ({data}) => {
    return (
        <>
        <SEO
        title="template"
        />
        <div>
            <pre>{JSON.stringify(data)}</pre>
        </div>
        </>
    )
}

export default projectTemplate

export const pageQuery = graphql`
query templateQuery($title: String!) {
    allAirtable(filter: {data: {Title: {eq: $title}}}) {
      edges {
        node {
          data {
            Description
            Format
            Title
            Year
          }
        }
      }
    }
  }
  
  
  
`