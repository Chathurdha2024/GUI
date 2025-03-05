using System.Windows;

namespace WpfApp1
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Get_Started(object sender, RoutedEventArgs e)
        {
            LoginPage loginPage = new LoginPage(); // Create an instance of LoginPage
            loginPage.Show(); // Show the new window
            this.Close(); // Close the current window (optional)
        }
    }
}
