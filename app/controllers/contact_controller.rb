class ContactController < ApplicationController
	respond_to :json

	before_filter :validate_message, only: :create

	def create
		@contact = Contact.new(params)
		puts @contact
		puts !!!!!!!!!!!!!!!!!!!!!!!!!!
		ContactMailer.contact_email.deliver_now
		render partial: 'shared/success'
	end

	protected

	def validate_message
		params.permit(:email, :name, :message, :org)
	end

end
