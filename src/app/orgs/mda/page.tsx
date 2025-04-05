export default function MdaPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-right">
      <h1 className="text-4xl font-bold mb-4">מגן דוד אדום (מד״א)</h1>
      <p className="text-lg mb-6">
        ארגון רפואת החירום הלאומי של ישראל. אלפי מתנדבים מצטרפים מדי שנה כדי להציל חיים ולתת סיוע בשטח.
        ההתנדבות מתחילה בקורס של 60 שעות בסיס בעזרה ראשונה.
      </p>

      <h2 className="text-2xl font-semibold mb-2">מה עושים?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>מתנדבים באמבולנסים בשטח</li>
        <li>מסייעים בטיפול ראשוני בזירות אירוע</li>
        <li>תורמים לקהילה ומצילים חיים</li>
      </ul>

      <p className="mt-6"><strong>מתאים לגיל:</strong> מגיל 15 ומעלה</p>

      <div className="mt-8">
        <a
          href="https://www.mdais.org"
          target="_blank"
          className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
        >
          🚑 להצטרפות באתר מד״א
        </a>
      </div>
    </main>
  );
}
