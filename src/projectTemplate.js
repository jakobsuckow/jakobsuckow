import React from 'react'
import SEO from './components/seo';
import {graphql} from "gatsby";
import './styles/index.scss';
import {Link} from 'gatsby'

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
           {fields.Attachments.map(a => (
             <>
             {a.type === 'video/mp4' ? (
               <video autoplay
               src={a.url}>
                 video not supported
               </video>
             ): (
              <img src={a.url} alt={a.filename} />
             )}
             
             </>
           ))}
            
        </div>
        <Link 
        to="/"
        >
          Home
        </Link>
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