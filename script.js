var clues = [
{'question':'GLWEOPSHCSTEBLMNWSAKZXSWLFPAVV','answer':'Congratulations! You have collected all 30 notes'},
{'question':'ILOVEYOUMORETODAYTHANYESTERDAY','answer':'Aww, that\'s sweet. I wonder what the future holds'},
{'question':'♫#&~@#%[*?^#;"&]#!$>♪%**+<=!@♬"','answer':'TBD'},
{'question':'♫butonlyhalfasmuchas♪tomorrow♬','answer':'That\'s whatI like to hear, but did you know there are 31 clues?'},
{'question':'YOSHI','answer':'I just dyed in your arms tonight'},
{'question':'HUGS&CATLICKS','answer':'In every generation, there is a chosen one...'},
{'question':'JAFFAKREE','answer':'Top o\' the morning to you'},
{'question':'WHATSYOURPLEASURE','answer':'Lay with me by my side'},
{'question':'PEESYCHIC','answer':'You have always had the key'},
{'question':'♪SANTOAST♪','answer':'It\'s always sunny in Philidelphia. How can I ever prevent that?'},
{'question':'digging','answer':'You caught that huh. Nice job, but it wasn\'t a clue. At least not as of yet ;)'},
{'question':'the way','answer':''},
{'question':'ca·ca·o','answer':'1234'}
 
]

var error = [
"Erm... somethings isn't quite right",
"404: Code not found",
"Now you know and knowing is... wait",
"There are more holes in this cOde than the holes in Stephen Hawking's blackhole theory",
"Code Tester #1: She chose this</br>Code Tester #2: She chose that?<br>Shannon: Wait, was that wrong?<br>Code Tester #3: Too late now!<br>All testers laugh!!",
"The Tao teaches us that there is no right and wrong, only the way. That is until it saw this code.",
"An error occured while laughing at your entry",
"Alarm 1: Don't go on.</br>Alarm 2: Go back while you still can.</br>Alarm 3: This is not the way.</br>Alarm 4: Take heed, and go no further.</br>Alarm 5: Beware, beware.</br>Alarm 6: Soon it will be too late.</br>Shannon: Oh, shut up!</br>Alarm 7: Sorry, just doing my job.</br>Shannon: Well you don't have to do it to me!</br>Alarm 8: Beware, for the...</br>Shannon: Just forget it!</br>Alarm 8: Oh please, I haven't said it for such a long time!</br>Hoggle: Oh, all right, but don't expect a big reaction!</br>Alarm 8: No no no, of course not! (clears throat) \"For the path you will take will lead to certain destruction.\" Thank you very much...",
"Keyboard not found. Press F1",
"Sometimes even a answer can reaveal <em>the way</em> to the right path"
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
