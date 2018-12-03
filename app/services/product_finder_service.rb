class ProductFinderService
  def initialize(asin)
    @asin = asin
  end

  def getProduct
    # retrun product from db if it is there else scrape it from Amazon
    return Product.find_by(asin: @asin) || ProductFinderService.scrapeProduct(@asin)
  end

  def ProductFinderService.scrapeProduct(asin)
    doc = Nokogiri::HTML(
        open(
          "https://www.amazon.com/dp/" + asin,
          "User-Agent" => "Awesome App/1.0"
        )
      )
    
    name = doc.css('#productTitle').text.strip

    # Set fields to empty string if there is an error parsing them
    begin
      matchRankCategory = doc.css("#SalesRank > .value").text.strip.match(/#(\d+,*\d*) in (.*) \(/)
      category = matchRankCategory.captures.second
      rank = matchRankCategory.captures.first
    rescue
      category = ""
      rank = ""
    end
    
    begin
      dimensions = doc.css('#prodDetails').css('.size-weight > .value')[1].text
    rescue
      dimensions = ""
    end

    product = Product.new
    product.asin = asin
    product.name = name
    product.category = category
    product.rank = rank
    product.dimensions = dimensions

    product.save

    return product
  end
end