require("./index.scss");
require("../common/common.js");

console.log("hello");
getsomething({
	reqType: "sometype",
	data:[1]
}).then(o=>{
	console.log(o)
})


function getsomething(data){
	return new Promise((resolve, reject) => {
	    $.ajax({
	      dataType: "json",
	      url: "http://localhost:3000/",
	      type: "POST",
	      data: data,
	      success: resolve
	    });
	});
}