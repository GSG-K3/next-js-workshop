import axios from 'axios';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

//=========================================================
//Static Generation
export async function getStaticPaths() {
  const res = await axios('https://jsonplaceholder.typicode.com/posts');

  // build just 60 path to test fallback
  const paths = res.data.map((post) => {
    return `/posts/${post.id}`;
  });
  // return all paths to build html file
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const post = res.data;
    return { props: { post } };
  } catch (err) {
    return { props: {} };
  }
}

//=========================================================
//Server-side Rendering
// if you want to try Server-side Rendering
// export async function getServerSideProps({ params }) {
//   try {
//     const res = await axios(
//       `https://jsonplaceholder.typicode.com/posts/${params.id}`
//     );
//     const post = res.data;
//     return { props: { post } };
//   } catch (err) {
//     return { props: {} };
//   }
// }

//=========================================================

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Layout>
        <h3>Loading...</h3>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <h1>No Post</h1>
      </Layout>
    );
  }

  return (
    <Layout keywords={`psot ${post.title}`}>
      <div>
        <h1>{post.title}</h1>
        <h3> {post.body}</h3>
      </div>
    </Layout>
  );
};

export default Post;
