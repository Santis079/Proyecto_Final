import java.util.HashMap;
import java.util.Map;


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


class CarritoDeCompras {
    private Map<Integer, Producto> productosEnCarrito;

    public CarritoDeCompras() {
        this.productosEnCarrito = new HashMap<>();
    }

    public void agregarProducto(Producto producto) {
        productosEnCarrito.put(producto.getId(), producto);
    }

    public void mostrarCarrito() {
        System.out.println("Productos en el carrito:");
        for (Producto producto : productosEnCarrito.values()) {
            System.out.println("ID: " + producto.getId() + ", Nombre: " + producto.getNombre() + ", Precio: $" + producto.getPrecio());
        }
    }

    public double calcularTotal() {
        double total = 0;
        for (Producto producto : productosEnCarrito.values()) {
            total += producto.getPrecio();
        }
        return total;
    }
}


public class Tarracommerce {
    private static Map<Integer, Producto> catalogoProductos = new HashMap<>();
    private static CarritoDeCompras carritoDeCompras = new CarritoDeCompras();

    public static void main(String[] args) {
        inicializarProductos();

        // Simulación de operaciones de la tienda
        agregarProductoAlCarrito(1);
        agregarProductoAlCarrito(2);
        agregarProductoAlCarrito(3);

        mostrarCarrito();
        double total = carritoDeCompras.calcularTotal();
        System.out.println("Total a pagar: $" + total);
    }


    private static void inicializarProductos() {
        catalogoProductos.put(1, new Producto(1, "Producto 1", 50.0));
        catalogoProductos.put(2, new Producto(2, "Producto 2", 65.0));
        catalogoProductos.put(3, new Producto(3, "Producto 3", 80.0));
    }

    private static void agregarProductoAlCarrito(int idProducto) {
        Producto producto = catalogoProductos.get(idProducto);
        if (producto != null) {
            carritoDeCompras.agregarProducto(producto);
            System.out.println("Producto agregado al carrito: " + producto.getNombre());
        } else {
            System.out.println("Producto no encontrado con ID: " + idProducto);
        }
    }
    private static void mostrarCarrito() {
        carritoDeCompras.mostrarCarrito();
    }
}
