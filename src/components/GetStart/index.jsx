import classes from "./getstart.module.css";

const GetStart = () => {
  return (
    <div className={classes.button}>
      <div className={classes.getStart}>
        <a href="https://reactjs.org/docs/getting-started.html">Get Started</a>
      </div>
      <div className={classes.tuto}>
        <a
          className={classes.take}
          href="https://reactjs.org/tutorial/tutorial.html"
        >
          Take the Tutorial
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.34923 4.24075C7.9299 4.60017 7.88134 5.23147 8.24076 5.65079L13.6829 12L8.24076 18.3492C7.88134 18.7685 7.9299 19.3998 8.34923 19.7593C8.76855 20.1187 9.39985 20.0701 9.75927 19.6508L15.7593 12.6508C16.0803 12.2763 16.0803 11.7237 15.7593 11.3492L9.75927 4.34921C9.39985 3.92989 8.76855 3.88132 8.34923 4.24075Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GetStart;
