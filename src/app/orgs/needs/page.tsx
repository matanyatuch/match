export default function NeedsPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-right">
      <h1 className="text-4xl font-bold mb-4">התנדבות עם צרכים מיוחדים</h1>
      <p className="text-lg mb-6">
        עבודה עם ילדים ובוגרים עם CP (שיתוק מוחין) וצרכים מיוחדים. ההתנדבות נעשית דרך עמותות כמו משען, למרפא, וחברים לרפואה.
      </p>

      <h2 className="text-2xl font-semibold mb-2">מה עושים?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>שיחות אישיות וליווי חברתי</li>
        <li>פעילויות יצירה, משחקים, שירה</li>
        <li>סיוע בלוגיסטיקה או נוכחות באירועים</li>
      </ul>

      <p className="mt-6"><strong>מתאים לגיל:</strong> מגיל 14 ומעלה</p>

      <div className="mt-8">
        <a
          href="https://www.levrefua.org" // דוגמה – תוכל לעדכן לקישורים האמיתיים
          target="_blank"
          className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          💜 רוצה לעזור? מצא עמותה עכשיו
        </a>
      </div>
    </main>
  );
}
