class GreetingsController < ApplicationController
  def index
    render json: Greeting.message
  end
end
