import React from "react"
import SEO from "./components/seo"
import { graphql } from "gatsby"
import "./styles/index.scss"
import Footer from "./components/footer"
import Fade from "react-reveal"

const projectTemplate = ({ data }) => {
  let fields = data.allAirtable.edges[0].node.data
  return (
    <>
      <SEO title={`${fields.Title}`} />
      <div className="container">
        <div className="intro">
          <div className="title">
            <h1>{fields.Title}</h1>
          </div>
          <div className="desc">
            {fields.Link && (
              <p>
                link: <a href={fields.Link}>{fields.Title}</a>
              </p>
            )}
            <p>{fields.Description}</p>
            <p>My Role: {fields.My_Role}</p>
            <p>{fields.Year}</p>
          </div>
        </div>
        {fields.Attachments.map(a => (
          <div key={Math.random()}>
            {a.type === "video/mp4" ? (
              <Fade>
                <video autoPlay loop>
                  <source src={a.url} type="video/mp4" />
                  video not supported
                </video>
              </Fade>
            ) : (
              <Fade>
                <img src={a.url} alt={a.filename} />
              </Fade>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default projectTemplate

export const pageQuery = graphql`
  query templateQuery($title: String!) {
    allAirtable(filter: { data: { Title: { eq: $title } } }) {
      edges {
        node {
          data {
            Description
            Format
            Title
            Link
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
          id
        }
      }
    }
  }
`
