import Link from "next/link";

const orgs = [
  {
    id: "mda",
    name: "מד\"א – מגן דוד אדום",
    description: "ארגון רפואת חירום לאומי. מתנדבים באמבולנסים לאחר קורס בסיסי.",
    color: "bg-red-600"
  },
  {
    id: "fire",
    name: "כבאות והצלה",
    description: "מתנדבים לצד לוחמי אש בתחנות הכיבוי באזור מגוריך.",
    color: "bg-orange-600"
  },
  {
    id: "yedidim",
    name: "ידידים",
    description: "עזרה בדרכים: פתיחת רכבים, התנעות, פנצ'רים ועוד – בשטח או במוקד.",
    color: "bg-yellow-500"
  },
  {
    id: "needs",
    name: "התנדבות עם צרכים מיוחדים",
    description: "ליווי, תמיכה ופעילות עם ילדים ובוגרים בעלי צרכים מיוחדים.",
    color: "bg-purple-600"
  },
  {
    id: "hospitals",
    name: "לשמח בבתי חולים",
    description: "נגינה, בלונאות ושמחה בחדרי הילדים בבתי חולים.",
    color: "bg-pink-500"
  },
  {
    id: "lehoshit-yad",
    name: "להושיט יד",
    description: "חונכות אישית לילדים חולי סרטן או בני משפחותיהם.",
    color: "bg-green-700"
  }
];

export default function OrgsPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-right">
      <h1 className="text-4xl font-bold mb-8">💙 עמותות שצריך אותך בהן</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {orgs.map((org) => (
          <div key={org.id} className="border rounded-xl p-6 shadow flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{org.name}</h2>
              <p className="text-gray-700">{org.description}</p>
            </div>
            <div className="mt-4 text-left">
              <Link href={`/orgs/${org.id}`}>
                <button className={`${org.color} text-white px-4 py-2 rounded hover:opacity-90`}>
                  👀 כניסה לעמותה
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
