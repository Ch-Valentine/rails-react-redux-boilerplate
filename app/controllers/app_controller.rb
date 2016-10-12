class AppController < ApplicationController
  def index
    render json: { attributes: { title: "React is awesome ;-)", text: "This text has loaded from the server." } }
  end
end
