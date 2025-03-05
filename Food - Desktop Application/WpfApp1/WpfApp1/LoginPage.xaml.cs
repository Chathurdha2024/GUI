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
            Products productsPage = new Products(); // Create an instance of LoginPage
            productsPage.Show(); // Show the new window
            this.Close(); // Close the current window (optional)
        }
    }
}

