/*function BlogPost({ title, author, coverPhoto, datePublished, slug }) {
    return (
      <div className="post max-w-xs">
        <a href="#">
          <img src={coverPhoto.url} className="mb-5 rounded-lg" alt="Article Image" />
        </a>
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
          <a href="#">{title}</a>
        </h2>
      </div>
    );
  }
  
  export default function Articles() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await graphql.request(QUERY);
          setPosts(data.post);
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
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
              {posts.map((post) => (
                <BlogPost
                  title={post.title}
                  author={post.author}
                  coverPhoto={post.coverPhoto}
                  key={post.id}
                  datePublished={post.datePublished}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  */