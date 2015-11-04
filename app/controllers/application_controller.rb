class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_catalog, :set_pages

  private

  def set_pages
    @pages = Refinery::Page.find_by_path("home-content").children
  end

  def set_catalog
    @products = Spree::Product.active.take 3
  end

end
