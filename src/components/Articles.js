import React from 'react';

function Articles() {
  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'How to turn wood into money hahah not funny',
      image: 'image-url-1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Post Title 2',
      image: 'image-url-2.jpg',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Post Title 2',
      image: 'image-url-2.jpg',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    
    // Add more blog post objects as needed
  ];

  return (
    <section className='articles'>
      <div className='container'>
      <div className='postContainer'>
          {blogPosts.map((post) => (
            <div key={post.id} className='post'>
              <img src={post.image} alt={post.title} style={{ width: '304px', height: '176px' }} />
              <h2 style={{ width: '262px', height: '78px', overflow: 'hidden', textOverflow: 'ellipsis',}}>{post.title}</h2>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
}

export default Articles;
