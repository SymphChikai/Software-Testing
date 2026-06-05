# Test Case

## POSTIVE

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_SEARCH_001 - Existing Product |
| **Description** | Very that the serach bar can search and show product related to the searched item. |
| **Preconditions** | 1. User is on the Homepage.<br>2. User click search bar, type product, and click search button.<br>3. Product related to search show. |
| **Test Data** | product search: `pliers` |
| **Steps** | 1. Navigate to the Home page.<br>2. Locate search bar field.<br>3. Enter `pliers` in the search field.<br>4. Click the **Search** button.<br>5. Verify that the search term show `pliers` and  all product listed show the same value related to the search.<br>6. Capture a screenshot of the Home Page.  |
| **Expected Result** | Home page shows products that have `pliers` at the name. And a screenshots named `search-product.png` is saved successfully. |
| **Actual Result** | Home page shows 4 product that all contain `Pliers` on its name. Then successfully taeke screenshot |
| **Status** | PASS |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_SEARCH_005 - Partial Search|
| **Description** | Very that the partial searching for existing product show product listed. |
| **Preconditions** | 1. User is on the Homepage.<br>2. User click search bar, type `ers`, and click search button.<br>3. Shows prodct that contain `ers` on its product name. |
| **Test Data** | product search: `ers` |
| **Steps** | 1. Navigate to the Home page.<br>2. Locate search bar field.<br>3. Enter `ers` in the search field.<br>4. Click the **Search** button.<br>5. Verify that the search term show `ers` and  productt that have contain `ers` shows.<br>6. Capture a screenshot of the Home Page.  |
| **Expected Result** | Home page shows listed product such as ` Long Nose Pliers, Slip Joint Pliers, Open-end Spanners (Set), Washers, and Workbench with Drawers`. And a screenshots named `search-partial-input.png` is saved successfully. |
| **Actual Result** | Search term shows `ers`, and There product shown. Then successfully taeke screenshot  |
| **Status** | PASS |

---

## NEGATIVE 

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_SEARCH_002 - Not Existing Product Search|
| **Description** | Very that the non-exsisting product will not show any product. |
| **Preconditions** | 1. User is on the Homepage.<br>2. User click search bar, type non-existing product, and click search button.<br>3. Product no product found. |
| **Test Data** | product search: `ItemNotInCatalog` |
| **Steps** | 1. Navigate to the Home page.<br>2. Locate search bar field.<br>3. Enter `ItemNotInCatalog` in the search field.<br>4. Click the **Search** button.<br>5. Verify that the search term show `ItemNotInCatalog` and  no product is found.<br>6. Capture a screenshot of the Home Page.  |
| **Expected Result** | Home page shows text containing `There are no products found.`. And a screenshots named `search-no-result.png` is saved successfully. |
| **Actual Result** | Search term shows `ItemNotInCatalog`, and There is no product shown. Then successfully taeke screenshot  |
| **Status** |  |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_SEARCH_003 - Space Only Search|
| **Description** | Very that the searching `   ` product will not show any product. |
| **Preconditions** | 1. User is on the Homepage.<br>2. User click search bar, type non-existing product, and click search button.<br>3. Product no product found. |
| **Test Data** | product search: `   ` |
| **Steps** | 1. Navigate to the Home page.<br>2. Locate search bar field.<br>3. Enter `   ` in the search field.<br>4. Click the **Search** button.<br>5. Verify that the search term show `   ` and  no product is found.<br>6. Capture a screenshot of the Home Page.  |
| **Expected Result** | Home page shows text containing `There are no products found.`. And a screenshots named `search-space-only.png` is saved successfully. |
| **Actual Result** | Search term shows `   `, and There is no product shown. Then successfully taeke screenshot  |
| **Status** | PASS |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_SEARCH_004 - Incorrect Spelling Search|
| **Description** | Very that the searching `pleirs` product will not show any product. |
| **Preconditions** | 1. User is on the Homepage.<br>2. User click search bar, type `pleirs` product, and click search button.<br>3. Product no product found. |
| **Test Data** | product search: `pleirs` |
| **Steps** | 1. Navigate to the Home page.<br>2. Locate search bar field.<br>3. Enter `pleirs` in the search field.<br>4. Click the **Search** button.<br>5. Verify that the search term show `pleirs` and  no product is found.<br>6. Capture a screenshot of the Home Page.  |
| **Expected Result** | Home page shows text containing `There are no products found.`. And a screenshots named `search-incorrect-spelling.png` is saved successfully. |
| **Actual Result** | Search term shows `pleirs`, and There is no product shown. Then successfully taeke screenshot  |
| **Status** | PASS |

---



---

## OTHER SEARCHING OPTION

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_SEARCH_006 - Sort Search|
| **Description** | Very that the sorting form Z-A search shows an arranged name of product. |
| **Preconditions** | 1. User is on the Homepage.<br>2. User click sort dropdown, select `Name (Z - A)` sort product.<br>3. Check if Product name are sorted from Z - A. |
| **Test Data** | Sort: `Name (Z - A) ` |
| **Steps** | 1. Navigate to the Home page.<br>2. Locate sort dropdown.<br>3. select `Name (Z - A)` sort  field.<br>4. Verify that the product are sort form Z to A.<br>6. Capture a screenshot of the Home Page.  |
| **Expected Result** | Home page shows product that is start from Z going to A. And a screenshots named `search-sort.png` is saved successfully. |
| **Actual Result** | Home page shows product that is start from Z going to A. Then successfully taeke screenshot  |
| **Status** | PASS |

---

| Field | Details |
|---------|---------|
| **Test Case ID** | TC_SEARCH_007 - Sort Price Search|
| **Description** | Very that the sorting form Z-A search shows an arranged name of product. |
| **Preconditions** | 1. User is on the Homepage.<br>2. User click sort dropdown, select `Price (High - Low)` sort product.<br>3. Check if Product name are sorted from highest to lowest price. |
| **Test Data** | Sort: `NPrice (High - Low)` |
| **Steps** | 1. Navigate to the Home page.<br>2. Locate sort dropdown.<br>3. select `Price (High - Low)` sort  field.<br>4. Verify that the product are sort from highest to lowest price.<br>6. Capture a screenshot of the Home Page.  |
| **Expected Result** | Home page shows product that is start from Z going to A. And a screenshots named `search-sort-price.png` is saved successfully. |
| **Actual Result** | Home page shows product that is start from Z going to A. Then successfully taeke screenshot  |
| **Status** | PASS |

---