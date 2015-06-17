class HomeController < ApplicationController
  def index
		@allNews = News.order('created_at DESC').page(params[:page]).per(3)
		@products = Spree::Product.all
  end

	def corporate
	end
end
