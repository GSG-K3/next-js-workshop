import Link from "next/link";
const Layout = ({ children }) => (
  <div>
    <Link href="/">
      <a>
        Home <br />
      </a>
    </Link>
    <Link href="/user?name=Banned" as="/user/banned">
      <a> User </a>
    </Link>
    <Link href="/github?user=Nujood" as="/github/Nujood">
      <a>Github </a>
    </Link>
    <Link href="/about">
      <a>About </a>
    </Link>
    {children}
  </div>
);

export default Layout;
