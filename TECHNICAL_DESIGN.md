# Technical Design – FindSafe

## 1. Goal
Provide a simple community-facing workflow for reporting a missing elderly person and helping users discover active reports.

## 2. Architecture

```text
+---------------------+
|      User/Family    |
+----------+----------+
           |
           v
+---------------------+
| HTML/CSS/JavaScript |
|   Web Prototype     |
+----------+----------+
           |
           v
+---------------------+
| Browser localStorage|
|  Prototype Data     |
+---------------------+

Production extension:
           |
           v
+---------------------+       +-------------------+
| REST API / Backend  | ----> | Secure Database   |
+----------+----------+       +-------------------+
           |
           +----> Notification / SMS Service
           |
           +----> Maps / Location Service
```

## 3. Main Components
- **Presentation layer:** `index.html` and `css/style.css`.
- **Application layer:** `js/app.js`.
- **Prototype data layer:** browser `localStorage`.
- **Sample data:** `data/sample-reports.json`.
- **Documentation:** this file and `tests/TEST_CASES.md`.

## 4. Core Workflow
1. Family member enters a missing-person report.
2. Client-side validation checks required fields.
3. Report receives a unique prototype ID.
4. Report is stored locally and shown as ACTIVE.
5. Volunteers can search by name/location/description.
6. Family/authorized user can mark the report RESOLVED.

## 5. Production Architecture
For deployment, replace localStorage with an authenticated REST/GraphQL API and a secure database. Add:
- Role-based access control.
- Encryption in transit and at rest.
- Input validation and server-side authorization.
- Abuse/spam protection.
- Audit logging.
- Consent and data-retention policies.
- Optional geospatial search.
- SMS/push notifications.
- Human verification before publishing sensitive reports.

## 6. Security & Privacy
Do not expose government ID numbers, medical details, passwords, or unnecessary exact addresses. The prototype deliberately stores data only in the user's browser.
