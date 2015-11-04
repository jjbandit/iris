class HomeController < ApplicationController
  def index
    @allNews = News.order('created_at DESC').page(params[:page]).per(3)
  end

  def test
    @items = Refinery::News::Item.latest(5)
    @allNews = News.order('created_at DESC').page(params[:page]).per(3)
  end

  def corporate
  end
end
