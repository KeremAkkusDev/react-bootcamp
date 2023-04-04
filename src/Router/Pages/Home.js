import { Helmet } from "react-helmet";
function Home() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="homepage description" />
      </Helmet>
      <div>Home</div>
    </>
  );
}

export default Home;
