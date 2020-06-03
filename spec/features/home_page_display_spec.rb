# frozen_string_literal: true

require 'rails_helper'

RSpec.feature 'home page displays correctly', type: :feature do
  it 'does not throw an error' do
    visit '/'

    expect { page }.to_not raise_error
  end

  it 'has expected content on page' do
    visit '/maps'

    expect(page).to have_content 'Enter your postcode'
    expect(page).to have_button 'Search'
  end
end
