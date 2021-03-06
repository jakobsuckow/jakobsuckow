import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const { slugify } = require("../helpers")

const List = () => {
  const data = useStaticQuery(graphql`
    query listQuery {
      allAirtable(sort: { fields: data___Year, order: DESC }) {
        edges {
          node {
            data {
              Description
              Title
              Year
              Format
              Attachments {
                filename
                id
                size
                thumbnails {
                  full {
                    url
                  }
                }
                type
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="project__list">
        <ul>
          <li className="year">Year</li>
          <li className="project__name">Name</li>
          <li className="caption_format">Format</li>
        </ul>
      </div>
      {data.allAirtable.edges.map((edge, index) => (
        <ul key={index} className="project__list">
          <li className="year">{edge.node.data.Year}</li>
          <li className="project__name">
            <a href={`projects/${slugify(edge.node.data.Title)}`}>
              {edge.node.data.Title}
            </a>
          </li>
          <li className="format">{edge.node.data.Format}</li>
          <div class="hoverImage" style={{ zIndex: `${index}` }}>
            <img
              src={edge.node.data.Attachments[0].url}
              alt={edge.node.data.Title}
            />
          </div>
        </ul>
      ))}
    </>
  )
}

export default List
