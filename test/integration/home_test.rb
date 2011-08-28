require "test_helper"

class HomeTest < ActionController::IntegrationTest

  describe 'home page', :type => :request do
    it 'welcomes the user' do
      p 'fooooooooooooooooo'
      visit '/'
      page.should have_content('Welcome')
    end
  end
  
end

