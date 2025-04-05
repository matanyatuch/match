export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">ברוכים הבאים ל&#39;מתנדבים בלב&#39;</h1>
      <p className="text-lg text-center mb-10">האתר שמחבר אותך להתנדבות שבדיוק מתאימה לך!</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🔍 מה תמצא אצלנו?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>🧪 שאלון התאמה אישי:</strong> ענה על שאלות קצרות – ובסוף תדע איפה תוכל להשפיע באמת.</li>
            <li><strong>🫱🏼‍🫲🏽 לוח התנדבויות פתוחות:</strong> לפי גיל, תחום, אזור וזמינות.</li>
            <li><strong>📸 סיפורים מהשטח:</strong> תמונות וסרטונים מהנוער שכבר מתנדב.</li>
            <li><strong>🧑‍💻 אזור אישי:</strong> מעקב, תעודות הוקרה ונקודות התנדבות.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">💬 מה אומרים מתנדבים?</h2>
          <blockquote className="border-r-4 border-blue-400 pr-4 italic text-right">
            &quot;מצאתי מקום מושלם להתנדב בו דרך השאלון – ועכשיו אני עוזר בקייטנה לילדים עם צרכים מיוחדים. תודה לכם!&quot; – דניאל, בן 17
          </blockquote>
          <blockquote className="border-r-4 border-blue-400 pr-4 italic text-right mt-4">
            &quot;הרגשתי מבולבלת אחרי השירות הלאומי, ופה גיליתי שאני יכולה לעזור בהנגשה דיגיטלית – זה התחבר לי בול!&quot; – חן, בת 19
          </blockquote>
        </div>

        <div className="text-center mt-8">
          <p>📬 יש לך רעיון? רוצה להציע התנדבות? <a href="#" className="text-blue-600 underline">שלח לנו כאן</a></p>
        </div>
      </section>
    </main>
  );
}
