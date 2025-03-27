# String Calculator TDD Kata

This project is an implementation of the **String Calculator** using **Test-Driven Development (TDD)** in TypeScript. It follows the Red-Green-Refactor cycle to ensure high-quality and well-tested code.

## 📌 Features

- Handles an empty string input
- Supports adding multiple comma-separated numbers
- Handles new lines (`\n`) as delimiters
- Allows custom delimiters
- Throws an exception for negative numbers
- Fully tested using Jest

## 🛠 Tech Stack

- **TypeScript**
- **Jest** (for testing)
- **ts-node** (for running TypeScript files)

## 🚀 Getting Started

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/nithya-kala/string-calculator.git
cd string-calculator-tdd
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Run the String Calculator**

```bash
npm start
```

This will execute `stringCalculator.ts` using `ts-node`.

### **4️⃣ Run Tests**

```bash
npm test
```

## 📜 Usage Examples

```typescript
import { stringCalculator } from "./src/stringCalculator";

console.log(stringCalculator("1,2,3")); // Output: 6
console.log(stringCalculator("")); // Output: 0
console.log(stringCalculator("5")); // Output: 5
console.log(stringCalculator("//;\n1;2")); // Output: 3
```

## 📝 TDD Process

1. **Write a failing test (RED)**
2. **Implement the minimal code to pass (GREEN)**
3. **Refactor for readability and efficiency**

## 📂 Project Structure

```
📂 string-calculator-tdd
 ┣ 📂 src
 ┃ ┣ 📜 stringCalculator.ts
 ┃ ┗ 📜 stringCalculator.test.ts
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 jest.config.js
 ┣ 📜 README.md
```
