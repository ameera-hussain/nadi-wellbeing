export type Language = "EN" | "BM";

export const translations = {
  EN: {
    navigation: {
      healthAdvocacy: "Health Advocacy",
      screening: "Screening at NADI",
      outreach: "Outreach",
      telehealth: "Tele-Consultation",
    },
    hero: {
      title: "NADI Wellbeing",
      subtitle:
        "Empowering NADI communities to take charge of their own health and focus on self-care and not 'sick-care'",
    },
    about: {
      title: "About NADI Wellbeing",
      intro: "NADI Wellbeing brings essential healthcare closer to communities, especially for people in rural and underserved areas. Through NADI centres, the initiative helps people access health screenings, medical consultations and reliable health information without the added burden of travel and out-of-pocket costs. By empowering local NADI managers as health champions, the programme encourages communities to take a more proactive role in their health and wellbeing. Through initiatives such as Studio Sihat, NADI Wellbeing is helping make health knowledge more accessible while building healthier, more informed communities across Malaysia.",
    },
    healthAdvocacy: {
      title: "Health Advocacy",
      subtitle:
        "Explore our health advocacy initiatives, including wellness programs, educational resources, and community outreach efforts to promote holistic health and wellbeing.",
      weightManagement: "Weight Management",
      weightManagementDesc:
        "Explore practical approaches to achieving and maintaining a healthy weight through balanced nutrition, regular physical activity, and sustainable lifestyle habits.",
      hypertension: "Hypertension",
      hypertensionDesc:
        "Build a better understanding of high blood pressure and the everyday habits that can help manage it, reduce health risks, and support long-term wellbeing.",
      diabetes: "Diabetes",
      diabetesDesc:
        "Gain insights into living well with diabetes, from managing blood sugar levels to making informed choices that can help prevent complications.",
      heart: "Heart Health",
      heartDesc:
        "Discover ways to care for your heart through healthy lifestyle choices, risk awareness, and simple habits that support cardiovascular health.",
      mentalHealth: "Mental Health",
      mentalHealthDesc:
        "Explore the importance of mental wellbeing, how to recognise potential signs of concern, and practical ways to build emotional resilience and maintain a healthier mind.",
      studioSihat: "Studio Sihat",
      studioSihatDesc:
        "Visit our channel!",
      testimonials: "Testimonials",
      testimonialsDesc:
        "Hear from our community members about their experiences with NADI Wellbeing's health advocacy initiatives and how they have benefited from our programs and resources.",
      testimonialsData: [
        {
          title: "Reduced BMI from 34 to 23",
          quote: "With NADI Wellbeing's support, I reduced my BMI from 34 to 23 and lost over 20kg. Studio Sihat gave me the knowledge, and the community gave me the purpose to keep going and to encourage others to join me.",
          name: "Siti Fatimah Binti Zailan",
          age: 34,
          role: "Professional",
          image: "/src/assets/testimonials/sitifatimah.png"
        },
        {
          title: "Blood sugar reduced from 11 to 6 mmol/L",
          quote: "My blood sugar was at 11 mmol/l and I could feel it affecting everything like my energy, my vision, my life. NADI Wellbeing's services helped me take control through the right diet and consistent monitoring. Today I'm at 6 mmol/L and feeling like myself again.",
          name: "Sopiah Binti Said",
          age: 66,
          role: "Retiree",
          image: "/src/assets/testimonials/sopiah.png"
        },
        {
          title: "Lost 12.5kg",
          quote: "I never thought losing weight was possible for me until I attended a Studio Sihat health webinar. The guidance I received helped me lose 12.5kg at a pace that was realistic and sustainable. It wasn't a quick fix, it was a lifestyle shift.",
          name: "Yasmin Binti Hassan",
          age: 36,
          role: "Webinar participant",
          image: "/src/assets/testimonials/yasmin.png"
        },
        {
          title: "Consistent health monitoring",
          quote: "NADI Wellbeing changed how I think about my health. Regular screenings, better eating habits, and consistent exercise have become part of my life. Knowing my results are tracked and connected gives me real peace of mind.",
          name: "Inbavalli A/P S. Penkederaman",
          age: 58,
          role: "Health programme participant",
          image: "/src/assets/testimonials/inbavalli.png"
        },
        {
          title: "Successfully lost 32kg in 5 months",
          quote: "Studio Sihat taught me what balanced nutrition and an active lifestyle really looks like. Combined with regular check-ins at NADI, I went from 130kg to 98kg in five months and I'm still going. Small, consistent steps really do add up.",
          name: "Muhammad Helmy Bin Abdullah",
          age: 28,
          role: "My Inspirasi programme participant",
          image: "/src/assets/testimonials/helmy.png"
        },
        {
          title: "Reduced cholesterol level with exercise",
          quote: "My health screening revealed high cholesterol and that was all the motivation I needed. I committed to 30 minutes of exercise every day, and in five weeks my cholesterol dropped from 6.0 to 5.0. Consistency and confidence really are the keys.",
          name: "Rafiza Binti Muat",
          age: 36,
          role: "Health screening participant",
          image: "/src/assets/testimonials/rafiza.png"
        },
        {
          title: "Easy Access to Doctor via Teleconsultation",
          quote: "My health screening was the push I needed. I lost 6kg in two months through my own effort but teleconsultation helped me do it the right way. No queues, no time off work, just expert guidance when I needed it most.",
          name: "Fatin Syafawani Binti Cik Osman",
          age: 33,
          role: "Finance officer",
          image: "/src/assets/testimonials/fatinshafawani.png"
        },
        {
          title: "Lost 8 kg and restored blood sugar to normal levels",
          quote: "My blood sugar was very high during my first screening. Daily screenings, better eating, and regular exercise changed everything. I lost 8kg and brought my blood sugar down to 4.8. I am truly grateful for the support and guidance that made this possible.",
          name: "Mekalah Devi A/P Munusamy",
          age: 39,
          role: "Health screening participant",
          image: "/src/assets/testimonials/mekalah.png"
        }
      ],
      viewPlaylist: "View Playlist",
      viewChannel: "View Channel",
    },
    screening: {
      title: "NADI Screening",
      subtitle:
        "NADI Screening is a comprehensive health assessment programme designed to identify potential health risks and provide personalised recommendations for maintaining optimal wellbeing.",
      screeningTypes: {
        bloodPressure: "Blood Pressure Monitoring",
        glucose: "Blood Glucose Testing",
        bmi: "BMI (Body Mass Index) Assessment",
        heart: "Heart Rate Monitoring",
      },
      communityCentres: "Nadi Centres",
      screeningsConducted: "Screenings Conducted",
      medicalConsultations: "Medical Consultations",
      screeningParticipants: "Participants",
      repeatScreenings: "Repeat Screenings",
      cta: "Ready to take the next step in your health journey?",
      ctaDescription:
        "Schedule your NADI Screening today and receive personalised health insights to help you live healthier.",
      locateCenter: "Locate your nearest NADI Centre",
      stats: {
        centres: "1,098",
        screenings: "147,081",
        consultations: "12,089",
        participants: "97,022",
        repeat: "34.03%",
      },
    },
    outreach: {
      title: "Outreach",
      subtitle:
        "Learn about our outreach programs and initiatives aimed at promoting health and wellness in the community.",
    },
    telehealth: {
      title: "TeleConsultation",
      subtitle:
        "Experience the convenience of virtual healthcare with our tele-consultation services, connecting you with healthcare professionals from the comfort of your home.",
      bookingTitle: "How to Book a Tele-consultation",
      steps: [
        {
          title: "Register",
          description: "Register as a registered member of NADI.",
        },
        {
          title: "Health Screening",
          description: "Ensure you have undergone a basic health screening at a NADI Centre prior to this.",
        },
        {
          title: "Schedule Appointment",
          description: "Contact NADI staff to schedule your appointment at least 2 days in advance.",
        },
        {
          title: "Join Consultation",
          description: "Join the remote teleconsultation session with a qualified doctor at your scheduled date and time.",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "Get in touch with us for any inquiries, support, or feedback. We are here to assist you.",
    },
    footer: {
      copyright: "© 2026 NADI Wellbeing. All rights reserved.",
    },
  },
  BM: {
    navigation: {
      healthAdvocacy: "Kesedaran Kesihatan",
      screening: "Saringan di NADI",
      outreach: "Program Jangkauan Komuniti",
      telehealth: "Tele-Konsultasi",
    },
    hero: {
      title: "NADI Kesejahteraan Kendiri",
      subtitle:
        "Memperkasakan komuniti NADI untuk mengambil tanggungjawab terhadap kesihatan diri dengan memberi tumpuan kepada penjagaan kendiri dan pencegahan penyakit, bukan sekadar mendapatkan rawatan apabila sakit.",
    },
    about: {
      title: "Mengenai NADI Kesejahteraan Kendiri",
      intro: "NADI Kesihatan Kendiri membawa perkhidmatan penjagaan kesihatan lebih dekat kepada komuniti, khususnya bagi mereka yang tinggal di kawasan luar bandar dan kurang mendapat akses kepada perkhidmatan kesihatan. Melalui pusat-pusat NADI, inisiatif ini membantu masyarakat mendapatkan saringan kesihatan, konsultasi perubatan dan maklumat kesihatan yang boleh dipercayai tanpa beban perjalanan dan kos yang perlu ditanggung sendiri. Dengan memperkasakan pengurus NADI sebagai juara kesihatan, program ini menggalakkan masyarakat untuk mengambil peranan yang lebih proaktif dalam menjaga kesihatan dan kesejahteraan diri. Melalui inisiatif seperti Studio Sihat, NADI Kesihatan Kendiri membantu menjadikan pengetahuan kesihatan lebih mudah diakses, di samping membina komuniti yang lebih sihat dan berpengetahuan di seluruh Malaysia.",
    },
    healthAdvocacy: {
      title: "Kesedaran Kesihatan",
      subtitle:
        "Terokai pelbagai inisiatif advokasi kesihatan kami yang merangkumi program kesejahteraan, sumber pendidikan serta aktiviti jangkauan komuniti bagi menggalakkan amalan hidup sihat dan kesejahteraan menyeluruh.",
      weightManagement: "Pengurusan Berat Badan",
      weightManagementDesc:
        "Kenalpasti pendekatan praktikal untuk mencapai dan mengekalkan berat badan yang sihat melalui pemakanan seimbang, aktiviti fizikal secara berkala dan amalan gaya hidup yang mampan.",
      hypertension: "Hipertensi",
      hypertensionDesc: 
        "Fahami dengan lebih mendalam tentang tekanan darah tinggi serta amalan harian yang boleh membantu menguruskannya, mengurangkan risiko kesihatan dan menyokong kesejahteraan jangka panjang.",
      diabetes: "Diabetes",
      diabetesDesc: 
        "Dapatkan panduan untuk menjalani kehidupan yang lebih sihat dengan diabetes, daripada mengurus paras gula dalam darah kepada membuat pilihan yang bijak bagi membantu mencegah komplikasi.",
      heart: "Kesihatan Jantung",
      heartDesc: 
        "Ketahui cara menjaga kesihatan jantung melalui pilihan gaya hidup yang sihat, kesedaran terhadap faktor risiko dan amalan mudah yang menyokong kesihatan kardiovaskular.",
      mentalHealth: "Kesihatan Mental",
      mentalHealthDesc: 
        "Belajar kepentingan kesejahteraan mental, cara mengenal pasti tanda-tanda yang perlu diberi perhatian serta langkah praktikal untuk membina ketahanan emosi dan mengekalkan minda yang lebih sihat.",
      studioSihat: "Studio Sihat",
      studioSihatDesc:
        "Lawati saluran kami!",
      testimonials: "Testimoni",
      testimonialsDesc:
        "Dengarkan pengalaman ahli komuniti yang telah menyertai inisiatif advokasi kesihatan NADI Wellbeing dan bagaimana program serta sumber yang disediakan telah memberi manfaat kepada mereka.",
      testimonialsData: [
        {
          title: "Kurangkan BMI daripada 34 ke 23",
          quote: "Dengan sokongan NADI Wellbeing, saya telah mengurangkan BMI saya daripada 34 ke 23 dan telah kehilangan lebih daripada 20kg. Studio Sihat memberikan saya pengetahuan, dan komuniti memberikan saya tujuan untuk terus berjaya dan menggalakkan orang lain untuk bersama saya.",
          name: "Siti Fatimah Binti Zailan",
          age: 34,
          role: "Profesional",
          image: "/src/assets/testimonials/sitifatimah.png"
        },
        {
          title: "Kurangkan gula darah daripada 11 ke 6 mmol/L",
          quote: "Gula darah saya berada pada 11 mmol/l dan saya dapat merasakan ia menjejaskan segalanya seperti tenaga saya, penglihatan saya, kehidupan saya. Perkhidmatan NADI Wellbeing membantu saya mengawal melalui diet yang betul dan pemantauan yang konsisten. Hari ini saya berada pada 6 mmol/L dan berasa seperti diri saya sendiri lagi.",
          name: "Sopiah Binti Said",
          age: 66,
          role: "Pesara",
          image: "/src/assets/testimonials/sopiah.png"
        },
        {
          title: "Hilang 12.5kg",
          quote: "Saya tidak pernah fikir kehilangan berat badan adalah mungkin untuk saya sehingga saya menghadiri webinar kesihatan Studio Sihat. Panduan yang saya terima membantu saya kehilangan 12.5kg pada kadar yang realistik dan mampan. Ia bukan penyelesaian cepat, ia adalah perubahan gaya hidup.",
          name: "Yasmin Binti Hassan",
          age: 36,
          role: "Peserta webinar",
          image: "/src/assets/testimonials/yasmin.png"
        },
        {
          title: "Pemantauan kesihatan yang konsisten",
          quote: "NADI Wellbeing mengubah cara saya berfikir tentang kesihatan saya. Saringan tetap, tabiat makan yang lebih baik, dan latihan yang konsisten telah menjadi sebahagian daripada kehidupan saya. Mengetahui hasil saya dijejak dan disambungkan memberi saya ketenangan pikiran yang sebenar.",
          name: "Inbavalli A/P S. Penkederaman",
          age: 58,
          role: "Peserta program kesihatan",
          image: "/src/assets/testimonials/inbavalli.png"
        },
        {
          title: "Berjaya kehilangan 32kg dalam 5 bulan",
          quote: "Studio Sihat mengajar saya apa itu pemakanan seimbang dan gaya hidup aktif yang sebenar. Digabungkan dengan pemeriksaan biasa di NADI, saya bergerak daripada 130kg ke 98kg dalam lima bulan dan saya masih berjaya. Langkah kecil yang konsisten benar-benar mengumpul.",
          name: "Muhammad Helmy Bin Abdullah",
          age: 28,
          role: "Peserta program My Inspirasi",
          image: "/src/assets/testimonials/helmy.png"
        },
        {
          title: "Kurangkan tahap kolesterol dengan senaman",
          quote: "Saringan kesihatan saya mendedahkan kolesterol tinggi dan itu semua motivasi yang saya perlukan. Saya komited untuk 30 minit senaman setiap hari, dan dalam lima minggu kolesterol saya jatuh daripada 6.0 ke 5.0. Konsistensi dan keyakinan benar-benar adalah kuncinya.",
          name: "Rafiza Binti Muat",
          age: 36,
          role: "Peserta saringan kesihatan",
          image: "/src/assets/testimonials/rafiza.png"
        },
        {
          title: "Akses Mudah ke Doktor melalui Tele-Konsultasi",
          quote: "Saringan kesihatan saya adalah tolakan yang saya perlukan. Saya kehilangan 6kg dalam dua bulan melalui usaha saya sendiri tetapi tele-konsultasi membantu saya melakukannya dengan cara yang betul. Tiada giliran, tiada masa cuti kerja, hanya panduan pakar apabila saya memerlukannya.",
          name: "Fatin Syafawani Binti Cik Osman",
          age: 33,
          role: "Pegawai Kewangan",
          image: "/src/assets/testimonials/fatinshafawani.png"
        },
        {
          title: "Hilang 8 kg dan pulihkan gula darah ke paras normal",
          quote: "Gula darah saya sangat tinggi semasa saringan pertama saya. Saringan harian, pemakanan yang lebih baik, dan senaman biasa mengubah segalanya. Saya kehilangan 8kg dan membawa gula darah saya turun ke 4.8. Saya amat bersyukur atas sokongan dan panduan yang menjadikan ini mungkin.",
          name: "Mekalah Devi A/P Munusamy",
          age: 39,
          role: "Peserta saringan kesihatan",
          image: "/src/assets/testimonials/mekalah.png"
        }
      ],
      viewPlaylist: "Lihat Senarai Main",
      viewChannel: "Lihat Saluran",
     },
    screening: {
      title: "Saringan di NADI",
      subtitle:
        "Saringan di NADI merupakan program penilaian kesihatan menyeluruh yang direka untuk mengenal pasti risiko kesihatan serta memberikan cadangan yang diperibadikan bagi membantu anda mengekalkan tahap kesihatan yang optimum.",
      screeningTypes: {
        bloodPressure: "Pemantauan Tekanan Darah",
        glucose: "Ujian Glukosa Darah",
        bmi: "Penilaian Indeks Jisim Badan (BMI)",
        heart: "Pemantauan Kadar Jantung",
      },
      communityCentres: "Pusat NADI",
      screeningsConducted: "Saringan Dilaksanakan",
      medicalConsultations: "Konsultasi Perubatan",
      screeningParticipants: "Peserta",
      repeatScreenings: "Saringan Ulangan",
      cta: "Bersedia untuk mengambil langkah seterusnya dalam perjalanan kesihatan anda?",
      ctaDescription:
        "Jadualkan Saringan di NADI hari ini dan dapatkan pandangan kesihatan yang diperibadikan untuk membantu anda menjalani kehidupan yang lebih sihat.",
      locateCenter: "Cari Pusat NADI Berdekatan Anda",
      stats: {
        centers: "1,098",
        screenings: "147,081",
        consultations: "12,089",
        participants: "97,022",
        repeat: "34.03%",
      },
    },
    outreach: {
      title: "Program Jangkauan Komuniti",
      subtitle:
        "Ketahui lebih lanjut mengenai program dan inisiatif jangkauan komuniti kami yang bertujuan mempromosikan kesihatan serta kesejahteraan dalam kalangan masyarakat.",
    },
    telehealth: {
      title: "TeleKonsultasi",
      subtitle:
        "Nikmati kemudahan perkhidmatan kesihatan secara maya melalui Tele-konsultasi, yang menghubungkan anda dengan profesional penjagaan kesihatan dari keselesaan rumah anda.",
      bookingTitle: "Cara Menempah Slot Tele-Konsultasi",
      steps: [
        {
          title: "Daftar",
          description: "Daftar sebagai ahli berdaftar NADI.",
        },
        {
          title: "Saringan Kesihatan",
          description: "Pastikan anda telah menjalani saringan kesihatan asas di Pusat NADI sebelum ini.",
        },
        {
          title: "Jadual Temu Janji",
          description: "Hubungi kakitangan NADI untuk menjadualkan temu janji anda sekurang-kurangnya 2 hari sebelumnya.",
        },
        {
          title: "Sertai Konsultasi",
          description: "Sertai sesi tele-konsultasi jarak jauh dengan doktor yang berkelayakan pada tarikh dan masa yang telah dijadualkan.",
        },
      ],
    },
    contact: {
      title: "Hubungi Kami",
      subtitle:
        "Hubungi kami untuk sebarang pertanyaan, sokongan atau maklum balas. Kami sedia membantu anda.",
    },
    footer: {
      copyright: "© 2026 NADI Wellbeing. Hak Cipta Terpelihara.",
    },
  },
};

export function getTranslation(language: Language, key: string): string {
  const keys = key.split(".");
  let value: unknown = translations[language];

  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function getTranslationValue(language: Language, key: string): unknown {
  const keys = key.split(".");
  let value: unknown = translations[language];

  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return undefined;
    }
  }

  return value;
}
