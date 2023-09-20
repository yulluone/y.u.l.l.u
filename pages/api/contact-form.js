/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/

import emailjs from '@emailjs/browser'
import { config } from '../../theme.config'

const templateId = process.env.EMAILJS_TEMPLATE_ID
const publicKey = process.env.EMAILJS_PUBLIC_KEY
const serviceId = process.env.EMAILJS_SERVICE_ID

const contact = async (req, res) => {
  const { email } = req.body
  const { recipient, sender, subject } = config.contactForm || {}

  if (!recipient) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.recipient] property in theme options.' })
  }
  if (!sender) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.sender] property in theme options.' })
  }
  if (!email) {
    return res
      .status(400)
      .json({ error: 'Missing email address. Please provide a correct email address.' })
  }

  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  const getHtmlBody = (body) => {
    return Object.entries(body).map(([key, value]) => {
      if (typeof value === 'string') {
        return `<b>${key}</b>: ${value}`
      }
      if (typeof value === 'boolean') {
        return value === true ? key : false
      }
      if (typeof value === 'object') {
        return `<b>${key}</b>: ${getHtmlBody(value)?.filter(Boolean).join(', ')}`
      }
      return html
    })
  }

  let html = getHtmlBody(req.body)
  if (Array.isArray(html)) {
    html = html.join('<br />')
  }

  let templateParams = {
    from: email,
    to: recipient,
    subject: subject,
    message_html: html,
  }

  try {
    await emailjs.send('service_rjw3vcl', 'template_401mfhj', templateParams, 'b0kPS9olcVw_AvKtI')
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default contact
