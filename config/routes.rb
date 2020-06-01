# frozen_string_literal: true

Rails.application.routes.draw do
  get 'home/index'
  resources :maps

  root 'home#index'
end
