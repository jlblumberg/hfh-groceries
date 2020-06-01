# frozen_string_literal: true

require 'rails_helper'

RSpec.feature 'displays a map', type: :feature do
  before(:each) do
    visit '/'
    click_link_or_button 'Submit'
  end

  it 'goes to the correct path' do
    expect(current_path).to eq('/map')
  end
end
