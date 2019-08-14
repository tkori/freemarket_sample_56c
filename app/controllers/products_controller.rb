class ProductsController < ApplicationController

  def index
    @products = Product.order(id: :desc).limit(4)
  end
  
  def new
  end
  
  def show
  end
  
  private

  def product_permit
    params.require(:product).permit(:id, :name, :price)
  end


end