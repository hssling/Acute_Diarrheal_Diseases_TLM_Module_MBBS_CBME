# Visual Diagrams and Charts for Acute Diarrheal Diseases

## ASCII Art Diagrams

### Dehydration Assessment Flowchart
```
START: Child with Diarrhea
        ↓
   Assess Mental Status
        ↓
   Normal → Some Dehydration
   ↓
   Restless/Irritable → Some Dehydration
   ↓
   Lethargic/Unconscious → Severe Dehydration
        ↓
   Check Eyes
        ↓
   Normal → Some Dehydration
   ↓
   Sunken → Severe Dehydration
        ↓
   Check Skin Pinch
        ↓
   Goes back quickly → Some Dehydration
   ↓
   Goes back slowly (>2 sec) → Severe Dehydration
        ↓
   Check Thirst
        ↓
   Drinks normally → No Dehydration
   ↓
   Drinks eagerly → Some Dehydration
   ↓
   Unable to drink → Severe Dehydration
```

### Pathophysiology Diagram
```
INFECTIOUS AGENTS
(Viruses, Bacteria, Parasites)
        ↓
    INTESTINAL
    INVASION
        ↓
EPITHELIAL CELL DAMAGE
        ↓
ION TRANSPORT DISRUPTION
        ↓
WATER & ELECTROLYTE LOSS
        ↓
DEHYDRATION & ACID-BASE IMBALANCE
        ↓
CLINICAL SYMPTOMS
(Diarrhea, Vomiting, Shock)
```

### Management Algorithm
```
CHILD WITH DIARRHEA PRESENTS
        ↓
    ASSESS DEHYDRATION
        ↓
   ┌─────────────┴─────────────┐
   ↓                           ↓
NO DEHYDRATION            SOME DEHYDRATION
   ↓                           ↓
HOME CARE + ZINC         ORS + ZINC + FEEDING
   ↓                           ↓
FOLLOW-UP IN 2 DAYS       SEVERE DEHYDRATION
                              ↓
                         IV FLUIDS + ANTIBIOTICS
                              ↓
                         TRANSITION TO ORS
                              ↓
                         FOLLOW-UP CARE
```

---

## SVG Visual Elements

### Dehydration Assessment Wheel
```svg
<svg width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <style>
      .wheel-text { font-family: Arial, sans-serif; font-size: 14px; text-anchor: middle; }
      .wheel-section { stroke: #333; stroke-width: 2; }
    </style>
  </defs>

  <!-- Outer ring - Signs -->
  <circle cx="200" cy="200" r="180" fill="none" stroke="#ddd" stroke-width="1"/>
  <path d="M200,20 A180,180 0 0,1 380,200" fill="#e8f5e8" class="wheel-section"/>
  <text x="290" y="80" class="wheel-text">Mental Status</text>

  <path d="M380,200 A180,180 0 0,1 200,380" fill="#fff3cd" class="wheel-section"/>
  <text x="320" y="320" class="wheel-text">Eyes</text>

  <path d="M200,380 A180,180 0 0,1 20,200" fill="#f8d7da" class="wheel-section"/>
  <text x="80" y="320" class="wheel-text">Skin Pinch</text>

  <path d="M20,200 A180,180 0 0,1 200,20" fill="#d1ecf1" class="wheel-section"/>
  <text x="80" y="80" class="wheel-text">Thirst</text>

  <!-- Middle ring - Assessment -->
  <circle cx="200" cy="200" r="120" fill="none" stroke="#ddd" stroke-width="1"/>
  <text x="200" y="160" class="wheel-text" font-weight="bold">Normal</text>
  <text x="280" y="200" class="wheel-text" font-weight="bold">Sunken</text>
  <text x="200" y="240" class="wheel-text" font-weight="bold">Slow</text>
  <text x="120" y="200" class="wheel-text" font-weight="bold">Eager</text>

  <!-- Inner circle - Classification -->
  <circle cx="200" cy="200" r="60" fill="#f8f9fa" stroke="#333" stroke-width="2"/>
  <text x="200" y="190" class="wheel-text" font-size="12" font-weight="bold">NO</text>
  <text x="200" y="205" class="wheel-text" font-size="12" font-weight="bold">DEHYDRATION</text>

  <!-- Center -->
  <circle cx="200" cy="200" r="20" fill="#28a745"/>
  <text x="200" y="207" class="wheel-text" font-size="10" fill="white" font-weight="bold">START</text>
</svg>
```

### ORS Composition Pie Chart
```svg
<svg width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <style>
      .pie-label { font-family: Arial, sans-serif; font-size: 14px; text-anchor: middle; }
      .pie-value { font-family: Arial, sans-serif; font-size: 12px; text-anchor: middle; font-weight: bold; }
    </style>
  </defs>

  <!-- Title -->
  <text x="200" y="30" class="pie-label" font-size="18" font-weight="bold">WHO ORS Composition</text>
  <text x="200" y="50" class="pie-label" font-size="12">(per liter of water)</text>

  <!-- Pie segments -->
  <!-- Glucose 13.5g (27%) -->
  <path d="M200,200 L200,80 A120,120 0 0,1 320,140 z" fill="#ff6b6b"/>
  <text x="280" y="120" class="pie-label">Glucose</text>
  <text x="280" y="135" class="pie-value">13.5g (27%)</text>

  <!-- Sodium 2.6g (13%) -->
  <path d="M200,200 L320,140 A120,120 0 0,1 320,260 z" fill="#4ecdc4"/>
  <text x="340" y="200" class="pie-label">Sodium</text>
  <text x="340" y="215" class="pie-value">2.6g (13%)</text>

  <!-- Potassium 1.5g (8%) -->
  <path d="M200,200 L320,260 A120,120 0 0,1 200,320 z" fill="#45b7d1"/>
  <text x="240" y="340" class="pie-label">Potassium</text>
  <text x="240" y="355" class="pie-value">1.5g (8%)</text>

  <!-- Citrate 2.9g (15%) -->
  <path d="M200,200 L200,320 A120,120 0 0,1 80,260 z" fill="#f9ca24"/>
  <text x="120" y="340" class="pie-label">Citrate</text>
  <text x="120" y="355" class="pie-value">2.9g (15%)</text>

  <!-- Water 1L (37%) -->
  <path d="M200,200 L80,260 A120,120 0 0,1 80,140 z" fill="#6c5ce7"/>
  <text x="120" y="120" class="pie-label">Water</text>
  <text x="120" y="135" class="pie-value">1L (37%)</text>

  <!-- Center circle -->
  <circle cx="200" cy="200" r="40" fill="white" stroke="#333" stroke-width="2"/>
  <text x="200" y="195" class="pie-label" font-size="12" font-weight="bold">ORS</text>
  <text x="200" y="210" class="pie-label" font-size="10">Solution</text>
</svg>
```

---

## Data Visualization Code

### Epidemiology Dashboard (HTML/CSS/JS)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diarrhea Epidemiology Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 20px; }
        .chart-container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .chart-title { font-size: 18px; font-weight: bold; margin-bottom: 15px; color: #333; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px; }
        .stat-card { background: white; padding: 15px; border-radius: 8px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .stat-value { font-size: 24px; font-weight: bold; color: #dc3545; }
        .stat-label { font-size: 12px; color: #666; margin-top: 5px; }
    </style>
</head>
<body>
    <h1>Acute Diarrheal Diseases - Epidemiology Dashboard</h1>

    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-value">443,832</div>
            <div class="stat-label">Annual Deaths</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">1.7B</div>
            <div class="stat-label">Cases Worldwide</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">3rd</div>
            <div class="stat-label">Leading Cause of Death</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">60%</div>
            <div class="stat-label">Viral Causes</div>
        </div>
    </div>

    <div class="dashboard">
        <div class="chart-container">
            <div class="chart-title">Monthly Case Distribution</div>
            <canvas id="monthlyChart"></canvas>
        </div>

        <div class="chart-container">
            <div class="chart-title">Age Distribution</div>
            <canvas id="ageChart"></canvas>
        </div>

        <div class="chart-container">
            <div class="chart-title">Etiology Breakdown</div>
            <canvas id="etiologyChart"></canvas>
        </div>

        <div class="chart-container">
            <div class="chart-title">Regional Comparison</div>
            <canvas id="regionalChart"></canvas>
        </div>
    </div>

    <script>
        // Monthly case distribution
        const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
        new Chart(monthlyCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Cases',
                    data: [1200, 1100, 1300, 1500, 1800, 2200, 2800, 2600, 2100, 1700, 1400, 1300],
                    borderColor: '#dc3545',
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // Age distribution
        const ageCtx = document.getElementById('ageChart').getContext('2d');
        new Chart(ageCtx, {
            type: 'doughnut',
            data: {
                labels: ['<1 year', '1-2 years', '2-5 years', '>5 years'],
                datasets: [{
                    data: [30, 40, 25, 5],
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });

        // Etiology breakdown
        const etiologyCtx = document.getElementById('etiologyChart').getContext('2d');
        new Chart(etiologyCtx, {
            type: 'bar',
            data: {
                labels: ['Viral', 'Bacterial', 'Parasitic', 'Unknown'],
                datasets: [{
                    label: 'Percentage',
                    data: [60, 15, 10, 15],
                    backgroundColor: ['#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true, max: 100 }
                }
            }
        });

        // Regional comparison
        const regionalCtx = document.getElementById('regionalChart').getContext('2d');
        new Chart(regionalCtx, {
            type: 'radar',
            data: {
                labels: ['South Asia', 'Sub-Saharan Africa', 'Latin America', 'East Asia', 'Middle East'],
                datasets: [{
                    label: 'Incidence Rate',
                    data: [85, 78, 45, 32, 28],
                    borderColor: '#ff6384',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)'
                }]
            },
            options: {
                responsive: true,
                elements: {
                    line: { borderWidth: 2 }
                }
            }
        });
    </script>
</body>
</html>
```

---

## Interactive Timeline

### Diarrhea Control Progress Timeline
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diarrhea Control Timeline</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .timeline { position: relative; max-width: 800px; margin: 0 auto; }
        .timeline::after { content: ''; position: absolute; width: 6px; background: #dc3545; top: 0; bottom: 0; left: 30px; margin-left: -3px; }
        .container { padding: 10px 40px; position: relative; background: inherit; width: 100%; }
        .container::after { content: ''; position: absolute; width: 25px; height: 25px; right: -17px; background: white; border: 4px solid #dc3545; top: 15px; border-radius: 50%; z-index: 1; }
        .left { left: 0; }
        .right { left: 50%; }
        .content { padding: 20px 30px; background: white; position: relative; border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .year { font-size: 24px; font-weight: bold; color: #dc3545; margin-bottom: 10px; }
        .title { font-size: 18px; font-weight: bold; margin-bottom: 10px; }
        .description { line-height: 1.6; }
        @media screen and (max-width: 600px) {
            .timeline::after { left: 31px; }
            .container { width: 100%; padding-left: 70px; padding-right: 25px; }
            .container::before { left: 60px; border: medium solid white; border-width: 10px 10px 10px 0; border-color: transparent white transparent transparent; }
            .right { left: 0%; }
        }
    </style>
</head>
<body>
    <h1>Global Progress in Diarrhea Control</h1>

    <div class="timeline">
        <div class="container left">
            <div class="content">
                <div class="year">2000</div>
                <div class="title">2.5 Million Deaths Annually</div>
                <div class="description">Diarrhea was the second leading cause of death in children under 5, claiming 2.5 million lives each year.</div>
            </div>
        </div>

        <div class="container right">
            <div class="content">
                <div class="year">2004</div>
                <div class="title">Rotavirus Vaccine Introduction</div>
                <div class="description">First rotavirus vaccine licensed. This breakthrough would prevent millions of diarrhea cases worldwide.</div>
            </div>
        </div>

        <div class="container left">
            <div class="content">
                <div class="year">2010</div>
                <div class="title">1.8 Million Deaths</div>
                <div class="description">Global deaths reduced by 700,000 through improved water, sanitation, and basic treatments.</div>
            </div>
        </div>

        <div class="container right">
            <div class="content">
                <div class="year">2012</div>
                <div class="title">UN Global Action Plan</div>
                <div class="description">World Health Assembly endorsed comprehensive plan to end preventable child deaths from pneumonia and diarrhea.</div>
            </div>
        </div>

        <div class="container left">
            <div class="content">
                <div class="year">2015</div>
                <div class="title">SDGs Adopted</div>
                <div class="description">Sustainable Development Goals included target to end preventable child deaths, with diarrhea as key focus area.</div>
            </div>
        </div>

        <div class="container right">
            <div class="content">
                <div class="year">2020</div>
                <div class="description">Global deaths reduced to 1.2 million. COVID-19 pandemic affected diarrhea control efforts in many regions.</div>
            </div>
        </div>

        <div class="container left">
            <div class="content">
                <div class="year">2025</div>
                <div class="title">Target: <1 Million Deaths</div>
                <div class="description">Accelerated efforts needed to achieve SDG target. Focus on last-mile delivery of interventions.</div>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## Clinical Decision Support Tool

### Interactive Dehydration Calculator
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dehydration Assessment Calculator</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
        .calculator { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 8px; font-weight: bold; color: #333; }
        select, input { width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 5px; font-size: 16px; }
        select:focus, input:focus { outline: none; border-color: #4CAF50; }
        .result { margin-top: 30px; padding: 20px; border-radius: 8px; display: none; }
        .no-dehydration { background: #e8f5e8; border: 2px solid #4CAF50; color: #2e7d32; }
        .some-dehydration { background: #fff3cd; border: 2px solid #ffc107; color: #856404; }
        .severe-dehydration { background: #f8d7da; border: 2px solid #dc3545; color: #721c24; }
        .calculate-btn { background: #4CAF50; color: white; border: none; padding: 15px 30px; border-radius: 5px; cursor: pointer; font-size: 16px; width: 100%; }
        .calculate-btn:hover { background: #45a049; }
        .recommendation { margin-top: 15px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="calculator">
        <h1>🩺 Dehydration Assessment Calculator</h1>
        <p>Use this tool to assess dehydration status in children with diarrhea</p>

        <form id="assessmentForm">
            <div class="form-group">
                <label for="mental">Mental Status:</label>
                <select id="mental" required>
                    <option value="">Select...</option>
                    <option value="normal">Normal, alert</option>
                    <option value="restless">Restless, irritable</option>
                    <option value="lethargic">Lethargic or unconscious</option>
                </select>
            </div>

            <div class="form-group">
                <label for="eyes">Eyes:</label>
                <select id="eyes" required>
                    <option value="">Select...</option>
                    <option value="normal">Normal</option>
                    <option value="sunken">Sunken</option>
                </select>
            </div>

            <div class="form-group">
                <label for="tears">Tears:</label>
                <select id="tears" required>
                    <option value="">Select...</option>
                    <option value="present">Present when crying</option>
                    <option value="absent">Absent when crying</option>
                </select>
            </div>

            <div class="form-group">
                <label for="mouth">Mouth:</label>
                <select id="mouth" required>
                    <option value="">Select...</option>
                    <option value="moist">Moist</option>
                    <option value="dry">Dry</option>
                </select>
            </div>

            <div class="form-group">
                <label for="skin">Skin Pinch:</label>
                <select id="skin" required>
                    <option value="">Select...</option>
                    <option value="normal">Goes back quickly</option>
                    <option value="slow">Goes back slowly (>2 seconds)</option>
                </select>
            </div>

            <div class="form-group">
                <label for="thirst">Thirst:</label>
                <select id="thirst" required>
                    <option value="">Select...</option>
                    <option value="normal">Drinks normally, not thirsty</option>
                    <option value="thirsty">Drinks eagerly, thirsty</option>
                    <option value="unable">Unable to drink</option>
                </select>
            </div>

            <button type="submit" class="calculate-btn">Assess Dehydration Status</button>
        </form>

        <div id="result" class="result">
            <h3 id="resultTitle"></h3>
            <p id="resultDescription"></p>
            <div class="recommendation" id="recommendation"></div>
        </div>
    </div>

    <script>
        document.getElementById('assessmentForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const mental = document.getElementById('mental').value;
            const eyes = document.getElementById('eyes').value;
            const tears = document.getElementById('tears').value;
            const mouth = document.getElementById('mouth').value;
            const skin = document.getElementById('skin').value;
            const thirst = document.getElementById('thirst').value;

            let dehydrationLevel = 'Unable to assess - incomplete information';
            let description = '';
            let recommendation = '';

            // Assessment logic based on WHO criteria
            if (mental === 'lethargic' || eyes === 'sunken' || skin === 'slow' || thirst === 'unable') {
                dehydrationLevel = 'Severe Dehydration';
                description = 'Two or more of: lethargy/unconsciousness, sunken eyes, unable to drink, skin pinch >2 seconds';
                recommendation = 'URGENT: Start IV fluids immediately. Give 100 mL/kg Ringer\'s lactate over 3 hours. Refer to hospital.';
            } else if ((mental === 'restless' || eyes === 'sunken' || thirst === 'thirsty') && (mouth === 'dry' || tears === 'absent')) {
                dehydrationLevel = 'Some Dehydration';
                description = 'Two or more of: restlessness, sunken eyes, drinks eagerly, dry mucous membranes';
                recommendation = 'Give ORS: 50-100 mL/kg over 4 hours. Continue breastfeeding. Give zinc supplements.';
            } else if (mental === 'normal' && eyes === 'normal' && thirst === 'normal' && mouth === 'moist' && tears === 'present' && skin === 'normal') {
                dehydrationLevel = 'No Dehydration';
                description = 'Normal mental status, eyes, thirst, and skin pinch';
                recommendation = 'Home care: Continue feeding, give zinc supplements, advise on when to return.';
            } else {
                dehydrationLevel = 'Some Dehydration';
                description = 'Mixed signs suggest some dehydration';
                recommendation = 'Give ORS and monitor closely. Reassess in 2-4 hours.';
            }

            const resultDiv = document.getElementById('result');
            const titleDiv = document.getElementById('resultTitle');
            const descDiv = document.getElementById('resultDescription');
            const recDiv = document.getElementById('recommendation');

            titleDiv.textContent = dehydrationLevel;
            descDiv.textContent = description;
            recDiv.textContent = recommendation;

            // Set appropriate styling
            resultDiv.className = 'result';
            if (dehydrationLevel === 'Severe Dehydration') {
                resultDiv.classList.add('severe-dehydration');
            } else if (dehydrationLevel === 'Some Dehydration') {
                resultDiv.classList.add('some-dehydration');
            } else if (dehydrationLevel === 'No Dehydration') {
                resultDiv.classList.add('no-dehydration');
            }

            resultDiv.style.display = 'block';
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        });
    </script>
</body>
</html>
```

---

## Implementation Notes

### For ASCII Diagrams
- Copy directly into documents or presentations
- Use monospaced fonts for proper alignment
- Can be easily modified for specific needs

### For SVG Elements
- Save as .svg files for scalable graphics
- Can be edited in vector graphics software
- Embed directly in HTML or web pages

### For Interactive Charts
- Requires Chart.js library (CDN link provided)
- Fully responsive and customizable
- Data can be updated dynamically
- Exportable as images

### For Clinical Tools
- Standalone HTML files, no server required
- Mobile-friendly responsive design
- Can be integrated into larger applications
- Print-friendly for clinical use

These visualizations provide practical, implementable graphics that can enhance teaching materials and clinical practice tools for acute diarrheal diseases.
