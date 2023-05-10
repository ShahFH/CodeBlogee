import React from 'react';

function Articles() {
  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Post Title 1',
      image: 'image-url-1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Post Title 2',
      image: 'image-url-2.jpg',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more blog post objects as needed
  ];

  return (
    <section className='articles'>
      <div className='articles__container'>
        <div className='articles__column'>
          {blogPosts.map((post) => (
            <div className='articles__post' key={post.id}>
              <img src={post.image} alt={post.title} className='articles__post-image' />
              <h2 className='articles__post-title'>{post.title}</h2>
              <p className='articles__post-content'>{post.content}</p>
            </div>
          ))}
        </div>
        <div className='articles__column'>
          {/* Render additional content in the second column if needed */}
        </div>
      </div>
    </section>
  );
}

export default Articles;
