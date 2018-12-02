require 'test_helper'

class ProductFinderServiceTest < ActiveSupport::TestCase
  test 'it gets the correct product' do
    product = ProductFinderService.new('B07HK47YNR').getProduct
    assert_equal product.name, 'OPYUT Natural Wooden Baby Teeth Toys 10 Bead 1 Elephant'
  end
end