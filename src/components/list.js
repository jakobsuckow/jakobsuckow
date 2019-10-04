import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const List = () => {
    const data = useStaticQuery(graphql`
    query listQuery {
        allAirtable {
          edges {
            node {
              data {
                Description
                Name
                Year
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
        {data.allAirtable.edges.map((edge, index) => (
            <ul key={index} className="project__list">
                <li>{edge.node.data.Year}</li>
                <li>{edge.node.data.Name}</li>
            </ul>
        ))}
        </>
    )
}

export default List