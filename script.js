var quote={count:0,t:10,add:function(){if(this.count==this.t){this.warn()}else{var t=document.createElement("div");var i=document.getElementById("quote-text");t.classList.add("box");t.innerText=i.value;t.addEventListener("click",function(){quote["delete"](this)});document.getElementById("quotes").appendChild(t);i.value="";this.i()}},warn:function(){alert("You already have "+this.t+" Qutoes")},"delete":function(t){if(confirm("Are you sure?")){t.remove();this.o()}},i:function(){this.count++;this.u(this.count)},o:function(){this.count--;this.u(this.count)},u:function(t){document.querySelector("#count .bar div").style.width=t*10+"%";document.querySelector("#count .bar span").innerText=t}};