class ContactMailer < ApplicationMailer
  default from: 'jesse.hughes.it@gmail.com'
  layout 'mailer'

	def contact_email
		contact_address = 'revelstokesnowboard@gmail.com'

		mail(
			to: contact_address,
			subject: 'Contact, yay!',
			template_path: 'contact_mailer',
			template_name: 'contact'
		)
	end
end
