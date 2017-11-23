var clues = [
{'question':'GLWEOPSHCSTEBLMNWSAKZXSWLFPAVV','answer':'Congratulations! You have collected all 30 notes'},
{'question':'ILOVEYOUMORETODAYTHANYESTERDAY','answer':'Aww, that\'s sweet. I wonder what the future holds'},
{'question':'♫#&~@#%[*?^#;"&]#!$>♪%**+<=!@♬"','answer':'TBD'},
{'question':'♫butonlyhalfasmuchas♪tomorrow♬','answer':'That\'s whatI like to hear, but did you know there are 31 clues?'},
{'question':'YOSHI','answer':'I would dye in your arms tonight'},
{'question':'HUGS&CATLICKS','answer':'In every generation, there is a chosen one...'},
{'question':'JAFFAKREE','answer':'Top o\' the morning to you'},
{'question':'WHATSYOURPLEASURE','answer':'Lay with me by my side'},
{'question':'PEESYCHIC','answer':'You have always had the key'},
{'question':'♪SANTOAST♪','answer':'It\'s always sunny in Philidelphia. How can I ever prevent that?'},
{'question':'digging','answer':'You caught that huh. Nice job, but it wasn\'t a clue. At least not as of yet ;)'}
]

var error = [
"Erm... somethings isn't quite right",
"404: Code not found",
"Now you know and knowing is... wait",
"There are more holes in this cOde than the holes in Stephen Hawking's blackhole theory",
"Code Tester #1: She chose this</br>Code Tester #2: She chose that?<br>Shannon: Wait, was that wrong?<br>Code Tester #3: Too late now!<br>All testers laugh!!",
"The Tao teaches us that there is no right and wrong, only the way. That is until it saw this code."
]

function testCode(){

var code = document.getElementById("code").value;

var clue;
var lasterror;
for(i=0; i< clues.length; i++){
	clue = clues[i];
	if(clue.question==code){document.getElementById("confirmation-response").innerHTML = "<span style='color:green'>Code Confirmed:<br><h3 style='margin:0px;'>" + clue.answer + "</h3></span>"; break;}
	else{document.getElementById("confirmation-response").innerHTML = "<span style='color:red'>Code not recognized:<br><h3 style='margin:0px;'>" + error[Math.floor(Math.random() * error.length)] + "</span>"}
}

}

//alert(clues.length);
//'GLWEOPSHCSTEBLMNWSAKZXSWLFPAVV'
//'ILOVEYOUMORETODAYTHANYESTERDAY'
//'♫#&~@#%[*?^#;"&]#!$>♪%**+<=!@♬"'
//'♫butonlyhalfasmuchas♪tomorrow♬'