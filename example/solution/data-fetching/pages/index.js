import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';

// get all post from json place holder Api to build Post Link List
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps(context) {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return {
    // will be passed to the page component as props
    props: { posts: res.data },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 second
    revalidate: 10, // In seconds
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
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
