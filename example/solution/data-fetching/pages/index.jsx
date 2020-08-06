import Layout from '../components/Layout';
import axios from 'axios';

// get all post to build Post Link List
export async function getStaticProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return {
    props: { posts: res.data },
  };
}

const Index = ({ posts }) => {
  if (!posts) {
    return (
      <Layout
        keywords="Blog Posts "
        description="Blog Posts App Build in Next.js"
      >
        <h1>There is no any Post</h1>
      </Layout>
    );
  }
  return (
    <Layout
      keywords="Blog Posts "
      description="Blog Posts App Build in Next.js"
    >
      <div>
        <h1>Welcome Blog Posts Next Js App </h1>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <a href={`/posts/${post.id}`}>{post.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
