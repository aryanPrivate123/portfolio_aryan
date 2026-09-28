const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  // Standard Letter size: 612 x 792 points
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.06, 0.45, 0.65); // Teal-blue accent
  const darkColor = rgb(0.12, 0.15, 0.18);
  const mutedColor = rgb(0.35, 0.38, 0.42);

  let y = height - 45;
  const left = 48;
  const right = width - 48;

  // Title: ARYAN SHINDE
  page.drawText('ARYAN SHINDE', {
    x: left,
    y: y,
    size: 24,
    font: fontBold,
    color: primaryColor,
  });

  y -= 18;
  // Contact details
  const contactText = 'Pune, India 400067  |  +91 9004723743  |  shindearyan1911@gmail.com';
  page.drawText(contactText, {
    x: left,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: mutedColor,
  });

  y -= 18;

  function drawSectionHeader(title) {
    y -= 6;
    page.drawText(title.toUpperCase(), {
      x: left,
      y: y,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: left, y: y },
      end: { x: right, y: y },
      thickness: 1,
      color: primaryColor,
    });
    y -= 12;
  }

  // SUMMARY
  drawSectionHeader('Summary');
  const summaryLines = [
    'Third-year Computer Science Engineering student with experience in AI/ML, full-stack development, and',
    'hackathons. Skilled in developing web applications and applying machine learning techniques to solve real-world',
    'problems. Strong team player with experience in project management, collaborative development, and version control',
    'using Git. Passionate about building innovative, scalable, and practical technology solutions.'
  ];
  for (const line of summaryLines) {
    page.drawText(line, { x: left, y: y, size: 9, font: fontRegular, color: darkColor });
    y -= 12;
  }

  y -= 4;

  // SKILLS & PROFILES in two columns
  drawSectionHeader('Skills & Profiles');
  const col1X = left;
  const col2X = left + 190;
  const col3X = left + 350;

  const startYSkills = y;
  
  // Col 1: Technical Skills
  page.drawText('Technical Skills', { x: col1X, y: y, size: 9.5, font: fontBold, color: darkColor });
  let yCol1 = y - 13;
  const techSkills = ['Web development', 'Full-stack development', 'Machine learning techniques', 'Version control systems'];
  techSkills.forEach(item => {
    page.drawText(`•  ${item}`, { x: col1X, y: yCol1, size: 8.5, font: fontRegular, color: darkColor });
    yCol1 -= 11.5;
  });

  // Col 2: Professional Skills
  page.drawText('Core Competencies', { x: col2X, y: startYSkills, size: 9.5, font: fontBold, color: darkColor });
  let yCol2 = startYSkills - 13;
  const softSkills = ['Team management', 'Leadership skills', 'Critical thinking', 'Team collaboration'];
  softSkills.forEach(item => {
    page.drawText(`•  ${item}`, { x: col2X, y: yCol2, size: 8.5, font: fontRegular, color: darkColor });
    yCol2 -= 11.5;
  });

  // Col 3: Profiles
  page.drawText('Online Profiles', { x: col3X, y: startYSkills, size: 9.5, font: fontBold, color: darkColor });
  let yCol3 = startYSkills - 13;
  page.drawText('LinkedIn:', { x: col3X, y: yCol3, size: 8.5, font: fontBold, color: darkColor });
  yCol3 -= 10;
  page.drawText('linkedin.com/in/aryan-shinde-045441380', { x: col3X, y: yCol3, size: 7.5, font: fontRegular, color: primaryColor });
  yCol3 -= 12;
  page.drawText('GitHub:', { x: col3X, y: yCol3, size: 8.5, font: fontBold, color: darkColor });
  yCol3 -= 10;
  page.drawText('github.com/Eclipse1911', { x: col3X, y: yCol3, size: 7.5, font: fontRegular, color: primaryColor });

  y = Math.min(yCol1, yCol2, yCol3) - 6;

  // EDUCATION AND TRAINING
  drawSectionHeader('Education and Training');
  const eduItems = [
    { year: '2028', degree: 'Bachelor Of Technology: Computer Science Engineering', school: 'MIT World Peace University - Pune' },
    { year: '2024', degree: 'Junior College (HSC)', school: 'Pace Junior College - Kandivali, Mumbai' },
    { year: '2022', degree: 'High School (ICSE)', school: 'Oxford Public School - Mumbai' }
  ];

  eduItems.forEach(item => {
    page.drawText(item.year, { x: left, y: y, size: 9, font: fontBold, color: primaryColor });
    page.drawText(item.degree, { x: left + 50, y: y, size: 9, font: fontBold, color: darkColor });
    y -= 11.5;
    page.drawText(item.school, { x: left + 50, y: y, size: 8.5, font: fontOblique, color: mutedColor });
    y -= 13;
  });

  y -= 2;

  // PROJECTS
  drawSectionHeader('Projects');

  // SignBridge
  page.drawText('SignBridge', { x: left, y: y, size: 10, font: fontBold, color: darkColor });
  page.drawText(' | Python, ML, Computer Vision, ANN, MediaPipe, React', { x: left + 60, y: y, size: 8.5, font: fontOblique, color: mutedColor });
  y -= 12;
  const sbPoints = [
    'Developed a real-time Indian Sign Language (ISL) recognition system using MediaPipe hand landmarks and a Keras MLP model.',
    'Trained the MVP to recognize 35 static ISL classes (A-Z, 1–9) from camera input with 98.4% classification accuracy.',
    'Implemented wrist-relative landmark normalization creating a lightweight 42-feature spatial vector invariant to distance.',
    'Integrated AI-based sentence smoothing and multilingual speech synthesis (English, Hindi, and Marathi via Web Speech API).',
    'Engineered an interactive ISL Practice & Learn mode; built using React, Vite, Tailwind CSS, Flask, and TensorFlow/Keras.'
  ];
  sbPoints.forEach(pt => {
    page.drawText(`•  ${pt}`, { x: left + 8, y: y, size: 8, font: fontRegular, color: darkColor });
    y -= 10.5;
  });

  y -= 4;

  // FasalMitra
  page.drawText('FasalMitra', { x: left, y: y, size: 10, font: fontBold, color: darkColor });
  page.drawText(' | Python, Flask, MongoDB, Redis, ResNet Deep Learning', { x: left + 60, y: y, size: 8.5, font: fontOblique, color: mutedColor });
  y -= 12;
  const fmPoints = [
    'Architected an agricultural telemetry and diagnostic platform utilizing distributed microservices and ResNet models.',
    'Built performant Flask RESTful inference endpoints with MongoDB persistence and sub-millisecond Redis query caching.',
    'Integrated service routing and authentication through a secured Nginx API reverse-proxy gateway.'
  ];
  fmPoints.forEach(pt => {
    page.drawText(`•  ${pt}`, { x: left + 8, y: y, size: 8, font: fontRegular, color: darkColor });
    y -= 10.5;
  });

  y -= 4;

  // CareerCompass AI
  page.drawText('CareerCompass AI', { x: left, y: y, size: 10, font: fontBold, color: darkColor });
  page.drawText(' | TypeScript, Next.js, React, Firebase, Google Gemini API', { x: left + 105, y: y, size: 8.5, font: fontOblique, color: mutedColor });
  y -= 12;
  const ccPoints = [
    'Engineered an AI career roadmap platform generating personalized skill trajectories and milestones based on user goals.',
    'Integrated Google Gemini API via Genkit for guided career counseling and structured curriculum generation.',
    'Implemented Firebase Authentication and Firestore database for synchronized multi-device roadmap tracking.'
  ];
  ccPoints.forEach(pt => {
    page.drawText(`•  ${pt}`, { x: left + 8, y: y, size: 8, font: fontRegular, color: darkColor });
    y -= 10.5;
  });

  y -= 4;

  // ACHIEVEMENT
  drawSectionHeader('Achievement');
  page.drawText('•  Ranked 4th in Pune for Yi Future 6.0 Hackathon / Innovation Challenge', {
    x: left + 8,
    y: y,
    size: 8.5,
    font: fontBold,
    color: darkColor,
  });

  const pdfBytes = await pdfDoc.save();
  
  const publicDir = path.join(__dirname, '../public/assets');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'Aryan_Shinde_Resume.pdf'), pdfBytes);
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfBytes);
  console.log('Successfully generated Aryan_Shinde_Resume.pdf and resume.pdf!');
}

createResume().catch(err => {
  console.error(err);
  process.exit(1);
});
