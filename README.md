# GUI
 Online Food Ordering System



# 🍴 Online Food Ordering System

**A dual-interface application for seamless food ordering and management.**  
This project features a **Web Application** and a **Desktop Application**, each with unique features designed to cater to both customers and restaurant managers.

---

## 🌟 Features

### 🌐 Web Application
- 🛠 **Form Validation**: Ensures accurate user input.
- 🔄 **REST API Integration**: Enables real-time data synchronization.
- 📱 **Responsive Design**: Optimized for all device types.
- ⚡ **Modern Technologies**: Built with HTML, CSS, JavaScript, and React.js.

### 🖥️ Desktop Application
- 📝 **CRUD Operations**:
  - ✨ **Create**: Add new food items, menus, or orders.
  - 🔍 **Read**: View and search food items or orders.
  - ✏️ **Update**: Modify existing records.
  - ❌ **Delete**: Remove unnecessary data.
- ⚙️ **Database Integration**: Robust SQL Server connectivity.
- 🔗 **API Compatibility**: Syncs seamlessly with the web application.

---

## 🛠️ Technologies Used

| **Platform**    | **Tools & Frameworks**        |
|------------------|-------------------------------|
| 🌐 **Web**       | HTML, CSS, JavaScript, ReactJS |
| 🖥️ **Desktop**    | C#, SQL Server               |
| 🔗 **Backend**    | JSON REST API                |

---

## 🗂️ Project Structure

```plaintext
OnlineFoodOrderingSystem/
│
├── web-application/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
├── desktop-application/
│   ├── Forms/
│   ├── Models/
│   ├── Database/
│   └── Program.cs
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 🌐 Web Application
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/OnlineFoodOrderingSystem.git
   cd OnlineFoodOrderingSystem/web-application
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### 🖥️ Desktop Application
1. Open the project in **Visual Studio**.
2. Restore NuGet packages.
3. Configure the database connection string in `App.config`.
4. Build and run the application.





## 🔗 API Reference

The REST API uses the [sample-rest-api repository](https://github.com/Teach-Computing/sample-rest-api).

### Example Endpoints
- **GET** `/api/foods` - Retrieve all food items.
- **POST** `/api/orders` - Create a new order.

---

## 🤝 Contribution Guidelines

Contributions are welcome!  
Fork the repository and submit a pull request for improvements or new features.

---

## 📜 License

This project is licensed under the MIT License.

---






