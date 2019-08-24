class ProductsController < ApplicationController
  def new
    @product = Product.new
    @product.images.build
    @parents = Category.all.order("id ASC").limit(13)

    @category_parent_array = ["---"]
    #データベースから、親カテゴリーのみ抽出し、配列化
    Category.where(ancestry: nil).each do |parent|
        @category_parent_array << parent.name
    end
  end
  
  # 親カテゴリーが選択された後に動くアクション
  def get_category_children
    #選択された親カテゴリーに紐付く子カテゴリーの配列を取得
    @category_children = Category.find_by(name: "#{params[:parent_name]}", ancestry: nil).children
  end

  # 子カテゴリーが選択された後に動くアクション
  def get_category_grandchildren
  #選択された子カテゴリーに紐付く孫カテゴリーの配列を取得
    @category_grandchildren = Category.find("#{params[:child_id]}").children
  end

  def create
    binding.pry
    @product = Product.new(product_params)
    @product.user_id = current_user.id
    if @product.save!
      params[:images][:image].each do |image|
        @product.images.create(image: image, product_id: @product.id)
      end
    else
      redirect_to new_product_path
    end
  end
    
  def index
    @products = Product.order(id: :desc).limit(4)
  end
  
  def show
    @product = Product.find(params[:id])
    @first_product=Product.first
    @last_product=Product.last
    @same_category_products = Product.where(category_id: @product.category_id).where.not(id:@product.id).order('created_at DESC').limit(6)
    @category=Category.all
    @other_products = @product.user.products.where.not(id: @product.id)
  end


  def search
    if params[:search]
      @products = Product.where('name LIKE ?', "%#{params[:search]}%").page(params[:page]).per(132).order('updated_at DESC')
      @keyword = params[:search]
      @search_count = Product.where('name LIKE ?', "%#{params[:search]}%").size
    else
      @products = Product.page(params[:page]).per(132).order('updated_at DESC')
    end
  end

  def destroy
    product = Product.find(params[:id])
      if product.user_id == current_user.id
        product.destroy
      end
    redirect_to root_path
  end
  
  private

  def product_params
    params.require(:product).permit(:name,:detail,:user_id,:size_id,:brand,:condition_id,:delivery_fee_id,:shipping_method_id,:prefecture_from_id,:shipping_days_id,:price,:category_id,images_attributes: [:image])
  end

end