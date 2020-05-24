import React from "react"
import ContactData from "../data/contact-us.json"

const ContactUs = () => {
  const { title, enterName, enterEmail, enterMessage } = ContactData

  return (
    <div>
      <h2>{title}</h2>
      <p>{enterName}</p>
      <p>{enterEmail}</p>
      <p>{enterMessage}</p>
    </div>
  )
}

export default ContactUs
