# Test Case

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_LOGIN_001 |
| **Description** | Verify that a user can successfully log in using valid credentials and is redirected to the Account page. |
| **Preconditions** | 1. User is on the Login page.<br>2. User account exists and is active.<br>3. Application is accessible. |
| **Test Data** | Email: `admin@practicesoftwaretesting.com`<br>Password: `welcome01` |
| **Steps** | 1. Navigate to the Login page.<br>2. Enter `admin@practicesoftwaretesting.com` in the Email field.<br>3. Enter `welcome01` in the Password field.<br>4. Click the **Login** button.<br>5. Verify that the user is redirected to the Account page.<br>6. Capture a screenshot of the Account page. |
| **Expected Result** | User is successfully authenticated and redirected to `https://practicesoftwaretesting.com/account`. A screenshot named `login-valid-inputs.png` is saved successfully. |
| **Actual Result** | User was successfully logged in, redirected to the Account page, and the screenshot was captured and saved. |
| **Status** | Pass |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_LOGIN_002 |
| **Description** | Verify that appropriate validation messages are displayed when the user attempts to log in with empty Email and Password fields. |
| **Preconditions** | 1. User is on the Login page.<br>2. Application is accessible.<br>3. Login form is displayed. |
| **Test Data** | Email: `` (empty)<br>Password: `` (empty) |
| **Steps** | 1. Navigate to the Login page.<br>2. Leave the Email field empty.<br>3. Leave the Password field empty.<br>4. Click the **Login** button.<br>5. Verify the Email validation message.<br>6. Verify the Password validation message.<br>7. Capture a screenshot of the page. |
| **Expected Result** | The Email validation message **"Email is required"** is displayed. The Password validation message **"Password is required"** is displayed. User remains on the Login page and login is not performed. Screenshot is captured successfully. |
| **Actual Result** | The Email validation message **"Email is required"** was displayed. The Password validation message **"Password is required"** was displayed. User remained on the Login page and the screenshot was captured successfully. |
| **Status** | Pass |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_LOGIN_003 |
| **Description** | Verify that an appropriate validation message is displayed when the user enters an invalid email format and a valid password. |
| **Preconditions** | 1. User is on the Login page.<br>2. Application is accessible.<br>3. Login form is displayed. |
| **Test Data** | Email: `invalid-email`<br>Password: `welcome01` |
| **Steps** | 1. Navigate to the Login page.<br>2. Enter `invalid-email` in the Email field.<br>3. Enter `welcome01` in the Password field.<br>4. Click the **Login** button.<br>5. Verify the Email validation message.<br>6. Capture a screenshot of the page. |
| **Expected Result** | The Email validation message **"Email format is invalid"** is displayed. User remains on the Login page and login is not performed. Screenshot is captured successfully. |
| **Actual Result** | The Email validation message **"Email format is invalid"** was displayed. User remained on the Login page and the screenshot was captured successfully. |
| **Status** | Pass |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_LOGIN_004 |
| **Description** | Verify that an appropriate validation message is displayed when the user enters an email address containing spaces and a valid password. |
| **Preconditions** | 1. User is on the Login page.<br>2. Application is accessible.<br>3. Login form is displayed. |
| **Test Data** | Email: `custo mer1@a`<br>Password: `welcome01` |
| **Steps** | 1. Navigate to the Login page.<br>2. Enter `custo mer1@a` in the Email field.<br>3. Enter `welcome01` in the Password field.<br>4. Click the **Login** button.<br>5. Verify the Email validation message.<br>6. Capture a screenshot of the page. |
| **Expected Result** | The Email validation message **"Email format is invalid"** is displayed because the email address contains spaces and does not meet the required format. User remains on the Login page and login is not performed. Screenshot is captured successfully. |
| **Actual Result** | The Email validation message **"Email format is invalid"** was displayed. User remained on the Login page and the screenshot was captured successfully. |
| **Status** | Pass |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_LOGIN_005 |
| **Description** | Verify that an error message is displayed when the user enters a valid email address and an incorrect password. |
| **Preconditions** | 1. User is on the Login page.<br>2. Application is accessible.<br>3. A valid user account exists with email `customer@practicesoftwaretesting.com`.<br>4. Login form is displayed. |
| **Test Data** | Email: `customer@practicesoftwaretesting.com`<br>Password: `wrongpassword` |
| **Steps** | 1. Navigate to the Login page.<br>2. Enter `customer@practicesoftwaretesting.com` in the Email field.<br>3. Enter `wrongpassword` in the Password field.<br>4. Click the **Login** button three times.<br>5. Verify the login error message is displayed.<br>6. Capture a screenshot of the page. |
| **Expected Result** | The login attempt is rejected. The error message **"Invalid email or password"** is displayed. User remains on the Login page and is not authenticated. Screenshot is captured successfully. |
| **Actual Result** | The login attempt was rejected. The error message **"Invalid email or password"** was displayed. User remained on the Login page and the screenshot was captured successfully. |
| **Status** | Pass |


---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_LOGIN_006 |
| **Description** | Verify that a validation message is displayed when the user enters a valid email address and a password that is shorter than the minimum required length. |
| **Preconditions** | 1. User is on the Login page.<br>2. Application is accessible.<br>3. Login form is displayed. |
| **Test Data** | Email: `customer2@practicesoftwaretesting.com`<br>Password: `12` |
| **Steps** | 1. Navigate to the Login page.<br>2. Enter `customer2@practicesoftwaretesting.com` in the Email field.<br>3. Enter `12` in the Password field.<br>4. Click the **Login** button.<br>5. Verify the Password validation message is displayed.<br>6. Capture a screenshot of the page. |
| **Expected Result** | The Password validation message **"Password length is invalid"** is displayed. Login is not performed, and the user remains on the Login page. Screenshot is captured successfully. |
| **Actual Result** | The Password validation message **"Password length is invalid"** was displayed. Login was not performed, the user remained on the Login page, and the screenshot was captured successfully. |
| **Status** | Pass |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_LOGIN_007 |
| **Description** | Verify that a validation message is displayed when the user enters a valid email address and a password that exceeds the maximum allowed length. |
| **Preconditions** | 1. User is on the Login page.<br>2. Application is accessible.<br>3. Login form is displayed. |
| **Test Data** | Email: `admin@practicesoftwaretesting.com`<br>Password: `12345678901234567890123456789012345678901` |
| **Steps** | 1. Navigate to the Login page.<br>2. Enter `admin@practicesoftwaretesting.com` in the Email field.<br>3. Enter `12345678901234567890123456789012345678901` in the Password field.<br>4. Click the **Login** button.<br>5. Verify the Password validation message is displayed.<br>6. Capture a screenshot of the page. |
| **Expected Result** | The Password validation message **"Password length is invalid"** is displayed. Login is not performed, and the user remains on the Login page. Screenshot is captured successfully. |
| **Actual Result** | The Password validation message **"Password length is invalid"** was displayed. Login was not performed, the user remained on the Login page, and the screenshot was captured successfully. |
| **Status** | Pass |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_LOGIN_008 |
| **Description** | Verify that a user account is locked after multiple consecutive failed login attempts using the same valid email address and an incorrect password. |
| **Preconditions** | 1. User is on the Login page.<br>2. Application is accessible.<br>3. A valid user account exists with email `admin@practicesoftwaretesting.com`.<br>4. The account is not already locked.<br>5. Login form is displayed. |
| **Test Data** | Email: `admin@practicesoftwaretesting.com`<br>Password: `wrongpassword` |
| **Steps** | 1. Navigate to the Login page.<br>2. Enter `admin@practicesoftwaretesting.com` in the Email field.<br>3. Enter `wrongpassword` in the Password field.<br>4. Click the **Login** button repeatedly for 9 failed attempts.<br>5. Verify that attempts 1–8 display the error message **"Invalid email or password"**.<br>6. Verify that the 9th failed attempt displays the account lockout message.<br>7. Verify the account lockout message is visible.<br>8. Capture a screenshot of the page. |
| **Expected Result** | For the first 8 failed login attempts, the message **"Invalid email or password"** is displayed. On the 9th failed attempt, the account is locked and the message **"Account locked, too many failed attempts. Please contact the administrator."** is displayed. User remains on the Login page and authentication is denied. Screenshot is captured successfully. |
| **Actual Result** | For the first 8 failed login attempts, the message **"Invalid email or password"** was displayed. On the 9th failed attempt, the message **"Account locked, too many failed attempts. Please contact the administrator."** was displayed. User remained on the Login page and the screenshot was captured successfully. |
| **Status** | Pass |