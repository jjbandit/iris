class ContactMailer < ApplicationMailer
	default from: 'jesse.hughes.it@gmail.com'
	default subject: 'Message from IrisDynamics.com Contact'

	layout 'mailer'

	def contact message, email, name

		contact_address = 'revelstokesnowboard@gmail.com'
		message_subject = 'IrisDynamics.com Contact Message from ' + name

		@email = email
		@name = name
		@message = message

		mail( to: contact_address,
					reply_to: @email,
					subject: message_subject)
	end
end
