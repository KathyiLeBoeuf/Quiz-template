// APP section ==========================
function populate() {
	if (quiz.isEnded()) {
		showScore();
	} else {
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		// show choices
		var choices = quiz.getQuestionIndex().choices;
			for (var i = 0; i < choices.length; i++) {
				var element = document.getElementById("choice" + i);
				element.innerHTML =choices[i];
				guess("btn" + i, choices[i]);
			}
			showProgress();
		}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function () {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + "of " +quiz.questions.length;
	/*
	element.innerHTML = `Question  + ${currentQuestionNumber} of ${quiz.questions.length}`;  */
};
/*
function showScore() {
	var gameOverHtml = "<h1>"Results"</h1>";
		gameOverHtml += "<h2 id = "score">"Your score: " + quiz.score</h2>;
	var element = getElementById("quiz");
	element.innerHTML = gameOverHtml;
};
*/
var question = [
	new Question("Who composed Chorus from Judas Maccabaeus?", ["Handel", "Bach", "Mouret", "Thomas",], "Handel"),
	new Question("Who composed Musette?", ["Gossec", "Bizet", "Mozart", "Bach",], "Bach"),
	new Question("Who composed Hunters\' Chorus?", ["Beethoven", "Weber", "Dvořák", "Mendelssohn",], "Weber"),
	new Question("Who composed Long, Long Ago?", ["Lully", "Tchaikovsky", "Bayly", "Paganini",], "Bayly"),
	new Question("Who composed Waltz?	?", ["Rossini", "Brahms", "Paganini", "Handel",], "Brahms" ),
	new Question("Who composed Bourrée?", ["Mozart", "Stravinsky", "Grieg", "Handel",], "Handel"),
	new Question("Who composed The Two Grenadiers?", ["Schumann", "Beethoven", "Grieg", "Lully",], "Schumann"),
	new Question("Who composed Theme from Witches\' Dance?", ["Bayly", "Verdi", "Paganini", "Vivaldi",], "Paganini"),
	new Question("Who composed Gavotte from Mignon?", ["Brahms", "Bach", "Gossec", "Thomas",], "Thomas"),
	new Question("Who composed Gavotte?", ["Schubert", "Mendelssohn", "Lully", "Bayly",], "Lully"),
	new Question("Who composed Minuet in G?	", ["Boccherini", "Beethoven", "Vivaldi", "Schumann",], "Beethoven"),
	new Question("Who composed Minuet?	", ["Boccherini", "Strauss", "Handel", "Weber",], "Boccherini"),

];

var quiz = new Quiz(question);

populate();

// QUESTION section ==========================
function   Question(text, choices, answer)  { 
	this.text = text;
	this.choices = choices;
	this.answer = answer;
 };
// not sure about this one
 Question.prototype.correctAnswer = function(choices) {
	return choices === this.answer;
 };

// QUIZ CONTROLLER section ==========================
function Quiz(question) {
	this.score = 0;
	this.question = question;
	this.questionIndex = 0;
};

Quiz.prototype.getQuestionIndex = function () {
	return this.question[this.questionIndex];
};

Quiz.prototype.isEnded = function () {
	return this.question.length === this.questionIndex;
};

Quiz.prototype.guess = function(answer) {
	this.questionIndex++;
	if(this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}
};




