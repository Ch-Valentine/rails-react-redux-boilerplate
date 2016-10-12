Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :app, defaults: { format: :json }, only: [ :index ]
  # namespace :api do
  # resources :rout.....
  # resources :rout1....
  # resources :rout2....
  # # Your routes have to write here
  # end

  root 'home#index'

  get '*path', to: 'home#index' # for client routes

end
