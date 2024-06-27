
class Producto {
    private int id;
    private String nombre;
    private double precio;

    public Producto(int id, String nombre, double precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }
}

import java.util.ArrayList;
import java.util.List;

class CarritoDeCompras {
    private List<Producto> productos;

    public CarritoDeCompras() {
        this.productos = new ArrayList<>();
    }

    public void agregarProducto(Producto producto) {
        productos.add(producto);
    }

    public void mostrarCarrito() {
        System.out.println("Productos en el carrito:");
        for (Producto producto : productos) {
            System.out.println("ID: " + producto.getId() + ", Nombre: " + producto.getNombre() + ", Precio: $" + producto.getPrecio());
        }
    }

    public double calcularTotal() {
        double total = 0;
        for (Producto producto : productos) {
            total += producto.getPrecio();
        }
        return total;
    }
}

public class Tiend {
    public static void main(String[] args) {

        Producto producto1 = new Producto(1, "Camiseta", 250.0);
        Producto producto2 = new Producto(2, "Pantalón", 400.0);

        CarritoDeCompras carrito = new CarritoDeCompras();
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);

        carrito.mostrarCarrito();
        System.out.println("Total a pagar: $" + carrito.calcularTotal());
    }
}
