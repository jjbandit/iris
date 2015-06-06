class News < ActiveRecord::Base
	has_attached_file :image, styles: { thumb: ['64x64#', :png], large: ['700x250#', :png] }
	validates_attachment_content_type :image, content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
