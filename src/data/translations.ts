export type Language = 'en' | 'hi' | 'ta' | 'te' | 'kn' | 'mr' | 'bn' | 'gu';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: 'EN' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: 'HI' },
];

type TranslationKeys = {
  // Language selection
  selectLanguage: string;
  languageSelected: string;

  // Welcome
  welcome: string;
  welcomeOptions: string[];

  // Categories
  showCategories: string;
  categoryOptions: string[];

  // Test selection
  healthPackages: string;
  prescriptionHelp: string;
  testSelected: string;

  // Appointment
  scheduleAppointment: string;
  appointmentOptions: string[];
  pickAnotherDate: string;
  dateOptions: string[];

  // Location
  selectLocation: string;
  locationOptions: string[];

  // Confirmation
  confirmationSummary: string;
  confirmOptions: string[];
  bookingConfirmed: string;
  preparationTips: string;

  // Change options
  changeOptions: string[];

  // Search responses
  searchHelp: string;
  searchOptions: string[];
  foundTests: string;

  // Common
  test: string;
  price: string;
  location: string;
  date: string;
  discount: string;
  bookNow: string;
  popular: string;
  sameDayReports: string;
  homeCollection: string;
  inputPlaceholder: string;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    selectLanguage: "Welcome to PathLab18! Please select your preferred language:",
    languageSelected: "Great! I'll continue in English.",

    welcome: "Namaste! I'm here to help you book your blood test appointment. May I know what brings you here today?",
    welcomeOptions: ['Book a test', 'View popular tests', 'Health checkup package', 'I have a prescription'],

    showCategories: "Great! Let me show you our test categories. Which area would you like to explore?",
    categoryOptions: ['Diabetes', 'Thyroid', 'Vitamins', 'Liver', 'Kidney', 'Heart', 'Full Body'],

    healthPackages: "Perfect! Here are our comprehensive health packages with amazing discounts",
    prescriptionHelp: "No problem! You can type the test names from your prescription, or browse our categories below:",
    testSelected: "Great choice! The {testName} costs ₹{price}{discount}\n\nWhen would you like to schedule your appointment?",

    scheduleAppointment: "When would you like to schedule your appointment?",
    appointmentOptions: ['Tomorrow morning (7-9 AM)', 'Tomorrow evening (4-6 PM)', 'Pick another date'],
    pickAnotherDate: "Sure! What date works best for you?",
    dateOptions: ['Day after tomorrow', 'This weekend', 'Next Monday'],

    selectLocation: "Perfect! Now, where would you like the sample collection?",
    locationOptions: ['At home', 'Visit lab', 'Office collection'],

    confirmationSummary: "Wonderful! Your appointment is almost ready.\n\nSummary:\n• Test: {testName}\n• Price: ₹{price}\n• Location: {location}\n• Date: Tomorrow, 7:00 AM\n\nShall I confirm your booking?",
    confirmOptions: ['Yes, confirm', 'Change details'],
    bookingConfirmed: "Your booking is confirmed!\n\nBooking ID: {bookingId}\n\nOur phlebotomist will arrive at your location tomorrow between 7-9 AM.",
    preparationTips: "\n\nPreparation tips:\n• Fast for 8-12 hours before the test\n• Drink plenty of water\n• Carry a valid ID proof\n\nThank you for choosing PathLab18!",

    changeOptions: ['Change test', 'Change date', 'Change location'],

    searchHelp: "I'd be happy to help you find the right test! You can:",
    searchOptions: ['Browse by category', 'See popular tests', 'Full body checkup'],
    foundTests: "I found {category} tests for you! Here are the options:",

    test: 'Test',
    price: 'Price',
    location: 'Location',
    date: 'Date',
    discount: '{percent}% discount!',
    bookNow: 'Book Now',
    popular: 'Popular',
    sameDayReports: 'Same day reports',
    homeCollection: 'Home collection available',
    inputPlaceholder: 'Type your message or test name...',
  },

  hi: {
    selectLanguage: "PathLab18 में आपका स्वागत है! कृपया अपनी भाषा चुनें:",
    languageSelected: "बढ़िया! मैं हिंदी में जारी रखूंगा।",

    welcome: "नमस्ते! मैं आपकी ब्लड टेस्ट अपॉइंटमेंट बुक करने में मदद करने के लिए हूं। आज आप किस लिए यहां आए हैं?",
    welcomeOptions: ['टेस्ट बुक करें', 'लोकप्रिय टेस्ट देखें', 'हेल्थ चेकअप पैकेज', 'मेरे पास प्रिस्क्रिप्शन है'],

    showCategories: "बढ़िया! ये रहीं हमारी टेस्ट श्रेणियां। आप कौन सी देखना चाहेंगे?",
    categoryOptions: ['मधुमेह', 'थायरॉइड', 'विटामिन', 'लिवर', 'किडनी', 'हृदय', 'फुल बॉडी'],

    healthPackages: "बिल्कुल! ये रहे हमारे हेल्थ पैकेज भारी छूट के साथ",
    prescriptionHelp: "कोई बात नहीं! आप अपने प्रिस्क्रिप्शन से टेस्ट का नाम टाइप कर सकते हैं, या नीचे श्रेणियां देखें:",
    testSelected: "बढ़िया चुनाव! {testName} की कीमत ₹{price} है{discount}\n\nआप अपॉइंटमेंट कब लेना चाहेंगे?",

    scheduleAppointment: "आप अपॉइंटमेंट कब लेना चाहेंगे?",
    appointmentOptions: ['कल सुबह (7-9 AM)', 'कल शाम (4-6 PM)', 'अन्य तारीख चुनें'],
    pickAnotherDate: "ठीक है! आपके लिए कौन सी तारीख सही रहेगी?",
    dateOptions: ['परसों', 'इस सप्ताहांत', 'अगले सोमवार'],

    selectLocation: "बढ़िया! अब बताएं, सैंपल कलेक्शन कहां चाहिए?",
    locationOptions: ['घर पर', 'लैब में', 'ऑफिस में'],

    confirmationSummary: "बहुत अच्छा! आपकी अपॉइंटमेंट लगभग तैयार है।\n\nसारांश:\n• टेस्ट: {testName}\n• कीमत: ₹{price}\n• स्थान: {location}\n• तारीख: कल, सुबह 7:00 बजे\n\nक्या मैं बुकिंग कन्फर्म करूं?",
    confirmOptions: ['हां, कन्फर्म करें', 'बदलाव करें'],
    bookingConfirmed: "आपकी बुकिंग कन्फर्म हो गई!\n\nबुकिंग ID: {bookingId}\n\nहमारे फ्लेबोटोमिस्ट कल सुबह 7-9 बजे के बीच आएंगे।",
    preparationTips: "\n\nतैयारी के टिप्स:\n• टेस्ट से 8-12 घंटे पहले उपवास करें\n• खूब पानी पिएं\n• वैध ID प्रूफ साथ रखें\n\nPathLab18 चुनने के लिए धन्यवाद!",

    changeOptions: ['टेस्ट बदलें', 'तारीख बदलें', 'स्थान बदलें'],

    searchHelp: "मैं आपको सही टेस्ट खोजने में मदद करूंगा! आप:",
    searchOptions: ['श्रेणी से देखें', 'लोकप्रिय टेस्ट देखें', 'फुल बॉडी चेकअप'],
    foundTests: "मुझे {category} टेस्ट मिले! ये रहे विकल्प:",

    test: 'टेस्ट',
    price: 'कीमत',
    location: 'स्थान',
    date: 'तारीख',
    discount: '{percent}% छूट!',
    bookNow: 'अभी बुक करें',
    popular: 'लोकप्रिय',
    sameDayReports: 'उसी दिन रिपोर्ट',
    homeCollection: 'घर पर सैंपल कलेक्शन उपलब्ध',
    inputPlaceholder: 'मैसेज या टेस्ट का नाम टाइप करें...',
  },

  ta: {
    selectLanguage: "PathLab18க்கு வரவேற்கிறோம்! உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்:",
    languageSelected: "நல்லது! நான் தமிழில் தொடர்கிறேன்.",

    welcome: "வணக்கம்! உங்கள் இரத்தப் பரிசோதனை முன்பதிவு செய்ய நான் உதவுகிறேன். இன்று எதற்காக வந்திருக்கிறீர்கள்?",
    welcomeOptions: ['பரிசோதனை முன்பதிவு', 'பிரபலமான பரிசோதனைகள்', 'ஹெல்த் செக்கப் பேக்கேஜ்', 'மருந்து சீட்டு உள்ளது'],

    showCategories: "நல்லது! இதோ எங்கள் பரிசோதனை வகைகள். எதை பார்க்க விரும்புகிறீர்கள்?",
    categoryOptions: ['நீரிழிவு', 'தைராய்டு', 'வைட்டமின்கள்', 'கல்லீரல்', 'சிறுநீரகம்', 'இதயம்', 'முழு உடல்'],

    healthPackages: "சரி! இதோ சிறப்பு தள்ளுபடியுடன் ஹெல்த் பேக்கேஜ்கள்",
    prescriptionHelp: "பரவாயில்லை! மருந்து சீட்டில் உள்ள பரிசோதனை பெயரை டைப் செய்யுங்கள்:",
    testSelected: "நல்ல தேர்வு! {testName} விலை ₹{price}{discount}\n\nஎப்போது அப்பாயின்ட்மென்ட் வேண்டும்?",

    scheduleAppointment: "எப்போது அப்பாயின்ட்மென்ட் வேண்டும்?",
    appointmentOptions: ['நாளை காலை (7-9 AM)', 'நாளை மாலை (4-6 PM)', 'வேறு தேதி'],
    pickAnotherDate: "சரி! எந்த தேதி வசதியாக இருக்கும்?",
    dateOptions: ['நாளை மறுநாள்', 'இந்த வார இறுதி', 'அடுத்த திங்கள்'],

    selectLocation: "நல்லது! மாதிரி எடுக்க எங்கே வரவேண்டும்?",
    locationOptions: ['வீட்டில்', 'லேபில்', 'அலுவலகத்தில்'],

    confirmationSummary: "அருமை! உங்கள் அப்பாயின்ட்மென்ட் தயார்.\n\nசுருக்கம்:\n• பரிசோதனை: {testName}\n• விலை: ₹{price}\n• இடம்: {location}\n• தேதி: நாளை, காலை 7:00\n\nமுன்பதிவு உறுதி செய்யவா?",
    confirmOptions: ['ஆம், உறுதி செய்', 'மாற்றம் செய்'],
    bookingConfirmed: "முன்பதிவு உறுதி!\n\nமுன்பதிவு ID: {bookingId}\n\nநாளை காலை 7-9 மணிக்குள் வருவோம்।",
    preparationTips: "\n\nதயாரிப்பு:\n• 8-12 மணி நேரம் உணவு இல்லாமல்\n• நிறைய தண்ணீர் குடிக்கவும்\n• ID ஆவணம் கொண்டு வரவும்\n\nPathLab18 தேர்ந்தெடுத்ததற்கு நன்றி!",

    changeOptions: ['பரிசோதனை மாற்று', 'தேதி மாற்று', 'இடம் மாற்று'],

    searchHelp: "சரியான பரிசோதனை கண்டறிய உதவுகிறேன்!",
    searchOptions: ['வகை வாரியாக', 'பிரபலமானவை', 'முழு உடல் செக்கப்'],
    foundTests: "{category} பரிசோதனைகள் கிடைத்தன:",

    test: 'பரிசோதனை',
    price: 'விலை',
    location: 'இடம்',
    date: 'தேதி',
    discount: '{percent}% தள்ளுபடி!',
    bookNow: 'இப்போது முன்பதிவு',
    popular: 'பிரபலம்',
    sameDayReports: 'அதே நாள் ரிப்போர்ட்',
    homeCollection: 'வீட்டில் மாதிரி எடுப்பு',
    inputPlaceholder: 'செய்தி அல்லது பரிசோதனை பெயர்...',
  },

  te: {
    selectLanguage: "PathLab18కి స్వాగతం! మీ భాషను ఎంచుకోండి:",
    languageSelected: "బాగుంది! నేను తెలుగులో కొనసాగిస్తాను.",

    welcome: "నమస్కారం! మీ రక్త పరీక్ష అపాయింట్‌మెంట్ బుక్ చేయడంలో సహాయం చేస్తాను. ఈరోజు ఏమి కావాలి?",
    welcomeOptions: ['పరీక్ష బుక్ చేయండి', 'ప్రసిద్ధ పరీక్షలు', 'హెల్త్ చెకప్ ప్యాకేజ్', 'ప్రిస్క్రిప్షన్ ఉంది'],

    showCategories: "బాగుంది! ఇవి మా పరీక్ష విభాగాలు. ఏది చూడాలనుకుంటున్నారు?",
    categoryOptions: ['మధుమేహం', 'థైరాయిడ్', 'విటమిన్లు', 'కాలేయం', 'కిడ్నీ', 'గుండె', 'పూర్తి శరీరం'],

    healthPackages: "అద్భుతం! ఇవి మా హెల్త్ ప్యాకేజీలు గొప్ప డిస్కౌంట్‌తో",
    prescriptionHelp: "పర్వాలేదు! మీ ప్రిస్క్రిప్షన్ నుండి పరీక్ష పేరు టైప్ చేయండి:",
    testSelected: "మంచి ఎంపిక! {testName} ధర ₹{price}{discount}\n\nఅపాయింట్‌మెంట్ ఎప్పుడు కావాలి?",

    scheduleAppointment: "అపాయింట్‌మెంట్ ఎప్పుడు కావాలి?",
    appointmentOptions: ['రేపు ఉదయం (7-9 AM)', 'రేపు సాయంత్రం (4-6 PM)', 'వేరే తేదీ'],
    pickAnotherDate: "సరే! ఏ తేదీ అనుకూలంగా ఉంటుంది?",
    dateOptions: ['ఎల్లుండి', 'ఈ వారాంతం', 'వచ్చే సోమవారం'],

    selectLocation: "బాగుంది! శాంపిల్ కలెక్షన్ ఎక్కడ కావాలి?",
    locationOptions: ['ఇంట్లో', 'ల్యాబ్‌లో', 'ఆఫీసులో'],

    confirmationSummary: "అద్భుతం! మీ అపాయింట్‌మెంట్ సిద్ధంగా ఉంది.\n\nసారాంశం:\n• పరీక్ష: {testName}\n• ధర: ₹{price}\n• స్థలం: {location}\n• తేదీ: రేపు, ఉదయం 7:00\n\nబుకింగ్ కన్ఫర్మ్ చేయమంటారా?",
    confirmOptions: ['అవును, కన్ఫర్మ్', 'మార్పులు చేయండి'],
    bookingConfirmed: "మీ బుకింగ్ కన్ఫర్మ్ అయింది!\n\nబుకింగ్ ID: {bookingId}\n\nరేపు ఉదయం 7-9 గంటల మధ్య వస్తాము.",
    preparationTips: "\n\nసిద్ధం:\n• 8-12 గంటలు ఉపవాసం\n• నీళ్ళు బాగా తాగండి\n• ID ప్రూఫ్ తీసుకురండి\n\nPathLab18 ఎంచుకున్నందుకు ధన్యవాదాలు!",

    changeOptions: ['పరీక్ష మార్చు', 'తేదీ మార్చు', 'స్థలం మార్చు'],

    searchHelp: "సరైన పరీక్ష కనుగొనడంలో సహాయం చేస్తాను!",
    searchOptions: ['విభాగం వారీగా', 'ప్రసిద్ధమైనవి', 'పూర్తి శరీర చెకప్'],
    foundTests: "{category} పరీక్షలు దొరికాయి:",

    test: 'పరీక్ష',
    price: 'ధర',
    location: 'స్థలం',
    date: 'తేదీ',
    discount: '{percent}% డిస్కౌంట్!',
    bookNow: 'ఇప్పుడే బుక్ చేయండి',
    popular: 'ప్రసిద్ధ',
    sameDayReports: 'అదే రోజు రిపోర్టులు',
    homeCollection: 'ఇంట్లో శాంపిల్ కలెక్షన్',
    inputPlaceholder: 'మెసేజ్ లేదా పరీక్ష పేరు టైప్ చేయండి...',
  },

  kn: {
    selectLanguage: "PathLab18ಗೆ ಸ್ವಾಗತ! ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    languageSelected: "ಒಳ್ಳೆಯದು! ನಾನು ಕನ್ನಡದಲ್ಲಿ ಮುಂದುವರಿಸುತ್ತೇನೆ.",

    welcome: "ನಮಸ್ಕಾರ! ನಿಮ್ಮ ರಕ್ತ ಪರೀಕ್ಷೆ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತೇನೆ. ಇಂದು ಏನು ಬೇಕು?",
    welcomeOptions: ['ಪರೀಕ್ಷೆ ಬುಕ್ ಮಾಡಿ', 'ಜನಪ್ರಿಯ ಪರೀಕ್ಷೆಗಳು', 'ಹೆಲ್ತ್ ಚೆಕಪ್ ಪ್ಯಾಕೇಜ್', 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಇದೆ'],

    showCategories: "ಒಳ್ಳೆಯದು! ಇವು ನಮ್ಮ ಪರೀಕ್ಷೆ ವರ್ಗಗಳು. ಯಾವುದನ್ನು ನೋಡಲು ಬಯಸುತ್ತೀರಿ?",
    categoryOptions: ['ಮಧುಮೇಹ', 'ಥೈರಾಯ್ಡ್', 'ವಿಟಮಿನ್‌ಗಳು', 'ಯಕೃತ್', 'ಮೂತ್ರಪಿಂಡ', 'ಹೃದಯ', 'ಪೂರ್ಣ ದೇಹ'],

    healthPackages: "ಅದ್ಭುತ! ಇವು ದೊಡ್ಡ ರಿಯಾಯಿತಿಯೊಂದಿಗೆ ಹೆಲ್ತ್ ಪ್ಯಾಕೇಜ್‌ಗಳು",
    prescriptionHelp: "ಪರವಾಗಿಲ್ಲ! ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್‌ನಿಂದ ಪರೀಕ್ಷೆ ಹೆಸರು ಟೈಪ್ ಮಾಡಿ:",
    testSelected: "ಉತ್ತಮ ಆಯ್ಕೆ! {testName} ಬೆಲೆ ₹{price}{discount}\n\nಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಯಾವಾಗ ಬೇಕು?",

    scheduleAppointment: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಯಾವಾಗ ಬೇಕು?",
    appointmentOptions: ['ನಾಳೆ ಬೆಳಿಗ್ಗೆ (7-9 AM)', 'ನಾಳೆ ಸಂಜೆ (4-6 PM)', 'ಬೇರೆ ದಿನಾಂಕ'],
    pickAnotherDate: "ಸರಿ! ಯಾವ ದಿನಾಂಕ ಅನುಕೂಲ?",
    dateOptions: ['ನಾಡಿದ್ದು', 'ಈ ವಾರಾಂತ್ಯ', 'ಮುಂದಿನ ಸೋಮವಾರ'],

    selectLocation: "ಒಳ್ಳೆಯದು! ಮಾದರಿ ಸಂಗ್ರಹಣೆ ಎಲ್ಲಿ ಬೇಕು?",
    locationOptions: ['ಮನೆಯಲ್ಲಿ', 'ಲ್ಯಾಬ್‌ನಲ್ಲಿ', 'ಕಚೇರಿಯಲ್ಲಿ'],

    confirmationSummary: "ಅದ್ಭುತ! ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಸಿದ್ಧ.\n\nಸಾರಾಂಶ:\n• ಪರೀಕ್ಷೆ: {testName}\n• ಬೆಲೆ: ₹{price}\n• ಸ್ಥಳ: {location}\n• ದಿನಾಂಕ: ನಾಳೆ, ಬೆಳಿಗ್ಗೆ 7:00\n\nಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಲೇ?",
    confirmOptions: ['ಹೌದು, ದೃಢೀಕರಿಸಿ', 'ಬದಲಾವಣೆ ಮಾಡಿ'],
    bookingConfirmed: "ನಿಮ್ಮ ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ!\n\nಬುಕಿಂಗ್ ID: {bookingId}\n\nನಾಳೆ ಬೆಳಿಗ್ಗೆ 7-9 ಗಂಟೆಗೆ ಬರುತ್ತೇವೆ.",
    preparationTips: "\n\nತಯಾರಿ:\n• 8-12 ಗಂಟೆ ಉಪವಾಸ\n• ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ\n• ID ಪ್ರೂಫ್ ತನ್ನಿ\n\nPathLab18 ಆಯ್ಕೆ ಮಾಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು!",

    changeOptions: ['ಪರೀಕ್ಷೆ ಬದಲಿಸಿ', 'ದಿನಾಂಕ ಬದಲಿಸಿ', 'ಸ್ಥಳ ಬದಲಿಸಿ'],

    searchHelp: "ಸರಿಯಾದ ಪರೀಕ್ಷೆ ಹುಡುಕಲು ಸಹಾಯ ಮಾಡುತ್ತೇನೆ!",
    searchOptions: ['ವರ್ಗದ ಪ್ರಕಾರ', 'ಜನಪ್ರಿಯವಾದವು', 'ಪೂರ್ಣ ದೇಹ ಚೆಕಪ್'],
    foundTests: "{category} ಪರೀಕ್ಷೆಗಳು ಸಿಕ್ಕಿವೆ:",

    test: 'ಪರೀಕ್ಷೆ',
    price: 'ಬೆಲೆ',
    location: 'ಸ್ಥಳ',
    date: 'ದಿನಾಂಕ',
    discount: '{percent}% ರಿಯಾಯಿತಿ!',
    bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
    popular: 'ಜನಪ್ರಿಯ',
    sameDayReports: 'ಅದೇ ದಿನ ವರದಿಗಳು',
    homeCollection: 'ಮನೆಯಲ್ಲಿ ಮಾದರಿ ಸಂಗ್ರಹಣೆ',
    inputPlaceholder: 'ಸಂದೇಶ ಅಥವಾ ಪರೀಕ್ಷೆ ಹೆಸರು ಟೈಪ್ ಮಾಡಿ...',
  },

  mr: {
    selectLanguage: "PathLab18 वर आपले स्वागत आहे! कृपया तुमची भाषा निवडा:",
    languageSelected: "छान! मी मराठीत पुढे जाईन.",

    welcome: "नमस्कार! मी तुमची रक्त चाचणी अपॉइंटमेंट बुक करण्यात मदत करतो. आज काय हवे आहे?",
    welcomeOptions: ['चाचणी बुक करा', 'लोकप्रिय चाचण्या', 'हेल्थ चेकअप पॅकेज', 'माझ्याकडे प्रिस्क्रिप्शन आहे'],

    showCategories: "छान! या आमच्या चाचणी श्रेण्या आहेत. कोणती पाहायची आहे?",
    categoryOptions: ['मधुमेह', 'थायरॉईड', 'व्हिटॅमिन', 'यकृत', 'किडनी', 'हृदय', 'संपूर्ण शरीर'],

    healthPackages: "उत्तम! हे आमचे हेल्थ पॅकेज भरघोस सवलतीसह",
    prescriptionHelp: "ठीक आहे! तुमच्या प्रिस्क्रिप्शनमधून चाचणीचे नाव टाइप करा:",
    testSelected: "छान निवड! {testName} ची किंमत ₹{price} आहे{discount}\n\nअपॉइंटमेंट कधी हवी आहे?",

    scheduleAppointment: "अपॉइंटमेंट कधी हवी आहे?",
    appointmentOptions: ['उद्या सकाळी (7-9 AM)', 'उद्या संध्याकाळी (4-6 PM)', 'दुसरी तारीख निवडा'],
    pickAnotherDate: "ठीक आहे! कोणती तारीख सोयीस्कर आहे?",
    dateOptions: ['परवा', 'या शनिवार-रविवारी', 'पुढच्या सोमवारी'],

    selectLocation: "छान! सॅम्पल कलेक्शन कुठे हवे?",
    locationOptions: ['घरी', 'लॅबमध्ये', 'ऑफिसमध्ये'],

    confirmationSummary: "उत्तम! तुमची अपॉइंटमेंट तयार आहे.\n\nसारांश:\n• चाचणी: {testName}\n• किंमत: ₹{price}\n• ठिकाण: {location}\n• तारीख: उद्या, सकाळी 7:00\n\nबुकिंग कन्फर्म करू?",
    confirmOptions: ['हो, कन्फर्म करा', 'बदल करा'],
    bookingConfirmed: "तुमचे बुकिंग कन्फर्म झाले!\n\nबुकिंग ID: {bookingId}\n\nउद्या सकाळी 7-9 च्या दरम्यान येऊ.",
    preparationTips: "\n\nतयारी:\n• 8-12 तास उपवास करा\n• भरपूर पाणी प्या\n• ID प्रूफ आणा\n\nPathLab18 निवडल्याबद्दल धन्यवाद!",

    changeOptions: ['चाचणी बदला', 'तारीख बदला', 'ठिकाण बदला'],

    searchHelp: "योग्य चाचणी शोधण्यात मदत करतो!",
    searchOptions: ['श्रेणीनुसार', 'लोकप्रिय चाचण्या', 'संपूर्ण शरीर चेकअप'],
    foundTests: "{category} चाचण्या सापडल्या:",

    test: 'चाचणी',
    price: 'किंमत',
    location: 'ठिकाण',
    date: 'तारीख',
    discount: '{percent}% सवलत!',
    bookNow: 'आता बुक करा',
    popular: 'लोकप्रिय',
    sameDayReports: 'त्याच दिवशी रिपोर्ट',
    homeCollection: 'घरी सॅम्पल कलेक्शन उपलब्ध',
    inputPlaceholder: 'मेसेज किंवा चाचणीचे नाव टाइप करा...',
  },

  bn: {
    selectLanguage: "PathLab18-এ স্বাগতম! আপনার ভাষা বেছে নিন:",
    languageSelected: "দারুণ! আমি বাংলায় এগিয়ে যাব।",

    welcome: "নমস্কার! আমি আপনার রক্ত পরীক্ষার অ্যাপয়েন্টমেন্ট বুক করতে সাহায্য করব। আজ কী দরকার?",
    welcomeOptions: ['পরীক্ষা বুক করুন', 'জনপ্রিয় পরীক্ষা', 'হেলথ চেকআপ প্যাকেজ', 'প্রেসক্রিপশন আছে'],

    showCategories: "দারুণ! এগুলো আমাদের পরীক্ষার বিভাগ। কোনটি দেখতে চান?",
    categoryOptions: ['ডায়াবেটিস', 'থাইরয়েড', 'ভিটামিন', 'লিভার', 'কিডনি', 'হার্ট', 'সম্পূর্ণ শরীর'],

    healthPackages: "চমৎকার! এগুলো বিশেষ ছাড়সহ হেলথ প্যাকেজ",
    prescriptionHelp: "ঠিক আছে! প্রেসক্রিপশন থেকে পরীক্ষার নাম টাইপ করুন:",
    testSelected: "দারুণ পছন্দ! {testName}-এর দাম ₹{price}{discount}\n\nঅ্যাপয়েন্টমেন্ট কখন চান?",

    scheduleAppointment: "অ্যাপয়েন্টমেন্ট কখন চান?",
    appointmentOptions: ['আগামীকাল সকালে (7-9 AM)', 'আগামীকাল সন্ধ্যায় (4-6 PM)', 'অন্য তারিখ'],
    pickAnotherDate: "ঠিক আছে! কোন তারিখ সুবিধাজনক?",
    dateOptions: ['পরশু', 'এই সপ্তাহান্তে', 'পরের সোমবার'],

    selectLocation: "দারুণ! স্যাম্পল কালেকশন কোথায় চান?",
    locationOptions: ['বাড়িতে', 'ল্যাবে', 'অফিসে'],

    confirmationSummary: "চমৎকার! আপনার অ্যাপয়েন্টমেন্ট প্রস্তুত।\n\nসারসংক্ষেপ:\n• পরীক্ষা: {testName}\n• দাম: ₹{price}\n• স্থান: {location}\n• তারিখ: আগামীকাল, সকাল 7:00\n\nবুকিং কনফার্ম করব?",
    confirmOptions: ['হ্যাঁ, কনফার্ম করুন', 'পরিবর্তন করুন'],
    bookingConfirmed: "আপনার বুকিং কনফার্ম হয়েছে!\n\nবুকিং ID: {bookingId}\n\nআগামীকাল সকাল 7-9টার মধ্যে আসব।",
    preparationTips: "\n\nপ্রস্তুতি:\n• 8-12 ঘণ্টা উপবাস করুন\n• প্রচুর পানি পান করুন\n• ID প্রুফ আনুন\n\nPathLab18 বেছে নেওয়ার জন্য ধন্যবাদ!",

    changeOptions: ['পরীক্ষা বদলান', 'তারিখ বদলান', 'স্থান বদলান'],

    searchHelp: "সঠিক পরীক্ষা খুঁজতে সাহায্য করব!",
    searchOptions: ['বিভাগ অনুযায়ী', 'জনপ্রিয়', 'সম্পূর্ণ শরীর চেকআপ'],
    foundTests: "{category} পরীক্ষা পাওয়া গেছে:",

    test: 'পরীক্ষা',
    price: 'দাম',
    location: 'স্থান',
    date: 'তারিখ',
    discount: '{percent}% ছাড়!',
    bookNow: 'এখনই বুক করুন',
    popular: 'জনপ্রিয়',
    sameDayReports: 'একই দিনে রিপোর্ট',
    homeCollection: 'বাড়িতে স্যাম্পল কালেকশন',
    inputPlaceholder: 'মেসেজ বা পরীক্ষার নাম টাইপ করুন...',
  },

  gu: {
    selectLanguage: "PathLab18 માં આપનું સ્વાગત છે! કૃપા કરી તમારી ભાષા પસંદ કરો:",
    languageSelected: "બહુ સારું! હું ગુજરાતીમાં આગળ વધીશ.",

    welcome: "નમસ્તે! હું તમારી બ્લડ ટેસ્ટ એપોઇન્ટમેન્ટ બુક કરવામાં મદદ કરીશ. આજે શું જોઈએ છે?",
    welcomeOptions: ['ટેસ્ટ બુક કરો', 'લોકપ્રિય ટેસ્ટ', 'હેલ્થ ચેકઅપ પેકેજ', 'મારી પાસે પ્રિસ્ક્રિપ્શન છે'],

    showCategories: "બહુ સારું! આ અમારી ટેસ્ટ શ્રેણીઓ છે. કઈ જોવી છે?",
    categoryOptions: ['ડાયાબિટીસ', 'થાયરોઇડ', 'વિટામિન', 'લિવર', 'કિડની', 'હાર્ટ', 'સંપૂર્ણ શરીર'],

    healthPackages: "બહુ સારું! આ અમારા હેલ્થ પેકેજ મોટી છૂટ સાથે",
    prescriptionHelp: "ઠીક છે! પ્રિસ્ક્રિપ્શનમાંથી ટેસ્ટનું નામ ટાઇપ કરો:",
    testSelected: "સરસ પસંદગી! {testName} ની કિંમત ₹{price} છે{discount}\n\nએપોઇન્ટમેન્ટ ક્યારે જોઈએ?",

    scheduleAppointment: "એપોઇન્ટમેન્ટ ક્યારે જોઈએ?",
    appointmentOptions: ['આવતીકાલે સવારે (7-9 AM)', 'આવતીકાલે સાંજે (4-6 PM)', 'બીજી તારીખ'],
    pickAnotherDate: "ઠીક છે! કઈ તારીખ અનુકૂળ છે?",
    dateOptions: ['પરમ દિવસે', 'આ સપ્તાહાંતે', 'આવતા સોમવારે'],

    selectLocation: "બહુ સારું! સેમ્પલ કલેક્શન ક્યાં જોઈએ?",
    locationOptions: ['ઘરે', 'લેબમાં', 'ઓફિસમાં'],

    confirmationSummary: "બહુ સારું! તમારી એપોઇન્ટમેન્ટ તૈયાર છે.\n\nસારાંશ:\n• ટેસ્ટ: {testName}\n• કિંમત: ₹{price}\n• સ્થળ: {location}\n• તારીખ: આવતીકાલે, સવારે 7:00\n\nબુકિંગ કન્ફર્મ કરું?",
    confirmOptions: ['હા, કન્ફર્મ કરો', 'ફેરફાર કરો'],
    bookingConfirmed: "તમારું બુકિંગ કન્ફર્મ થયું!\n\nબુકિંગ ID: {bookingId}\n\nઆવતીકાલે સવારે 7-9 વાગ્યે આવીશું.",
    preparationTips: "\n\nતૈયારી:\n• 8-12 કલાક ઉપવાસ કરો\n• પુષ્કળ પાણી પીઓ\n• ID પ્રૂફ લાવો\n\nPathLab18 પસંદ કરવા બદલ આભાર!",

    changeOptions: ['ટેસ્ટ બદલો', 'તારીખ બદલો', 'સ્થળ બદલો'],

    searchHelp: "યોગ્ય ટેસ્ટ શોધવામાં મદદ કરીશ!",
    searchOptions: ['શ્રેણી પ્રમાણે', 'લોકપ્રિય', 'સંપૂર્ણ શરીર ચેકઅપ'],
    foundTests: "{category} ટેસ્ટ મળ્યા:",

    test: 'ટેસ્ટ',
    price: 'કિંમત',
    location: 'સ્થળ',
    date: 'તારીખ',
    discount: '{percent}% છૂટ!',
    bookNow: 'હમણાં બુક કરો',
    popular: 'લોકપ્રિય',
    sameDayReports: 'એ જ દિવસે રિપોર્ટ',
    homeCollection: 'ઘરે સેમ્પલ કલેક્શન ઉપલબ્ધ',
    inputPlaceholder: 'મેસેજ અથવા ટેસ્ટનું નામ ટાઇપ કરો...',
  },
};

export function t(lang: Language, key: keyof TranslationKeys): string | string[] {
  return translations[lang][key];
}

export function formatMessage(
  template: string,
  params: Record<string, string | number>
): string {
  let result = template;
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
  });
  return result;
}
