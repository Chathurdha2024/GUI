using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;


namespace WpfApp1
{
    public partial class LoginPage : Window
    {
        public LoginPage()
        {
            InitializeComponent();
        }

        private void BackToMain_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow(); // Create an instance of MainWindow
            mainWindow.Show(); // Show the Main Window
            this.Close(); // Close the Login Page
        }


        private void Login(object sender, RoutedEventArgs e)
        {
            // Predefined admin credentials (username and password)
            string adminUsername = "admin";
            string adminPassword = "admin123";

            // Get the entered username and password
            string enteredUsername = UsernameTextBox.Text;
            string enteredPassword = PasswordBox.Password;

            // Check if the entered credentials match the predefined admin credentials
            if (enteredUsername == adminUsername && enteredPassword == adminPassword)
            {
                // If credentials are correct, navigate to the Products window
                Products productsPage = new Products(); // Create an instance of Products page
                productsPage.Show(); // Show the Products page
                this.Close(); // Close the current Login page
            }
            else
            {
                // If the credentials are incorrect, show a message box
                MessageBox.Show("Invalid username or password. Please try again.", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

    }
}

