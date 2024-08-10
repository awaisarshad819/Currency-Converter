# Currency Converter Clone

This project is a clone of the Google Currency Converter, built using HTML, CSS, and JavaScript. The design and functionality closely mimic Google's currency converter interface, providing a simple and intuitive way to convert currencies.

## Purpose

The purpose of this project was to apply and enhance my skills in HTML, CSS, and JavaScript by replicating a real-world application. This project was developed solely for educational purposes.

## Features

- **Currency Conversion:** Convert between various currencies by selecting them from dropdowns.
- **Dynamic Exchange Rates:** Fetches exchange rates using the OpenExchangeRate API.

## Challenges

One of the biggest challenges in this project was finding a free API that provides exchange rates between any two currencies. Most free plans, including the one from OpenExchangeRate, only provide conversion rates from a base currency (USD) to other currencies.

To overcome this, I used the rates provided by the OpenExchangeRate API for conversions from USD to other currencies. Then, I implemented a custom solution to calculate the exchange rate between any two currencies by performing the following steps:

1. **Convert from the source currency to USD.**
2. **Convert from USD to the target currency.**
3. **Calculate the required exchange rate between the selected currencies.**

## Technologies Used

- **HTML5** for structuring the content.
- **CSS3** for styling and layout.
- **JavaScript** for implementing the currency conversion logic and handling user interactions.

## Screenshot

![Currency Converter Screenshot](images/screenshot.png)

## Thank You

Thank you for checking out this project! If you have any questions or suggestions, feel free to reach out.

## Contact

- **Name:** Muhammad Awais
- **Email:** awaisarshad819@gmail.com
- **LinkedIn:** [Muhammad Awais Arshad](https://www.linkedin.com/in/muhammadawais-arshad/)
