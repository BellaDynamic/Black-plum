#!/usr/bin/env python3
"""
Generate visual timeline Gantt chart for ASSESS for RAPID framework
"""

import plotly.figure_factory as ff
import plotly.graph_objects as go
from datetime import datetime, timedelta
import pandas as pd

# Define timeline phases with durations (in weeks)
phases = [
    dict(Task="Discernment (New Idea)", Start='2026-02-01', Finish='2026-02-28', Resource='Pre-GRID'),
    dict(Task="Phase 1: Assess/Pre-Gab", Start='2026-03-01', Finish='2026-03-14', Resource='GRID Reserved'),
    dict(Task="Phase 2: Assess/Gab", Start='2026-03-15', Finish='2026-04-11', Resource='GRID Active'),
    dict(Task="Phase 3: Assess/Pre-Rapid", Start='2026-04-12', Finish='2026-05-23', Resource='GRID Active'),
    dict(Task="Phase 4: Assess/Rapid", Start='2026-05-24', Finish='2026-08-15', Resource='GRID Active'),
    dict(Task="Phase 5: Assess/RF-FS", Start='2026-08-16', Finish='2026-10-10', Resource='GRID Active'),
    dict(Task="Pre-Launch Preparation", Start='2026-10-11', Finish='2026-11-07', Resource='Launch Ready'),
    dict(Task="LAUNCH EVENT", Start='2026-11-08', Finish='2026-11-08', Resource='Launch'),
    dict(Task="Planned Phase Q1", Start='2026-11-09', Finish='2027-02-06', Resource='Executing'),
    dict(Task="Planned Phase Q2", Start='2027-02-07', Finish='2027-05-08', Resource='Executing'),
    dict(Task="Planned Phase Q3", Start='2027-05-09', Finish='2027-08-07', Resource='Executing'),
    dict(Task="Planned Phase Q4", Start='2027-08-08', Finish='2027-11-06', Resource='Executing'),
]

# Define color mapping for resources
colors = {
    'Pre-GRID': 'rgb(169, 169, 169)',  # Gray
    'GRID Reserved': 'rgb(255, 215, 0)',  # Gold
    'GRID Active': 'rgb(70, 130, 180)',  # Steel Blue
    'Launch Ready': 'rgb(255, 140, 0)',  # Dark Orange
    'Launch': 'rgb(50, 205, 50)',  # Lime Green
    'Executing': 'rgb(72, 209, 204)',  # Medium Turquoise
}

# Create the Gantt chart
fig = ff.create_gantt(
    phases,
    colors=colors,
    index_col='Resource',
    show_colorbar=True,
    group_tasks=True,
    showgrid_x=True,
    showgrid_y=True,
    title='ASSESS for RAPID Timeline: From Idea to Year 2 Execution'
)

# Update layout for better readability
fig.update_layout(
    xaxis_title="Timeline (2026-2027)",
    yaxis_title="Phase",
    font=dict(size=12),
    height=700,
    width=1400,
    title_font_size=20,
    title_x=0.5,
    plot_bgcolor='white',
    paper_bgcolor='white',
)

# Add annotations for key milestones
fig.add_annotation(
    x="2026-08-15", y=4.5,
    text="Phase 4 Certification",
    showarrow=True,
    arrowhead=2,
    arrowcolor="red",
    font=dict(size=10, color="red", family="Arial Black")
)
fig.add_annotation(
    x="2026-10-10", y=5.5,
    text="Phase 5 Certification",
    showarrow=True,
    arrowhead=2,
    arrowcolor="red",
    font=dict(size=10, color="red", family="Arial Black")
)
fig.add_annotation(
    x="2026-11-08", y=7,
    text="LAUNCH",
    showarrow=True,
    arrowhead=2,
    arrowcolor="green",
    font=dict(size=12, color="green", family="Arial Black")
)

# Save as PNG
fig.write_image("/home/ubuntu/cohort-framework/timeline-gantt-chart.png", width=1400, height=700, scale=2)

print("✓ Timeline Gantt chart generated: timeline-gantt-chart.png")

# Create a second visualization: Phase Duration Breakdown
phase_durations = [
    {'Phase': 'Discernment', 'Weeks': 4, 'Category': 'Pre-Assessment'},
    {'Phase': 'Assess/Pre-Gab', 'Weeks': 2, 'Category': 'Assessment'},
    {'Phase': 'Assess/Gab', 'Weeks': 4, 'Category': 'Assessment'},
    {'Phase': 'Assess/Pre-Rapid', 'Weeks': 6, 'Category': 'Assessment'},
    {'Phase': 'Assess/Rapid', 'Weeks': 12, 'Category': 'Assessment'},
    {'Phase': 'Assess/RF-FS', 'Weeks': 8, 'Category': 'Assessment'},
    {'Phase': 'Pre-Launch', 'Weeks': 4, 'Category': 'Launch Prep'},
    {'Phase': 'Planned Phase (Year 1)', 'Weeks': 52, 'Category': 'Execution'},
]

df = pd.DataFrame(phase_durations)

fig2 = go.Figure()

# Create horizontal bar chart
colors_cat = {
    'Pre-Assessment': 'rgb(169, 169, 169)',
    'Assessment': 'rgb(70, 130, 180)',
    'Launch Prep': 'rgb(255, 140, 0)',
    'Execution': 'rgb(72, 209, 204)',
}

for category in df['Category'].unique():
    df_cat = df[df['Category'] == category]
    fig2.add_trace(go.Bar(
        y=df_cat['Phase'],
        x=df_cat['Weeks'],
        name=category,
        orientation='h',
        marker=dict(color=colors_cat[category]),
        text=df_cat['Weeks'].astype(str) + ' weeks',
        textposition='auto',
    ))

fig2.update_layout(
    title='ASSESS for RAPID: Phase Duration Breakdown',
    xaxis_title='Duration (Weeks)',
    yaxis_title='Phase',
    barmode='stack',
    height=600,
    width=1200,
    title_font_size=20,
    title_x=0.5,
    font=dict(size=12),
    plot_bgcolor='white',
    paper_bgcolor='white',
    showlegend=True,
)

fig2.write_image("/home/ubuntu/cohort-framework/phase-duration-breakdown.png", width=1200, height=600, scale=2)

print("✓ Phase duration breakdown generated: phase-duration-breakdown.png")

print("\n✓ All visual timeline assets created successfully!")
