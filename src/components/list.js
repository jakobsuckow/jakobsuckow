import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const { slugify } = require('../helpers')


const List = () => {
    const data = useStaticQuery(graphql`
    query listQuery {
        allAirtable(sort: {fields: data___Year, order: DESC}) {
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
        <div className="caption">
          <ul>
            <li>Year</li>
            <li>Name</li>
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
            </ul>
        ))}
        </>
    )
}

export default List