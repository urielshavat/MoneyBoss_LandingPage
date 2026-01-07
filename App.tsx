
import React from 'react';
import { 
  Wallet, 
  Anchor, 
  Target, 
  CheckCircle2, 
  Lock, 
  Zap, 
  Scissors, 
  Calendar,
  BarChart3,
  RefreshCw,
  Tags
} from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="container mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-xl">M</div>
        <span className="text-2xl font-black text-blue-900 tracking-tight">MoneyBoss</span>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
        הצטרפו עכשיו
      </button>
    </div>
  </header>
);

const TrackCard = ({ icon: Icon, title, subtitle, description, items, colorClass, gradientClass }: any) => (
  <div className="glass-card p-8 rounded-3xl shadow-xl border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300 group">
    <div className={`w-16 h-16 ${gradientClass} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
      <Icon size={32} />
    </div>
    <h3 className={`text-2xl font-extrabold mb-1 ${colorClass}`}>{title}</h3>
    <p className="text-gray-500 font-medium mb-4">{subtitle}</p>
    <p className="text-gray-700 leading-relaxed mb-6 border-b border-gray-100 pb-6 min-h-[80px]">{description}</p>
    
    <div className="space-y-4">
      <h4 className="font-bold text-gray-800">כלים שתומכים בכם:</h4>
      {items.map((item: any, idx: number) => (
        <div key={idx} className="flex gap-4 items-start">
          <div className="mt-1 bg-blue-50 p-1.5 rounded-lg text-blue-600">
            {item.icon}
          </div>
          <div>
            <h5 className="font-bold text-gray-800">{item.title}</h5>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 text-blue-700 rounded-full font-bold text-sm tracking-wide animate-bounce">
            האפליקציה שסוגרת את הפער
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-blue-950 mb-6 leading-tight">
            להפסיק לנחש, <br />
            <span className="text-blue-600">להתחיל לשלוט.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            אפליקציית ניהול התקציב היחידה שסוגרת את הפער בין מה שתכננתם לבין מה שקרה במציאות. 
            אנחנו מחלקים את הכסף שלכם לשלושה מסלולים ברורים לשליטה מקסימלית.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1">
              אני רוצה להתחיל עכשיו
            </button>
            <button className="bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-lg px-10 py-4 rounded-2xl font-bold transition-all">
              איך זה עובד?
            </button>
          </div>
        </div>
      </section>

      {/* The 3 Tracks Section */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">שיטת שלושת המסלולים</h2>
            <p className="text-lg text-gray-600">הפרדה שמאפשרת לכם לדעת בדיוק כמה כסף פנוי יש לכם בכל רגע נתון.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <TrackCard 
              icon={Wallet}
              title="מסלול 'החיים עצמם'"
              subtitle="(התקציב השוטף)"
              description="התקציב היומי שלכם לקניות, בילויים ופנאי. במקום לנחש כמה נשאר בסוף החודש, אתם יודעים כמה מותר לכם להוציא היום."
              gradientClass="bg-gradient-to-br from-blue-500 to-cyan-500"
              colorClass="text-blue-600"
              items={[
                { title: "תיעוד מהיר", desc: "רישום הוצאה בשניות – רק שם וסכום, כדי שלא תפספסו שום דבר.", icon: <Zap size={18}/> },
                { title: "פיצול הוצאות (Split)", desc: "קניתם בסופר גם אוכל וגם חומרי ניקוי? פצלו את השורה בקלות.", icon: <Scissors size={18}/> },
                { title: "ניהול גמיש", desc: "אפשרות לערוך או למחוק הוצאות רטרואקטיבית ישירות מהממשק.", icon: <RefreshCw size={18}/> }
              ]}
            />

            <TrackCard 
              icon={Anchor}
              title="מסלול 'העוגן'"
              subtitle="(הוצאות קבועות)"
              description="כאן נמצאות כל ההוצאות שחייבות לרדת ואין עליהן ויכוח: שכר דירה, חשבונות, מנויים, וגם הוצאות הדלק שלכם."
              gradientClass="bg-gradient-to-br from-indigo-500 to-purple-500"
              colorClass="text-indigo-600"
              items={[
                { title: "הפרשה אוטומטית", desc: "האפליקציה מנטרלת את הסכומים האלו מהתקציב היומי שלכם מראש.", icon: <Lock size={18}/> },
                { title: "התאמה אישית", desc: "הוספה ועדכון של הוצאות קבועות ישירות מההגדרות.", icon: <Calendar size={18}/> },
                { title: "סנכרון מיידי", desc: "עדכון אוטומטי של הנתונים בגיליון הגוגל שלכם ללא מאמץ.", icon: <CheckCircle2 size={18}/> }
              ]}
            />

            <TrackCard 
              icon={Target}
              title="מסלול 'היעדים'"
              subtitle="(תקציב שנתי)"
              description="המסלול שמונע מהוצאות גדולות (חופשות, טיפולי רכב, חגים) להפתיע אתכם ולמוטט את התקציב החודשי."
              gradientClass="bg-gradient-to-br from-orange-500 to-red-500"
              colorClass="text-orange-600"
              items={[
                { title: "מבט-על על הניצול", desc: "מד התקדמות ויזואלי לכל קטגוריה שמראה כמה נוצל בכל רגע.", icon: <BarChart3 size={18}/> },
                { title: "קטלוג שנתי מהיר", desc: "סיווג מיידי של הוצאות גדולות לתוך יעדי התקציב השנתי.", icon: <Tags size={18}/> },
                { title: "איזון אוטומטי", desc: "הזרמת עודפים לתקציב השוטף או משיכת חריגות לאיזון מלא בסיום היעד.", icon: <RefreshCw size={18}/> }
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">מוכנים לקחת שליטה על הכסף שלכם?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            הצטרפו לאלפי משתמשים שכבר הפסיקו לנחש והתחילו לנהל את התקציב שלהם באמת.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-900 text-xl px-12 py-5 rounded-2xl font-black hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
              להתנסות בחינם עכשיו
            </button>
            <div className="text-blue-200 text-sm flex items-center gap-2">
              <CheckCircle2 size={16}/> 14 ימי ניסיון • ללא צורך בכרטיס אשראי
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-sm">M</div>
            <span className="text-xl font-black text-blue-900 tracking-tight">MoneyBoss</span>
          </div>
          <div className="flex gap-8 text-gray-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-blue-600 transition-colors">פרטיות</a>
            <a href="#" className="hover:text-blue-600 transition-colors">צרו קשר</a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MoneyBoss. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
