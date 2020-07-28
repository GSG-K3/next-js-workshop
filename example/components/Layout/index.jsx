import Nvabar from '../Navbar';
import Head from 'next/head';
export default (props) => (
  <div>
    <Head>
      <title>Blog Post Next js App</title>
      <meta name="keywords" content={props.keywords} />
      <meta name="description" content={props.description} />
    </Head>
    <Nvabar />
    {props.children}
  </div>
);
