import { request, gql } from 'graphql-request';

const graphqlAPI = 'https://api-us-west-2.graphcms.com/v2/cl27rhwfm2b1a01xq1aahguoz/master';
const GRAPHCMS_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTM2Njc0MTYsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsMjdyaHdmbTJiMWEwMXhxMWFhaGd1b3ovbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDEzOWU4MjktMGNiMS00YmE5LTkyYmYtZTQ5ZTIyNjUzMTkwIiwianRpIjoiY2wzb212c2p1Nmd3dDAxeGk4NnBpaDZ6diJ9.RG1-eIqf9MZEfTtgny5gvwuRLlMWiQgBdHrhqSEMzz2ibPoMp5QDEg-5RVXiNJ8Xfj04gFrGI5ehVcQFJ5GfTIEaep62UozXFMmqtbo0hcr8JeJEnJ0kJRjCVM2vIjUWyn6EgHxNf5zTXTwwWE2f6FyHCZATX-xsQW0jInVVcsARklN54rPYP3rq-IziSIEBA4RYVRy9KKG-a3dfkZsVXOo13MWtjrPVFqTC1vAvej3q0r5rLa8-8cEOxqZOzVRctymVuizl5rQdioxXbxFqx7vR1R3LdP2WvbljUzh7M_bEZ5yRCrPhrD0aHLCeKnYw_6vCoIzmg-L4m2csCMQRsj1EgBOJilgAYWY6E64_IcIKCKoFfeGtmRbUuPPxzJznX-frztLUKLG7KXM1T3m29YrLQsQiIUeXASAgvQVR_Z8vBnEJkU2CaLcLwD6R9yUbSwYf8-ismlJa3Ct_v3eL8hfmlhUBEtjw288XO75xQhXRBdCpx1fOf7yiHd4_6gWk-qkbXHbIRgNUVNvqbgrbvcnSuS9hd959Nk8-_I_mY8rm4mMDTlA_ZhtitXxQZ5iKEEORPazLzUObdivVGFLGmYxh2Wg4uBhjSkMg9Vzp0DoSbuMQ6MBqhXmyXJJ3xd7x-uL_BKHSJsFJfpR37M16LIbzy1E9eHqd5FIG_kWtZcI'

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};


export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};



export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj) => {
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;
  const result = await fetch(graphqlAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${GRAPHCMS_TOKEN}`,
    },
    body: JSON.stringify({
      operationName: "CreateComment",
      variables: {
        name: obj.name,
        email: obj.email,
        comment: obj.comment,
        slug: obj.slug,
      },
      query: `mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `
    })
  })
  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  console.log(result)
  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};