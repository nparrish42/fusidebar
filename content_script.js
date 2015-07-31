// TODO: allow resizing below window sizw when page was loaded
// TODO: proper "hide" method instead of 0 width, maybe will
//       eliminate weird "squishing" of panel to narrow strip

var cur_width =  document.getElementsByClassName("aui-item issue-side-column").viewissuesidebar.style.width;

// console.log("current width: " + cur_width);

if (cur_width == "0px") { 
  document.getElementsByClassName("aui-item issue-side-column").viewissuesidebar.style.width = "35%";
} else { 
  document.getElementsByClassName("aui-item issue-side-column").viewissuesidebar.style.width = "0px";
}
