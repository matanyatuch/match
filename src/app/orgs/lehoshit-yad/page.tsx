export default function LehoshitYadPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-right">
      <h1 className="text-4xl font-bold mb-4">להושיט יד</h1>
      <p className="text-lg mb-6">
        עמותת חונכות וליווי אישי לילדים חולי סרטן ולבני משפחותיהם. המתנדבים מלווים ילדים לאורך זמן, יוצרים קשר אישי תומך, ולעיתים הופכים לדמויות מפתח בחיי הילד.
      </p>

      <h2 className="text-2xl font-semibold mb-2">אפשרויות התנדבות:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>חונכות אישית לילד חולה</li>
        <li>ליווי של אח/ות במשפחה</li>
        <li>עזרה חברתית ורגשית</li>
      </ul>

      <p className="mt-6"><strong>מתאים לגיל:</strong> 17 ומעלה (בהתאם לעמותה)</p>

      <div className="mt-8">
        <a
          href="https://lehoshit-yad.org.il"
          target="_blank"
          className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800"
        >
          🤲 להצטרפות ב"להושיט יד"
        </a>
      </div>
    </main>
  );
}
