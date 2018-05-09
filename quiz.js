
function quiz(){
  var questions = [
    {
      prompt: "1. Grayson often refers to Shelby as: \n(a) Shelbtron \n(b) Shelbo \n(c) Shelbalebbadingdong \n(d) Shell",
      answer: "b"
    },
    {
      prompt: "2. Grayson’s favorite attribute of Shelby is: \n(a) her kindness \n(b) her sense of humor \n(c) her artistic ability \n(d) her big ass cheeks",
      answer: "d"
    },
    {
      prompt: "3. Shelby’s favorite attribute of Grayson is: \n(a) his moral fiber \n(b) his musical ability  \n(c) his big floppy dong \n(d) sometimes his pants",
      answer: "c"
    },
    {
      prompt: "4. During Grayson and Shelby’s first kiss, they were surrounded by: \n(a) roses \n(b) sunflowers \n(c) gargoyles \n(d) racists",
      answer: "b"
    },

    {
      prompt: "5. Shelby makes Grayson feel: \n(a) safe \n(b) loved \n(c) confident \n(d) all of the above",
      answer: "d"
    },

    {
      prompt: "6. Shelby makes Grayson: \n(a) better \n(b) healthier \n(c) happy \n(d) all of the above",
      answer: "d"
    },

    {
      prompt: "7. Grayson wants to: \n(a) take care of Shelby \n(b) have 1 baby with Shelby \n(c) make Shelby feel safe \n(d) all of the above",
      answer: "d"
    },

    {
      prompt: "8. Grayson thinks Shelby is: \n(a) beautiful \n(b) fun \n(c) perfect \n(d) all of the above",
      answer: "d"
    },

    {
      prompt: "9. Shelby and Grayson are different from other couples because: \n(a) they actually like being around one another \n(b) they make connection priority \n(c) they aren’t afraid to communicate \n(d) all of the above",
      answer: "d"
    },

    {
      prompt: "10. Shelby is Grayson’s: \n(a) best friend \n(b) home \n(c) everything (I know this one’s cheesy but I mean it) \n(d) all of the above",
      answer: "d"
    }

  ];

  var score = 0;

  for(var i=0; i<questions.length; i++){
    var response= window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  }
  alert("You got "+score+"/"+questions.length);
}
