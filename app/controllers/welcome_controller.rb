class WelcomeController < ApplicationController
  def index
		@allNews = News.order('created_at desc').limit(3);
  end
end
