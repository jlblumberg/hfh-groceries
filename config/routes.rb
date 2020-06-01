Rails.application.routes.draw do
  
  resources :maps

  root 'home#index'
  
end
