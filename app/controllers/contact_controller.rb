class ContactController < ApplicationController
	respond_to :json

	before_filter :validate_message, only: :create

	def create
		cont = ContactMailer.contact(params[:message], params[:email], params[:name])
		cont.deliver
	end

	protected

	def validate_message
		params.require(:email)
		params.require(:name)
		params.require(:message)

		params.permit(:email, :name, :message)
	end

end
