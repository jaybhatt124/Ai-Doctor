// ==========================================
//   AI Doctor - Health Data
// ==========================================

const healthData = {

  illnesses: [
    {
      id: 1, name: "Common Cold", category: "respiratory",
      symptoms: ["Runny nose", "Sore throat", "Sneezing", "Mild fever", "Cough"],
      causes: "Viral infection (rhinovirus most common)",
      treatment: "Rest, fluids, OTC cold medicines. Recover in 7–10 days.",
      prevention: "Wash hands frequently, avoid close contact with infected people.",
      severity: "mild", emoji: "🤧"
    },
    {
      id: 2, name: "Influenza (Flu)", category: "respiratory",
      symptoms: ["High fever", "Body aches", "Fatigue", "Cough", "Headache"],
      causes: "Influenza A or B virus",
      treatment: "Antiviral drugs (if early), rest, fluids, fever reducers.",
      prevention: "Annual flu vaccine, good hygiene.",
      severity: "moderate", emoji: "🤒"
    },
    {
      id: 3, name: "Diabetes (Type 2)", category: "metabolic",
      symptoms: ["Frequent urination", "Excessive thirst", "Fatigue", "Blurred vision", "Slow healing"],
      causes: "Insulin resistance, obesity, genetics, sedentary lifestyle",
      treatment: "Lifestyle changes, oral medications, insulin therapy.",
      prevention: "Healthy weight, regular exercise, balanced diet.",
      severity: "chronic", emoji: "💉"
    },
    {
      id: 4, name: "Hypertension", category: "cardiovascular",
      symptoms: ["Usually no symptoms", "Headache", "Shortness of breath", "Dizziness"],
      causes: "Genetics, high salt diet, stress, obesity, sedentary lifestyle",
      treatment: "Antihypertensives, DASH diet, exercise, reduce salt intake.",
      prevention: "Regular BP monitoring, healthy lifestyle.",
      severity: "chronic", emoji: "❤️"
    },
    {
      id: 5, name: "Dengue Fever", category: "viral",
      symptoms: ["High fever", "Severe headache", "Eye pain", "Joint pain", "Rash"],
      causes: "Dengue virus spread by Aedes mosquitoes",
      treatment: "Supportive care — fluids, paracetamol. No specific antiviral.",
      prevention: "Mosquito control, repellents, avoid stagnant water.",
      severity: "moderate", emoji: "🦟"
    },
    {
      id: 6, name: "Migraine", category: "neurological",
      symptoms: ["Throbbing headache", "Nausea", "Sensitivity to light", "Aura", "Vomiting"],
      causes: "Genetics, hormonal changes, triggers (stress, food, light)",
      treatment: "Triptans, NSAIDs, rest in dark quiet room.",
      prevention: "Identify and avoid triggers, preventive medications.",
      severity: "moderate", emoji: "🧠"
    },
    {
      id: 7, name: "Asthma", category: "respiratory",
      symptoms: ["Wheezing", "Chest tightness", "Shortness of breath", "Cough (night/morning)"],
      causes: "Allergies, pollution, genetics, respiratory infections",
      treatment: "Inhalers (bronchodilators), corticosteroids, avoid triggers.",
      prevention: "Avoid allergens, monitor air quality, use action plan.",
      severity: "chronic", emoji: "💨"
    },
    {
      id: 8, name: "Food Poisoning", category: "digestive",
      symptoms: ["Nausea", "Vomiting", "Diarrhea", "Stomach cramps", "Fever"],
      causes: "Bacteria (Salmonella, E. coli), viruses, contaminated food",
      treatment: "Rehydration (ORS), rest. Antibiotics only if bacterial.",
      prevention: "Proper food storage, cooking, and hand hygiene.",
      severity: "mild", emoji: "🍽️"
    },
    {
      id: 9, name: "Malaria", category: "parasitic",
      symptoms: ["Cyclic fever", "Chills", "Sweating", "Headache", "Vomiting", "Anaemia"],
      causes: "Plasmodium parasite spread by female Anopheles mosquitoes",
      treatment: "Antimalarial drugs (chloroquine, artemisinin-based)",
      prevention: "Mosquito nets, repellents, prophylactic medications.",
      severity: "severe", emoji: "🦟"
    },
    {
      id: 10, name: "Anxiety Disorder", category: "mental",
      symptoms: ["Excessive worry", "Restlessness", "Rapid heartbeat", "Insomnia", "Trembling"],
      causes: "Stress, genetics, brain chemistry, trauma",
      treatment: "CBT therapy, medication (SSRIs), mindfulness, exercise.",
      prevention: "Stress management, good sleep, social support.",
      severity: "moderate", emoji: "😰"
    },
    {
      id: 11, name: "Eczema", category: "skin",
      symptoms: ["Itchy skin", "Red rash", "Dry skin", "Thickened skin", "Blisters"],
      causes: "Genetics, immune dysfunction, environmental triggers",
      treatment: "Moisturizers, topical corticosteroids, antihistamines.",
      prevention: "Avoid triggers, gentle skincare, keep skin moisturized.",
      severity: "mild", emoji: "🩹"
    },
    {
      id: 12, name: "COVID-19", category: "viral",
      symptoms: ["Fever", "Cough", "Breathlessness", "Loss of smell/taste", "Fatigue"],
      causes: "SARS-CoV-2 coronavirus",
      treatment: "Supportive care, antivirals (Paxlovid) for high-risk, oxygen therapy.",
      prevention: "Vaccination, masks, hand hygiene, ventilation.",
      severity: "moderate", emoji: "🦠"
    }
  ],

  healthTips: [
    { id: 1, category: "nutrition",  title: "Eat a Rainbow",            text: "Consume fruits and vegetables of different colors daily. Each color provides unique vitamins, minerals, and antioxidants your body needs." },
    { id: 2, category: "fitness",    title: "30 Minutes Daily",          text: "Walk, jog, cycle, or swim for at least 30 minutes a day. Regular physical activity reduces the risk of heart disease, diabetes, and depression." },
    { id: 3, category: "sleep",      title: "Sleep 7–9 Hours",           text: "Quality sleep repairs tissues, consolidates memory, and regulates hormones. Maintain a consistent sleep schedule even on weekends." },
    { id: 4, category: "hydration",  title: "Drink 8 Glasses of Water",  text: "Staying hydrated supports kidney function, digestion, and mental clarity. Your urine should be light yellow — a natural hydration indicator." },
    { id: 5, category: "mental",     title: "Practice Mindfulness",      text: "10 minutes of meditation or deep breathing daily can reduce cortisol, lower blood pressure, and improve emotional regulation." },
    { id: 6, category: "nutrition",  title: "Reduce Sugar Intake",       text: "Limit added sugars to under 25g/day. Excess sugar leads to weight gain, tooth decay, and increased risk of type 2 diabetes." },
    { id: 7, category: "hygiene",    title: "Wash Hands Properly",       text: "Wash hands for 20 seconds with soap — before eating and after using the restroom. This prevents 80% of common infections." },
    { id: 8, category: "fitness",    title: "Reduce Sitting Time",       text: "Break up sitting every hour with a 5-minute walk or stretch. Prolonged sitting is linked to obesity, back pain, and cardiovascular risk." },
    { id: 9, category: "mental",     title: "Stay Connected",            text: "Social relationships protect mental health. Schedule regular time with friends or family — even brief phone calls help reduce loneliness." },
    { id: 10,category: "health",     title: "Regular Health Checkups",   text: "Annual screenings catch issues early. Monitor your blood pressure, blood sugar, cholesterol, and BMI every year." }
  ],

  symptomChecker: {
    "headache":       ["Common Cold", "Migraine", "Hypertension", "Influenza", "Dengue Fever"],
    "fever":          ["Influenza", "Dengue Fever", "Malaria", "COVID-19", "Food Poisoning"],
    "cough":          ["Common Cold", "Influenza", "Asthma", "COVID-19"],
    "fatigue":        ["Diabetes (Type 2)", "Influenza", "Malaria", "COVID-19", "Anxiety Disorder"],
    "rash":           ["Dengue Fever", "Eczema", "COVID-19"],
    "nausea":         ["Food Poisoning", "Migraine", "Malaria"],
    "wheezing":       ["Asthma"],
    "thirst":         ["Diabetes (Type 2)"],
    "anxiety":        ["Anxiety Disorder"],
    "chest":          ["Hypertension", "Asthma", "COVID-19"],
    "diarrhea":       ["Food Poisoning", "Malaria"],
    "vomiting":       ["Food Poisoning", "Migraine", "Malaria"],
    "itchy":          ["Eczema"],
    "breathlessness": ["Asthma", "COVID-19", "Hypertension"],
    "joint":          ["Dengue Fever", "Influenza"],
    "dizziness":      ["Hypertension", "Migraine", "Malaria"],
    "sneezing":       ["Common Cold"],
    "insomnia":       ["Anxiety Disorder"],
    "blurred":        ["Diabetes (Type 2)", "Hypertension"],
    "smell":          ["COVID-19"],
    "taste":          ["COVID-19"],
    "chills":         ["Malaria", "Influenza", "Dengue Fever"],
    "sweating":       ["Malaria", "Diabetes (Type 2)"],
  }
};
