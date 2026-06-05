# Test ID: #E2E001 - Add to Cart

## Test Scenario: Login, Search Product, Validate Results, and Add to Cart

## Objective:
Verify if use can Login using the pre-made account by the website.
Can search product, check product found total value, select product, and add to cart.
And check if product are listed at checkout

---

## Test Steps

### 1. Login
- Navigate to the website
- Click **Sign In**
- Enter email: `customer2@practicesoftwaretesting.com`
- Enter password: `welcome01`
- Click **Login**
- Verify redirection to the accounts
- Click **Home**


### 2. Search Product
- Enter search term: `Pliers`
- Click **Search**
- Verify total product found
- Verify listed product based on search

### 3. Add To Cart
- Click product: `Combination Pliers`
- Verify redirection
- Click **Add to Cart**


### 4. Go To Checkout
- Click **Checkout**

--- 

## Preconditions
- User account exists:
  - Email: `customer2@practicesoftwaretesting.com`
  - Password: `welcome01`
- User is on: `https://practicesoftwaretesting.com/`

---

## Browser:
- Desktop Chrome 
- Desktop  Firefox
- Desktop Safari

--- 

### Expectations:
Once login, direct to homepage and search for product `Pliers`, click product, and click **Add to Cart**

---

### Actual Result: As Expected
### Test Status: Passed