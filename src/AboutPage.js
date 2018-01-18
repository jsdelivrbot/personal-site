import React from 'react'

const AboutPage = () => (
  <section className='about-section'>
    <h1 className='page-heading'>About</h1>
    <h3>Me? I'm a bespoke digital carpenter.</h3>
    <aside>Just kidding. That's obnoxious.</aside>
    <article>
      <h3>Actually Me</h3>
      <p>I'm a web developer, recently graduated from Flatiron School.</p>
      <p>I love building apps with JavaScript, Ruby, Rails, React, and Node.</p>

      <h3>My Path</h3>
      <p>Some time ago I worked as a project manager at a software company. </p>
      <p>And before that I studied Early Medieval Central- and Eastern-European History—<strong>intensly</strong>—first at the University of Florida, then at the University of Illinois at Urbana-Champaign.</p>
      <p>I guess my path to the present gives me a leg to stand on if I ever want to call myself a digital humanist. <strong>IF</strong>.</p>
      <p>Also, I'm super open to chatting about whatever, especially web development or social justice, so email me:</p>

      <p className='email-callout'>
        <a href="mailto:rjcolmed@gmail.com">rjcolmed@gmail.com</a>
      </p>
    </article>
  </section>
)

export default AboutPage