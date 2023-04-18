class Product < ApplicationRecord
  belongs_to :category
  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }

  # def image_url
  #   image_url.attached? ? url_for(image_url) : image_url
  # end
end
