import React from 'react'
import styled, { css } from 'styled-components'

export default ({ children, description, onSubmit = () => {} }) => (
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
      <Input
        type="email"
        name="EMAIL"
        className="email"
        id="mce-EMAIL"
        placeholder="Your email"
        required
      />

      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_a08bf93caae4063c4e6a351f6_24c0ecc49a"
          tabIndex="-1"
        />
      </div>

      <Submit
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="button"
        onClick={onSubmit}
      />
    </Form>
    <Spam>Up to 2 emails per month. No spam.</Spam>
  </Wrapper>
)

const Wrapper = styled.div``

const Form = styled.form`
  position: relative;
`

const rounded = css`
  border-radius: 20px;
`

const Input = styled.input`
  ${rounded} border: 1px solid #0167d9;
  height: 42px;
  padding: 0px 192px 0px 22px;
  font-style: italic;
  color: #020202;
  outline: none;
  width: 100%;
`

const Submit = styled.input`
  ${rounded};
  position: absolute;
  transform: translateX(-100%);
  background: #0167d9;
  height: 100%;
  width: 170px;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: bold;
`

const Spam = styled.p`
  padding: 0px;
  margin: 0px;
  text-align: center;
  margin-top: 40px;
`
