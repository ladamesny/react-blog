class PostSearcher
  def search(param)
    Post.find(name: param[:name])
  end
end
