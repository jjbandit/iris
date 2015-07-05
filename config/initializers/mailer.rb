Rails.application.configure do

	config.action_mailer.delivery_method = :smtp

	config.action_mailer.smtp_settings = {
		address: 'email-smtp.us-west-2.amazonaws.com',
		port: 587,
		domain: 'irisdynamics.com',
		authentication: :login,
		user_name: ENV['AMAZON_SMTP_USERNAME'],
		password: ENV['AMAZON_SMTP_PASSWORD'],
	}

end
