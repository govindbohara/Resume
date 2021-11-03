import { NextApiRequest, NextApiResponse } from 'next'
import nodeMailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/json-transport'

const transport = nodeMailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASSWORD,
	},
})
interface IRequestBody {
	email: string
	subject: string
	message: string
}
const handler = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { email, subject, message } = req.body as IRequestBody
		const mailOptions: MailOptions = {
			from: email,
			to: process.env.SEND_EMAIL_TO,
			text: message,
			subject: `New email from ${email}\n\n${subject}`,
		}
		transport.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.status(400).send(error.message)
			} else {
				res.status(200).send(info.response)
			}
		})
	} else {
		res.status(404).send(`${req.method} not available on this route`)
	}
}

export default handler
