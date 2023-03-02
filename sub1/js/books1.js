var Books = (function() {

	var $books = $( '#bkList > li > div.bkBook' ), booksCount = $books.length;
	
	function init() {

		$books.each( function() {
			
			var $book = $( this ),
				$other = $books.not( $book ),
				$parent = $book.parent(),
				$page = $book.children( 'div.bkPage' ),
				$bookview = $parent.find( 'button.bkBookview' ),
				$content = $page.children( 'div.bkContent' ), current = 0;

			$parent.find( 'button.bkBookback' ).on( 'click', function() {				
				
				$bookview.removeClass( 'bkActive' );

				if( $book.data( 'flip' ) ) {
					
					$book.data( { opened : false, flip : false } ).removeClass( 'bkViewback' ).addClass( 'bkBookdefault' );

				}
				else {
					
					$book.data( { opened : false, flip : true } ).removeClass( 'bkViewinside bkBookdefault' ).addClass( 'bkViewback' );

				}
					
			} );

			$bookview.on( 'click', function() {

				var $this = $( this );			
				
				$other.data( 'opened', false ).removeClass( 'bkViewinside' ).parent().css( 'z-index', 0 ).find( 'button.bkBookview' ).removeClass( 'bk-active' );
				if( !$other.hasClass( 'bkViewback' ) ) {
					$other.addClass( 'bkBookdefault' );
				}

				if( $book.data( 'opened' ) ) {
					$this.removeClass( 'bkActive' );
					$book.data( { opened : false, flip : false } ).removeClass( 'bkViewinside' ).addClass( 'bkBookdefault' );
				}
				else {
					$this.addClass( 'bkActive' );
					$book.data( { opened : true, flip : false } ).removeClass( 'bkViewback bkBookdefault' ).addClass( 'bkViewinside' );
					$parent.css( 'z-index', booksCount );
					current = 0;
					$content.removeClass( 'bkContentCurrent' ).eq( current ).addClass( 'bkContentCurrent' );
				}

			} );

			if( $content.length > 1 ) {

				var $navPrev = $( '<span class="bkPagePrev"><i class="fa-solid fa-chevron-left"></i></span>' ),
					$navNext = $( '<span class="bkPageNext"><i class="fa-solid fa-chevron-right"></i></span>' ),
					$bookClose = $( '<span class="bkClose"><span class="hidden">닫기</span><i class="fa-solid fa-xmark"></i></span>' );

				
				$page.append( $( '<div class="btnBox"></a>' ).append( $navPrev, $navNext,$bookClose ) );

				$navPrev.on( 'click', function() {
					if( current > 0 ) {
						--current;
						$content.removeClass( 'bkContentCurrent' ).eq( current ).addClass( 'bkContentCurrent' );
					}
					return false;
				} );

				$navNext.on( 'click', function() {
					if( current < $content.length - 1 ) {
						++current;
						$content.removeClass( 'bkContentCurrent' ).eq( current ).addClass( 'bkContentCurrent' );
					}
					return false;
				} );

				$bookClose.on('click',function(){
					console.log(this);
					$(this).parents('.bkBook').removeClass('bkActive');
					$book.data( { opened : false, flip : false } ).removeClass( 'bkViewinside' ).addClass( 'bkBookdefault' );
				})

			}
			
		} );

	}

	return { init : init };

})();