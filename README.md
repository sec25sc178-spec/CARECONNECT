# Lost Elderly Person – Community Assistance Prototype

A lightweight web prototype to help families and volunteers report, search, and track lost/missing elderly persons.

## Features
- Create a missing-person report with name, age, last-seen location, date, description, and contact details.
- Search reports by name, location, or description.
- Filter by report status.
- View sample reports for demonstration.
- Mark a report as resolved.
- Data is stored in the browser using `localStorage` for this prototype.

## Project Structure
```text
lost-elderly-person/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   └── sample-reports.json
├── docs/
│   └── TECHNICAL_DESIGN.md
├── tests/
│   └── TEST_CASES.md
├── LICENSE
└── README.md
```

## Setup / Run

No external packages are required.

### Option 1 – Open directly
Open `index.html` in a modern browser.

### Option 2 – Run a local server
Python 3:
```bash
python -m http.server 8000
```
Then open:
`http://localhost:8000`

## Environment Variables
This prototype does not require environment variables because it uses browser local storage only.

For a production version, configure:
```text
API_BASE_URL=https://your-api.example.com
MAPS_API_KEY=your-map-provider-key
```
Never commit real API keys or passwords to GitHub.

## Demo Flow
1. Open the application.
2. Review the sample missing-person reports.
3. Use the search box to find a report.
4. Click **Report Missing Person** and submit a new report.
5. Use **Mark Resolved** when the person is safely found.
6. Refresh the page to confirm local data persistence.

## Important Privacy Note
This is a prototype. Do not publish sensitive personal information, government ID numbers, medical records, or exact private addresses. A production system should implement authentication, authorization, encryption, consent, audit logs, and secure data retention.

## License
MIT License. See `LICENSE`.
