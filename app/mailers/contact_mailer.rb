class ContactMailer < ApplicationMailer
	def contact_email
		contact_address = 'contact@irisdynamics.com'

		mail(
			to: contact_address,
			subject: 'Contact, yay!',
			template_path: 'contact_mailer',
			template_name: 'contact'
		)
	end
end
