# Indian-Specific Visualizations for Diarrhea Control

## State-wise Diarrhea Incidence Map

### Interactive Choropleth Map Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>India Diarrhea Incidence Map</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .map-container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .legend { display: flex; justify-content: center; margin-top: 20px; }
        .legend-item { display: flex; align-items: center; margin: 0 10px; }
        .legend-color { width: 20px; height: 20px; margin-right: 5px; border-radius: 3px; }
    </style>
</head>
<body>
    <div class="map-container">
        <h2>Diarrhea Incidence Rate by State (per 1000 children)</h2>
        <div id="india-map"></div>
        <div class="legend">
            <div class="legend-item">
                <div class="legend-color" style="background: #fee5d9;"></div>
                <span>Low (0-50)</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: #fcae91;"></div>
                <span>Medium (51-100)</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: #fb6a4a;"></div>
                <span>High (101-150)</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: #cb181d;"></div>
                <span>Very High (151+)</span>
            </div>
        </div>
    </div>

    <script>
        const stateData = [
            {state: 'Uttar Pradesh', incidence: 150, lat: 26.8467, lon: 80.9462},
            {state: 'Bihar', incidence: 180, lat: 25.0961, lon: 85.3131},
            {state: 'Rajasthan', incidence: 140, lat: 27.0238, lon: 74.2179},
            {state: 'Madhya Pradesh', incidence: 130, lat: 22.9734, lon: 78.6569},
            {state: 'Maharashtra', incidence: 90, lat: 19.7515, lon: 75.7139},
            {state: 'Gujarat', incidence: 85, lat: 22.2587, lon: 71.1924},
            {state: 'Karnataka', incidence: 75, lat: 15.3173, lon: 75.7139},
            {state: 'Tamil Nadu', incidence: 65, lat: 11.1271, lon: 78.6569},
            {state: 'Andhra Pradesh', incidence: 70, lat: 15.9129, lon: 79.7400},
            {state: 'Telangana', incidence: 68, lat: 18.1124, lon: 79.0193},
            {state: 'Kerala', incidence: 40, lat: 10.8505, lon: 76.2711},
            {state: 'West Bengal', incidence: 95, lat: 22.9868, lon: 87.8550},
            {state: 'Odisha', incidence: 110, lat: 20.9517, lon: 85.0985},
            {state: 'Chhattisgarh', incidence: 125, lat: 21.2787, lon: 81.8661},
            {state: 'Jharkhand', incidence: 135, lat: 23.6102, lon: 85.2799},
            {state: 'Punjab', incidence: 55, lat: 31.1471, lon: 75.3412},
            {state: 'Haryana', incidence: 60, lat: 29.0588, lon: 76.0856},
            {state: 'Delhi', incidence: 80, lat: 28.7041, lon: 77.1025},
            {state: 'Uttarakhand', incidence: 70, lat: 30.0668, lon: 79.0193},
            {state: 'Himachal Pradesh', incidence: 45, lat: 31.1048, lon: 77.1734},
            {state: 'Jammu and Kashmir', incidence: 65, lat: 33.7782, lon: 76.5762},
            {state: 'Goa', incidence: 35, lat: 15.2993, lon: 74.1240},
            {state: 'Sikkim', incidence: 50, lat: 27.5330, lon: 88.5122},
            {state: 'Arunachal Pradesh', incidence: 85, lat: 28.2180, lon: 94.7278},
            {state: 'Assam', incidence: 105, lat: 26.2006, lon: 92.9376},
            {state: 'Manipur', incidence: 95, lat: 24.6637, lon: 93.9063},
            {state: 'Meghalaya', incidence: 90, lat: 25.4670, lon: 91.3662},
            {state: 'Mizoram', incidence: 75, lat: 23.1645, lon: 92.9376},
            {state: 'Nagaland', incidence: 80, lat: 26.1584, lon: 94.5624},
            {state: 'Tripura', incidence: 85, lat: 23.9408, lon: 91.9882}
        ];

        const data = [{
            type: 'choropleth',
            locationmode: 'country names',
            locations: stateData.map(d => d.state),
            z: stateData.map(d => d.incidence),
            text: stateData.map(d => `${d.state}<br>Incidence: ${d.incidence}/1000`),
            colorscale: [
                [0, '#fee5d9'],
                [0.25, '#fcae91'],
                [0.5, '#fb6a4a'],
                [0.75, '#de2d26'],
                [1, '#a50f15']
            ],
            colorbar: {
                title: 'Incidence Rate<br>(per 1000 children)',
                thickness: 20,
                len: 0.7
            },
            hovertemplate: '<b>%{text}</b><extra></extra>'
        }];

        const layout = {
            title: '',
            geo: {
                scope: 'asia',
                countrycolor: 'rgb(255, 255, 255)',
                showland: true,
                landcolor: 'rgb(217, 217, 217)',
                showlakes: true,
                lakecolor: 'rgb(255, 255, 255)',
                subunitcolor: 'rgb(255, 255, 255)',
                lonaxis: {range: [65, 100]},
                lataxis: {range: [5, 40]}
            },
            height: 600,
            margin: {t: 0, b: 0, l: 0, r: 0}
        };

        Plotly.newPlot('india-map', data, layout, {responsive: true});
    </script>
</body>
</html>
```

---

## NHM Program Performance Dashboard

### Program Metrics Visualization
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NHM Diarrhea Control Dashboard</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 20px; }
        .metric-card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
        .metric-title { font-size: 14px; color: #666; margin-bottom: 10px; }
        .metric-value { font-size: 32px; font-weight: bold; color: #2563eb; }
        .metric-target { font-size: 12px; color: #059669; margin-top: 5px; }
        .chart-container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <h1>National Health Mission - Diarrhea Control Performance</h1>

    <div class="dashboard">
        <div class="metric-card">
            <div class="metric-title">ORS Coverage</div>
            <div class="metric-value">78%</div>
            <div class="metric-target">Target: 90%</div>
        </div>
        <div class="metric-card">
            <div class="metric-title">Zinc Supplementation</div>
            <div class="metric-value">65%</div>
            <div class="metric-target">Target: 80%</div>
        </div>
        <div class="metric-card">
            <div class="metric-title">ASHA Training</div>
            <div class="metric-value">85%</div>
            <div class="metric-target">Target: 95%</div>
        </div>
        <div class="metric-card">
            <div class="metric-title">Case Fatality Rate</div>
            <div class="metric-value">1.8%</div>
            <div class="metric-target">Target: <1.5%</div>
        </div>
    </div>

    <div class="dashboard">
        <div class="chart-container">
            <h3>Program Component Performance</h3>
            <div id="program-chart"></div>
        </div>
        <div class="chart-container">
            <h3>State-wise Performance</h3>
            <div id="state-chart"></div>
        </div>
    </div>

    <script>
        // Program components performance
        const programData = {
            labels: ['ORS Distribution', 'Zinc Coverage', 'ASHA Training', 'Facility Readiness', 'Community Awareness'],
            values: [78, 65, 85, 72, 68]
        };

        const programChart = {
            type: 'radar',
            data: {
                labels: programData.labels,
                datasets: [{
                    label: 'Current Performance (%)',
                    data: programData.values,
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    borderColor: 'rgba(37, 99, 235, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(37, 99, 235, 1)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        };

        // State performance comparison
        const statePerformance = {
            labels: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Maharashtra', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'Bihar'],
            ors: [95, 88, 82, 75, 78, 65, 55, 48],
            zinc: [90, 78, 72, 68, 65, 58, 45, 38]
        };

        const stateChart = {
            type: 'bar',
            data: {
                labels: statePerformance.labels,
                datasets: [
                    {
                        label: 'ORS Coverage (%)',
                        data: statePerformance.ors,
                        backgroundColor: 'rgba(5, 150, 105, 0.8)',
                        borderColor: 'rgba(5, 150, 105, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Zinc Coverage (%)',
                        data: statePerformance.zinc,
                        backgroundColor: 'rgba(37, 99, 235, 0.8)',
                        borderColor: 'rgba(37, 99, 235, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        };

        Plotly.newPlot('program-chart', programChart.data, programChart.options);
        Plotly.newPlot('state-chart', stateChart.data, stateChart.options);
    </script>
</body>
</html>
```

---

## ASHA Worker Impact Visualization

### ASHA Performance Metrics
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASHA Worker Impact Dashboard</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .header { background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px; }
        .stat-box { background: white; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .stat-number { font-size: 2.5rem; font-weight: bold; color: #ff6b6b; }
        .stat-label { color: #666; margin-top: 5px; }
        .chart-container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>ASHA Worker Impact on Diarrhea Control</h1>
        <p>Community Health Worker Performance Metrics</p>
    </div>

    <div class="stats-grid">
        <div class="stat-box">
            <div class="stat-number">9.5L</div>
            <div class="stat-label">ASHA Workers Nationwide</div>
        </div>
        <div class="stat-box">
            <div class="stat-number">78%</div>
            <div class="stat-label">ORS Distribution Coverage</div>
        </div>
        <div class="stat-box">
            <div class="stat-number">65%</div>
            <div class="stat-label">Home Visit Compliance</div>
        </div>
        <div class="stat-box">
            <div class="stat-number">2.1M</div>
            <div class="stat-label">Children Reached Monthly</div>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div class="chart-container">
            <h3>ASHA Training Completion by State</h3>
            <div id="training-chart"></div>
        </div>
        <div class="chart-container">
            <h3>Monthly Case Detection Trend</h3>
            <div id="detection-chart"></div>
        </div>
    </div>

    <div class="chart-container">
        <h3>ASHA Intervention Impact</h3>
        <div id="impact-chart"></div>
    </div>

    <script>
        // ASHA Training completion
        const trainingData = {
            states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Maharashtra', 'Gujarat', 'Rajasthan', 'UP', 'Bihar'],
            trained: [95, 88, 82, 75, 78, 65, 55, 48]
        };

        const trainingChart = {
            type: 'bar',
            data: {
                labels: trainingData.states,
                datasets: [{
                    label: 'ASHA Training Completion (%)',
                    data: trainingData.trained,
                    backgroundColor: 'rgba(255, 107, 107, 0.8)',
                    borderColor: 'rgba(255, 107, 107, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 100 }
                }
            }
        };

        // Case detection trend
        const detectionData = {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            cases: [1200, 1150, 1180, 1250, 1400, 1600, 1800, 1750, 1550, 1350, 1250, 1220]
        };

        const detectionChart = {
            type: 'line',
            data: {
                labels: detectionData.months,
                datasets: [{
                    label: 'Cases Detected by ASHA',
                    data: detectionData.cases,
                    borderColor: 'rgba(255, 107, 107, 1)',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        };

        // Intervention impact
        const impactData = {
            interventions: ['ORS Distribution', 'Zinc Supply', 'Health Education', 'Referral Services', 'Follow-up Care'],
            before: [45, 35, 40, 50, 30],
            after: [78, 65, 72, 85, 68]
        };

        const impactChart = {
            type: 'bar',
            data: {
                labels: impactData.interventions,
                datasets: [
                    {
                        label: 'Before ASHA Intervention (%)',
                        data: impactData.before,
                        backgroundColor: 'rgba(156, 163, 175, 0.8)',
                        borderColor: 'rgba(156, 163, 175, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'After ASHA Intervention (%)',
                        data: impactData.after,
                        backgroundColor: 'rgba(255, 107, 107, 0.8)',
                        borderColor: 'rgba(255, 107, 107, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 100 }
                }
            }
        };

        Plotly.newPlot('training-chart', trainingChart.data, trainingChart.options);
        Plotly.newPlot('detection-chart', detectionChart.data, detectionChart.options);
        Plotly.newPlot('impact-chart', impactChart.data, impactChart.options);
    </script>
</body>
</html>
```

---

## ICDS Program Impact Visualization

### Anganwadi Center Performance
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ICDS Diarrhea Prevention Impact</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px; }
        .stats-overview { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px; }
        .stat-card { background: white; padding: 15px; border-radius: 8px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .stat-value { font-size: 1.8rem; font-weight: bold; color: #4f46e5; }
        .stat-label { font-size: 0.9rem; color: #666; margin-top: 5px; }
        .chart-container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>ICDS Program Impact on Diarrhea Prevention</h1>
        <p>Integrated Child Development Services - Nutrition & Health Outcomes</p>
    </div>

    <div class="stats-overview">
        <div class="stat-card">
            <div class="stat-value">1.3L</div>
            <div class="stat-label">Anganwadi Centers</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">8.2M</div>
            <div class="stat-label">Children Served Daily</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">68%</div>
            <div class="stat-label">Malnutrition Reduction</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">45%</div>
            <div class="stat-label">Diarrhea Risk Reduction</div>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div class="chart-container">
            <h3>Supplementary Nutrition Impact</h3>
            <div id="nutrition-chart"></div>
        </div>
        <div class="chart-container">
            <h3>Mother Education Coverage</h3>
            <div id="education-chart"></div>
        </div>
    </div>

    <div class="chart-container">
        <h3>ICDS Service Utilization by State</h3>
        <div id="utilization-chart"></div>
    </div>

    <script>
        // Nutrition impact
        const nutritionData = {
            categories: ['Severely Underweight', 'Moderately Underweight', 'Normal Weight', 'Overweight'],
            before: [25, 35, 35, 5],
            after: [12, 28, 52, 8]
        };

        const nutritionChart = {
            type: 'bar',
            data: {
                labels: nutritionData.categories,
                datasets: [
                    {
                        label: 'Before ICDS (%)',
                        data: nutritionData.before,
                        backgroundColor: 'rgba(239, 68, 68, 0.8)',
                        borderColor: 'rgba(239, 68, 68, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'After ICDS (%)',
                        data: nutritionData.after,
                        backgroundColor: 'rgba(34, 197, 94, 0.8)',
                        borderColor: 'rgba(34, 197, 94, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 60, stacked: false }
                }
            }
        };

        // Mother education coverage
        const educationData = {
            services: ['Health Check-ups', 'Growth Monitoring', 'Nutrition Counseling', 'Diarrhea Education', 'Immunization Tracking'],
            coverage: [85, 92, 78, 82, 88]
        };

        const educationChart = {
            type: 'radar',
            data: {
                labels: educationData.services,
                datasets: [{
                    label: 'Service Coverage (%)',
                    data: educationData.coverage,
                    backgroundColor: 'rgba(79, 70, 229, 0.2)',
                    borderColor: 'rgba(79, 70, 229, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(79, 70, 229, 1)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        };

        // State utilization
        const utilizationData = {
            states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Maharashtra', 'Gujarat', 'Rajasthan', 'UP', 'Bihar'],
            utilization: [95, 88, 82, 75, 78, 65, 55, 48]
        };

        const utilizationChart = {
            type: 'horizontalBar',
            data: {
                labels: utilizationData.states,
                datasets: [{
                    label: 'ICDS Service Utilization (%)',
                    data: utilizationData.utilization,
                    backgroundColor: 'rgba(79, 70, 229, 0.8)',
                    borderColor: 'rgba(79, 70, 229, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: { beginAtZero: true, max: 100 }
                }
            }
        };

        Plotly.newPlot('nutrition-chart', nutritionChart.data, nutritionChart.options);
        Plotly.newPlot('education-chart', educationChart.data, educationChart.options);
        Plotly.newPlot('utilization-chart', utilizationData, utilizationChart.options);
    </script>
</body>
</html>
```

---

## Seasonal Diarrhea Pattern Visualization

### Monsoon Impact Chart
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seasonal Diarrhea Patterns in India</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .season-indicator { display: flex; justify-content: center; margin-bottom: 20px; }
        .season { padding: 10px 20px; margin: 0 5px; border-radius: 20px; color: white; font-weight: bold; }
        .summer { background: #f59e0b; }
        .monsoon { background: #3b82f6; }
        .winter { background: #10b981; }
        .spring { background: #8b5cf6; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Seasonal Patterns of Diarrhea in India</h1>

        <div class="season-indicator">
            <div class="season summer">Summer (Mar-May)</div>
            <div class="season monsoon">Monsoon (Jun-Sep)</div>
            <div class="season winter">Winter (Oct-Feb)</div>
            <div class="season spring">Spring (Feb-Mar transition)</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h3>Monthly Case Distribution</h3>
                <div id="monthly-cases"></div>
            </div>
            <div>
                <h3>Regional Seasonal Variation</h3>
                <div id="regional-seasonal"></div>
            </div>
        </div>

        <div style="margin-top: 20px;">
            <h3>Environmental Factors by Season</h3>
            <div id="environmental-factors"></div>
        </div>
    </div>

    <script>
        // Monthly case distribution
        const monthlyData = {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            cases: [850, 780, 920, 1100, 1350, 1850, 2450, 2200, 1650, 1250, 950, 880],
            rainfall: [15, 12, 18, 25, 45, 180, 320, 290, 220, 85, 35, 20],
            temperature: [18, 21, 26, 31, 35, 32, 29, 28, 29, 27, 23, 19]
        };

        const monthlyChart = {
            type: 'line',
            data: {
                labels: monthlyData.months,
                datasets: [
                    {
                        label: 'Diarrhea Cases',
                        data: monthlyData.cases,
                        borderColor: '#dc2626',
                        backgroundColor: 'rgba(220, 38, 38, 0.1)',
                        yAxisID: 'y',
                        tension: 0.4
                    },
                    {
                        label: 'Rainfall (mm)',
                        data: monthlyData.rainfall,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        yAxisID: 'y1',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: { text: 'Cases', display: true }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { text: 'Rainfall (mm)', display: true },
                        grid: { drawOnChartArea: false }
                    }
                }
            }
        };

        // Regional seasonal variation
        const regionalData = {
            regions: ['North India', 'South India', 'East India', 'West India', 'North-East'],
            summer: [65, 45, 55, 50, 60],
            monsoon: [85, 65, 75, 70, 80],
            winter: [35, 25, 40, 30, 45]
        };

        const regionalChart = {
            type: 'bar',
            data: {
                labels: regionalData.regions,
                datasets: [
                    {
                        label: 'Summer Peak',
                        data: regionalData.summer,
                        backgroundColor: 'rgba(245, 158, 11, 0.8)',
                        borderColor: 'rgba(245, 158, 11, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Monsoon Peak',
                        data: regionalData.monsoon,
                        backgroundColor: 'rgba(59, 130, 246, 0.8)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Winter Base',
                        data: regionalData.winter,
                        backgroundColor: 'rgba(16, 185, 129, 0.8)',
                        borderColor: 'rgba(16, 185, 129, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 100 }
                }
            }
        };

        // Environmental factors
        const environmentalData = {
            factors: ['Contaminated Water', 'Poor Sanitation', 'Food Contamination', 'Crowding', 'Malnutrition'],
            summer: [75, 70, 80, 65, 60],
            monsoon: [90, 85, 75, 80, 70],
            winter: [55, 50, 45, 40, 65]
        };

        const environmentalChart = {
            type: 'radar',
            data: {
                labels: environmentalData.factors,
                datasets: [
                    {
                        label: 'Summer',
                        data: environmentalData.summer,
                        backgroundColor: 'rgba(245, 158, 11, 0.2)',
                        borderColor: 'rgba(245, 158, 11, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Monsoon',
                        data: environmentalData.monsoon,
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Winter',
                        data: environmentalData.winter,
                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                        borderColor: 'rgba(16, 185, 129, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        };

        Plotly.newPlot('monthly-cases', monthlyChart.data, monthlyChart.options);
        Plotly.newPlot('regional-seasonal', regionalChart.data, regionalChart.options);
        Plotly.newPlot('environmental-factors', environmentalData, environmentalChart.options);
    </script>
</body>
</html>
```

---

## Cultural Beliefs and Practices Visualization

### Traditional Medicine Usage Chart
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cultural Beliefs in Diarrhea Treatment</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .belief-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .belief-card { background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6; }
        .belief-title { font-weight: bold; color: #1f2937; margin-bottom: 8px; }
        .belief-description { color: #6b7280; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cultural Beliefs and Traditional Practices in Diarrhea Treatment</h1>

        <div class="belief-grid">
            <div class="belief-card">
                <div class="belief-title">Hot/Cold Theory</div>
                <div class="belief-description">Diarrhea seen as "heat" imbalance. Treatments include cooling foods, coconut water, and avoiding "hot" spices.</div>
            </div>
            <div class="belief-card">
                <div class="belief-title">Herbal Remedies</div>
                <div class="belief-description">Common use of neem, turmeric, pomegranate rind, and local herbs before seeking medical help.</div>
            </div>
            <div class="belief-card">
                <div class="belief-title">Spiritual Causes</div>
                <div class="belief-description">Attribution to evil spirits, curses, or divine punishment. Traditional healers consulted first.</div>
            </div>
            <div class="belief-card">
                <div class="belief-title">Dietary Restrictions</div>
                <div class="belief-description">Avoidance of certain foods during illness. Preference for bland, easy-to-digest traditional foods.</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h3>Traditional Remedies Usage by Region</h3>
                <div id="remedies-chart"></div>
            </div>
            <div>
                <h3>Healthcare Seeking Delay Factors</h3>
                <div id="delay-chart"></div>
            </div>
        </div>

        <div style="margin-top: 20px;">
            <h3>Cultural Competence Strategies</h3>
            <div id="competence-chart"></div>
        </div>
    </div>

    <script>
        // Traditional remedies usage
        const remediesData = {
            regions: ['North India', 'South India', 'East India', 'West India', 'North-East'],
            herbs: [75, 60, 80, 55, 85],
            spiritual: [45, 25, 65, 35, 70],
            modern: [55, 75, 45, 65, 40]
        };

        const remediesChart = {
            type: 'bar',
            data: {
                labels: remediesData.regions,
                datasets: [
                    {
                        label: 'Herbal Remedies (%)',
                        data: remediesData.herbs,
                        backgroundColor: 'rgba(34, 197, 94, 0.8)',
                        borderColor: 'rgba(34, 197, 94, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Spiritual Healing (%)',
                        data: remediesData.spiritual,
                        backgroundColor: 'rgba(245, 158, 11, 0.8)',
                        borderColor: 'rgba(245, 158, 11, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Modern Medicine (%)',
                        data: remediesData.modern,
                        backgroundColor: 'rgba(59, 130, 246, 0.8)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 100 }
                }
            }
        };

        // Healthcare seeking delay
        const delayData = {
            factors: ['Cultural Beliefs', 'Cost Concerns', 'Distance', 'Lack of Trust', 'Family Decision'],
            percentage: [35, 28, 20, 12, 5]
        };

        const delayChart = {
            type: 'doughnut',
            data: {
                labels: delayData.factors,
                datasets: [{
                    data: delayData.percentage,
                    backgroundColor: [
                        'rgba(255, 107, 107, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(40, 167, 69, 0.8)',
                        'rgba(23, 162, 184, 0.8)',
                        'rgba(108, 117, 125, 0.8)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        };

        // Cultural competence strategies
        const competenceData = {
            strategies: ['Language Support', 'Community Leaders', 'Traditional Healers', 'Family Counseling', 'Health Education'],
            effectiveness: [85, 78, 72, 88, 82]
        };

        const competenceChart = {
            type: 'horizontalBar',
            data: {
                labels: competenceData.strategies,
                datasets: [{
                    label: 'Effectiveness Score (%)',
                    data: competenceData.effectiveness,
                    backgroundColor: 'rgba(139, 92, 246, 0.8)',
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                scales: {
                    x: { beginAtZero: true, max: 100 }
                }
            }
        };

        Plotly.newPlot('remedies-chart', remediesChart.data, remediesChart.options);
        Plotly.newPlot('delay-chart', delayData, delayChart.options);
        Plotly.newPlot('competence-chart', competenceData, competenceChart.options);
    </script>
</body>
</html>
```

---

## Implementation Guide

### For Creating Visualizations

1. **Data Sources**: Use NHM, ICMR, and WHO India data
2. **Tools**: Plotly.js for interactive charts, D3.js for custom visualizations
3. **Colors**: Use Indian flag colors (saffron, white, green) with accessibility considerations
4. **Languages**: Include Hindi labels and regional language options
5. **Mobile Responsive**: Ensure all visualizations work on mobile devices

### For Educational Use

1. **Integration**: Embed in teaching modules and presentations
2. **Interactivity**: Add hover effects and drill-down capabilities
3. **Updates**: Regular data updates from government sources
4. **Accessibility**: Alt text, keyboard navigation, screen reader support

### For Program Monitoring

1. **Dashboards**: Real-time program performance tracking
2. **Alerts**: Automatic notifications for program deviations
3. **Reports**: Automated generation of progress reports
4. **Comparisons**: Before/after intervention visualizations

These Indian-specific visualizations provide culturally relevant, data-driven insights for medical education and public health program management in the Indian context.
