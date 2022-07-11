import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hello prospective employers! My name is Christopher Pierce. I am a recent graduate of the Ohio State University Coding Bootcamp. Previously I have been employed as a restaurant worker holding multiple titles, prep-cook, kitchen lead, and manager. Currently I am employed by Toshiba as a repair technician where I repair commercial electronics. I am taking this course as a way to make my way into a more challenging and fulfilling career. I believe this new skill I am developing, as well as the leadership and organizational skills I have gathered from my previous jobs will make me a well rounded candidate for any web development position. I have assembled a collection of the projects I have worked on throughout this Bootcamp process. Have a look around and I hope I will hear from you soon.
        </p>
      </div>
    </section>
  );
}

export default About;
