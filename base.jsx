import { useEffect, useState } from "react";

function Base() {
  const [prays, setPrays] = useState({});
  const [city, setCity] = useState("Cairo");

  const Cities = [
  { name: "القاهرة", value: "Cairo" },
  { name: "الجيزة", value: "Giza" },
  { name: "الاسكندرية", value: "Alexandria" },
  { name: "بورسعيد", value: "Port Said" },
  { name: "السويس", value: "Suez" },
  { name: "دمياط", value: "Damietta" },
  { name: "المنصورة", value: "Mansoura" },
  { name: "طنطا", value: "Tanta" },
  { name: "المحلة الكبرى", value: "El Mahalla El Kubra" },
  { name: "الزقازيق", value: "Zagazig" },
  { name: "كفر الشيخ", value: "Kafr El Sheikh" },
  { name: "دمنهور", value: "Damanhur" },
  { name: "بنها", value: "Banha" },
  { name: "شبين الكوم", value: "Shibin El Kom" },
  { name: "الفيوم", value: "Faiyum" },
  { name: "بني سويف", value: "Beni Suef" },
  { name: "المنيا", value: "Minya" },
  { name: "أسيوط", value: "Asyut" },
  { name: "سوهاج", value: "Sohag" },
  { name: "قنا", value: "Qena" },
  { name: "الأقصر", value: "Luxor" },
  { name: "أسوان", value: "Aswan" },
  { name: "مرسى مطروح", value: "Marsa Matruh" },
  { name: "الغردقة", value: "Hurghada" },
  { name: "شرم الشيخ", value: "Sharm El Sheikh" },
  { name: "العريش", value: "Arish" },
  { name: "الاسماعيلية", value: "Ismailia" },
  { name: "الطور", value: "El Tor" },
  { name: "دهب", value: "Dahab" },
  { name: "نويبع", value: "Nuweiba" },
  { name: "طابا", value: "Taba" },
];


  const getPrays = () => {
    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=EG`)
      .then((res) => res.json())
      .then((data) => setPrays(data.data.timings));
  };

  useEffect(() => {
    getPrays();
  }, [city]);

  return (
    <div className="Base">
      <div className="mt-4 px-10">
        <div className="sm:first:col-span-2 py-14 px-11 rounded-lg backdrop-blur-lg border-2 h-150 w-135 ml-138 shadow-2xl">
          <div className="flex justify-between">
            <h3 className="mb-4 text-black text-[22px] sm:text-[40px] font-extrabold">
              المدينة
            </h3>
            <h3 className="mb-4 text-black text-[22px] sm:text-[40px] font-extrabold">
              التاريخ
            </h3>
          </div>

          <div className="flex justify-between mt-2 w-full">
            <select
              className="border backdrop-blur-md bg-amber-500/30 rounded-2xl w-32 h-8 px-2"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            >
              {Cities.map((city_opj) => (
                <option key={city_opj.value} value={city_opj.value}>
                  {city_opj.name}
                </option>
              ))}
            </select>

            <p className="text-black text-xl py-1 px-3 backdrop-blur-md bg-amber-500/30 rounded-2xl">
              {new Date().toLocaleDateString("ar-EG")}
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/60 h-1 rounded my-4"></div>

          <div className="flex flex-col gap-4 mt-5">
            <PrayerCard name="الفجر" time={prays.Fajr} />
            <PrayerCard name="الظهر" time={prays.Dhuhr} />
            <PrayerCard name="العصر" time={prays.Asr} />
            <PrayerCard name="المغرب" time={prays.Maghrib} />
            <PrayerCard name="العشاء" time={prays.Isha} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrayerCard({ name, time }) {
  return (
    <div className="text-lg text-black w-full h-12 flex items-center justify-between px-4 border border-b-4 backdrop-blur-md bg-amber-500/30 rounded-lg">
      <span>{time || "--"}</span>
      <span>{name}</span>
    </div>
  );
}

export default Base;
