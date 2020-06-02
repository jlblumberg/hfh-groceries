# frozen_string_literal: true

Rails.application.routes.draw do
  get 'home/index'
  

  get 'maps/generate_position'
  # get 'maps/:id', to: "maps"
  resources :maps
  root 'home#index'
end
