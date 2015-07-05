class ContactController < ApplicationController
	before_filter

	def create
		ContactMailer.contact_email.deliver_now
		flash[:notice] = 'success!'
		redirect_to root_url
	end
end
