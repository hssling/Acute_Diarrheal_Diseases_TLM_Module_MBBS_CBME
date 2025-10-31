import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime
import json

# Page configuration
st.set_page_config(
    page_title="Acute Diarrheal Diseases - Teaching Dashboard",
    page_icon="🩺",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
<style>
    .main-header {
        font-size: 2.5rem;
        font-weight: bold;
        color: #1f2937;
        text-align: center;
        margin-bottom: 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .metric-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #667eea;
        margin-bottom: 1rem;
    }
    .metric-value {
        font-size: 2rem;
        font-weight: bold;
        color: #dc2626;
        margin-bottom: 0.5rem;
    }
    .metric-label {
        color: #6b7280;
        font-size: 0.9rem;
    }
    .case-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;
        border-left: 4px solid #10b981;
    }
    .quiz-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;
    }
    .stTabs [data-baseweb="tab-list"] {
        gap: 2px;
    }
    .stTabs [data-baseweb="tab"] {
        height: 50px;
        white-space: pre-wrap;
        background-color: #f8fafc;
        border-radius: 4px 4px 0 0;
        gap: 1px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .stTabs [aria-selected="true"] {
        background-color: #667eea !important;
        color: white !important;
    }
</style>
""", unsafe_allow_html=True)

# Sample data for visualizations
epidemiology_data = pd.DataFrame({
    'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'Cases': [1200, 1100, 1300, 1500, 1800, 2200, 2800, 2600, 2100, 1700, 1400, 1300],
    'Deaths': [12, 11, 13, 15, 18, 22, 28, 26, 21, 17, 14, 13]
})

age_distribution = pd.DataFrame({
    'Age_Group': ['<1 year', '1-2 years', '2-5 years', '>5 years'],
    'Percentage': [30, 40, 25, 5],
    'Cases': [9000, 12000, 7500, 1500]
})

etiology_data = pd.DataFrame({
    'Pathogen': ['Rotavirus', 'Norovirus', 'E. coli', 'Shigella', 'Salmonella', 'Campylobacter', 'Giardia', 'Cryptosporidium', 'Others'],
    'Percentage': [35, 18, 12, 8, 6, 5, 4, 3, 9],
    'Cases': [10500, 5400, 3600, 2400, 1800, 1500, 1200, 900, 2700]
})

regional_data = pd.DataFrame({
    'Region': ['South Asia', 'Sub-Saharan Africa', 'Latin America', 'East Asia', 'Middle East', 'North Africa'],
    'Incidence_Rate': [85, 78, 45, 32, 28, 35],
    'Mortality_Rate': [12, 15, 8, 5, 6, 7]
})

# Quiz questions
quiz_questions = [
    {
        "question": "Which of the following defines acute diarrhea according to WHO?",
        "options": [
            "Passage of 1-2 loose stools per day",
            "Passage of 3 or more loose stools per day",
            "Passage of formed stools with mucus",
            "Passage of stools with blood only"
        ],
        "correct": 1,
        "explanation": "WHO defines acute diarrhea as the passage of 3 or more loose or liquid stools per day, or more frequent passage than normal for the individual."
    },
    {
        "question": "Which sign is most reliable for assessing severe dehydration in children?",
        "options": [
            "Dry mouth",
            "Sunken eyes",
            "Slow skin pinch (>2 seconds)",
            "Decreased urine output"
        ],
        "correct": 2,
        "explanation": "A slow skin pinch that takes more than 2 seconds to return to normal is the most reliable sign of severe dehydration."
    },
    {
        "question": "What is the sodium concentration in WHO recommended ORS?",
        "options": ["45 mmol/L", "60 mmol/L", "75 mmol/L", "90 mmol/L"],
        "correct": 2,
        "explanation": "WHO recommended ORS contains 75 mmol/L of sodium, along with glucose (75 mmol/L), potassium (20 mmol/L), and citrate (10 mmol/L)."
    },
    {
        "question": "Zinc supplementation reduces diarrhea duration by:",
        "options": ["10%", "25%", "40%", "50%"],
        "correct": 1,
        "explanation": "Zinc supplementation reduces the duration of acute diarrhea by about 25% and decreases stool volume by 30%."
    },
    {
        "question": "Rice-water stools are characteristic of:",
        "options": ["Viral gastroenteritis", "Bacillary dysentery", "Cholera", "Rotavirus infection"],
        "correct": 2,
        "explanation": "Rice-water stools (colorless, odorless, with flecks of mucus) are characteristic of cholera caused by Vibrio cholerae."
    }
]

# Case studies data
case_studies = {
    "Watery Diarrhea": {
        "patient": "Aarav Kumar, 2.5 years",
        "complaint": "Loose motions since yesterday",
        "findings": "8-10 watery stools, vomiting, lethargic",
        "diagnosis": "Acute watery diarrhea (some dehydration)",
        "management": "ORS therapy, zinc supplementation, continued feeding"
    },
    "Bloody Diarrhea": {
        "patient": "Priya Sharma, 14 years",
        "complaint": "Blood in stools for 3 days",
        "findings": "10-12 episodes with abdominal pain, fever",
        "diagnosis": "Bacillary dysentery (Shigella)",
        "management": "Antibiotics, ORS, supportive care"
    },
    "Cholera": {
        "patient": "Ramesh Yadav, 35 years",
        "complaint": "Severe vomiting and diarrhea",
        "findings": "Rice-water stools, severe dehydration",
        "diagnosis": "Cholera with hypovolemic shock",
        "management": "IV fluids, antibiotics, public health measures"
    }
}

# Sidebar navigation
st.sidebar.title("🩺 Teaching Dashboard")
page = st.sidebar.radio("Navigate to:", [
    "🏠 Overview",
    "📊 Epidemiology",
    "🩻 Clinical Tools",
    "📋 Case Studies",
    "❓ Knowledge Quiz",
    "📚 Resources",
    "📈 Progress Analytics"
])

# Initialize session state
if 'quiz_answers' not in st.session_state:
    st.session_state.quiz_answers = []
if 'quiz_score' not in st.session_state:
    st.session_state.quiz_score = 0
if 'quiz_completed' not in st.session_state:
    st.session_state.quiz_completed = False

# Main content
if page == "🏠 Overview":
    st.markdown('<h1 class="main-header">Acute Diarrheal Diseases</h1>', unsafe_allow_html=True)
    st.markdown('<p style="text-align: center; font-size: 1.2rem; color: #6b7280; margin-bottom: 3rem;">Interactive Teaching Dashboard for MBBS 3rd Year Students</p>', unsafe_allow_html=True)

    # Key metrics
    col1, col2, col3, col4 = st.columns(4)

    with col1:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-value">443,832</div>
            <div class="metric-label">Annual Deaths (Children <5)</div>
        </div>
        """, unsafe_allow_html=True)

    with col2:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-value">1.7B</div>
            <div class="metric-label">Cases Worldwide</div>
        </div>
        """, unsafe_allow_html=True)

    with col3:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-value">3rd</div>
            <div class="metric-label">Leading Cause of Death</div>
        </div>
        """, unsafe_allow_html=True)

    with col4:
        st.markdown("""
        <div class="metric-card">
            <div class="metric-value">60%</div>
            <div class="metric-label">Viral Causes</div>
        </div>
        """, unsafe_allow_html=True)

    # Overview content
    st.header("📖 Teaching Package Overview")

    col1, col2 = st.columns(2)

    with col1:
        st.subheader("🎯 Learning Objectives")
        st.markdown("""
        - Define acute diarrhea and classify clinical types
        - Understand epidemiology and risk factors
        - Apply appropriate management strategies
        - Address psychosocial aspects of care
        - Implement prevention and control measures
        """)

    with col2:
        st.subheader("📚 Content Structure")
        st.markdown("""
        - **Theoretical Foundations**: Epidemiology, pathophysiology
        - **Clinical Cases**: 3 detailed clinico-psychosocial scenarios
        - **Management Guidelines**: ORS, zinc, antibiotics
        - **Prevention Strategies**: WASH, vaccination, community interventions
        - **Assessment Tools**: MCQs, OSCE stations, practical exams
        """)

    st.header("🚀 Interactive Features")
    st.info("Navigate through the sidebar to explore interactive visualizations, clinical tools, case studies, and assessment modules.")

elif page == "📊 Epidemiology":
    st.header("📊 Epidemiology Dashboard")

    # Monthly trends
    st.subheader("📈 Monthly Case Distribution")
    fig_monthly = px.line(epidemiology_data, x='Month', y=['Cases', 'Deaths'],
                         title="Diarrhea Cases and Deaths by Month",
                         labels={'value': 'Count', 'variable': 'Metric'})
    fig_monthly.update_layout(height=400)
    st.plotly_chart(fig_monthly, use_container_width=True)

    col1, col2 = st.columns(2)

    with col1:
        st.subheader("👶 Age Distribution")
        fig_age = px.pie(age_distribution, values='Percentage', names='Age_Group',
                        title="Age Distribution of Diarrhea Cases")
        fig_age.update_layout(height=400)
        st.plotly_chart(fig_age, use_container_width=True)

    with col2:
        st.subheader("🦠 Etiology Breakdown")
        fig_etiology = px.bar(etiology_data.head(6), x='Pathogen', y='Cases',
                             title="Common Diarrhea Pathogens",
                             color='Pathogen',
                             color_discrete_sequence=px.colors.qualitative.Set3)
        fig_etiology.update_layout(height=400)
        st.plotly_chart(fig_etiology, use_container_width=True)

    st.subheader("🌍 Regional Comparison")
    fig_regional = go.Figure()

    fig_regional.add_trace(go.Scatterpolar(
        r=regional_data['Incidence_Rate'],
        theta=regional_data['Region'],
        fill='toself',
        name='Incidence Rate'
    ))

    fig_regional.update_layout(
        polar=dict(radialaxis=dict(visible=True, range=[0, 100])),
        showlegend=False,
        title="Regional Incidence Rates (per 1000 children)",
        height=500
    )
    st.plotly_chart(fig_regional, use_container_width=True)

elif page == "🩻 Clinical Tools":
    st.header("🩻 Clinical Decision Support Tools")

    tab1, tab2, tab3 = st.tabs(["Dehydration Calculator", "ORS Calculator", "Management Guide"])

    with tab1:
        st.subheader("🩺 Dehydration Assessment Calculator")

        col1, col2 = st.columns(2)

        with col1:
            mental = st.selectbox("Mental Status:", ["", "Normal, alert", "Restless, irritable", "Lethargic or unconscious"])
            eyes = st.selectbox("Eyes:", ["", "Normal", "Sunken"])
            tears = st.selectbox("Tears:", ["", "Present when crying", "Absent when crying"])

        with col2:
            mouth = st.selectbox("Mouth:", ["", "Moist", "Dry"])
            skin = st.selectbox("Skin Pinch:", ["", "Goes back quickly", "Goes back slowly (>2 seconds)"])
            thirst = st.selectbox("Thirst:", ["", "Drinks normally, not thirsty", "Drinks eagerly, thirsty", "Unable to drink"])

        if st.button("Assess Dehydration", type="primary"):
            # Assessment logic
            severe_signs = [mental == "Lethargic or unconscious", eyes == "Sunken",
                          skin == "Goes back slowly (>2 seconds)", thirst == "Unable to drink"]
            some_signs = [mental == "Restless, irritable", eyes == "Sunken", thirst == "Drinks eagerly, thirsty",
                         mouth == "Dry", tears == "Absent when crying"]

            if sum(severe_signs) >= 2:
                st.error("🚨 **Severe Dehydration**")
                st.write("**Immediate Action Required:** Start IV fluids (100 mL/kg Ringer's lactate over 3 hours)")
            elif sum(some_signs) >= 2:
                st.warning("⚠️ **Some Dehydration**")
                st.write("**Treatment:** ORS 50-100 mL/kg over 4 hours + Zinc supplementation")
            elif all([mental == "Normal, alert", eyes == "Normal", mouth == "Moist",
                     tears == "Present when crying", skin == "Goes back quickly", thirst == "Drinks normally, not thirsty"]):
                st.success("✅ **No Dehydration**")
                st.write("**Management:** Home care + Zinc supplementation + Follow-up in 2 days")
            else:
                st.info("🤔 **Some Dehydration**")
                st.write("**Treatment:** ORS therapy + Close monitoring")

    with tab2:
        st.subheader("🧮 ORS Calculator")

        weight = st.number_input("Patient Weight (kg):", min_value=1.0, max_value=50.0, step=0.5)
        dehydration = st.selectbox("Dehydration Status:", ["No Dehydration", "Some Dehydration", "Severe Dehydration"])

        if st.button("Calculate ORS Volume", type="primary"):
            if dehydration == "Severe Dehydration":
                deficit = weight * 100  # 100 mL/kg for severe
                maintenance = weight * 100  # 100 mL/kg/day
            elif dehydration == "Some Dehydration":
                deficit = weight * 50   # 50 mL/kg for some
                maintenance = weight * 100  # 100 mL/kg/day
            else:
                deficit = 0
                maintenance = weight * 100  # 100 mL/kg/day

            # First 4 hours: deficit + 1/4 of daily maintenance
            first_4_hours = deficit + (maintenance / 6)
            hourly_rate = first_4_hours / 4

            st.success("💧 **ORS Calculation Results**")
            col1, col2, col3 = st.columns(3)
            with col1:
                st.metric("Deficit Replacement", f"{deficit:.0f} mL")
            with col2:
                st.metric("First 4 Hours", f"{first_4_hours:.0f} mL")
            with col3:
                st.metric("Hourly Rate", f"{hourly_rate:.0f} mL/hour")

            st.info("**Note:** Continue breastfeeding. Monitor for vomiting and adjust rate as needed.")

    with tab3:
        st.subheader("📋 Management Guidelines")

        st.markdown("""
        ### A-B-C-D Approach to Diarrhea Management

        1. **Assess** dehydration status using WHO criteria
        2. **Rehydrate** appropriately:
           - No dehydration: Home care + Zinc
           - Some dehydration: ORS + Zinc + Continue feeding
           - Severe dehydration: IV fluids + Zinc + Antibiotics
        3. **Maintain** hydration during treatment
        4. **Feed** the child (continue breastfeeding/diet)
        5. **Follow-up** regularly

        ### Key Interventions:
        - **ORS**: Life-saving oral rehydration solution
        - **Zinc**: Reduces duration by 25%, decreases stool volume by 30%
        - **Antibiotics**: Selective use for bloody diarrhea and cholera
        - **Feeding**: Continue age-appropriate diet during illness
        """)

elif page == "📋 Case Studies":
    st.header("📋 Interactive Case Studies")

    case_selection = st.selectbox("Select Case Study:", list(case_studies.keys()))

    if case_selection:
        case = case_studies[case_selection]

        st.markdown(f"""
        <div class="case-card">
            <h3>👤 Patient: {case['patient']}</h3>
            <p><strong>Chief Complaint:</strong> {case['complaint']}</p>
            <p><strong>Clinical Findings:</strong> {case['findings']}</p>
            <p><strong>Diagnosis:</strong> {case['diagnosis']}</p>
            <p><strong>Management:</strong> {case['management']}</p>
        </div>
        """, unsafe_allow_html=True)

        st.subheader("🔍 Clinical Reasoning Questions")

        if case_selection == "Watery Diarrhea":
            st.markdown("""
            1. **What is the likely etiology?** (Viral gastroenteritis, most commonly rotavirus)
            2. **Why is ORS the treatment of choice?** (Corrects dehydration and electrolyte imbalance)
            3. **What psychosocial factors need consideration?** (Maternal anxiety, economic impact)
            4. **What preventive measures should be emphasized?** (Handwashing, safe water, vaccination)
            """)

        elif case_selection == "Bloody Diarrhea":
            st.markdown("""
            1. **What differentiates this from watery diarrhea?** (Blood/mucus in stools, tenesmus, fever)
            2. **Why are antibiotics indicated?** (Shigella is susceptible to ciprofloxacin)
            3. **What complications should be monitored?** (Hemolytic uremic syndrome, toxic megacolon)
            4. **How does this affect adolescent patients?** (School absenteeism, social stigma)
            """)

        else:  # Cholera
            st.markdown("""
            1. **What makes this a public health emergency?** (High infectivity, rapid spread in communities)
            2. **Why is IV rehydration critical?** (Profuse fluid loss, unable to take oral fluids)
            3. **What infection control measures are needed?** (Contact tracing, water chlorination)
            4. **How does climate change affect cholera outbreaks?** (Flooding, poor sanitation)
            """)

elif page == "❓ Knowledge Quiz":
    st.header("❓ Knowledge Assessment Quiz")

    if not st.session_state.quiz_completed:
        # Quiz interface
        if len(st.session_state.quiz_answers) < len(quiz_questions):
            current_q = len(st.session_state.quiz_answers)
            question = quiz_questions[current_q]

            st.markdown(f"""
            <div class="quiz-card">
                <h3>Question {current_q + 1} of {len(quiz_questions)}</h3>
                <p style="font-size: 1.1rem; margin: 1rem 0;">{question['question']}</p>
            </div>
            """, unsafe_allow_html=True)

            answer = st.radio("Select your answer:", question['options'], key=f"q_{current_q}")

            col1, col2 = st.columns([1, 4])
            with col1:
                if st.button("Submit Answer", type="primary"):
                    st.session_state.quiz_answers.append(question['options'].index(answer))
                    st.rerun()

        else:
            # Calculate score
            correct_answers = 0
            for i, answer in enumerate(st.session_state.quiz_answers):
                if answer == quiz_questions[i]['correct']:
                    correct_answers += 1

            st.session_state.quiz_score = correct_answers
            st.session_state.quiz_completed = True
            st.rerun()

    if st.session_state.quiz_completed:
        # Results
        score = st.session_state.quiz_score
        percentage = (score / len(quiz_questions)) * 100

        st.markdown(f"""
        <div style="text-align: center; margin: 2rem 0;">
            <h2>Quiz Completed!</h2>
            <div style="font-size: 3rem; font-weight: bold; color: {'#10b981' if percentage >= 80 else '#f59e0b' if percentage >= 60 else '#dc2626'}; margin: 1rem 0;">
                {percentage:.0f}%
            </div>
            <p style="font-size: 1.2rem;">You scored {score} out of {len(quiz_questions)} questions</p>
        </div>
        """, unsafe_allow_html=True)

        # Review answers
        st.subheader("📝 Answer Review")
        for i, question in enumerate(quiz_questions):
            user_answer = st.session_state.quiz_answers[i]
            is_correct = user_answer == question['correct']

            with st.expander(f"Question {i+1}: {'✅ Correct' if is_correct else '❌ Incorrect'}"):
                st.write(f"**Question:** {question['question']}")
                st.write(f"**Your Answer:** {question['options'][user_answer]}")
                st.write(f"**Correct Answer:** {question['options'][question['correct']]}")
                st.write(f"**Explanation:** {question['explanation']}")

        if st.button("Retake Quiz", type="secondary"):
            st.session_state.quiz_answers = []
            st.session_state.quiz_completed = False
            st.rerun()

elif page == "📚 Resources":
    st.header("📚 Learning Resources")

    col1, col2 = st.columns(2)

    with col1:
        st.subheader("📖 Key References")
        st.markdown("""
        - **WHO Guidelines** (2024): Treatment of Diarrhoea
        - **IAP Textbook** (2020): Pediatric Gastroenterology
        - **Nelson Pediatrics** (2023): Diarrhea chapter
        - **The Lancet** (2020): Global burden of diarrheal diseases
        """)

        st.subheader("🖥️ Online Platforms")
        st.markdown("""
        - **UpToDate**: Clinical decision support
        - **Medscape**: Continuing medical education
        - **BMJ Best Practice**: Evidence-based guidelines
        - **CDC Travelers' Health**: Prevention strategies
        """)

    with col2:
        st.subheader("📱 Mobile Apps")
        st.markdown("""
        - **IMCI App** (WHO): Integrated case management
        - **Pediatric Oncall**: Clinical calculators
        - **Medi-Map**: Drug information
        - **CDC Diarrhea Calculator**: Assessment tool
        """)

        st.subheader("🎥 Video Resources")
        st.markdown("""
        - **WHO Training Videos**: ORS preparation
        - **CDC Hand Hygiene**: Prevention techniques
        - **Johns Hopkins**: Case discussions
        - **BMJ Learning**: Interactive modules
        """)

    st.subheader("🔗 Quick Links")
    col1, col2, col3, col4 = st.columns(4)

    with col1:
        if st.button("WHO Guidelines", type="secondary"):
            st.markdown("[Open WHO Diarrhea Guidelines](https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease)")

    with col2:
        if st.button("IAP Resources", type="secondary"):
            st.markdown("[Open IAP Website](https://iapindia.org/)")

    with col3:
        if st.button("CDC Data", type="secondary"):
            st.markdown("[Open CDC Diarrhea Page](https://www.cdc.gov/diarrhea/)")

    with col4:
        if st.button("Research Papers", type="secondary"):
            st.markdown("[Open PubMed Search](https://pubmed.ncbi.nlm.nih.gov/?term=acute+diarrhea+children)")

elif page == "📈 Progress Analytics":
    st.header("📈 Learning Progress Analytics")

    # Mock progress data
    progress_data = pd.DataFrame({
        'Module': ['Theoretical Foundations', 'Clinical Assessment', 'Management Strategies',
                  'Case Studies', 'Prevention & Control', 'Psychosocial Aspects'],
        'Completion': [100, 95, 88, 90, 82, 78],
        'Time_Spent': [45, 60, 75, 90, 55, 40],
        'Score': [92, 88, 85, 90, 82, 78]
    })

    col1, col2 = st.columns(2)

    with col1:
        st.subheader("📊 Module Completion")
        fig_completion = px.bar(progress_data, x='Module', y='Completion',
                               title="Module Completion Percentage",
                               color='Completion',
                               color_continuous_scale='Blues')
        fig_completion.update_layout(height=400)
        st.plotly_chart(fig_completion, use_container_width=True)

    with col2:
        st.subheader("⏱️ Time Distribution")
        fig_time = px.pie(progress_data, values='Time_Spent', names='Module',
                         title="Time Spent per Module (minutes)")
        fig_time.update_layout(height=400)
        st.plotly_chart(fig_time, use_container_width=True)

    st.subheader("📈 Performance Trends")
    fig_trends = go.Figure()

    fig_trends.add_trace(go.Scatter(
        x=progress_data['Module'],
        y=progress_data['Score'],
        mode='lines+markers',
        name='Module Scores',
        line=dict(color='#667eea', width=3)
    ))

    fig_trends.update_layout(
        title="Learning Performance Across Modules",
        xaxis_title="Module",
        yaxis_title="Score (%)",
        height=400
    )
    st.plotly_chart(fig_trends, use_container_width=True)

    # Achievement badges
    st.subheader("🏆 Achievements Unlocked")
    col1, col2, col3 = st.columns(3)

    with col1:
        st.success("🧠 **Knowledge Seeker** - Completed all theory modules")

    with col2:
        st.info("🔍 **Assessment Master** - Expert in dehydration evaluation")

    with col3:
        st.warning("🧮 **Calculation Wizard** - Perfect ORS calculations")

    col1, col2, col3 = st.columns(3)

    with col1:
        st.error("📋 **Case Solver** - Analyzed complex patient scenarios")

    with col2:
        st.success("🌍 **Public Health Advocate** - Understanding prevention strategies")

    with col3:
        st.info("💡 **Quick Thinker** - Fast quiz responses")

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #6b7280; padding: 1rem;">
    <p>🩺 Acute Diarrheal Diseases - Interactive Teaching Dashboard | MBBS 3rd Year Module</p>
    <p>Built with Streamlit | Data sources: WHO, CDC, IAP Guidelines</p>
</div>
""", unsafe_allow_html=True)
