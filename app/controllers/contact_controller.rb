class ContactController < ApplicationController
	def new
	end

	def create
		puts 'yay, email!'
		redirect_to root_url
	end
end
