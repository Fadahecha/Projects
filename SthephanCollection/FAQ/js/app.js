// Récupérer tous les sélecteurs .question
let questions =  document.querySelectorAll('.question');
console.log(questions);
// Pour chaque sélecteur :
// Récupérer le sélecteur .question-btn
let questionBtn = document.querySelector('.question-btn')

// Ecouter les évènements 'click' sur .question-btn
// Si une autre question est visible supprimer .show-text de celle-ci
// Ajouter .show-text à la question qui a reçu le 'click' pour afficher le texte


questions.forEach(function(question){

    let questionBtn = question.querySelector('.question-btn');
    

    questionBtn.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item != question){
                item.classList.remove('show-text');
            }
            
        })
           question.classList.toggle('show-text');
        
    })
})




/*
questionBtn.addEventListener('click', function(){

    question.classList.toggle('.show-text .question-text');
})



//.show-text .question-text*/