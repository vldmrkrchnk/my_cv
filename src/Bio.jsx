import "./Bio.scss";

const Bio = () => {
  return (
    <div class="bio-wrapper">
      <h1>Hello.</h1>
      <p id="title">My name is Volodymyr Kirichenko</p>
      <p>
        I am a JavaScript software developer currently based in Ukraine. I
        graduated from
        <a href="http://knmu.kharkov.ua/" target="_blank" rel="noreferrer">
          {" "}
          Kharkiv National Medical University{" "}
        </a>{" "}
        where I studied neurology and study to this day. I have 3 years of
        experience in commercial development in{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>
        . My CV{" "}
        <a href="./documents/CV_VLADIMIR_KIRICHENKO.pdf" download>
          here
        </a>
        .`
        {/* You can see some of my test assignments on  <a href="https://github.com/vldmrkrchnk" target="_blank">GitHub</a>. */}
      </p>
      <p>
        You can follow me on{" "}
        <a
          href="https://twitter.com/vldmrkrchnk"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>{" "}
        where I will write my thoughts about frontend technologies and medicine.
        Now it`s clear but in future I want to fill it with my experience.`
      </p>

      <p>
        Follow me on{" "}
        <a
          href="https://www.instagram.com/neurochenko"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        , but here the situation is not much different from my twitter.`
      </p>
      <p>
        Outside of programming and empty social networks I have a{" "}
        <a
          href="https://www.youtube.com/@user-nh1kb5yg2z"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>{" "}
        channel where I managed to record 2 videos due to lack of time. As a
        student. Sorry I didn't have time to write the subtitles, the narration
        is on{" "}
        <a
          href="https://www.bbc.com/news/world-60525350"
          target="_blank"
          rel="noreferrer"
        >
          Russia
        </a>
        n`
      </p>
    </div>
  );
};

export default Bio;
