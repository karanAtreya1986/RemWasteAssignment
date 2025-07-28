# Playwright Tests for SauceDemo E-commerce UI

This project is an **UI test automation framework** built using **Javascript**, **Playwright**, and **Allure Reports** to validate the core functionalities. The framework supports **CI/CD using GitHub Actions** and **generates test reports**.

## Tech Stack

| Tool/Library      | Purpose                                |
|-------------------|----------------------------------------|
| Javascript        | Scripting language                     |
| Allure Reports    | Allure HTML                            |
| GitHub Actions    | CI/CD pipeline                         |


This test suite validates the core UI functionality of the SauceDemo e-commerce web application. The focus is on end-to-end user flows such as:
●	User authentication (valid and invalid logins)

●	Product interactions (adding/removing items from the cart)

●	Cart operations (editing cart, continuing shopping)

## Install Playwright
npm init playwright@latest

## Install Allure report
npm install -D allure-playwright

Add allure-playwright as the reporter in the Playwright configuration file:
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: "allure-playwright",
});

## Install Allure command line report
npm install -g allure-commandline --save-dev

## Running Tests Locally

### Clone the repo in the required directory on your PC if you want to run locally:
git clone https://github.com/karanAtreya1986/RemWasteAssignment.git

cd BookStoreAPITesting

Run test using Command Line:
npx playwright test

To see the report once it ran:
npx playwright show-report

View the report in your browser. Reports are present in the path:
allure-report/index.html

## How to View GitHub Actions Reports
Go to repo URL (https://github.com/karanAtreya1986/RemWasteAssignment.git) → Actions
Click on the latest workflow run.
Scroll to Artifacts.

Download-

Allure Report (allure-report)

## Contributing to repo:
Fork the repo

Create your feature branch (git checkout -b feature/add-new-test)

Commit and push

Submit a pull request
## Authors

- [@karanAtreya1986](https://www.github.com/karanAtreya1986)

