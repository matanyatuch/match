export default function FirePage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-right">
      <h1 className="text-4xl font-bold mb-4">כבאות והצלה לישראל</h1>
      <p className="text-lg mb-6">
        ארגון הכיבוי וההצלה הארצי. המתנדבים פועלים בשטח לצד לוחמי האש, מסייעים בהצלת חיים ונכסים, ומשתלבים בפעילות מניעה וחינוך.
      </p>

      <h2 className="text-2xl font-semibold mb-2">איך מתנדבים?</h2>
      <p>מגישים בקשה באתר הרשמי, ועוברים הכשרה מתאימה. לאחר מכן משתלבים בתחנות כיבוי לפי אזור המגורים.</p>

      <p className="mt-6"><strong>מתאים לגיל:</strong> לרוב 17 ומעלה</p>

      <div className="mt-8">
        <a
          href="https://www.gov.il/he/departments/fire_and_rescue_israel"
          target="_blank"
          className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700"
        >
          🔥 להצטרפות באתר כבאות והצלה
        </a>
      </div>
    </main>
  );
}
