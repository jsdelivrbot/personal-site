import React from 'react'

const LandingPage = (props) => (
  <section className='landing-main'>
    <article className='landing-main-content'>
      <h1 className='page-heading'>Hey! I'm <span id='my-name-heading'>Ricardo</span>.</h1>
      <p>
        Welcome. Have a look around.</p>
      <p>
        If you'd like to chat about coding, social justice, economics, microcellular biology, physics, medieval history, the theory of algorithmic transubstantiaton, or the massive shadow conspiracy comprising a cabal of sentient roombas, ping me via:</p>
      <p className='email-callout'>
        <a href="mailto:rjcolmed@gmail.com">rjcolmed@gmail.com</a>
      </p>
      <p><strong>Full disclosure</strong>: I'm only knowledgeable about two of those subjects. And one's made up.</p>
      <p>For my thoughts on coding, etc., check out my <a target='_blank' href='https://medium.com/@rjcolmed'>blog</a>.</p>
    </article>
  </section>
)

export default LandingPage