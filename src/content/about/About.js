import React, {Component} from 'react';
import './About.css';

class About extends Component {
  /*TODO: Fix styling*/
  render() {
    return (
      <div className="content">
        <div className="spacer"/>
        <div className="about">
          <p>
            I'm a passionate Quality Assurance Engineer, with the focus on creating a
            good test infrastructure to support teams building reliable applications.
          </p>
          <h2>
            Who am I?
          </h2>
          <p>
            I was born and raised in bavaria, where I started an eduction towards becoming
            a forester. Thanks to my lack of interest in biology, I realised that I should
            not try to study forestry. So I moved to Vienna to begin my study in Computer
            Science, where the started to call me "der Bayer".
          </p>
          <p>
            During university I realised my interest in software usability and helping others
            to create a good user experience. On my search for a "real Job" I suddenly became
            a Software Tester / Quality Assurance Engineer. Because of the experience with
            previous jobs, I got up to speed pretty quickly and figured out that in my role
            I have the possibility not just to contribute to a good user experience for our
            endusers but can also help designing a good developer/working experience.
          </p>
          <p>
            And for me personally there is no better reason to love my job! :)
          </p>
          <h2>
            My Experience
          </h2>
          <h3>
            Work
          </h3>
          <dl>
            <dt>
              kununu GmbH
            </dt>
            <dd>
              <i>September, 2016 - ongoing:</i> Quality Assurance Engineer
            </dd>
            <dt>
              Jumio Software Development GmbH
            </dt>
            <dd>
              <i>October, 2013 - August, 2016:</i> Quality Assurance Engineer
            </dd>
            <dt>
              University of Applied Sciences Technikum Wien
            </dt>
            <dd>
              <i>March, 2012 - July 2013:</i> Research Assistant Software Usability
            </dd>
            <dt>
              IBM Austria
            </dt>
            <dd>
              <i>March 2011 - February 2012:</i> Service Delivery Manager (Freelancer)
            </dd>
          </dl>
          <h3>
            Education
          </h3>
          <dl>
            <dt>
              University of Applied Sciences Technikum Wien
            </dt>
            <dd>
              <i>2011 - 2012:</i> Multimedia- and Software Engineering (Master)
            </dd>
            <dt>
              University of Applied Sciences Technikum Wien
            </dt>
            <dd>
              <i>2008 - 2011:</i> Computer Science (Bachelor)
            </dd>
          </dl>
        </div>
        <div className="spacer"/>
      </div>
    );
  }
}

export default About;