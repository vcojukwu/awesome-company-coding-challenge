Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
     resources :products, only: [:show]
    end 
  end 

  get 'home', to: 'home#index'
  root "home#index"
end
