/* Legend of Nephi: Young Reader */

function updateDepth(book, newPage) {
	var pageLimit = 3;
	var page = book.turn('page'),
		pages = book.turn('pages'),
		depthWidth = 16*Math.min(1, page*2/pages);

		newPage = newPage || page;

	if (newPage>pageLimit)
		$('.lonyr-book .p2 .depth').css({
			width: depthWidth,
			left: 20 - depthWidth
		});
	else
		$('.lonyr-book .p2 .depth').css({width: 0});

		depthWidth = 16*Math.min(1, (pages-page)*2/pages);

	if (newPage<pages-pageLimit)
		$('.lonyr-book .p111 .depth').css({
			width: depthWidth,
			right: 20 - depthWidth
		});
	else
		$('.lonyr-book .p111 .depth').css({width: 0});

}


// https://whtly.com/2009/02/27/simple-jquery-string-padding-function/
$.strPad = function(i,l,s) {
	var o = i.toString();
	if (!s) { s = '0'; }
	while (o.length < l) {
		o = s + o;
	}
	return o;
};



// # https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen2
/*    ******************  FULL SCREEN    *******************   */

function toggleFullScreen()
	{
	if(isFullScreen) { closeFullscreen(); } else { openFullscreen(); }	
	}

var isFullScreen = false;

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  isFullScreen = true;
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  isFullScreen = true;
}


// https://stackoverflow.com/questions/19720984/search-and-highlight-in-jquery
/*    ******************  HIGH LIGHT    *******************   */
jQuery.fn.highlight = function(pat) {
 function innerHighlight(node, pat) {
  var skip = 0;
  if (node.nodeType == 3) {
   var pos = node.data.toUpperCase().indexOf(pat);
   if (pos >= 0) {
    var spannode = document.createElement('span');
    spannode.className = 'highlight';
    var middlebit = node.splitText(pos);
    var endbit = middlebit.splitText(pat.length);
    var middleclone = middlebit.cloneNode(true);
    spannode.appendChild(middleclone);
    middlebit.parentNode.replaceChild(spannode, middlebit);
    skip = 1;
   }
  }
  else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
   for (var i = 0; i < node.childNodes.length; ++i) {
    i += innerHighlight(node.childNodes[i], pat);
   }
  }
  return skip;
 }
 return this.each(function() {
  innerHighlight(this, pat.toUpperCase());
 });
};

jQuery.fn.removeHighlight = function() {
 function newNormalize(node) {
    for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
        var child = children[i];
        if (child.nodeType == 1) {
            newNormalize(child);
            continue;
        }
        if (child.nodeType != 3) { continue; }
        var next = child.nextSibling;
        if (next == null || next.nodeType != 3) { continue; }
        var combined_text = child.nodeValue + next.nodeValue;
        new_node = node.ownerDocument.createTextNode(combined_text);
        node.insertBefore(new_node, child);
        node.removeChild(child);
        node.removeChild(next);
        i--;
        nodeCount--;
    }
 }

 return this.find("span.highlight").each(function() {
    var thisParent = this.parentNode;
    thisParent.replaceChild(this.firstChild, this);
    newNormalize(thisParent);
 }).end();
};

function highlightSearch()
	{
	var searchTerm = $("#search-box").val();
		 $('body').removeHighlight();
		 if ( searchTerm ) 
			{
				console.log(searchTerm);
			// highlight the new term
            $('body').find( ".lon-verse").highlight( searchTerm );
			}
			
	}


function searchForString(str)
	{
	str = $('#search-box').val();	
		
	var results = $( "#search-content" ).find( ".lon-verse:contains('"+str+"')" );
	// console.log(results);
	
	$('#number-results').html("("+results.length+")");
	
	// maybe build drop-down from select ...
	$('#search-results').remove();
	
	var search = $('<select name="searchResults" id="search-results" style="position:relative;z-index:91000003"> </select>');
	
	$('#search-wrapper').append(search);
	$('#search-results').append( $('<option />').text("-- Select ("+results.length+") results --").val("") );
	
	
	/*
	var mobj = document.getElementById("search-results");
	console.log(mobj);
	for(i = mobj.length - 1; i <= 0; i--)
		{
		mobj.remove(i);
		}
	*/
	
	// $('#search-results').selectmenu( "destroy" );
	
	// <option value="1">2 Nephi 1</option>
    //  <option value="1">2 Nephi 2</option>
	var firstResult;			
	results.each(function() {
			// console.log(this);
			var obj = $(this);
			var page = obj.data("page");
			var chapterVerse = "" + obj.data("chapter") + ":" + obj.data("verse");
			if (typeof(firstResult) != "undefined")				{ firstResult = chapterVerse; }
			var option = $('<option />').text(chapterVerse).val(page);
			$('#search-results').append(option);
			});
	// https://stackoverflow.com/questions/20148195/clear-and-refresh-jquery-chosen-dropdown-list
	/*
	$('#search-results').trigger("chosen:updated");
	$('#search-results').trigger("change");
	$('#search-results').trigger("list:updated");
	*/
	
	//$("#search-results:first").focus().click();
	//$('#search-results > option:contains("'+firstResult+'")').attr('selected', true);
	
	
	$( "#search-results" ).selectmenu({width:255, change: function( event, data ) {
         // console.log( data.item.value );
		 if(data.item.value != "")
					{
					 var flipbook = $('.lonyr-book');
					 flipbook.turn('page', data.item.value);		 
					 setTimeout( highlightSearch, 500 );
					}		 
			}}).selectmenu("menuWidget").css("height","122px");
		
	
	$('#search-results > option:contains("'+firstResult+'")').attr('selected', 'selected');
	
	
	}
/* 
<h1 class="lon-chapter" data-page="371" data-chapter="2 Nephi 32" data-verse="0" data-nchar="10" data-pchar="10" data-nchap="1" data-nverse="0" data-nlines="3">2 Nephi 32</h1>

<div class="lon-verse" data-page="21" data-chapter="1 Nephi 5" data-verse="16" data-nchar="171" data-pchar="673" data-nchap="0" data-nverse="2" data-nlines="12"><SPAN class="lon-verse-number">16</SPAN>Indeed, Lehi examined the genealogy of his fathers. And he discovered that Laban was also a descendant of Joseph. This is why Laban and his fathers had kept the records.</div>

*/

function prepareSelect()
	{
	
	$('#search-box').on("keypress", function(e) {
			if (e.keyCode == 13) {
				//console.log("Enter pressed");
				str = $(this).val();
				console.log(str);
				searchForString(str);
				return false; // prevent the button click from happening
			}
	});

	
	
	
	
		/*
	$("#1Nephi > option").each(function() {
			console.log(this.text + ' ' + this.value);
			});
	$("#2Nephi > option").each(function() {
			console.log(this.text + ' ' + this.value);
			});
			*/
	
	var chapters = [];
	var pages = [];
	$( "#search-content" ).find( ".lon-chapter" ).each(function() {
			//console.log(this);
			//console.log($(this).data("chapter"));
			var mychapter = $(this).data("chapter");
			var mypage = $(this).data("page");
			var c = mychapter.charAt(0);
			
			var id = '#'+c+'Nephi';
			//console.log(id);
			//console.log(mychapter);
			$(id).find('option:contains("'+mychapter+'")').val(mypage);
			
			// $("#2Nephi").find('option:contains("2 Nephi 33")')
			
			// chapters.push( $(this).data("chapter") );
			// pages.push( $(this).data("page") );
			});
	
	//console.log(chapters);
	//console.log(pages);
	}

var searchLoaded = false;
function loadSearchable() {
	var myurl = 'pages/content.html';
	// console.log(myurl);
	
	if(!searchLoaded)
		{
		$.ajax({url: myurl}).
			done(function(pageHtml) {
				$('#search-content').html(pageHtml);
				prepareSelect();
				searchLoaded = true;
			});
		}
	}

function loadPage(page) {

	var mypage = $.strPad(page,3);
	var myurl = 'pages/page_' + mypage + '.html';
	// console.log(myurl);
	
	$.ajax({url: myurl}).
		done(function(pageHtml) {
			$('.lonyr-book .p' + page).html(pageHtml.replace('samples/young-reader/', ''));
		});
	
	/*
	
	$.ajax({url: 'pages/page' + page + '.html'}).
		done(function(pageHtml) {
			$('.lonyr-book .p' + page).html(pageHtml.replace('samples/young-reader/', ''));
		});
		*/

}

function addPage(page, book) {

	var id, pages = book.turn('pages');

	if (!book.turn('hasPage', page)) {

		var element = $('<div />',
			{'class': 'own-size',
				css: {width: 460, height: 582}
			}).
			html('<div class="loader"></div>');

		if (book.turn('addPage', element, page)) {
			loadPage(page);
		}

	}
}

function numberOfViews(book) {

	return book.turn('pages') / 2 + 1;

}

function getViewNumber(book, page) {

	return parseInt((page || book.turn('page'))/2 + 1, 10);

}

function zoomHandle(e) {

	if ($('.lonyr-book').data().zoomIn)
		zoomOut();
	else if (e.target && $(e.target).hasClass('zoom-this')) {
		zoomThis($(e.target));
	}

}

function zoomThis(pic) {

	var	position, translate,
		tmpContainer = $('<div />', {'class': 'zoom-pic'}),
		transitionEnd = $.cssTransitionEnd(),
		tmpPic = $('<img />'),
		zCenterX = $('#book-zoom').width()/2,
		zCenterY = $('#book-zoom').height()/2,
		bookPos = $('#book-zoom').offset(),
		picPos = {
			left: pic.offset().left - bookPos.left,
			top: pic.offset().top - bookPos.top
		},
		completeTransition = function() {
			$('#book-zoom').unbind(transitionEnd);

			if ($('.lonyr-book').data().zoomIn) {
				tmpContainer.appendTo($('body'));

				$('body').css({'overflow': 'hidden'});
				
				tmpPic.css({
					margin: position.top + 'px ' + position.left+'px'
				}).
				appendTo(tmpContainer).
				fadeOut(0).
				fadeIn(500);
			}
		};

		$('.lonyr-book').data().zoomIn = true;

		$('.lonyr-book').turn('disable', true);

		$(window).resize(zoomOut);
		
		tmpContainer.click(zoomOut);

		tmpPic.load(function() {
			var realWidth = $(this)[0].width,
				realHeight = $(this)[0].height,
				zoomFactor = realWidth/pic.width(),
				picPosition = {
					top:  (picPos.top - zCenterY)*zoomFactor + zCenterY + bookPos.top,
					left: (picPos.left - zCenterX)*zoomFactor + zCenterX + bookPos.left
				};


			position = {
				top: ($(window).height()-realHeight)/2,
				left: ($(window).width()-realWidth)/2
			};

			translate = {
				top: position.top-picPosition.top,
				left: position.left-picPosition.left
			};

			$('.samples .bar').css({visibility: 'hidden'});
			$('#slider-bar').hide();
			
		
			$('#book-zoom').transform(
				'translate('+translate.left+'px, '+translate.top+'px)' +
				'scale('+zoomFactor+', '+zoomFactor+')');

			if (transitionEnd)
				$('#book-zoom').bind(transitionEnd, completeTransition);
			else
				setTimeout(completeTransition, 1000);

		});

		tmpPic.attr('src', pic.attr('src'));

}

function zoomOut() {

	var transitionEnd = $.cssTransitionEnd(),
		completeTransition = function(e) {
			$('#book-zoom').unbind(transitionEnd);
			$('.lonyr-book').turn('disable', false);
			$('body').css({'overflow': 'auto'});
			moveBar(false);
		};

	$('.lonyr-book').data().zoomIn = false;

	$(window).unbind('resize', zoomOut);

	moveBar(true);

	$('.zoom-pic').remove();
	$('#book-zoom').transform('scale(1, 1)');
	$('.samples .bar').css({visibility: 'visible'});
	$('#slider-bar').show();

	if (transitionEnd)
		$('#book-zoom').bind(transitionEnd, completeTransition);
	else
		setTimeout(completeTransition, 1000);
}


function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}

function setPreview(view) {
	/*
	var previewWidth = 115,
		previewHeight = 73,
		previewSrc = 'pages/preview.jpg',
		preview = $(_thumbPreview.children(':first')),
		numPages = (view==1 || view==$('#slider').slider('option', 'max')) ? 1 : 2,
		width = (numPages==1) ? previewWidth/2 : previewWidth;

	_thumbPreview.
		addClass('no-transition').
		css({width: width + 15,
			height: previewHeight + 15,
			top: -previewHeight - 30,
			left: ($($('#slider').children(':first')).width() - width - 15)/2
		});

	preview.css({
		width: width,
		height: previewHeight
	});

	if (preview.css('background-image')==='' ||
		preview.css('background-image')=='none') {

		preview.css({backgroundImage: 'url(' + previewSrc + ')'});

		setTimeout(function(){
			_thumbPreview.removeClass('no-transition');
		}, 0);

	}

	preview.css({backgroundPosition:
		'0px -'+((view-1)*previewHeight)+'px'
	});
	
	*/
}

function isChrome() {

	// Chrome's unsolved bug
	// http://code.google.com/p/chromium/issues/detail?id=128488

	return navigator.userAgent.indexOf('Chrome')!=-1;

}