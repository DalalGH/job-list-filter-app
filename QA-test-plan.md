# QA Test Plan

# Overview
This QA testing plan is conducted for the Job Listing Web Page developed, which features eight mock job cards, each displaying a job (title, company name, location, and a brief description). 

- The purpose of this test is to evaluate the following key aspects of the website: 

User Interface – ensuring all components render correctly.
Search Functionality – verifying real-time, case-insensitive filtering.
Responsive Design – assessing adaptability across screen sizes.
Loading Behavior – confirming correct display and duration of the loading spinner.
Empty State Handling – validating the appearance of the "No results found" message.

# Scope
- Nice colors of UI , good display of job cards
- Real-time filtering behavior
- Responsive layout on different screen sizes
- Loading spinner
- Empty state handling

# Devices/Browsers Used
- Chrome (Desktop)
- Microsoft Edge (Desktop)
---
Pass ✅ | ⚠️ Minor Bug | x crtical bug

# Test Scenarios

| Test Case ID | Feature  | Test Description | Expected Result  | Actual Result | Status / Severity |
|--------------|----------|------------------|------------------|---------------|-------------------|

✅| TC01 | Job Card UI | Load the page and view the default job cards | 8 job cards are displayed clearly As expected|
✅| TC02 | Search Filter  | Type "developer" in search bar | Only jobs matching "developer" are shown As expected|
⚠️| TC03 | No Results Msg | Type random string like "3r4rv"| "No results found" message is displayed| Message displayed  but slightly misaligned|
⚠️| TC04 | Responsiveness | Resize window to multiple pixels | Cards stack vertically and are readable| Layout shows only one card on very small width , vertically aligned|
✅| TC05 | Loading Spinner| Refresh page and watch loading state| Spinner shows for 3 second before jobs appear | As expected|


# Notes
- All features work as intended.
- No blocking issues.
