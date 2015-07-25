function hide(){var c=document.getElementsByClassName("tname");
var h=document.getElementsByClassName("hbutton");
for(var i=0;i<c.length;i++){
        c[i].style.display='None';
};
for(var p=0;p<h.length;p++){
        h[p].style.display='None';
};
var idid=document.getElementsByClassName('idid');
for(var p=0;p<idid.length;p++){
        idid[p].style.display='None';
};
}
function makevisible(obj){
        var k=document.getElementsByName(obj);
        for(var i=0;i<k.length;i++){
                k[i].style.display='inline-block';
        };
        document.getElementById("button"+obj).style.display='None';
        document.getElementById("hbutton"+obj).style.display='inline-block';
}
