import React from 'react'
import SEO from './components/seo';
import {graphql} from "gatsby";
import './styles/index.scss';
import Footer from './components/footer'
import Fade from 'react-reveal'

const projectTemplate = ({data}) => {
    let fields = data.allAirtable.edges[0].node.data
    return (
        <>
        <SEO
        title={`${fields.Title}`}
        />
        <div class="container">
        <div className="intro">
            <h1>{fields.Title}</h1>
            <p>{fields.Description}</p>
            <p>My Role: {fields.My_Role}</p>
            <p>{fields.Year}</p>
           {fields.Attachments.map(a => (
             <>
             
             {a.type === 'video/mp4' ? (
               <Fade>
               <video autoplay loop>
               <source src={a.url} type="video/mp4" />
                video not supported
               </video>
               </Fade>
             ): (
               <Fade>
              <img src={a.url} alt={a.filename} />
              </Fade>
             )}
             
             </>
           ))}
            
        </div>
        </div>
        <Footer />
        </>
    )
}

export default projectTemplate

export const pageQuery = graphql`
query templateQuery {
  allAirtable {
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
          My_Role
        }
      }
    }
  }
}






`