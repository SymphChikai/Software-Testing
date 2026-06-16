# Test Plan

## Project Information

| Item | Details |
|--------|--------|
| Project Name | Automation Exercise Website Testing |
| Version | 1.0 |
| Prepared By | Ralph Vener |
| Date | June 2026 |

---

# 1. Introduction

## Purpose

The purpose of this test plan is to verify that the Automation Exercise website functions correctly and provides a reliable user experience.

## Scope

This testing effort will focus on validating the core functionality of the website, including:

- User Registration
- Login and Logout
- Product Browsing
- Product Search
- Shopping Cart Management
- Checkout Process
- Contact Us Form

### Types of Testing Included

- Functional Testing
- UI Testing
- Exploratory Testing
- Smoke Testing
- Regression Testing
- Cross-browser Testing 
---

# 2. Test Objectives

The objectives of this testing activity are:

- Verify that core user workflows function as expected.
- Validate that UI elements display correctly.
- Ensure user inputs are handled appropriately.
- Identify defects and usability issues.
- Verify expected system behavior under normal usage conditions.
- Verify compatibility of the system to accross browsers.

---

# 3. Features to be Tested

| Module | Features |
|----------|----------|
| Registration | Create New Account |
| Authentication | Login, Logout |
| Products | View Product Listings |
| Search | Search Products |
| Cart | Add, Update, Remove Products |
| Checkout | Place Orders |
| Contact | Submit Contact Form |

---

# 4. Features Not to be Tested

The following areas are outside the scope of testing:

- Database validation
- API validation
- Performance testing
- Load testing
- Security testing
- Server-side business logic
- Source code review
- Mobile and Cross-Platform Testing
---

# 5. Test Strategy

## Manual Testing

The following manual testing techniques will be used:

### Functional Testing

Verify that each feature works according to requirements.

### UI Testing

Validate layout, labels, buttons, forms, and navigation.

### Exploratory Testing

Perform unscripted testing to discover unexpected defects.

### Regression Testing

Re-test existing functionality after defect fixes or updates.


### Cross-Browser Testing

Navigate and perform testing accross browsers including chronium, firefox, and safari.

---

## Automation Testing

### Tool

- Playwright
- TypeScript

### Automated Scenarios

- User Registration
- User Login
- Product Search
- Add Product to Cart
- Remove Product from Cart

---

# 6. Test Environment

| Component | Details |
|------------|------------|
| Application | AutomationExercise.com |
| Browser | Google Chrome (Latest Version), Firefox, Safari, Chroniuum (Through Playwright) |
| Operating System | Windows 11 |
| Internet Connection | Stable Broadband |
| Automation Tool | Playwright |

---

# 7. Entry Criteria

Testing may begin when:

- Website is accessible.
- Test environment is available.
- Test cases have been prepared.
- Required test data is available.

---

# 8. Exit Criteria

Testing will be considered complete when:

- All planned test cases have been executed.
- Critical and blocker defects have been resolved or documented.
- Test execution results have been recorded.
- Test summary report has been completed.

---

# 9. Test Deliverables

The following artifacts will be produced during testing:

- Test Plan
- Test Cases
- Bug Reports
- Test Execution Report
- Automation Scripts
- Test Summary Report

---

# 10. Risk Assessment

| Risk | Impact | Mitigation |
|--------|--------|--------|
| Website downtime | Testing delays | Retry during available periods |
| Test data conflicts | Failed executions | Use unique test accounts |
| Browser compatibility issues | Inconsistent results | Use latest browser version |
| Third-party service interruptions | Incomplete test execution | Record issue and retest later |

---

# 11. Assumptions

- The website remains publicly accessible throughout testing.
- Testers have access to a stable internet connection.
- No backend or database access is available.
- Testing is performed from the perspective of an end user.


---

# Revision History

| Version | Author | Description |
|-----------|-----------|-----------|
| 1.0  | Ralph Vener | Initial Test Plan |
