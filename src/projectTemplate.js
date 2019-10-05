import React from 'react'
import SEO from './components/seo';
import {graphql} from "gatsby";
import './styles/index.scss';

const projectTemplate = ({data}) => {
    let fields = data.allAirtable.edges[0].node.data
    return (
        <>
        <SEO
        title={`${fields.Title}`}
        />
        <div className="intro">
            <h1>{fields.Title}</h1>
            <p>{fields.Description}</p>
            <p>{fields.Year}</p>
            {fields.Attachments[0].type === 'video/mp4' ? (
              <video controls >
              <source src={fields.Attachments[0].url} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            ): (
              <img src={fields.Attachments[0].url} alt={fields.Title} />
            )
            }
            
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
            filename
            type
          }
        }
      }
    }
  }
}




`