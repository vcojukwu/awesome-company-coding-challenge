class Api::V1::ProductsController < ApplicationController
  def show
    asin = params[:id]

    doc = Nokogiri::HTML(
        open(
          "https://www.amazon.com/dp/" + asin,
          "User-Agent" => "Awesome App/1.0"
        )
      )
    
    matchRankCategory = doc.css("#SalesRank > .value").text.strip.match(/#(\d+,*\d*) in (.*) \(/)
  
    result = {
      "name" => doc.css('#productTitle').text.strip,
      "category" => matchRankCategory.captures.second,
      "rank" => matchRankCategory.captures.first,
      "dimensions" => doc.css('#prodDetails').css('.size-weight > .value')[1].text
    }

    render json: result
  end
end