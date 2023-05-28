import React from 'react';

function Articles() {
  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'How to turn wood into money hahah not funny',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'React in a short way to learn',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'my journey from zero to hero',
      image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    
    // Add more blog post objects as needed
  ];

  return (
    <>
    <div className="flex justify-center pb-24 font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Articles</h1>
    </div>
    <section className='articles relative mx-auto my-0 min-h-full max-w-4xl'>
    <div className='container mx-auto px-4 '>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-4'>
        {blogPosts.map((post) => (
          <div key={post.id} className='post max-w-xs'>
            <a href="#">
            <img src={post.image} className="mb-5 rounded-lg" alt="Article Image" />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">{post.title}</a>
            </h2>
          </div>))}
      </div>
      
    </div>
</section>
</>

  );
}

export default Articles;
