import { NextApiRequest, NextApiResponse } from 'next'
import nodeMailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/json-transport'

const transport = nodeMailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'govindbohara0527@gmail.com',
		pass: 'govind123256789',
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
			to: 'govindbohara76@gmail.com',
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
