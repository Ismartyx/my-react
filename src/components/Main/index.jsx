import classes from "./main.module.css";
import GetStart from "../GetStart";

const mainSection = [
  {
    title: "Declarative",
    content1:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    content2:
      "Declarative views make your code more predictable and easier to debug.",
  },
  {
    title: "Component-Based",
    content1:
      "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    content2:
      "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
  },
  {
    title: "Learn Once, Write Anywhere",
    content1:
      "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
    content2:
      "React can also render on the server using Node and power mobile apps using",
    content3: (
      <a
        href="https://reactnative.dev/"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={classes.native}
      >
        React Native.
      </a>
    ),
  },
];

const Main = () => {
  return (
    <div className={classes.mainback}>
      <div className={classes.main}>
        {mainSection.map((sections) => (
          <div className={classes.section} key={sections.title}>
            <h3 className={classes.title} key={sections.title}>
              {sections.title}
            </h3>
            <div className={classes.contents} key={sections.content1}>
              <p key={sections.content1}>{sections.content1}</p>
              <p key={sections.content2}>
                {sections.content2} {sections.content3}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.getstart}>
        <GetStart className={classes.button} />
      </div>
    </div>
  );
};

export default Main;
