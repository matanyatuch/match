export default function YedidimPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-right">
      <h1 className="text-4xl font-bold mb-4">ידידים</h1>
      <p className="text-lg mb-6">
        ארגון התנדבות אזרחית לעזרה בדרכים – פתיחת רכבים נעולים, התנעת רכבים תקועים, החלפת פנצ&#39;רים, ועוד. 
        העזרה היא חינמית, והמתנדבים פועלים במהירות ובמסירות.
      </p>

      <h2 className="text-2xl font-semibold mb-2">אפשרויות התנדבות:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>כונן שטח:</strong> מקבל קריאות ויוצא לעזור בשטח.</li>
        <li><strong>מוקדן:</strong> עוזר בטלפון לנתב קריאות בין אנשים שמבקשים עזרה לבין מתנדבים שיכולים לצאת.</li>
      </ul>

      <p className="mt-6">
        <strong>מתאים לגיל:</strong> 17 ומעלה (יש עמדות מוקדניות גם מגיל צעיר יותר לעיתים)
      </p>

      <div className="mt-8">
        <a
          href="https://yedidim.org"
          target="_blank"
          className="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600"
        >
          📬 רוצה להצטרף? לחץ כאן
        </a>
      </div>
    </main>
  );
}
