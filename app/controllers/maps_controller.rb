# frozen_string_literal: true

class MapsController < ApplicationController

  def create
    
  end

  def generate_position
    #do logic and convert postcode
    redirect_to '/maps' #with lat and long at end
  end

end
