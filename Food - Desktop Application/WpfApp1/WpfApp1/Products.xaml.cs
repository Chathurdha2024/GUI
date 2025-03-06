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
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for Products.xaml
    /// </summary>
    public partial class Products : Window
    {
        private ProductDbContext _db = new ProductDbContext();

        public Products()
        {
            InitializeComponent();
            LoadData();
        }
        private void LoadData()
        {
            productGrid.ItemsSource = _db.foods.ToList();
        }

        private void Add_Click(object sender, RoutedEventArgs e)
        {
            food product = new food();

            Crud pWindow = new Crud(product);
            if (pWindow.ShowDialog() == true)
            {
                _db.foods.Add(product);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Update_Click(object sender, RoutedEventArgs e)
        {
            if (productGrid.SelectedItem is food p)
            {
                food product = new food();
                product.Name = p.Name;
                product.Price = p.Price;
                product.Description = p.Description;
                product.Image = p.Image;
                product.Category = p.Category;
                product.Quantity = p.Quantity;

                Crud pWindow = new Crud(product);
                if (pWindow.ShowDialog() == true)
                {
                    p.Name = product.Name;
                    p.Price = product.Price;
                    p.Description = product.Description;
                    p.Image = product.Image;
                    p.Category = product.Category;
                    p.Quantity = product.Quantity;
                    _db.foods.Update(p);
                    _db.SaveChanges();
                    LoadData();
                }
            }
        }

        private void Delete_Click(object sender, RoutedEventArgs e)
        {
            if (productGrid.SelectedItem is food p)
            {
                _db.foods.Remove(p);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Back(object sender, RoutedEventArgs e)
        {
            LoginPage loginpage = new LoginPage(); // Create an instance of MainWindow
            loginpage.Show(); // Show the Main Window
            this.Close();
        }
    }
}