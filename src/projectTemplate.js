import React from 'react'
import SEO from './components/seo';
import {graphql} from "gatsby";

const projectTemplate = ({data}) => {
    let fields = data.allAirtable.edges[0].node.data
    return (
        <>
        <SEO
        title="template"
        />
        <div>
            <h1>{fields.Title}</h1>
            <p>{fields.Description}</p>
            <p>{fields.Year}</p>

            <img src={fields.Attachments[0].url} alt="asd" />
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
            Attachments {
              thumbnails {
                large {
                  url
                  height
                  width
                }
                full {
                  url
                  height
                  width
                }
              }
              url
            }
          }
        }
      }
    }
  }
`