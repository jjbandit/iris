class ContactController < ApplicationController
	respond_to :json

	before_filter :validate_message, only: :create

	def create
		cont = ContactMailer.contact(params[:message], params[:email], params[:name], params[:org])
		cont.deliver
	end

	protected

	def validate_message
		params.require(:email)
		params.require(:name)
		params.require(:message)
		params.require(:org)

		params.permit(:email, :name, :message, :org)
	end

end
