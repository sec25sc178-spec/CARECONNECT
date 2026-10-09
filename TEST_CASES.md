# Test Cases

| ID | Test | Expected Result |
|---|---|---|
| TC01 | Open `index.html` | Dashboard loads with sample reports. |
| TC02 | Search `Chennai` | Chennai Central report is displayed. |
| TC03 | Filter `Active` | Only active reports are displayed. |
| TC04 | Filter `Resolved` | Only resolved reports are displayed. |
| TC05 | Submit a valid report | New report appears with ACTIVE status. |
| TC06 | Submit without required name | Browser validation prevents submission. |
| TC07 | Mark an active report resolved | Status changes to RESOLVED and active count decreases. |
| TC08 | Refresh after adding report | Report remains because localStorage is used. |
| TC09 | Search a non-existent name | Empty-state message appears. |
| TC10 | Open on mobile width | Layout changes to a single-column responsive layout. |
