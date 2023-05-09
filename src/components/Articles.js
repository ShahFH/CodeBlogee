import React from 'react';

function Articles() {
  const posts = [/* Array of posts fetched from GraphQL */];

  return (
    <section>
      <h2>All Articles</h2>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <a href={`/post/${post.id}`}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
            </a>
          </div>
        ))}
      </div>
      {posts.length > 4 && (
        <div className="pagination">
          {/* Pagination buttons here */}
        </div>
      )}
    </section>
  );
}

export default Articles;

