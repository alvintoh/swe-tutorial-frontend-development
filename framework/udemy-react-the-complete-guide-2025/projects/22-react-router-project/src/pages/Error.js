import MainNavigation from "../components/MainNavigation";

import classes from "../index.css";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <h1>An Error Occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
