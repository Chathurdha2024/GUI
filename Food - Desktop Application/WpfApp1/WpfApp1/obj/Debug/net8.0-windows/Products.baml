   M S B A M L   `   `   `  ����B  >WpfApp1, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:WpfApp1WpfApp1  5   	       WpfApp1.Products   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression.blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   'localclr-namespace:WpfApp1     5   	     � Title$  Products��5   	    � WindowState$ 	Maximized=�6    � 
ResizeMode$ NoResize=�5	   	    � 	Resources 5
         RoundedButton �� 
TargetType �� Property �� Value �� 
TargetType �� CornerRadius	 �� Triggers
 P� Property P� Value��%  &	        �� 5   
   " ��6&   .�5      ��  � �� �#FF57226+   �� 5       � ��
 �����6+   �� 5       � ��$ 20(�6)   �� 5       � ��$ 12q�6(   �� 5       � ��$ 8q�6'   �� 5       � ��$ 2q�60   �� 5       � ��
 �   �6,   �� 5       � ��$	 250��6&   �� 5       � ��$ 60��6'   �� 5       � ��
 ���� 6,   �� 5       � �� 5      �� 5      " ��6&   .R�5      �� #��z��6!   #��z��6K   $��2q�6w   $ 20��6�   ._�5      �� $��Center=�6/   $��Center=�6L   5      5      5!      	 5#      P� 5$      
 �@J�IsMouseOver$
 True��61   . �5%      ��  � �� �#FF980063   �� 5&       � ��
 �   �64   5'      5)      5*      .��5,      �  � RowDefinitions 5-   
   �� 5.      $
��Auto �6   �� 5/      $��* �6   �� 50      $
��Auto �6   ��53   
   �� 54       �� ImageSource$B <C:\Users\ASUS\Pictures\pexels-ella-olsson-572949-1640773.jpg��6   .+�57   
   �� $��0��6   $��0��6!   $��2��58      $��Center=�59      $��60(�5:      $
��Bold"�5;      $��	Food Menu��5<      � 5>   
   $��1��6   $��0��6   $��2��6,   $��Center=�6@   $��Center=�6]   .+�5?      &   System.Windows.Controls.DataGrid  -   5          Name$ productGrid��5@         AutoGenerateColumns$
 True��5A      $	��800��5B      $	��500��5C      $��Center=�5D      $��Center=�5E      $
��1000��5F      $	��600��5G      5H      �� 5J   
   $��2��6   $��0��6"   $��2��62    �� Orientation$ 
Horizontal=�6F   $��Center=�6_   $��10q�6|   .+�5K      �� -   5        #��[  5K       � Cursor$
 Hand��6N   .��6\   Add Product6i   �� 5L      -   5        #��[  5L      $
 Hand��6Q   .��6_   Update Product6o   �� 5M      -   5        #��[  5M      $
 Hand��6Q   .��6_   Delete Product6o   �� 5N      -   5        #��[  5N      $
 Hand��6I   .��6W   Back6]   5O      5P      5Q      