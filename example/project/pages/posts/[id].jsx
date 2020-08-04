import axios from 'axios';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

//=========================================================
//Static Generation
export async function getStaticPaths() {
  const res = await axios('https://jsonplaceholder.typicode.com/posts');
  const posts = res.data;

  const paths = [];

  // build just 60 path to test fallback
  for (let i = 1; i <= 60; i++) {
    paths.push(`/posts/${i}`);
  }

  // to build path of all post
  // const paths =  posts.map((post, index) => {
  //   if (index <= 60) {
  //     return;
  //   }
  // });
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
// export async function getServerSideProps({ params }) {
//   const res = await axios(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const post = res.data;
//   return { props: { post } };
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
