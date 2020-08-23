import React, { useState } from "react"
import { navigate } from "gatsby-link"
import ContactData from "../data/contact-us.json"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactUs = () => {
  const { title, enterName, enterEmail, enterMessage, sendButton } = ContactData

  const [formData, setFormData] = useState()

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-background"></div>
      <h2 className="contact-us-title">{title}</h2>

      <form
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <input
            className="contact-input-name"
            type="text"
            name="name"
            onChange={handleChange}
            placeholder={enterName}
          />
        </p>
        <p>
          <input
            className="contact-input-email"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder={enterEmail}
          />
        </p>
        <p>
          <textarea
            className="contact-textarea"
            name="message"
            onChange={handleChange}
            placeholder={enterMessage}
          />
        </p>
        <p>
          <button className="contact-button" type="submit">
            {sendButton}
          </button>
        </p>
      </form>
    </div>
  )
}

export default ContactUs
