class HomeController < ApplicationController
  def index
    @allNews = News.order('created_at DESC').page(params[:page]).per(3)
  end

  def test
    @pages = Refinery::Page.find_by_path("home-content").children
    @items = Refinery::News::Item.latest(5)
  end

  def corporate
  end
end
