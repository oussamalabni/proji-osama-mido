// Timeline Data for World Wars Digital Museum Website

const timelineData = {
  // World War I Timeline Events
  ww1: [
    {
      year: 1914,
      month: 7,
      day: 28,
      title: "بداية الحرب العالمية الأولى",
      description: "إعلان النمسا-المجر الحرب على صربيا بعد اغتيال ولي العهد النمساوي فرانز فرديناند",
      category: "ww1 major",
      image: "../images/ww1/ww1_start.jpg"
    },
    {
      year: 1914,
      month: 11,
      day: 5,
      title: "دخول الدولة العثمانية الحرب",
      description: "انضمام الدولة العثمانية إلى دول المحور (ألمانيا والنمسا-المجر) في الحرب العالمية الأولى",
      category: "ww1 middleeast",
      image: "../images/ww1/ottoman_entry.jpg"
    },
    {
      year: 1915,
      month: 4,
      day: 25,
      title: "حملة غاليبولي",
      description: "بدء حملة غاليبولي (الدردنيل) من قبل قوات الحلفاء ضد الدولة العثمانية",
      category: "ww1 middleeast battles",
      image: "../images/ww1/gallipoli.jpg"
    },
    {
      year: 1916,
      month: 5,
      day: 16,
      title: "اتفاقية سايكس-بيكو",
      description: "توقيع اتفاقية سايكس-بيكو السرية بين بريطانيا وفرنسا لتقسيم مناطق النفوذ في الشرق الأوسط بعد الحرب",
      category: "ww1 middleeast politics",
      image: "../images/ww1/sykes_picot.jpg"
    },
    {
      year: 1916,
      month: 6,
      day: 10,
      title: "الثورة العربية الكبرى",
      description: "انطلاق الثورة العربية الكبرى بقيادة الشريف حسين بن علي ضد الحكم العثماني",
      category: "ww1 middleeast arab",
      image: "../images/ww1/arab_revolt.jpg"
    },
    {
      year: 1917,
      month: 11,
      day: 2,
      title: "وعد بلفور",
      description: "إصدار وزير الخارجية البريطاني آرثر بلفور تصريحاً يدعم إقامة وطن قومي لليهود في فلسطين",
      category: "ww1 middleeast politics",
      image: "../images/ww1/balfour.jpg"
    },
    {
      year: 1917,
      month: 12,
      day: 9,
      title: "سقوط القدس",
      description: "دخول القوات البريطانية بقيادة الجنرال أللنبي إلى مدينة القدس",
      category: "ww1 middleeast battles",
      image: "../images/ww1/jerusalem_capture.jpg"
    },
    {
      year: 1918,
      month: 10,
      day: 1,
      title: "دخول العرب إلى دمشق",
      description: "دخول القوات العربية بقيادة الأمير فيصل بن الحسين إلى دمشق",
      category: "ww1 middleeast arab",
      image: "../images/ww1/australian_soldiers_egypt_1918.webp"
    },
    {
      year: 1918,
      month: 10,
      day: 30,
      title: "هدنة مودروس",
      description: "توقيع هدنة مودروس بين الحلفاء والدولة العثمانية، وانسحاب العثمانيين من الحرب",
      category: "ww1 middleeast",
      image: "../images/ww1/mudros.jpg"
    },
    {
      year: 1918,
      month: 11,
      day: 11,
      title: "نهاية الحرب العالمية الأولى",
      description: "توقيع الهدنة بين ألمانيا والحلفاء، ونهاية الحرب العالمية الأولى رسمياً",
      category: "ww1 major",
      image: "../images/ww1/ww1_end.jpg"
    },
    {
      year: 1919,
      month: 1,
      day: 18,
      title: "مؤتمر باريس للسلام",
      description: "انعقاد مؤتمر باريس للسلام لوضع ترتيبات ما بعد الحرب، بما في ذلك مستقبل المناطق العربية",
      category: "ww1 politics",
      image: "../images/ww1/paris_peace.jpg"
    },
    {
      year: 1920,
      month: 4,
      day: 25,
      title: "مؤتمر سان ريمو",
      description: "انعقاد مؤتمر سان ريمو الذي وضع نظام الانتداب على المناطق العربية التي كانت تحت الحكم العثماني",
      category: "ww1 middleeast politics",
      image: "../images/ww1/san_remo.jpg"
    }
  ],
  
  // World War II Timeline Events
  ww2: [
    {
      year: 1939,
      month: 9,
      day: 1,
      title: "بداية الحرب العالمية الثانية",
      description: "غزو ألمانيا النازية لبولندا، وبداية الحرب العالمية الثانية في أوروبا",
      category: "ww2 major",
      image: "../images/ww2/ww2_start.jpg"
    },
    {
      year: 1940,
      month: 6,
      day: 10,
      title: "دخول إيطاليا الحرب",
      description: "إعلان إيطاليا الفاشية الحرب على بريطانيا وفرنسا، مما جعل منطقة الشرق الأوسط ساحة رئيسية للحرب",
      category: "ww2 middleeast",
      image: "../images/ww2/italy_entry.jpg"
    },
    {
      year: 1940,
      month: 9,
      day: 13,
      title: "بداية الحملة الإيطالية في شمال أفريقيا",
      description: "بدء الهجوم الإيطالي على مصر من ليبيا، وبداية حملة شمال أفريقيا",
      category: "ww2 middleeast battles",
      image: "../images/ww2/north_africa_campaign.jpg"
    },
    {
      year: 1941,
      month: 4,
      day: 1,
      title: "ثورة رشيد عالي الكيلاني في العراق",
      description: "اندلاع ثورة رشيد عالي الكيلاني المؤيدة للمحور في العراق ضد النفوذ البريطاني",
      category: "ww2 middleeast arab",
      image: "../images/ww2/rashid_ali.jpg"
    },
    {
      year: 1941,
      month: 5,
      day: 31,
      title: "فشل ثورة رشيد عالي الكيلاني",
      description: "قمع القوات البريطانية لثورة رشيد عالي الكيلاني في العراق",
      category: "ww2 middleeast arab",
      image: "../images/ww2/british_iraq.jpg"
    },
    {
      year: 1941,
      month: 6,
      day: 8,
      title: "غزو سوريا ولبنان",
      description: "بدء عملية المصدر: غزو القوات البريطانية والفرنسية الحرة لسوريا ولبنان الخاضعتين لحكومة فيشي الفرنسية",
      category: "ww2 middleeast battles",
      image: "../images/ww2/syria_lebanon.jpg"
    },
    {
      year: 1941,
      month: 6,
      day: 10,
      title: "قصف حيفا",
      description: "قصف سلاح الجو الألماني لمدينة حيفا في فلسطين تحت الانتداب البريطاني",
      category: "ww2 middleeast battles",
      image: "../images/ww2/german_aircraft_ww2_palestine.webp"
    },
    {
      year: 1942,
      month: 10,
      day: 23,
      title: "معركة العلمين",
      description: "بدء معركة العلمين في مصر، وهي نقطة تحول في حرب شمال أفريقيا",
      category: "ww2 middleeast battles",
      image: "../images/ww2/el_alamein.jpg"
    },
    {
      year: 1943,
      month: 2,
      day: 4,
      title: "انتهاء حملة شمال أفريقيا",
      description: "انتصار قوات الحلفاء في شمال أفريقيا وعودة الهدوء النسبي إلى منطقة الشرق الأوسط",
      category: "ww2 middleeast",
      image: "../images/ww2/north_africa_end.jpg"
    },
    {
      year: 1944,
      month: 1,
      day: 1,
      title: "مجاعة مصر",
      description: "مجاعة في مصر نتيجة للحرب وتأثيراتها الاقتصادية على المنطقة",
      category: "ww2 middleeast social",
      image: "../images/ww2/egypt_famine.jpg"
    },
    {
      year: 1945,
      month: 5,
      day: 8,
      title: "يوم النصر في أوروبا",
      description: "استسلام ألمانيا النازية ونهاية الحرب في أوروبا",
      category: "ww2 major",
      image: "../images/ww2/ve_day.jpg"
    },
    {
      year: 1945,
      month: 9,
      day: 2,
      title: "نهاية الحرب العالمية الثانية",
      description: "استسلام اليابان ونهاية الحرب العالمية الثانية رسمياً",
      category: "ww2 major",
      image: "../images/ww2/ww2_end.jpg"
    }
  ]
};

// Comparison Data for World Wars Digital Museum Website
const comparisonData = {
  // Casualties Comparison
  casualties: {
    ww1: {
      military: 9.5, // in millions
      civilian: 8.5, // in millions
      total: 18, // in millions
      wounded: 20, // in millions
      missing: 7 // in millions
    },
    ww2: {
      military: 23, // in millions
      civilian: 52.5, // in millions
      total: 75.5, // in millions
      wounded: 25, // in millions
      missing: 30 // in millions
    }
  },
  
  // Countries Involved Comparison
  countries: {
    ww1: {
      total: 32,
      allies: 25,
      central: 7,
      arab_countries: ["مصر", "العراق", "سوريا", "لبنان", "فلسطين", "الأردن", "الحجاز"]
    },
    ww2: {
      total: 61,
      allies: 49,
      axis: 12,
      arab_countries: ["مصر", "العراق", "سوريا", "لبنان", "فلسطين", "الأردن", "المغرب", "الجزائر", "تونس", "ليبيا"]
    }
  },
  
  // Technology Comparison
  technology: {
    ww1: [
      "المدافع الثقيلة",
      "الدبابات الأولية",
      "الطائرات البدائية",
      "الغواصات",
      "الغازات السامة",
      "المدافع الرشاشة"
    ],
    ww2: [
      "الدبابات المتطورة",
      "الطائرات النفاثة",
      "الصواريخ الباليستية",
      "الرادار",
      "فك الشيفرات",
      "القنابل النووية"
    ]
  },
  
  // Political Impact on Arab World Comparison
  arab_impact: {
    ww1: [
      "تفكك الإمبراطورية العثمانية",
      "نظام الانتداب البريطاني والفرنسي",
      "اتفاقية سايكس-بيكو",
      "وعد بلفور",
      "ظهور الحركات القومية العربية",
      "رسم حدود جديدة للدول العربية"
    ],
    ww2: [
      "تراجع النفوذ البريطاني والفرنسي",
      "بداية حركات الاستقلال",
      "ظهور الولايات المتحدة والاتحاد السوفيتي كقوى عظمى",
      "تسارع الهجرة اليهودية إلى فلسطين",
      "تأسيس جامعة الدول العربية (1945)",
      "بداية عصر النفط في الخليج العربي"
    ]
  },
  
  // Economic Impact Comparison
  economic_impact: {
    ww1: [
      "تدمير البنية التحتية",
      "مجاعات في بلاد الشام",
      "تضخم وأزمات اقتصادية",
      "فرض ضرائب جديدة",
      "تراجع التجارة"
    ],
    ww2: [
      "نقص الغذاء والمجاعات",
      "تطوير البنية التحتية لأغراض عسكرية",
      "بداية استغلال النفط بشكل أكبر",
      "تحديث شبكات النقل والاتصالات",
      "ارتفاع الأسعار ونقص السلع"
    ]
  }
};

// Export the data for use in the website
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { timelineData, comparisonData };
}
