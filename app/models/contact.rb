class Contact < ActiveRecord::Base
	attr_accessor :name, validate: true
	attr_accessor :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
	attr_accessor :org, validate: true
	attr_accessor :message, validate: true
end
