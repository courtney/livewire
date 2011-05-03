class ProxyController < ApplicationController
  
	def message	  	   
    require 'net/https'
    require 'open-uri'
    url = URI.parse('https://convore.com/api/topics/21084/messages/create.json')
    req = Net::HTTP::Post.new(url.path)
    req.basic_auth('chemphill', 'win34m3')
    req['Content-Type'] = "text/json"
    req.form_data = {"message" => params[:message]}
    con = Net::HTTP.new(url.host, url.port)
    con.use_ssl = true
    con.verify_mode = OpenSSL::SSL::VERIFY_NONE        
    @response = con.start { |http|
      http.request(req)
    }
    render :json => @response.body
	end
	
	def topics	  
    url = URI.parse('https://convore.com/api/groups/9133/topics.json')
    create_request(url)
        
  end
  
  def feed
	  url = URI.parse('https://convore.com/api/topics/'+params[:id]+'/messages.json')
	  create_request(url)
  end
  
  protected
  
  def create_request(url)
    req = Net::HTTP::Get.new(url.path)
    req.basic_auth('chemphill', 'win34m3')
    req['Content-Type'] = "text/json"
    con = Net::HTTP.new(url.host, url.port)
    con.use_ssl = true
    con.verify_mode = OpenSSL::SSL::VERIFY_NONE        
    @response = con.start { |http|
      http.request(req)
    }
    render :json => @response.body
  end  
end
