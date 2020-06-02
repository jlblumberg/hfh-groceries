# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do

  it 'responds with 200' do
    expect(response).to have_http_status(200)
  end

end
