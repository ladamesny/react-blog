class SearchPostsController < ApplicationController
  def create
    PostSearcher.search({name: "batman"})
  end
end
