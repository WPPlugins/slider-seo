function createDivContainer($) {

    /* First, count the number of div that already exist. This is how we're going to
     * implement the name and ID attributes of the element.
     */
    iSliderItemCount = $('.slider-body').children().length;
	iSliderItemCount++;
	
    var Element =
    	'<tr class="slide-'
    	+ iSliderItemCount
    	+ ' slider-item slider-item-notsave item-active">'
		+ 	'<td class="slider-img">'
		+ 	'<img src="" alt="" title="" class="hidden"/>'
		+ 	'<div id="set-image" style="width: 148px; height: 148px;">'
		+	'<input type="submit" value="Set Slide Image" class="set-slide-thumbnail button">'
		+	'</div>'
		+ 	'<div class="row-actions hide-if-no-js">'
		+ 		'<span class="activate">'
		+ 			'<a title="Edit" href="javascript:;" class="set-slide-thumbnail">Edit</a> |'
		+ 		'</span>'
		+ 		'<span class="delete">'
		+ 			'<a title="Delete Slide Item" id="delete-slider-item">Delete</a> |'
		+ 		'</span>'
		+ 	'</div>'
		+ 	'</td><!-- .check-column -->'
		+ 	'<td class="slider-text">'
		+ 	'<ul class="tabs-toggle">'
		+ 		'<li class="hide-if-no-js tab-1 tabs-active">'
		+ 			'<a href="#" id="tab-seo">SEO</a>'
		+ 		'</li>'
		+ 		'<li class="hide-if-no-js tab-2">'
		+ 			'<a href="#" id="tab-others">Others</a>'
		+ 		'</li>'
		+ 	'</ul>'
		+ 	'<div class="tab-content">'
		+ 		'<div class="tab-item tab-seo">'
		+ 			'<input name="" type="text" class="widefat" id="slider-img-title" value="">'
		+ 			'<small> Slider Image Title Text '
		+ 				'<div class="tooltip dashicons dashicons-warning">'
		+ 					'<div class="tooltiptext"><b>Use keyword(s) in title. Preferably using english words.</b> <br><br>'
		+ 					'ie: istead of "iStock_00044xSmall.jpg" which doesnt add much information about an image, use "image-optimization.jpg".'
		+ 					'</div>'
		+ 				'</div>' 
		+ 			'</small>'
		+ 			'<input name="" type="text" class="widefat" id="slider-img-alt" value="">'
		+ 			'<small> Slider Image Alt Text '
		+ 				'<div class="tooltip dashicons dashicons-warning">'
		+ 					'<div class="tooltiptext"><b>Create descriptive alt text</b> <br><br>'
		+ 					'Alt text or tags are another way that search engines help determine what your image is about. Unlike traditional web content, search engines can’t determine the text content of an image. (Search spiders are pretty smart, but as far as I know they haven’t developed eyes yet.) As a result, search engines need to rely on captions around the image, alt text, file names and other surrounding text. Adding descriptive text in the alt tag helps the search engines determine what the content of the image is.'
		+ 					'<br><br>'
		+ 					'If an image is used as navigation, ie as a link to another page, be sure to use alt text that is meaningful to the content of the page being linked to.'
		+ 					'</div>'
		+ 				'</div>' 
		+ 			'</small>'
		+			'<input name="" type="hidden" id="slider-img-src">'
		+ 			'<input name="" type="hidden" id="slider-img-srcT">'
		+			'<input name="" type="hidden" id="slider-img-id">'
		+ 			'</div>'
		+ 		'<div class="tab-item tab-others" style="display: none;">'
		+ 			'<textarea id="slider-img-caption" cols="30" rows="10"></textarea>'
		+ 			'<small> Slider Image Short Caption'
		+ 				'<div class="tooltip dashicons dashicons-warning">'
		+ 					'<div class="tooltiptext"><b>Short descriptive content about the image</b> <br><br>'
		+ 					'Image captions are important because they are one of the most well-read pieces of content on your entire site.'
		+ 					'</div>'
		+ 				'</div>'
		+ 			'</small>'
		+ 			'<input name="" class="widefat" type="text" id="slider-img-url" value="">'
		+ 			'<small> Slider Image Link Url'
		+ 				'<div class="tooltip dashicons dashicons-warning">'
		+ 					'<div class="tooltiptext"><b>The right anchor text</b> <br><br>'
		+ 					'Anchor text is another important factor in image SEO. If you decide to link to images with text, your anchor text can play a role in how your image is ranked for keywords. Use descriptive anchor text that describes the image.  For example, linking to an image using a generic term like “image” or “photo” or a file name that doesn’t use keywords doesn’t give search engines much meaningful information on what the image is about. Linking to an image with keywords is helpful to search engines as well as people visiting your site.'
		+ 					'</div>'
		+ 				'</div> '
		+ 			'</small>'
		+ 		'</div>'
		+ 	'</div>'
		+ '</td><!-- .column-description -->'
		+ '<td class="slider-delete" >'
		+ 	'<a id="delete-slider-item" class="delete-slider-item" alt="Delete this slide" href="#"><span class="media-modal-icon"><span class="screen-reader-text">Close media panel</span></span>'
		+ '</a>'
		+ '</td>'
		+ '</tr>';

    return Element;
}