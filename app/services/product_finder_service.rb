class ProductFinderService
  def initialize(asin)
    @asin = asin
  end

  def self.getProduct(asin)
    return Product.find_by(asin: asin) || new(asin).scrapeProduct
  end

  def scrapeProduct
    doc = Nokogiri::HTML(
        open(
          "https://www.amazon.com/dp/" + @asin,
          "User-Agent" => "Awesome App/1.0"
        )
      )
    
    matchRankCategory = doc.css("#SalesRank > .value").text.strip.match(/#(\d+,*\d*) in (.*) \(/)
    
    name = doc.css('#productTitle').text.strip
    category = matchRankCategory.captures.second
    rank = matchRankCategory.captures.first
    dimensions = doc.css('#prodDetails').css('.size-weight > .value')[1].text

    product = Product.new
    product.asin = @asin
    product.name = name
    product.category = category
    product.rank = rank
    product.dimensions = dimensions

    product.save

    return product
  end
end