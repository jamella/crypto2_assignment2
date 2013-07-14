function mytracker_getphysical() {
    var screensize = screen.width+"x"+screen.height;
    // Detect the browser internal width and height
    var winsize = window.innerWidth + 'x' + window.innerHeight;;
    // awstats prefers these but they are simply wrong on Mozilla and
    // Opera:
    //    winsize = document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight;
    //    winsize = document.body.clientWidth + 'x' + document.body.clientHeight;
    var fontsize = document.getElementById("svnkeywords").offsetHeight
    var minfontsize = document.getElementById("track-min-size").offsetHeight
    return '&scr=' + screensize
         + '&win=' + winsize
	 + '&fnt=' + fontsize
	 + '&mfnt=' + minfontsize;
}

document.write('<img src="/icons/black.gif?' + mytracker_getphysical() + '" alt="" />');
