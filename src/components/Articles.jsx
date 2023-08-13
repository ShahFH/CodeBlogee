import React, { useEffect, useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { Link } from 'react-router-dom';

const endpoint = '';

const Articles = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const graphQLClient = new GraphQLClient(endpoint);

      const query = gql`
        query {
          posts {
            id
            title
            datePublished
            slug
            content {
              html
            }
            author {
              name
              avatar {
                url
              }
            }
            coverPhoto {
              url
            }
          }
        }
      `;

      try {
        const response = await graphQLClient.request(query);
        setData(response.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="flex justify-center pb-24 font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Articles</h1>
    </div>

  <section className="articles relative mx-auto my-0 min-h-full max-w-4xl">
  <div className="container mx-auto px-4">
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
          {data.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id} className="max-w-xs">
            {post.coverPhoto && <img src={post.coverPhoto.url} className="mb-5 rounded-lg" alt="Cover" onError={(e) => console.log('Image error:', e)} />}
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">{post.title}</h2>
            {/* Render other post details as needed */}
          </Link>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  </section>
  </>
  );
};

export default Articles;


