require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  test "should not save product without asin" do
    product = Product.new
    product.name = "Test"
    assert_not product.save, "Saved the product without a asin"
  end

  test "should not save product without name" do
    product = Product.new
    product.asin = "101Test"
    assert_not product.save, "Saved the product without a name"
  end

  test "should save product if name and asin is present" do
    product = Product.new
    product.asin = "101Test"
    product.name = "Test"
    assert product.save, "Did not save a valid product"
  end
end
