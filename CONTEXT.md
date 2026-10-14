# Mrittika Roy — Portfolio

Personal academic portfolio aimed primarily at PhD supervisors and admissions committees.

## Language

**News**:
The dated, append-only list of recent updates, shown newest first near the top of the site.
_Avoid_: Announcements, Updates feed, Banner

**News entry**:
One dated line in **News** describing a single event, optionally linking to supporting material (e.g. the CV).
_Avoid_: Post, Milestone

**Journey**:
The narrative of how Mrittika came to her research questions, told as a timeline of milestones.
_Avoid_: News, History

**Language skill**:
A spoken language with its proficiency level (e.g. Bengali — Native; English — IELTS band scores).
_Avoid_: Qualification, Education, Certification

**Education**:
Formal degree programmes completed or in progress. Does not include language tests.
_Avoid_: Qualifications

## Relationships

- A **News entry** belongs to **News**; **News** holds zero or more **News entries**
- An IELTS result appears as a **Language skill** (permanent, while valid) and may also be announced once as a **News entry**
- **Journey** tells the story; **News** records dated events — an event can appear in News without being added to Journey

## Example dialogue

> **Dev:** "The IELTS result is in — should it go under **Education**?"
> **Mrittika:** "No, it's a **Language skill**. Add it to Languages, and post a **News entry** for the month it arrived."

## Flagged ambiguities

- "Update" was used for both the IELTS announcement and the CV refresh — resolved: both are described by a single **News entry**.
- IELTS was initially placed under **Education** — resolved: it is a **Language skill**, not an educational qualification.
