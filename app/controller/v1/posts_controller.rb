class PostsController < ApplicationController
  def index

  end

  def show

  end

  def new

  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      render json: { status: failed }
    end
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

    def post_params
      params.require(:post).permit(:title, :body, :comments, :picture)
    end

end
