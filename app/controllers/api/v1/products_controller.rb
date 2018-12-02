class Api::V1::ProductsController < ApplicationController
  def show
    asin = params[:id]

    product = ProductFinderService.new(asin).getProduct

    result = {
      "name" => product.name,
      "category" => product.category,
      "rank" => product.rank,
      "dimensions" => product.dimensions
    }
    
    render json: result
  end
end