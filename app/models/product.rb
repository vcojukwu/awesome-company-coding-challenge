class Product < ApplicationRecord
  validates :asin, uniqueness: true
  validates :asin, presence: true
  validates :name, presence: true
end
