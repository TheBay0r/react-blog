import React from 'react'

const allEntries = [
  {
    id: 1,
    timestamp: new Date(2017, 1, 14).getTime(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
    'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
    'ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
    'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ' +
    'in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    timestamp: new Date(2017, 1, 28).getTime(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
    'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
    'ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
    'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ' +
    'in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id:3,
    timestamp: new Date(2017,2,6,13,3,1).getTime(),
    content: (
      <article>
        <h3>Airplane mode activated</h3>
        <p>
          Hey fellow citizen! I guess this is becoming the worst code I have
          written in my life. But hey, welcome to my blog anyways! :-)
        </p>
        <p>
          You may wonder I created this blog. Well it started all at the Agile
          Testing Days 2016, when I thought to myself: "Hey everyone is doing it
          why don't you start your own blog as well?!"
        </p>
        <p>
          {
            // TODO: Add link to information about technologies
          }
          Obviously this wasn't my only intention to create a blog. To be quite
          frank I don't even care if someone will ever read this. The real
          intention behind this (so far) crappy piece of technology is to stay
          up-to-date with the latest and greatest developments in web technologies.
          I just created this blog to practice using neat products like React,
          AWS Lambda and other AWS things.
        </p>
        <p>
          If you happen to read this blog in 2017 you might wonder why I am
          writing about Lambda although it is clearly just a static web app.
          Well, you got me. But the concept I want to follow with this app is to
          continuously improve the underlying infrastructure. While today it is
          just a static web app, I planned to load the content in the future
          using lambda functions. And there might be even features that I
          currently can't even imagine to be implemented. But all of it should
          be done using micro functions to push or get content.
        </p>
        <p>
          {
            // TODO: link github repo
          }
          While you are reading this Article, this code could still be crap. But
          If you are interested in it anyways, you can check it out in my GitHub
          Repository.
        </p>
        <p>
          Now move along citizen. And let's hope that I'll keep my promise in
          updating this blog regularly and also improving it's underlying code
          with each update.
        </p>
        <p>
          Oh yeah, and by the way. If you have read this far and where wondering
          why I was using this nonsense heading for my first article: I was writing
          the "finishing" touches of this blog during a flight. ;-)
        </p>
      </article>
    )
  }
];

var blogEntries = function () {

  // TODO; load all files from folder

  // TODO: sort entries;

  return allEntries;
};

module.exports = blogEntries;