'use client'
import { useState, useEffect } from 'react'
import styles from './Quiz.module.css';
import confetti from 'canvas-confetti'

export const Quiz = ({ quiz, quizCompleted, setQuizCompleted }) => {
    // VARIABLES
    const [userAnswers, setUserAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [userScore, setUserScore] = useState(0)

    useEffect(() => {
        quiz.forEach((question, i) => {
            setUserAnswers(prevAnswers => ({
                ...prevAnswers,
                [i]: null
            }))
        })
    }, [])


    // FUNCTIONS

    // sets the user answers variable when a quiz choice is selected
    const handleInputChange = (qIndex, selectedChoice) => {
        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [qIndex]: selectedChoice
        }))
    }

    // Handles when the quiz is submitted/restarted
    const submitOrTryAgain = (e) => {
        e.preventDefault()

        if (showResults) {
            setShowResults(false)
        } else {
            setShowResults(true)
            if (Object.values(userAnswers).every(question => question.isCorrect)) {
                // if every answer is correct, set the user's score and mark the quiz as complete. Confetti!
                setUserScore(quiz.length)
                setQuizCompleted(true)
                confetti()
            } else {
                // Calculate the user's score
                let score = 0
                for (const qNum in userAnswers) {
                    if (userAnswers.hasOwnProperty(qNum) && userAnswers[qNum].isCorrect) {
                        score++;
                    }
                }
                setUserScore(score)
            }
        }
    }

    // Scrolls to specific parts of the page when the submit quiz/try again button is clicked
    const scrollTo = () => {
        // if all the questions have been answered...
        if (Object.keys(userAnswers).every((answer) => userAnswers[answer] !== null)) {
            if (showResults) {
                // if the results are showing (the button says 'try again') scroll to top of quiz when clicked
                const quizSection = document.getElementById('quiz');

                setTimeout(() => {
                    if (quizSection) {
                        quizSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 10)
            } else {
                // if the results are not showing (the button says 'submit quiz') scroll to the bottom of the page to results when clicked
                setTimeout(() => {
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    })
                }, 10)
            }
        } else {
            alert('Please answer all questions before submitting.');
        }
    }

    return (
        <section>
            {quizCompleted === true ? (
                <h2 className="font-semibold text-2xl m-8 text-center text-success">Quiz Complete ✓</h2>
            ) : (
                quizCompleted === false ? (
                    <h2 className="font-semibold text-2xl m-8 text-center">Test Your Knowledge</h2>,

                    <form id='quiz' onSubmit={submitOrTryAgain}>
                        {quiz.map((question, i) => (
                            <div key={i} className="p-5">
                                <p className="text-center text-xl font-medium mb-3">{i + 1}. {question.question}</p>

                                <div className="flex flex-col gap-3">
                                    {question.choices.map((choice, j) => (
                                        <input
                                            type="radio"
                                            name={`question${i + 1}`}
                                            aria-label={choice.label}
                                            key={j}
                                            className={`btn btn-outline border-secondary rounded-full ${showResults ? ( // if showResults is true, and the choice matches the user selected choice, apply the style of correct or incorrect based on choice.isCorrect
                                                userAnswers[i].label === choice.label ? (
                                                    choice.isCorrect ? (
                                                        styles.choiceCorrect
                                                    ) : (
                                                        styles.choiceIncorrect
                                                    )
                                                ) : ''
                                            ) : styles.quizChoice
                                                }`}
                                            disabled={showResults || quizCompleted}
                                            onChange={() => handleInputChange(i, choice)}
                                        required
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}

                        {showResults ? (
                            <div className='my-4'>
                                <p className='text-center'>Score: {userScore}/{quiz.length}</p>
                                <p className='text-center'>Required: {quiz.length}/{quiz.length}</p>
                                {/* {quizCompleted ? <p className='text-center text-success mt-5'>You finished the quiz!</p> : <p className='text-center text-secondary text-lg mt-5'>Please try the quiz again</p>} */}
                                <p className='text-center text-secondary text-lg mt-5'>{quizCompleted ? 'You finished the quiz!' : 'Please try the quiz again'}</p>
                            </div>
                        ) : ''}

                        {quizCompleted ? '' : <button type='submit' className="btn btn-secondary rounded-full w-full mt-2" onClick={scrollTo}>{showResults ? 'RETRY QUIZ' : 'SUBMIT'}</button>}
                    </form>
                ) : (
                    <div className='text-center'>
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                )
            )}
        </section>
    )
}