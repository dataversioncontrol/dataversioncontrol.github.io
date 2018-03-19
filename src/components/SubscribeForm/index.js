import React from 'react'
import styled from 'styled-components'

export default ({ children, title, description, onSubmit = () => {} }) => (
  <Wrapper id="mc_embed_signup">
    <Form
      action="//sweedom.us10.list-manage.com/subscribe/post?u=a08bf93caae4063c4e6a351f6&amp;id=24c0ecc49a"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <label htmlFor="mce-EMAIL">Want to know more? Please subscribe.</label>
        <input
          type="email"
          name="EMAIL"
          className="email"
          id="mce-EMAIL"
          placeholder="email address"
          required
        />

        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_a08bf93caae4063c4e6a351f6_24c0ecc49a"
            tabIndex="-1"
          />
        </div>

        <div className="clear">
          <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
            onClick={onSubmit}
          />
        </div>
      </div>
    </Form>
    <div className="clear spam">Up to 2 emails per month. No spam.</div>
  </Wrapper>
)

const Wrapper = styled.div``

const Form = styled.form``
