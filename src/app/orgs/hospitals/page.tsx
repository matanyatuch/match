export default function HospitalsPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-right">
      <h1 className="text-4xl font-bold mb-4">לשמח בבתי חולים</h1>
      <p className="text-lg mb-6">
        מגיעים לבתי חולים עם גיטרה, בלונים או חיוך – ומשמחים ילדים או קשישים. ההתנדבות מתבצעת דרך עמותות כמו אור מיכאל ומהפכה של שמחה, או גם בהתנדבות עצמאית.
      </p>

      <h2 className="text-2xl font-semibold mb-2">מה עושים?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>נגינה במסדרונות ובחדרים</li>
        <li>שירה, בלונאות, הצגות</li>
        <li>שיחה נעימה ויחס אישי</li>
      </ul>

      <p className="mt-6"><strong>מתאים לגיל:</strong> מגיל 14 ומעלה</p>

      <div className="mt-8">
        <a
          href="https://or-michael.org.il" // או מהפכה של שמחה
          target="_blank"
          className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600"
        >
          😊 רוצה להצטרף לשמח? לחץ כאן
        </a>
      </div>
    </main>
  );
}
