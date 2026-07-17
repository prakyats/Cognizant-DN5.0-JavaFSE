function BlogDetails(props) {

  return (
    <ul>
      {props.blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h5>{blog.author}</h5>
          <p>{blog.description}</p>
        </div>
      ))}
    </ul>
  );
}

export default BlogDetails;