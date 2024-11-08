# ApplyDigital Cypress Automation

## Purpose

This repository contains automated tests using the **Cypress** framework. The goal is to validate the functionality of various web application components to ensure their reliability and performance. By using Cypress, we aim to deliver consistent, efficient, and scalable test automation.

## Prerequisites

Ensure you have the following software installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

## Installation

To set up the project, follow these steps:

1. **Clone the repository**:

   ```
   git clone https://github.com/aefe17/Automation-Test.git 
   ```
2. **Navigate to the project directory**:

   ```
   cd ApplyDigital
   ```

3. **Install dependencies**
   ```
   npm install
   ```

# Running the Tests

## Using Cypress UI
To run the tests interactively using the Cypress Test Runner, execute:
   ```
   npx cypress open
   ```
## Running Tests in Headless Mode
For a headless execution, which is ideal for CI/CD pipelines, run:
   ```
   npx cypress run
   ```
