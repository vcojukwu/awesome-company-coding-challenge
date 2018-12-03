class ProductFinderService
  def initialize(asin)
    @asin = asin
  end

  def getProduct
    # return product from db if it is there else scrape it from Amazon
    return Product.find_by(asin: @asin) || ProductFinderService.scrapeProduct(@asin)
  end

  def ProductFinderService.scrapeProduct(asin)
    # We need to make sure that the full page is loaded before parsing HTML
    # This is why I am using Watir
    browser = Watir::Browser.new :chrome, headless: true
    browser.goto "https://www.amazon.com/dp/" + asin

    doc = Nokogiri::HTML.parse(browser.html)
    
    dimensions = ""
    category = ""
    rank = ""
  
    name = doc.css('#productTitle').text.strip

    # Amazon product pages do not all have the same format.
    # So we have to check which format the page is before parsing it.
    # This is a very hacky way of checking the page format before parsing
    if doc.css("#SalesRank > .value").present?
      begin
        matchRankCategory = doc.css("#SalesRank > .value").text.strip.match(/#(\d+,*\d*) in (.*) (\(|>)/)
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
    else
      doc.css('#prodDetails').css('.prodDetSectionEntry').each do |item|
        if item.text.strip == 'Product Dimensions'
          dimensions = item.next_element.text.strip
        end

        if item.text.strip == 'Best Sellers Rank'
          matchRankCategory = item.next_element.css('span')[0].css('span')[0].text.strip.match(/#(\d+,*\d*) in (.*) (\(|>)/)
          category =  matchRankCategory.captures.second
          rank = matchRankCategory.captures.first
        end
      end
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