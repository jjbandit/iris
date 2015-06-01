class WelcomeController < ApplicationController
  def index
		@allNews = News.order('created_at DESC').page(params[:page]).per(3)
		# @allNews = News.order('created_at desc').limit(3);
  end
end
