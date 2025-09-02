"use client";
import { useParams } from "next/navigation";

const data = {
  turkey: {
    name: "تركيا",
    activities: ["زيارة اسطنبول", "جولة كبادوكيا", "البحر الأسود"],
    image: "/turkey.jpg",
  },
  malaysia: {
    name: "ماليزيا",
    activities: ["كوالالمبور", "لانكاوي", "الحدائق الوطنية"],
    image: "/malaysia.jpg",
  },
  thailand: {
    name: "تايلند",
    activities: ["بانكوك", "بوكيت", "شيانغ ماي"],
    image: "/thailand.jpg",
  },
};

export default function DestinationPage() {
  const { id } = useParams();
  const dest = data[id];

  if (!dest) return <p className="p-6">الوجهة غير موجودة.</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{dest.name}</h1>
      <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
      <h2 className="text-xl font-semibold mb-2">الفعاليات:</h2>
      <ul className="list-disc list-inside space-y-1">
        {dest.activities.map((act, i) => (
          <li key={i}>{act}</li>
        ))}
      </ul>
    </main>
  );
}
