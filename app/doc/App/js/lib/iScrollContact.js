/**
 * 
 * Copyright (c) 2014 詹代俊Diajoon bluemughtml5.com
 * Version 1.07 - Last updated: 2014.03.05
 * 
 */

function iScroll_Contact_Fn(el){this.element = el;}

iScroll_Contact_Fn.prototype = {
	get position() {
		return this._position;
	},
	set position(pos) {
		this._position = pos;
		this.element.style.webkitTransform = 'translateY(' + this._position + 'px)';
	},
	_scrollTo: function(dest, runtime) {
		this.element.style.webkitTransitionDuration = runtime ? runtime : '0ms';
		this.position = dest ? dest : 0;
		if( this.position>0 || this.position<this.maxScroll ){
			this.element.addEventListener('webkitTransitionEnd', end, false);
		}
	}
};
/* 
 * Fn - abc
 */
function abc(el , stopscroll ,scrollcontact , tips ) {
	this.element = el,
	this.stopscroll = stopscroll ,
	this.scrollcontact = scrollcontact ,
	this.tips = tips , 
	this.element.addEventListener('touchstart', this, false);
}
abc.prototype = {
	handleEvent: function(e) {
		switch(e.type) {
			case 'touchstart': this.dai_onTouchStart(e); break;
			case 'touchmove': this.dai_onTouchMove(e); break;
			case 'touchend': this.dai_onTouchEnd(e); break;
		}
	},
	dai_onTouchStart: function(e) {
		e.preventDefault();
       // 将 wrapper 停止
        this.stopscroll.stop();
		this.element.className = 'hover';
		 var theTarget = e.target;
		// if(theTarget.nodeType == 3) theTarget = theTarget.parentNode;
		 theTarget = theTarget.innerText;
		 if (theTarget != null ) {
	         document.getElementById(""+this.tips+"-p").innerHTML = theTarget;
	         document.getElementById(this.tips).style.display = "block"; 
			 if( document.getElementById(theTarget) ){
			 	this.scrollcontact._scrollTo(-document.getElementById(theTarget).offsetTop, '0s');
	         };
	      };
			this.element.addEventListener('touchmove', this, false);
			this.element.addEventListener('touchend', this, false);

		return false;
	},

	dai_onTouchEnd: function(e) {
		e.preventDefault();
		this.element.className = '';
		this.element.removeEventListener('touchmove', this, false);
		this.element.removeEventListener('touchend', this, false);
		document.getElementById(this.tips).style.display = "none";
		return false;
	},

	dai_onTouchMove: function(e) {
		e.preventDefault();
		var theTarget = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	//	 if( theTarget.nodeType == 3 ) {
		//   theTarget = theTarget.parentNode;
	 //   }
       //  alert(theTarget)
        if ( theTarget != null ) {
				theTarget = theTarget.innerText;

				if( document.getElementById(theTarget) && theTarget != null) {
					document.getElementById(""+this.tips+"-p").innerHTML = theTarget; 
					theTarget = -document.getElementById(theTarget).offsetTop;
					if( theTarget<this.scrollcontact.maxScroll )
						theTarget = this.scrollcontact.maxScroll;
					this.scrollcontact._scrollTo(theTarget, '0ms');
					document.getElementById(this.tips).style.display = "block";
				} 
	   };
		return false;
	}
}

