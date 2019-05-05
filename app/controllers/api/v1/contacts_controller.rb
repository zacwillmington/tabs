module Api::V1
    class ContactsController < ApplicationController
      
      def index
            @contacts = User.find_by(id: params['id']).contacts
            binding.pry
      end    
      
      def show
        
      end
         
      def create

      end

      def destroy

      end

end