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
    /// <summary>
    /// Interaction logic for Crud.xaml
    /// </summary>
    public partial class Crud : Window
    {
        public food Product { get; private set; }
        public Crud(food product)
        {
            InitializeComponent();
            Product = product;



            NameTextbox.Text = product.Name;
            PriceTextbox.Text = Product.Price.ToString();
            DescriptionTextbox.Text = product.Description;
            ImageTextbox.Text = product.Image;
            CategoryTextbox.Text = product.Category;
            QuantityTextbox.Text = product.Quantity;

        }
        private void Save_Product(object sender, RoutedEventArgs e)
        {

            try
            {

                Product.Name = NameTextbox.Text;
                Product.Price = Convert.ToDouble(PriceTextbox.Text);
                Product.Description = DescriptionTextbox.Text;
                Product.Image = ImageTextbox.Text;
                Product.Category = CategoryTextbox.Text;
                Product.Quantity = QuantityTextbox.Text;
                DialogResult = true;
                Close();
            }
            catch
            {
                MessageBox.Show("Error in input");
                DialogResult = false;
                Close();
            }
        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            Products product = new Products(); // Create an instance of Products window
            product.Show(); // Show the Products window
            this.Close();
        }
    }
}
