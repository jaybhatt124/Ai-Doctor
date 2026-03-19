/* ====================================================
   AI DOCTOR ANALYSIS — DATA STORE (data.js)
   localStorage-based. Admin edits show to all users.
   Each illness is STRICTLY linked to its body part.
   ==================================================== */

const ADMIN_EMAIL    = 'admin@gmail.com';
const ADMIN_PASSWORD = 'admin123';

/* ─── DEFAULT SEED DATA ─── */
const DEFAULT_ILLNESSES = [
  /* ── HEAD ── */
  { id:1, bodyPart:'head', name:'Migraine',
    description:'A neurological condition causing severe throbbing pain usually on one side of the head, often accompanied by nausea and sensitivity to light and sound.',
    symptoms:['Severe throbbing pain on one side','Nausea and vomiting','Sensitivity to light (photophobia)','Sensitivity to sound (phonophobia)','Visual aura before attack','Dizziness and fatigue'],
    careTips:['Rest in a dark, quiet room','Apply cold compress to forehead','Stay well hydrated','Avoid known triggers (caffeine, alcohol, stress)','Maintain regular sleep schedule'],
    medicines:[{name:'Sumatriptan',info:'Triptan drug that narrows blood vessels. Prescription required.',otc:false},{name:'Ibuprofen',info:'400–600 mg OTC at onset for mild migraines.',otc:true}],
    severity:'moderate' },

  { id:2, bodyPart:'head', name:'Tension Headache',
    description:'The most common headache type — dull, aching pain with a feeling of pressure or tightness around the forehead or back of the head.',
    symptoms:['Dull constant aching pain','Pressure around forehead like a band','Tenderness in scalp and neck','Pain behind the eyes'],
    careTips:['Stay hydrated','Reduce screen time','Gentle neck stretches','Practice relaxation or deep breathing','Regular sleep routine'],
    medicines:[{name:'Paracetamol (Acetaminophen)',info:'500–1000 mg every 4–6 hours. Max 4 g/day.',otc:true},{name:'Aspirin',info:'300–600 mg with food for adults.',otc:true}],
    severity:'mild' },

  { id:3, bodyPart:'head', name:'Sinusitis',
    description:'Inflammation of the sinuses (air-filled cavities in the skull) often caused by viral, bacterial, or allergic triggers.',
    symptoms:['Facial pain and pressure around nose/eyes','Nasal congestion and blocked nose','Thick yellow or green nasal discharge','Reduced sense of smell','Headache and low-grade fever'],
    careTips:['Saline nasal rinse twice daily','Warm compress on face','Stay well hydrated','Use a humidifier','Sleep with head elevated'],
    medicines:[{name:'Amoxicillin',info:'Antibiotic for bacterial sinusitis — prescription required.',otc:false},{name:'Pseudoephedrine',info:'Decongestant nasal spray — short-term use only.',otc:true}],
    severity:'mild' },

  /* ── NECK ── */
  { id:4, bodyPart:'neck', name:'Cervical Spondylosis',
    description:'Age-related wear and tear of the cervical spine (neck vertebrae and discs), causing chronic neck pain and stiffness.',
    symptoms:['Chronic neck pain and stiffness','Headaches starting at the back of neck','Muscle spasm','Numbness or tingling in arms/shoulders','Grinding sensation when moving head'],
    careTips:['Maintain good posture at desk','Use ergonomic pillow','Gentle neck rotation exercises','Apply heat for 15 min','Limit screen time and phone use'],
    medicines:[{name:'Diclofenac Gel',info:'Topical NSAID applied to neck 3–4 times daily.',otc:false},{name:'Naproxen',info:'220 mg twice daily with food for pain relief.',otc:true}],
    severity:'moderate' },

  { id:5, bodyPart:'neck', name:'Whiplash / Neck Strain',
    description:'Muscle and ligament injury from sudden jerking of the neck, commonly from car accidents, falls, or sports.',
    symptoms:['Neck pain and stiffness','Tenderness along neck muscles','Headache from base of skull','Reduced range of motion','Dizziness','Shoulder pain'],
    careTips:['Apply ice pack first 48 hours then switch to heat','Rest but avoid complete immobility','Gentle range-of-motion exercises','Use a rolled towel as neck support','Physical therapy'],
    medicines:[{name:'Ibuprofen',info:'400 mg every 6–8 hours with food to reduce inflammation.',otc:true}],
    severity:'mild' },

  /* ── SHOULDERS ── */
  { id:6, bodyPart:'shoulders', name:'Rotator Cuff Injury',
    description:'Damage to the rotator cuff muscles or tendons around the shoulder joint, often from overuse, repetitive lifting, or sports injury.',
    symptoms:['Dull ache deep in the shoulder','Arm weakness, difficulty lifting','Difficulty reaching behind back','Disturbed sleep on the affected side','Clicking or popping sounds'],
    careTips:['Rest from overhead activities','Ice then heat (20 min each)','Physical therapy strengthening exercises','Avoid sleeping on affected shoulder','Use a shoulder support brace'],
    medicines:[{name:'Naproxen',info:'220–440 mg every 8–12 hours with food.',otc:true},{name:'Corticosteroid Injection',info:'Prescribed for severe cases by a doctor only.',otc:false}],
    severity:'moderate' },

  { id:7, bodyPart:'shoulders', name:'Frozen Shoulder (Adhesive Capsulitis)',
    description:'Progressive shoulder stiffness and pain caused by inflammation and thickening of the shoulder joint capsule. Recovery takes 1–3 years.',
    symptoms:['Gradually increasing shoulder stiffness','Dull or aching pain','Pain worse at night','Severely limited range of motion in all directions','Difficulty dressing or reaching'],
    careTips:['Daily gentle stretching is essential','Physical therapy — key to recovery','Apply heat before stretching exercises','Ice after exercise to reduce soreness','Be patient — it takes time'],
    medicines:[{name:'Ibuprofen',info:'400–600 mg with food to reduce inflammation during freezing phase.',otc:true}],
    severity:'moderate' },

  /* ── CHEST ── */
  { id:8, bodyPart:'chest', name:'Costochondritis',
    description:'Inflammation of the cartilage connecting the ribs to the breastbone (sternum), causing chest wall pain that can mimic a heart attack.',
    symptoms:['Sharp chest pain along breastbone','Tenderness when pressing on ribs','Pain worsens with deep breathing or coughing','Pain improves with rest'],
    careTips:['Rest from physical exertion','Apply ice or heat to chest','Avoid heavy lifting','Slow deep breathing exercises'],
    medicines:[{name:'Ibuprofen',info:'400 mg with food every 8 hours to reduce rib inflammation.',otc:true}],
    severity:'mild' },

  { id:9, bodyPart:'chest', name:'Acid Reflux (GERD)',
    description:'Stomach acid repeatedly flows back into the oesophagus, causing a burning chest pain (heartburn) and other symptoms.',
    symptoms:['Burning sensation in chest after meals','Sour or acid taste in the mouth','Regurgitation of food','Chronic cough or hoarse voice','Difficulty swallowing'],
    careTips:['Eat smaller and more frequent meals','Do not lie down within 3 hours of eating','Elevate the head of your bed by 15 cm','Avoid spicy, fatty foods, alcohol, caffeine','Maintain a healthy body weight'],
    medicines:[{name:'Omeprazole',info:'20–40 mg once daily before breakfast (OTC available).',otc:true},{name:'Antacids',info:'Gaviscon, Tums etc. — fast relief after meals.',otc:true}],
    severity:'moderate' },

  /* ── STOMACH ── */
  { id:10, bodyPart:'stomach', name:'Gastritis',
    description:'Inflammation of the stomach lining caused by H. pylori infection, overuse of NSAIDs, excessive alcohol, or stress.',
    symptoms:['Burning or gnawing stomach pain','Nausea and vomiting','Feeling bloated and full','Loss of appetite','Indigestion'],
    careTips:['Eat smaller meals more frequently','Avoid spicy, fatty, or acidic foods','Reduce alcohol and caffeine','Manage stress with relaxation techniques','Avoid aspirin and ibuprofen'],
    medicines:[{name:'Omeprazole',info:'20 mg once daily before meals. Reduces acid production.',otc:true},{name:'Antacids',info:'For immediate relief after meals.',otc:true}],
    severity:'moderate' },

  { id:11, bodyPart:'stomach', name:'Irritable Bowel Syndrome (IBS)',
    description:'A chronic functional gut disorder causing recurrent abdominal pain, bloating, and altered bowel habits without any structural disease.',
    symptoms:['Crampy abdominal pain relieved by passing stool','Bloating and trapped wind','Diarrhoea or constipation (or alternating)','Urgency to use the toilet','Mucus in stool'],
    careTips:['Keep a food diary to identify triggers','Eat regular meals and avoid large portions','Increase dietary fibre gradually','Stay well hydrated','Regular moderate exercise reduces symptoms'],
    medicines:[{name:'Mebeverine',info:'135 mg before meals to relax bowel spasm — prescription.',otc:false},{name:'Peppermint oil capsules',info:'Reduces gut spasm naturally — available OTC.',otc:true}],
    severity:'mild' },

  /* ── ARMS ── */
  { id:12, bodyPart:'arms', name:'Tennis Elbow (Lateral Epicondylitis)',
    description:'Overuse injury causing micro-tears in the tendons attached to the outer elbow, common in anyone performing repetitive arm movements.',
    symptoms:['Pain on the outer side of the elbow','Weak grip strength','Pain when lifting objects or shaking hands','Forearm soreness and stiffness','Pain worsens with twisting motions'],
    careTips:['Rest from activities that cause pain','Ice the elbow for 20 minutes several times daily','Use a tennis-elbow brace or strap','Eccentric strengthening exercises (physiotherapy)','Gradual return to activity'],
    medicines:[{name:'Ibuprofen Gel',info:'Apply topically to the elbow 3–4 times daily.',otc:true},{name:'Naproxen oral',info:'220–440 mg with food for more severe pain.',otc:true}],
    severity:'mild' },

  { id:13, bodyPart:'arms', name:'Carpal Tunnel Syndrome',
    description:'Compression of the median nerve through the wrist (carpal tunnel), causing pain, numbness, and weakness in the hand and arm.',
    symptoms:['Numbness or tingling in thumb, index, and middle fingers','Hand weakness and clumsiness','Pain travelling up the forearm','Symptoms worse at night','Dropping objects frequently'],
    careTips:['Wear a wrist splint at night','Take frequent breaks from typing or repetitive tasks','Ice the wrist for 15 minutes','Ergonomic keyboard and mouse setup','Gentle wrist stretching'],
    medicines:[{name:'Ibuprofen',info:'400 mg with food to reduce nerve tunnel inflammation.',otc:true}],
    severity:'moderate' },

  /* ── BACK ── */
  { id:14, bodyPart:'back', name:'Lower Back Pain',
    description:'Pain in the lumbar region of the spine — one of the most common medical complaints worldwide, caused by muscle strain, poor posture, or disc problems.',
    symptoms:['Dull aching pain in lower back','Sharp or shooting pain on bending','Pain radiating down the leg (sciatica)','Limited flexibility and difficulty standing straight','Stiffness after sitting for long periods'],
    careTips:['Stay active — avoid long bed rest','Apply ice 48 hrs then switch to heat','Core-strengthening exercises (e.g. pilates)','Practice good sitting posture','Use proper lifting technique — bend at knees'],
    medicines:[{name:'Diclofenac',info:'50 mg twice daily with food — prescription.',otc:false},{name:'Paracetamol',info:'1000 mg every 6 hours for mild to moderate pain.',otc:true}],
    severity:'moderate' },

  { id:15, bodyPart:'back', name:'Herniated / Slipped Disc',
    description:'The gel-like centre of a spinal disc bulges out through the tough outer ring, pressing on nearby nerves and causing intense pain.',
    symptoms:['Radiating pain down one leg (sciatica)','Numbness or tingling in leg or foot','Muscle weakness in leg','Pain worsens with sitting, coughing, or sneezing','Back pain that improves when walking'],
    careTips:['Stay gently active — short walks','Physical therapy is the cornerstone of treatment','Ice and heat alternately','Avoid heavy lifting or bending forward','Core strengthening and stretching exercises'],
    medicines:[{name:'Meloxicam',info:'7.5–15 mg once daily with food — prescription.',otc:false},{name:'Paracetamol',info:'For baseline pain control between doses.',otc:true}],
    severity:'severe' },

  /* ── KNEES ── */
  { id:16, bodyPart:'knees', name:'Knee Osteoarthritis',
    description:'Progressive degeneration of knee cartilage causing pain, swelling, and reduced mobility — most common in adults over 50.',
    symptoms:['Knee pain during or after movement','Morning stiffness lasting more than 30 minutes','Swelling around the knee joint','Grating, crunching, or popping sensation','Reduced range of motion'],
    careTips:['Maintain a healthy body weight','Low-impact exercise — swimming, cycling','Physical therapy and quadriceps strengthening','Apply ice for swelling, heat for stiffness','Use knee support brace if helpful'],
    medicines:[{name:'Naproxen',info:'220–440 mg every 8–12 hours with food.',otc:true},{name:'Glucosamine + Chondroitin',info:'Supplements for joint health — long-term use.',otc:true}],
    severity:'moderate' },

  { id:17, bodyPart:'knees', name:'Knee Ligament Sprain',
    description:'Overstretching or tearing of one or more of the four main knee ligaments, commonly from sports, sudden twisting, or falls.',
    symptoms:['Immediate sharp knee pain at the time of injury','Swelling within a few hours','Bruising around the knee','Feeling of instability or giving way','Limited range of motion'],
    careTips:['RICE method: Rest, Ice, Compression, Elevation','Use crutches if weight-bearing is painful','Gradual rehabilitation with physiotherapy','Avoid high-impact activity until fully healed'],
    medicines:[{name:'Ibuprofen',info:'400–600 mg every 6–8 hours with food to reduce swelling.',otc:true}],
    severity:'moderate' },

  /* ── LEGS ── */
  { id:18, bodyPart:'legs', name:'Varicose Veins',
    description:'Enlarged, twisted, and bulging superficial veins in the legs caused by faulty vein valves that allow blood to pool.',
    symptoms:['Visible twisted, bulging dark-blue veins','Heavy, aching, or tired legs','Swelling of ankles and feet by evening','Itching, burning, or throbbing around veins','Cramping in calves at night'],
    careTips:['Exercise regularly to improve circulation','Avoid prolonged standing or sitting','Elevate legs above heart level when resting','Wear medical-grade compression stockings','Maintain a healthy weight'],
    medicines:[{name:'Horse Chestnut Seed Extract',info:'300 mg twice daily — reduces swelling and heaviness.',otc:true}],
    severity:'mild' },

  { id:19, bodyPart:'legs', name:'Shin Splints (Medial Tibial Stress Syndrome)',
    description:'Pain along the inner edge of the shinbone from overloading the lower leg muscles, common in runners and athletes.',
    symptoms:['Dull aching pain along inner shin during exercise','Tenderness when pressing the shin','Mild swelling of the lower leg','Pain that eases with rest initially','Pain becomes constant in severe cases'],
    careTips:['Rest from high-impact activities for 2–4 weeks','Apply ice after activity for 15–20 minutes','Wear well-cushioned, supportive footwear','Gradually increase exercise intensity (10% rule)','Stretch calves and tibialis anterior before and after exercise'],
    medicines:[{name:'Ibuprofen',info:'400 mg with food every 6–8 hours for inflammation.',otc:true}],
    severity:'mild' },

  /* ── FEET ── */
  { id:20, bodyPart:'feet', name:'Plantar Fasciitis',
    description:'Inflammation of the plantar fascia — the thick band of tissue running across the bottom of the foot and connecting the heel to the toes.',
    symptoms:['Sharp stabbing heel pain on first steps in the morning','Pain after standing or walking for long periods','Stiffness in the arch of the foot','Tenderness along the bottom of the heel','Pain after (not during) exercise'],
    careTips:['Stretch the foot and calf before getting out of bed','Wear supportive shoes with good arch support','Use cushioned heel insoles or orthotics','Ice the heel for 15 minutes after activity','Avoid barefoot walking on hard surfaces'],
    medicines:[{name:'Ibuprofen',info:'400–600 mg with food three times daily to reduce inflammation.',otc:true}],
    severity:'mild' },

  { id:21, bodyPart:'feet', name:'Gout',
    description:'A form of inflammatory arthritis where uric acid crystals deposit in joints — most commonly the big toe — causing sudden severe attacks of pain and swelling.',
    symptoms:['Sudden, intense pain in the big toe or other joints','Extreme swelling, redness, and warmth','Joint feels hot to touch','Pain is severe even to light touch','Attack typically peaks within 12–24 hours'],
    careTips:['Drink 2–3 litres of water daily','Avoid alcohol especially beer and spirits','Limit red meat, organ meats, and seafood','Maintain healthy body weight','Elevate the affected foot during an attack'],
    medicines:[{name:'Colchicine',info:'0.6–1.2 mg at onset then 0.6 mg one hour later — prescription.',otc:false},{name:'Ibuprofen',info:'High dose (600–800 mg) at first sign of attack with food.',otc:true}],
    severity:'severe' }
];

const DEFAULT_DOCTORS = [
  { id:1, bodyPart:'head',      name:'Dr. Sarah Johnson',   spec:'Neurologist',         hospital:'City Medical Center',        phone:'+1-555-0101', email:'dr.johnson@citymed.com',    exp:15 },
  { id:2, bodyPart:'head',      name:'Dr. Michael Chen',    spec:'Headache Specialist', hospital:'Neurology Associates',       phone:'+1-555-0102', email:'dr.chen@neuroassoc.com',    exp:12 },
  { id:3, bodyPart:'neck',      name:'Dr. Patricia Williams',spec:'Orthopedic Surgeon', hospital:'Spine & Joint Center',       phone:'+1-555-0201', email:'dr.williams@spinecenter.com',exp:18 },
  { id:4, bodyPart:'shoulders', name:'Dr. Daniel Garcia',   spec:'Sports Orthopaedics', hospital:'Sports Ortho Center',        phone:'+1-555-1001', email:'dr.garcia@sportsortho.com', exp:14 },
  { id:5, bodyPart:'chest',     name:'Dr. Robert Martinez', spec:'Cardiologist',        hospital:'Heart & Vascular Institute', phone:'+1-555-0301', email:'dr.martinez@heartinst.com', exp:20 },
  { id:6, bodyPart:'chest',     name:'Dr. Emily Davis',     spec:'Pulmonologist',       hospital:'Respiratory Care Center',    phone:'+1-555-0302', email:'dr.davis@respcare.com',     exp:10 },
  { id:7, bodyPart:'stomach',   name:'Dr. James Wilson',    spec:'Gastroenterologist',  hospital:'Digestive Health Clinic',    phone:'+1-555-0401', email:'dr.wilson@digestive.com',   exp:14 },
  { id:8, bodyPart:'arms',      name:'Dr. Lisa Anderson',   spec:'Sports Medicine',     hospital:'Athletic Health Center',     phone:'+1-555-0501', email:'dr.anderson@athletic.com',  exp:9  },
  { id:9, bodyPart:'back',      name:'Dr. Nancy Thompson',  spec:'Spine Specialist',    hospital:'Back & Spine Clinic',        phone:'+1-555-0901', email:'dr.thompson@spineclinic.com',exp:17 },
  { id:10,bodyPart:'knees',     name:'Dr. Thomas Brown',    spec:'Rheumatologist',      hospital:'Arthritis & Joint Clinic',   phone:'+1-555-0601', email:'dr.brown@arthritis.com',    exp:16 },
  { id:11,bodyPart:'legs',      name:'Dr. Amanda Taylor',   spec:'Vascular Surgeon',    hospital:'Vascular Care Institute',    phone:'+1-555-0701', email:'dr.taylor@vascularcare.com',exp:13 },
  { id:12,bodyPart:'feet',      name:'Dr. Kevin Harris',    spec:'Podiatrist',          hospital:'Foot & Ankle Specialists',   phone:'+1-555-0801', email:'dr.harris@footankle.com',   exp:11 }
];

const COMMON_ILLNESSES = [
  { id:'c1', name:'Fever', icon:'🌡️',
    description:'Fever is a temporary increase in body temperature, usually caused by an infection. It is the body\'s natural defence mechanism against pathogens.',
    symptoms:['Body temperature above 38°C (100.4°F)','Chills and shivering','Sweating','Headache and muscle aches','Weakness and fatigue','Loss of appetite','Dehydration'],
    careTips:['Rest and avoid exertion','Drink plenty of fluids (water, clear broths, juice)','Apply cool damp cloth to forehead','Wear light clothing and keep room cool','Monitor temperature regularly','Seek doctor if above 39.5°C or lasting over 3 days'],
    medicines:[{name:'Paracetamol (Acetaminophen)',info:'500–1000 mg every 4–6 hours. Max 4 g/day.',otc:true},{name:'Ibuprofen',info:'400 mg every 6–8 hours with food.',otc:true}]
  },
  { id:'c2', name:'Common Cold', icon:'🤧',
    description:'A viral infection of the upper respiratory tract, most commonly caused by rhinoviruses. It usually resolves on its own within 7–10 days.',
    symptoms:['Runny or blocked nose','Sneezing frequently','Sore throat','Mild headache','Low-grade fever','Mild cough','Body aches and tiredness'],
    careTips:['Get plenty of rest','Drink warm fluids — honey and lemon tea','Use saline nasal drops or rinse','Gargle warm salt water for sore throat','Avoid close contact with others','Wash hands frequently'],
    medicines:[{name:'Paracetamol',info:'For fever and aches — 500–1000 mg every 4–6 hours.',otc:true},{name:'Decongestant Spray',info:'Xylometazoline nasal spray — max 3 days use.',otc:true}]
  },
  { id:'c3', name:'Cough', icon:'😮‍💨',
    description:'Coughing is a reflex action to clear the airways of mucus, irritants, or foreign particles. It can be dry (no mucus) or productive (with mucus).',
    symptoms:['Persistent dry or wet cough','Tickling sensation in throat','Sore or scratchy throat','Chest tightness','Shortness of breath in severe cases','Runny nose if due to cold','Fever if due to infection'],
    careTips:['Drink warm fluids — honey, ginger tea','Avoid cold or dusty environments','Use a humidifier in your room','Steam inhalation with eucalyptus oil','Avoid irritants like smoke','Rest your voice'],
    medicines:[{name:'Honey + Ginger',info:'Natural remedy — 1 tbsp honey with ginger juice in warm water.',otc:true},{name:'Dextromethorphan syrup',info:'Cough suppressant — follow dosage on label.',otc:true}]
  },
  { id:'c4', name:'Stomach Pain', icon:'🫄',
    description:'Abdominal pain can originate from any organ in the abdomen. Common causes include indigestion, gas, constipation, gastritis, or infections.',
    symptoms:['Cramping or sharp abdominal pain','Bloating and feeling of fullness','Nausea with or without vomiting','Diarrhoea or constipation','Heartburn or acid taste','Loss of appetite','Tenderness when pressing abdomen'],
    careTips:['Apply warm compress or hot water bottle to stomach','Eat bland foods — toast, rice, bananas, boiled potatoes','Stay hydrated with small frequent sips','Avoid fatty, spicy, or heavy food','Rest and reduce stress','Seek help if pain is severe or persistent'],
    medicines:[{name:'Antacids',info:'Tums, Gaviscon — for acid-related pain after meals.',otc:true},{name:'Buscopan (Hyoscine)',info:'Relieves cramping and spasm — 10–20 mg as needed.',otc:true}]
  },
  { id:'c5', name:'Headache', icon:'🤕',
    description:'Headache is pain anywhere in the head or neck region. It is one of the most common health complaints and can be caused by tension, dehydration, sinus issues, or poor posture.',
    symptoms:['Dull or throbbing pain in head','Pressure around forehead or temples','Pain at back of head or neck','Sensitivity to light or noise','Nausea in severe cases','Eye strain or blurry vision','Neck stiffness'],
    careTips:['Drink a full glass of water immediately','Rest in a quiet, darkened room','Apply cold or warm compress','Gentle scalp and temple massage','Correct your posture if at a desk','Reduce screen brightness and blue light'],
    medicines:[{name:'Paracetamol',info:'500–1000 mg at onset. Most effective when taken early.',otc:true},{name:'Ibuprofen',info:'400 mg with food — useful for tension or sinus headache.',otc:true}]
  },
  { id:'c6', name:'Weakness / Fatigue', icon:'😔',
    description:'General weakness or fatigue is a feeling of tiredness, lack of energy, or reduced physical or mental endurance. Often caused by poor sleep, anaemia, infection, or nutritional deficiency.',
    symptoms:['Persistent tiredness despite rest','Lack of energy or motivation','Muscle weakness','Difficulty concentrating','Dizziness on standing','Pale skin (if anaemia)','Shortness of breath with mild exertion'],
    careTips:['Prioritise 7–9 hours of quality sleep','Eat iron-rich foods — spinach, lentils, red meat','Stay hydrated throughout the day','Light exercise improves energy levels','Reduce stress and overwork','Check for vitamin B12 and iron deficiency'],
    medicines:[{name:'Iron Supplements',info:'Ferrous sulphate 200 mg once daily if iron-deficient.',otc:true},{name:'Vitamin B12 / Multivitamin',info:'Daily supplement if diet is deficient.',otc:true}]
  },
  { id:'c7', name:'Vomiting', icon:'🤢',
    description:'Vomiting is the forceful expulsion of stomach contents and is usually a symptom of another condition such as gastroenteritis, food poisoning, motion sickness, or pregnancy.',
    symptoms:['Nausea before vomiting','Repeated vomiting episodes','Stomach cramps','Excessive saliva production','Sweating and pale skin','Dizziness','Weakness after episodes'],
    careTips:['Stop eating solid food temporarily','Sip small amounts of clear fluids frequently','Try ginger tea or ginger tablets for nausea','Rest lying down with head elevated','Slowly reintroduce bland foods (BRAT diet)','Seek help if vomiting blood or lasting over 24 hours'],
    medicines:[{name:'Domperidone',info:'10 mg before meals — antiemetic. Prescription needed.',otc:false},{name:'ORS (Oral Rehydration Salts)',info:'Dissolve sachet in water — prevents dehydration.',otc:true}]
  },
  { id:'c8', name:'Diarrhoea', icon:'🚽',
    description:'Frequent, loose, or watery stools — usually caused by viral gastroenteritis, food poisoning, bacterial infection, or food intolerance. Most cases resolve within 2–3 days.',
    symptoms:['Frequent watery or loose stools','Abdominal cramping and pain','Urgency to use the toilet','Nausea or vomiting','Low-grade fever','Dehydration signs — dry mouth, dark urine','Weakness and fatigue'],
    careTips:['Drink plenty of fluids — ORS is ideal','Eat plain foods — rice, toast, bananas, boiled potatoes','Avoid dairy, fatty food, and high-fibre food temporarily','Wash hands thoroughly after toilet','Rest and avoid exertion','Seek help if lasting over 48 hrs or blood in stool'],
    medicines:[{name:'ORS (Oral Rehydration Salts)',info:'Most important — prevents dangerous dehydration. Take after every loose stool.',otc:true},{name:'Loperamide',info:'2 mg after each loose stool — max 8 mg/day. Not for children under 12.',otc:true}]
  }
];

/* ─── DATA ACCESS HELPERS ─── */
function getData(key, defaults) {
  try {
    const stored = localStorage.getItem('aid_' + key);
    return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(defaults));
  } catch(e) { return JSON.parse(JSON.stringify(defaults)); }
}
function saveData(key, value) {
  localStorage.setItem('aid_' + key, JSON.stringify(value));
}

function getIllnesses()   { return getData('illnesses', DEFAULT_ILLNESSES); }
function getDoctors()     { return getData('doctors',   DEFAULT_DOCTORS);   }
function saveIllnesses(d) { saveData('illnesses', d); }
function saveDoctors(d)   { saveData('doctors',   d); }

function getIllnessesByPart(part) {
  return getIllnesses().filter(i => i.bodyPart === part);
}
function getDoctorsByPart(part) {
  return getDoctors().filter(d => d.bodyPart === part);
}
function nextId(arr) {
  return arr.length ? Math.max(...arr.map(x => Number(x.id)||0)) + 1 : 1;
}

/* ─── ADMIN SESSION ─── */
function isAdminLoggedIn() {
  return sessionStorage.getItem('aid_admin') === 'yes';
}
function adminLogin(email, pass) {
  if (email === ADMIN_EMAIL && pass === ADMIN_PASSWORD) {
    sessionStorage.setItem('aid_admin', 'yes');
    return true;
  }
  return false;
}
function adminLogout() {
  sessionStorage.removeItem('aid_admin');
}

/* ─── SHARED UI HELPERS ─── */
function showToast(msg, type='info') {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3400);
}

function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function openModal(id)  { const m=document.getElementById(id); if(m){m.classList.add('open');} }
function closeModal(id) { const m=document.getElementById(id); if(m){m.classList.remove('open');} }

/* click outside modal to close */
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('open');
});

/* scroll reveal */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach((en,i) => {
      if (en.isIntersecting)
        setTimeout(() => en.target.classList.add('visible'), i * 100);
    });
  }, { threshold:0.1, rootMargin:'0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

/* hamburger */
function toggleMenu() {
  document.getElementById('main-nav').classList.toggle('open');
}

/* shared header/footer render */
function renderNav(activePage) {
  const pages = [
    ['index.html','Home'],
    ['about.html','About'],
    ['tips.html','Health Tips'],
    ['contact.html','Contact']
  ];
  return pages.map(([href, label]) =>
    `<a href="${href}" class="nav-link${label.toLowerCase().replace(' ','') === activePage ? ' active' : ''}">${label}</a>`
  ).join('');
}
