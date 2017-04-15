Rails.routes do

  namespace :v1 do
    resources :posts, format: :json
    resources :search_posts, only: [:create]
  end


  # index   get
  # show    get
  # new     get
  # create  post
  # edit    get
  # update  put/patch
  # destroy delete

end

