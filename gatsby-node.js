const { slugify } = require('./src/helpers')
const path = require('path');

module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  if (node.internal.type === "Airtable") {
    // console.log(JSON.stringify(node, undefined, 4))
    const slug = slugify(node.data.Title)
    const title = node.data.Title
    createNodeField({
      node,
      slug: slug,
      title: title
    })

  }
}

module.exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const template = path.resolve('src/projectTemplate.js')
  const res = await graphql(`
  query MyQuery {
    allAirtable {
      edges {
        node {
          data {
            Title
          }
        }
      }
    }
  }  
  `)
  res.data.allAirtable.edges.forEach((edge) => {
    createPage({
      component: template,
      path: `/projects/${slugify(edge.node.data.Title)}`,
      context: {
        title: edge.node.data.Title,
      }

    })
  })
}
