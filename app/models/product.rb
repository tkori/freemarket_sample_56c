class Product < ApplicationRecord
  belongs_to :user
  has_many :images 
  # has_many :comments
  has_many :users through :comments
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :size
  belongs_to_active_hash :condition
  belongs_to_active_hash :delivery_fee
  belongs_to_active_hash :shipping_method
  belongs_to_active_hash :prefecture_from
  belongs_to_active_hash :shipping_days
  belongs_to :brand
  belongs_to :category

end