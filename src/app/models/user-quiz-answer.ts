export interface UserQuizAnswer {
    answer_id : Number,
    question_id : Number,
    user_id : String,
    quiz_id : Number,
    user_ans : String, 
    correct : Boolean, 
    mark_gain : Float64Array
}