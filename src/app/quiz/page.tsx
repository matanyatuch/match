'use client';

import { useState } from "react";

const questions = [
  {
    question: "מה אתה הכי אוהב לעשות בזמנך הפנוי?",
    options: ["להיות עם אנשים", "לעבוד עם מחשבים", "לעזור פיזית", "לארגן דברים"]
  },
  {
    question: "אתה מעדיף פעילות פיזית או שקטה?",
    options: ["פיזית", "שקטה", "גם וגם"]
  },
  {
    question: "באילו תחומים היית רוצה להשפיע?",
    options: ["ילדים", "קשישים", "בעלי חיים", "משברים/חירום", "טכנולוגיה"]
  }
];
function getRecommendations(answers: string[]) {
  const recommendations = [];

  if (answers.includes("להיות עם אנשים")) {
    recommendations.push({
      title: "חונכות לילדים",
      description: "ללוות ילד פעם בשבוע, לעזור בלימודים או רק להקשיב ולשחק."
    });
  }

  if (answers.includes("לעבוד עם מחשבים")) {
    recommendations.push({
      title: "סיוע טכנולוגי לקשישים",
      description: "עזרה בהפעלת טלפונים, מחשבים או אינטרנט לאנשים מבוגרים."
    });
  }

  if (answers.includes("בעלי חיים")) {
    recommendations.push({
      title: "סיוע בעמותת בעלי חיים",
      description: "עזרה בטיפול בכלבים וחתולים נטושים, טיולים וניקיון."
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: "התנדבות כללית בקהילה",
      description: "יש מגוון אפשרויות שתוכל להשתלב בהן לפי הזמן והמקום שיתאים לך."
    });
  }

  return recommendations.slice(0, 3); // עד 3 הצעות
}


export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (option: string) => {
    setAnswers(prev => [...prev, option]);
    setStep(prev => prev + 1);
  };

  return (
    <main className="p-8 max-w-2xl mx-auto text-right">
      <h1 className="text-3xl font-bold mb-6">שאלון התאמה</h1>
      {step < questions.length ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">{questions[step].question}</h2>
          <ul className="space-y-3">
            {questions[step].options.map((option, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-green-100 p-6 rounded-xl shadow mt-6">
          <h2 className="text-2xl font-bold mb-4">🎉 הנה התחומים שכנראה יתאימו לך:</h2>
    <ul className="list-disc list-inside space-y-2">
  {getRecommendations(answers).map((rec, i) => (
    <li key={i}>
      <strong>{rec.title}</strong>: {rec.description}
    </li>
  ))}
</ul>

          <p className="mt-4">בהמשך נחבר את התשובות להצעות אמיתיות מתוך לוח ההתנדבויות!</p>
        </div>
      )}
    </main>
  );
}
