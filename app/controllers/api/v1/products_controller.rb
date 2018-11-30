class Api::V1::ProductsController < ApplicationController
  def show
    asin = params[:id]
    render json: asin
  end
end